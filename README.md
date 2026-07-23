# CoDEsk

An AI-powered code review tool. Paste a code snippet, get structured feedback — issues, suggestions, and a summary — powered by Google Gemini.

![CoDEsk](docs/Architecture.png)

---

## What it does

- Paste any code snippet and select a language
- Get instant AI feedback broken into three sections: **Summary**, **Issues**, and **Suggestions**
- Every review is saved automatically — revisit past sessions anytime
- No login required — sessions are tied to your browser anonymously

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite), TanStack Query, Axios |
| Backend | Node.js, Express |
| Database | PostgreSQL, Prisma ORM |
| AI | Google Gemini API |

---

## Project Structure

```
CoDEsk/
  client/       → React frontend
  server/       → Node/Express backend
  docs/         → PRD, architecture diagram, data model
```

---

## Local Setup

### Prerequisites
- Node.js v18+
- PostgreSQL

### Backend

```bash
cd server
npm install
```

Create a `.env` file based on `.env.example`:

```
DATABASE_URL="postgresql://postgres:yourpassword@127.0.0.1:5432/codesk"
PORT=5000
GEMINI_API_KEY="your-gemini-api-key"
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the server:

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/sessions` | Submit code, get AI review, save session |
| GET | `/api/sessions?clientId=xxx` | Get all sessions for a client |
| GET | `/api/sessions/:id` | Get a single session by ID |

---

## Architecture

See [`docs/Architecture.png`](docs/Architecture.png) for the high-level system diagram.

---

## Design Decisions

- **No auth in V1** — sessions are identified by a UUID stored in localStorage. Simple, effective, and honest for a personal project.
- **Structured AI output** — the Gemini prompt enforces a strict JSON response shape so the frontend always gets consistent, renderable sections.
- **Separation of concerns** — routes, controllers, and services are kept strictly separate. Routes only route, controllers handle request/response, services contain all business logic.
- **One table** — the data model is intentionally simple: a single `Session` table with no foreign keys. The right call for V1 scope.

---

## Status

V1 complete. Deployed at: [https://codesk-delta.vercel.app/](https://codesk-delta.vercel.app/)

---

## Author

**Kanhaiya Tyagi** — [GitHub](https://github.com/kanhaiya-tyagi) · [LinkedIn](https://linkedin.com/in/kanhaiya-tyagi)
