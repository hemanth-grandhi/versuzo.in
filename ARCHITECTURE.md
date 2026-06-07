# Versuzo — Project Architecture

Monorepo with **strict separation** between Frontend (UI) and Backend (API, business logic, data).

```
versuzo/
│
├── ARCHITECTURE.md          # This document
├── README.md                # Setup & run instructions
├── package.json             # Root workspace scripts
│
├── frontend/                # ★ FRONTEND ONLY — Next.js UI
│   ├── package.json
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── src/
│       ├── app/             # Routes, layouts, pages (no business logic)
│       ├── components/
│       │   ├── layout/      # Header, Footer
│       │   ├── sections/    # Presentational section components
│       │   ├── ui/          # Reusable UI primitives
│       │   └── providers/   # Theme, context wrappers
│       ├── hooks/           # Client-side data hooks
│       ├── lib/
│       │   ├── api/         # HTTP client & API call functions ONLY
│       │   └── constants/   # Static UI config (nav labels, anchors)
│       └── types/           # TypeScript types matching API responses
│
└── backend/                 # ★ BACKEND ONLY — Express API
    ├── package.json
    ├── tsconfig.json
    ├── .env.example
    └── src/
        ├── index.ts         # Server entry
        ├── app.ts           # Express app assembly
        ├── config/          # Environment & app config
        ├── middleware/      # CORS, errors, validation
        ├── routes/          # Route definitions (thin)
        ├── controllers/     # Request/response handling
        ├── services/        # Business logic
        ├── repositories/    # Data access layer
        ├── data/            # Seed/static data (replace with DB later)
        ├── types/           # Domain & API types
        └── utils/           # Helpers (ApiResponse, etc.)
```

## Responsibility boundaries

| Concern | Frontend | Backend |
|--------|----------|---------|
| UI / UX | ✅ | ❌ |
| State & interactions | ✅ | ❌ |
| HTTP calls to API | ✅ (`lib/api`) | ❌ |
| REST API routes | ❌ | ✅ |
| Business rules | ❌ | ✅ (`services/`) |
| Data storage / queries | ❌ | ✅ (`repositories/`) |
| Authentication | ❌ (send tokens only) | ✅ |
| Validation (server) | ❌ | ✅ |

## API endpoints (Backend)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/health` | Health check |
| GET | `/api/v1/content/landing` | All landing page content |
| GET | `/api/v1/programs` | Programs list |
| GET | `/api/v1/programs/:id` | Single program |
| POST | `/api/v1/consultations` | Book consultation |

## Data flow

```
Browser → frontend/lib/api → backend/routes → controllers → services → repositories → data/DB
                ↓
         components/sections (props only, no business logic)
```

## Deployment

- **Frontend**: Vercel / static host (port 3000)
- **Backend**: Railway / Render / Docker (port 4000)
- Set `NEXT_PUBLIC_API_URL` on frontend to backend URL
