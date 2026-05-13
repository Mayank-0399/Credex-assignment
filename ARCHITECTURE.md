# Architecture Overview

## High-Level Flow

```txt
User Input
   ↓
Dynamic Audit Form
   ↓
Audit Engine
   ↓
Recommendation Generation
   ↓
Summary API
   ↓
Lead Capture
   ↓
Supabase Persistence
```

---

## Frontend

The frontend is built using:
- Next.js App Router
- React
- TailwindCSS

Main responsibilities:
- collecting user audit data
- rendering recommendations
- generating shareable reports
- handling local persistence

---

## Backend

Next.js API routes handle:
- personalized summary generation
- lead persistence

The backend intentionally uses deterministic logic instead of expensive LLM-based processing.

---

## Database

Supabase stores:
- lead information
- future audit persistence opportunities

---

## Testing

Vitest validates:
- audit calculation correctness
- savings calculations
- recommendation outputs

---

## CI/CD

GitHub Actions automatically:
- installs dependencies
- runs tests
- validates pushes to main branch