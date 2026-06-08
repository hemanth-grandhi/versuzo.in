# Versuzo — EdTech Platform (Monorepo)

Production-ready monorepo with **strict frontend/backend separation**.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full project structure and boundaries.

## Project structure

```
versuzo/
├── frontend/     ← Next.js UI (port 3000)
├── backend/      ← Express API (port 4000)
├── ARCHITECTURE.md
└── package.json  ← Workspace root
```

| Folder | Role |
|--------|------|
| **frontend/** | UI, components, API calls, client state |
| **backend/** | REST API, services, repositories, data |

## Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

**Backend** (`backend/.env`):

```
PORT=4000
CORS_ORIGIN=http://localhost:3000
```

**Frontend** (`frontend/.env.local`):

```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 3. Run both services

```bash
npm run dev
```

Or separately:

```bash
npm run dev:backend   # http://localhost:4000
npm run dev:frontend  # http://localhost:3000
```

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/health` | Health check |
| GET | `/api/v1/content/landing` | Landing page data |
| GET | `/api/v1/programs` | All programs |
| GET | `/api/v1/programs/:id` | Single program |
| POST | `/api/v1/consultations` | Book consultation |

## Build for production

```bash
npm run build
npm run start:backend
npm run start:frontend
```

## Vercel deployment readiness

This repository is a monorepo with separate frontend and backend applications:

- **Frontend project root:** `frontend/`
- **Backend project root:** `backend/`

### Backend environment variables

Configure these in Vercel for the backend project:

- `JWT_SECRET` — required in production
- `CORS_ORIGIN` — set to your frontend origin(s), for example: `https://versuzo.in,https://www.versuzo.in`
- `FRONTEND_URL` — set to your frontend URL, for example: `https://versuzo.in`
- `DATABASE_URL` — optional if using Postgres in production
- `DATABASE_PATH` — optional if you want to override SQLite path
- `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` — optional admin seeding
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` — optional for real email delivery

### Frontend environment variables

Set these in Vercel for the frontend project:

- `NEXT_PUBLIC_API_URL` — backend API URL, for example: `https://<your-backend-project>.vercel.app`
- `NEXT_PUBLIC_SITE_URL` — frontend URL, for example: `https://versuzo.in`

### Vercel compatibility notes

- The frontend is a Next.js 15 app and builds successfully with `next build`.
- The backend is a Node.js Express API with a Vercel-compatible `backend/vercel.json` configuration.
- For manual deployment, import the frontend and backend as separate Vercel projects if desired.

## Tech stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, Framer Motion
- **Backend**: Express, TypeScript, Zod validation, Helmet, CORS
