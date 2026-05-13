# DEVLOG

---

## Day 1 — 2026-05-07

**Hours worked:** 5

### What I did
- Initialized Next.js + TypeScript project
- Configured TailwindCSS
- Set up initial folder structure
- Added pricing configuration
- Created TypeScript audit models
- Built landing page UI
- Connected GitHub repository

### What I learned
- Structuring the project early makes later feature additions much easier
- Tailwind v4 setup differs from older Tailwind configurations
- Clean architecture matters even for MVP projects

### Challenges faced
- Tailwind styles initially were not loading correctly
- Needed to understand newer Next.js + Tailwind setup changes

### How I solved them
- Updated Tailwind configuration to use the newer import-based setup
- Restarted build pipeline after config changes

### Plan for next day
- Build dynamic audit form
- Add state management
- Add localStorage persistence

---

## Day 2 — 2026-05-08

**Hours worked:** 4

### What I did
- Built dynamic AI tool input form
- Added add/remove tool functionality
- Added plan selection dropdowns
- Added team size and use-case inputs
- Implemented localStorage persistence
- Refactored form into reusable component structure

### What I learned
- Managing dynamic React form state can become complicated quickly
- Persistence dramatically improves UX for multi-step workflows
- Reusable components make future scaling easier

### Challenges faced
- Managing nested state updates cleanly
- Ensuring persistence did not break dynamic rendering

### How I solved them
- Centralized update logic inside helper functions
- Added controlled React inputs throughout the form

### Plan for next day
- Build audit engine
- Add savings calculations
- Create recommendation dashboard

---

## Day 3 — 2026-05-09

**Hours worked:** 3

### What I did
- Built audit engine logic
- Added recommendation system
- Implemented monthly and annual savings calculations
- Created audit results dashboard
- Added financial optimization heuristics
- Connected audit engine to frontend form flow

### What I learned
- Deterministic business logic is more reliable than fully AI-generated recommendations
- Financial recommendations need believable reasoning, not just calculations
- Clear recommendation explanations improve product trust

### Challenges faced
- Designing realistic optimization heuristics
- Avoiding recommendations that felt random or unrealistic

### How I solved them
- Used rule-based logic tied to team size and pricing tiers
- Added explicit reasoning for every recommendation

### Plan for next day
- Add personalized summaries
- Add backend API routes
- Start lead capture flow

---

## Day 4 — 2026-05-10

**Hours worked:** 3

### What I did
- Built personalized audit summary generation system
- Added backend API route for summary generation
- Created reusable AI summary component
- Integrated frontend with backend summary endpoint
- Implemented graceful fallback summary handling

### What I learned
- Not every AI-related feature requires expensive LLM usage
- Rule-based summary generation can still provide valuable UX
- Separating business logic from presentation improves maintainability

### Challenges faced
- Deciding between real AI APIs vs free deterministic summaries
- Designing summaries that still felt personalized

### How I solved them
- Built structured rule-based summaries using audit results
- Added backend abstraction so real AI APIs can be integrated later if needed

### Plan for next day
- Add lead capture backend
- Connect Supabase database
- Persist audit leads

---

## Day 5 — 2026-05-10

**Hours worked:** 3

### What I did
- Set up Supabase project
- Created leads database table
- Added environment variable configuration
- Built Supabase client integration
- Created lead capture API route
- Built lead capture UI component
- Connected frontend to backend lead storage
- Successfully stored leads inside database

### What I learned
- Full-stack integrations require careful environment setup
- Backend APIs become much easier when frontend state is already organized
- SaaS workflows rely heavily on persistence and lead management

### Challenges faced
- Navigating the newer Supabase dashboard layout
- Understanding public vs secret API keys
- Configuring environment variables correctly

### How I solved them
- Used anon public keys safely for frontend access
- Restarted development server after environment changes
- Tested APIs incrementally instead of debugging everything together

### Plan for next day
- Add shareable audit URLs
- Add deployment pipeline
- Improve documentation and testing

---

## Day 6 — 2026-05-11

**Hours worked:** 4

### What I did
- Added shareable audit report URLs
- Implemented dynamic route handling using Next.js App Router
- Built localStorage-based audit persistence
- Created public audit report pages
- Added automated testing using Vitest
- Added GitHub Actions CI pipeline
- Configured automated test execution on pushes to main branch

### What I learned
- Dynamic routing in newer Next.js versions behaves differently with async params
- Automated testing improves confidence during refactoring
- CI/CD pipelines make projects look significantly more production-ready

### Challenges faced
- Handling route params correctly in App Router client components
- Vitest path alias resolution issues
- Empty test suite failures

### How I solved them
- Switched to useParams() from next/navigation
- Replaced path aliases with relative imports inside tests
- Removed empty placeholder test files

### Plan for next day
- Deploy application
- Finalize documentation
- Add architecture and GTM documents

---

## Day 7 — 2026-05-12

**Hours worked:** 1

### What I did
- Deployed project to Vercel
- Added production environment variables
- Verified production database integration
- Completed README documentation
- Added architecture documentation
- Added GTM and monetization documentation
- Performed final production testing
- Verified CI pipeline execution on GitHub

### What I learned
- Deployment workflows require careful environment configuration
- Production testing is different from local development testing
- Good documentation significantly improves project professionalism

### Challenges faced
- Understanding Vercel root directory configuration
- Ensuring environment variables worked correctly in production
- Testing deployed API integrations safely

### How I solved them
- Verified repository structure before deployment
- Added production environment variables manually
- Tested end-to-end flows after deployment

### Final Reflection
This project helped me understand how full-stack SaaS products are structured end-to-end. I improved significantly in frontend architecture, backend API design, database integration, deployment workflows, testing, and CI/CD practices. The biggest learning was understanding how product decisions, engineering tradeoffs, and user workflows connect together in real applications.

---

# Overall Project Outcome

## Final Features
- Dynamic AI audit form
- Audit recommendation engine
- Savings calculations
- Personalized summaries
- Shareable audit URLs
- Lead capture backend
- Supabase persistence
- Automated tests
- GitHub Actions CI
- Production deployment

---

## Final Tech Stack

### Frontend
- Next.js
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

## Biggest Takeaways
- Full-stack architecture design
- SaaS workflow implementation
- CI/CD fundamentals
- Deployment and environment management
- Product-oriented engineering thinking