# AI Spend Audit

AI Spend Audit is a full-stack SaaS-style application that helps teams analyze AI tooling costs, identify overspending opportunities, and generate optimization recommendations.

## Features

- Dynamic AI audit form
- Personalized audit recommendations
- Savings calculations
- Shareable audit URLs
- Lead capture system
- Supabase persistence
- Automated testing
- GitHub Actions CI pipeline

---

## Tech Stack

### Frontend
- Next.js 15
- React
- TypeScript
- TailwindCSS

### Backend
- Next.js API Routes

### Database
- Supabase

### Testing
- Vitest

### Deployment
- Vercel

---

## Project Architecture

```txt
Frontend
  ↓
Audit Engine
  ↓
Summary API
  ↓
Lead Capture API
  ↓
Supabase Database
```

---

## Running Locally

### Install dependencies

```bash
npm install
```

### Create environment variables

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Start development server

```bash
npm run dev
```

---

## Testing

Run automated tests:

```bash
npm run test
```

---

## CI/CD

GitHub Actions automatically runs tests on every push to `main`.

---

## Product Decisions

### Why deterministic audit logic?
The audit engine uses rule-based recommendations because:
- financial calculations should remain predictable
- deterministic systems improve trust
- recommendations remain explainable

### Why lightweight AI summaries?
The project intentionally avoids heavy LLM dependency:
- lower operational cost
- faster response times
- graceful fallback behavior
- improved reliability

---

## Future Improvements

- Real AI integrations
- Multi-user authentication
- Historical audit tracking
- Organization dashboards
- Stripe billing integration
- Real-time collaboration

---

## Live Demo

Add deployed Vercel URL here.

---

## Author

Mayank Singh