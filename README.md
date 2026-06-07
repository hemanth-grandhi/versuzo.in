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

## Tech stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, Framer Motion
- **Backend**: Express, TypeScript, Zod validation, Helmet, CORS
