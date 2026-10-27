import os
import json
import re
import sqlite3
import hashlib
import secrets
import time
import urllib.request
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler
from http.cookies import SimpleCookie

PORT = int(os.environ.get("PORT", 8420))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
DB_PATH = os.path.join(BASE_DIR, "careeros.db")
SESSION_COOKIE = "careeros_session"


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    with conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                username TEXT UNIQUE NOT NULL,
                full_name TEXT NOT NULL,
                password_hash TEXT NOT NULL,
                salt TEXT NOT NULL,
                is_public INTEGER DEFAULT 0,
                profile_json TEXT DEFAULT '{}',
                created_at INTEGER NOT NULL
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS sessions (
                token TEXT PRIMARY KEY,
                user_id INTEGER NOT NULL,
                created_at INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        """)
    conn.close()


def hash_password(password: str, salt: str) -> str:
    return hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt.encode("utf-8"),
        120000
    ).hex()


def slugify_username(raw: str) -> str:
    cleaned = re.sub(r"[^a-z0-9_-]", "", raw.lower().strip().replace(" ", "-"))
    return cleaned[:32] or f"user-{secrets.token_hex(3)}"


def fetch_remotive_jobs(query="", category=""):
    """Fetches live remote jobs from Remotive public API."""
    params = {"limit": 24}
    if query:
        params["search"] = query
    if category:
        params["category"] = category
    url = "https://remotive.com/api/remote-jobs?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "OptiTrajectoryAI/1.0 (https://localhost)"}
    )
    with urllib.request.urlopen(req, timeout=8) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        jobs = []
        for item in data.get("jobs", [])[:24]:
            raw_desc = item.get("description", "")
            clean_desc = re.sub(r"<[^>]+>", " ", raw_desc)
            clean_desc = re.sub(r"\s+", " ", clean_desc).strip()
            jobs.append({
                "id": f"remotive-{item.get('id')}",
                "title": item.get("title", ""),
                "company": item.get("company_name", ""),
                "location": item.get("candidate_required_location", "Remote"),
                "salary": item.get("salary") or "Competitive (Not Disclosed)",
                "type": item.get("job_type", "full_time").replace("_", " ").title(),
                "category": item.get("category", "General"),
                "url": item.get("url", ""),
                "publishedAt": item.get("publication_date", "")[:10],
                "tags": item.get("tags", [])[:8],
                "description": clean_desc[:2500],
                "source": "Remotive Live API"
            })
        return jobs


def fetch_url_text(target_url):
    """Fetches a public job posting URL and extracts readable text and metadata."""
    req = urllib.request.Request(
        target_url,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
        }
    )
    with urllib.request.urlopen(req, timeout=8) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
        title_match = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
        page_title = title_match.group(1).strip() if title_match else ""
        cleaned = re.sub(r"<(script|style|noscript)[^>]*>.*?</\1>", " ", html, flags=re.I | re.S)
        cleaned = re.sub(r"<[^>]+>", " ", cleaned)
        cleaned = re.sub(r"\s+", " ", cleaned).strip()
        return {
            "title": page_title,
            "text": cleaned[:8000],
            "url": target_url
        }


class CareerOSHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def send_json(self, status_code, payload, set_cookie=None, clear_cookie=False):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        if set_cookie:
            self.send_header(
                "Set-Cookie",
                f"{SESSION_COOKIE}={set_cookie}; HttpOnly; Path=/; Max-Age=2592000; SameSite=Lax"
            )
        if clear_cookie:
            self.send_header(
                "Set-Cookie",
                f"{SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax"
            )
        self.end_headers()
        self.wfile.write(body)

    def read_json_body(self):
        length = int(self.headers.get("Content-Length", 0))
        if length <= 0:
            return {}
        raw = self.rfile.read(length).decode("utf-8")
        try:
            return json.loads(raw)
        except Exception:
            return {}

    def get_current_user(self):
        cookie_header = self.headers.get("Cookie", "")
        token = None
        if cookie_header:
            c = SimpleCookie()
            c.load(cookie_header)
            if SESSION_COOKIE in c:
                token = c[SESSION_COOKIE].value
        if not token:
            auth_header = self.headers.get("Authorization", "")
            if auth_header.startswith("Bearer "):
                token = auth_header[7:].strip()
        if not token:
            return None

        conn = get_db()
        row = conn.execute(
            """
            SELECT u.* FROM users u
            JOIN sessions s ON s.user_id = u.id
            WHERE s.token = ?
            """,
            (token,)
        ).fetchone()
        conn.close()
        return row

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)

        # 1. Auth Session Check
        if parsed.path == "/api/auth/me":
            user = self.get_current_user()
            if not user:
                self.send_json(401, {"ok": False, "authenticated": False})
                return
            try:
                profile = json.loads(user["profile_json"] or "{}")
            except Exception:
                profile = {}
            self.send_json(200, {
                "ok": True,
                "authenticated": True,
                "user": {
                    "id": user["id"],
                    "email": user["email"],
                    "username": user["username"],
                    "fullName": user["full_name"],
                    "isPublic": bool(user["is_public"])
                },
                "profile": profile
            })
            return

        # 2. Public Profile / Infographic Lookup (Only if user opted in!)
        if parsed.path.startswith("/api/public/"):
            username = urllib.parse.unquote(parsed.path[len("/api/public/"):]).strip().lower()
            conn = get_db()
            row = conn.execute(
                "SELECT username, full_name, is_public, profile_json FROM users WHERE LOWER(username) = ?",
                (username,)
            ).fetchone()
            conn.close()
            if not row or not bool(row["is_public"]):
                self.send_json(403, {
                    "ok": False,
                    "error": "This candidate profile is private or does not exist. Candidates must explicitly enable public sharing to make their infographic visible."
                })
                return
            try:
                profile = json.loads(row["profile_json"] or "{}")
            except Exception:
                profile = {}
            # Strip private job CRM data from public endpoint so only Infographic/Bio data is exposed
            safe_public_profile = {
                "name": profile.get("name") or row["full_name"],
                "headline": profile.get("headline", ""),
                "location": profile.get("location", ""),
                "yearsExp": profile.get("yearsExp", 0),
                "workStyle": profile.get("workStyle", ""),
                "mission": profile.get("mission", ""),
                "summary": profile.get("summary", ""),
                "targetRoles": profile.get("targetRoles", ""),
                "industries": profile.get("industries", ""),
                "minSalary": profile.get("minSalary", 0),
                "metrics": profile.get("metrics", []),
                "skills": profile.get("skills", []),
                "experience": profile.get("experience", []),
                "infographicTheme": profile.get("infographicTheme", "deloitte"),
                "infographicTagline": profile.get("infographicTagline", "Open to Opportunities"),
                "headshotDataUrl": profile.get("headshotDataUrl", "")
            }
            self.send_json(200, {
                "ok": True,
                "username": row["username"],
                "profile": safe_public_profile
            })
            return

        # 3. Live Jobs Search (Requires login)
        if parsed.path == "/api/jobs":
            user = self.get_current_user()
            if not user:
                self.send_json(401, {"ok": False, "error": "Authentication required"})
                return
            qs = urllib.parse.parse_qs(parsed.query)
            q = qs.get("q", [""])[0]
            cat = qs.get("category", [""])[0]
            try:
                jobs = fetch_remotive_jobs(query=q, category=cat)
                self.send_json(200, {"ok": True, "source": "live", "jobs": jobs})
            except Exception as e:
                self.send_json(200, {
                    "ok": False,
                    "source": "fallback",
                    "error": str(e),
                    "jobs": []
                })
            return

        # 4. Extract Job Posting URL (Requires login)
        if parsed.path == "/api/extract-url":
            user = self.get_current_user()
            if not user:
                self.send_json(401, {"ok": False, "error": "Authentication required"})
                return
            qs = urllib.parse.parse_qs(parsed.query)
            target_url = qs.get("url", [""])[0]
            if not target_url.startswith(("http://", "https://")):
                self.send_json(400, {"ok": False, "error": "Please provide a valid http(s) URL."})
                return
            try:
                result = fetch_url_text(target_url)
                self.send_json(200, {"ok": True, "data": result})
            except Exception as e:
                self.send_json(200, {
                    "ok": False,
                    "error": f"Could not fetch URL directly ({e}). Paste the job description text below instead."
                })
            return

        # Support clean route `/u/<username>` by serving index.html
        if parsed.path.startswith("/u/"):
            self.path = "/index.html"

        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        body = self.read_json_body()

        # 1. Register a New User (Defaults to Private: is_public = 0)
        if parsed.path == "/api/auth/register":
            email = (body.get("email") or "").strip().lower()
            password = body.get("password") or ""
            full_name = (body.get("fullName") or "").strip()
            raw_username = (body.get("username") or "").strip()
            initial_profile = body.get("profile") or {}

            if not email or "@" not in email:
                self.send_json(400, {"ok": False, "error": "Please enter a valid email address."})
                return
            if len(password) < 6:
                self.send_json(400, {"ok": False, "error": "Password must be at least 6 characters."})
                return
            if not full_name:
                self.send_json(400, {"ok": False, "error": "Please enter your full name."})
                return

            username = slugify_username(raw_username or full_name or email.split("@")[0])
            salt = secrets.token_hex(16)
            pw_hash = hash_password(password, salt)
            now = int(time.time())

            initial_profile["name"] = full_name

            conn = get_db()
            try:
                with conn:
                    # Ensure unique username if collision
                    existing_u = conn.execute("SELECT id FROM users WHERE username = ?", (username,)).fetchone()
                    if existing_u:
                        username = f"{username}-{secrets.token_hex(2)}"

                    cur = conn.execute(
                        """
                        INSERT INTO users (email, username, full_name, password_hash, salt, is_public, profile_json, created_at)
                        VALUES (?, ?, ?, ?, ?, 0, ?, ?)
                        """,
                        (email, username, full_name, pw_hash, salt, json.dumps(initial_profile), now)
                    )
                    user_id = cur.lastrowid
                    token = secrets.token_urlsafe(32)
                    conn.execute(
                        "INSERT INTO sessions (token, user_id, created_at) VALUES (?, ?, ?)",
                        (token, user_id, now)
                    )
                self.send_json(
                    200,
                    {
                        "ok": True,
                        "user": {
                            "id": user_id,
                            "email": email,
                            "username": username,
                            "fullName": full_name,
                            "isPublic": False
                        },
                        "profile": initial_profile
                    },
                    set_cookie=token
                )
            except sqlite3.IntegrityError:
                self.send_json(409, {"ok": False, "error": "An account with that email already exists. Please log in."})
            finally:
                conn.close()
            return

        # 2. Log In Existing User
        if parsed.path == "/api/auth/login":
            email = (body.get("email") or "").strip().lower()
            password = body.get("password") or ""

            conn = get_db()
            user = conn.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
            if not user:
                conn.close()
                self.send_json(401, {"ok": False, "error": "Invalid email or password."})
                return

            expected_hash = hash_password(password, user["salt"])
            if not secrets.compare_digest(expected_hash, user["password_hash"]):
                conn.close()
                self.send_json(401, {"ok": False, "error": "Invalid email or password."})
                return

            token = secrets.token_urlsafe(32)
            with conn:
                conn.execute(
                    "INSERT INTO sessions (token, user_id, created_at) VALUES (?, ?, ?)",
                    (token, user["id"], int(time.time()))
                )
            conn.close()

            try:
                profile = json.loads(user["profile_json"] or "{}")
            except Exception:
                profile = {}

            self.send_json(
                200,
                {
                    "ok": True,
                    "user": {
                        "id": user["id"],
                        "email": user["email"],
                        "username": user["username"],
                        "fullName": user["full_name"],
                        "isPublic": bool(user["is_public"])
                    },
                    "profile": profile
                },
                set_cookie=token
            )
            return

        # 3. Log Out
        if parsed.path == "/api/auth/logout":
            cookie_header = self.headers.get("Cookie", "")
            if cookie_header:
                c = SimpleCookie()
                c.load(cookie_header)
                if SESSION_COOKIE in c:
                    token = c[SESSION_COOKIE].value
                    conn = get_db()
                    with conn:
                        conn.execute("DELETE FROM sessions WHERE token = ?", (token,))
                    conn.close()
            self.send_json(200, {"ok": True}, clear_cookie=True)
            return

        # 4. Save Profile & Optional Privacy Toggle
        if parsed.path == "/api/profile":
            user = self.get_current_user()
            if not user:
                self.send_json(401, {"ok": False, "error": "Authentication required."})
                return

            profile = body.get("profile")
            is_public = body.get("isPublic")
            new_username = body.get("username")

            conn = get_db()
            try:
                with conn:
                    if profile is not None:
                        full_name = (profile.get("name") or user["full_name"]).strip()
                        conn.execute(
                            "UPDATE users SET profile_json = ?, full_name = ? WHERE id = ?",
                            (json.dumps(profile), full_name, user["id"])
                        )
                    if is_public is not None:
                        conn.execute(
                            "UPDATE users SET is_public = ? WHERE id = ?",
                            (1 if is_public else 0, user["id"])
                        )
                    if new_username:
                        clean_u = slugify_username(new_username)
                        conn.execute(
                            "UPDATE users SET username = ? WHERE id = ?",
                            (clean_u, user["id"])
                        )
                    updated = conn.execute("SELECT * FROM users WHERE id = ?", (user["id"],)).fetchone()
                self.send_json(200, {
                    "ok": True,
                    "user": {
                        "id": updated["id"],
                        "email": updated["email"],
                        "username": updated["username"],
                        "fullName": updated["full_name"],
                        "isPublic": bool(updated["is_public"])
                    }
                })
            except sqlite3.IntegrityError:
                self.send_json(409, {"ok": False, "error": "That public handle/username is already taken."})
            finally:
                conn.close()
            return

        self.send_json(404, {"ok": False, "error": "Endpoint not found"})


if __name__ == "__main__":
    init_db()
    print(f"🚀 OptiTrajectoryAI (Optimize Your Career Trajectory) running at http://localhost:{PORT}")
    server = HTTPServer(("127.0.0.1", PORT), CareerOSHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down OptiTrajectoryAI server.")
        server.server_close()
