# Claude Notes

## Project Context

AI Spend Audit is a full-stack SaaS-style application focused on AI tooling cost optimization.

The application allows users to:

* enter AI tool subscriptions
* generate optimization recommendations
* calculate savings opportunities
* create shareable audit reports

---

## Technical Stack

* Next.js
* React
* TypeScript
* TailwindCSS
* Supabase
* Vitest
* Vercel

---

## Key Engineering Decisions

### Deterministic Audit Logic

The project intentionally uses rule-based audit calculations instead of relying heavily on LLM outputs.

Reasons:

* predictable recommendations
* explainable outputs
* easier testing
* lower operational cost

---

## Architecture Principles

The project prioritizes:

* modularity
* maintainability
* lightweight backend workflows
* production deployment readiness

---

## Future Improvements

Potential future enhancements:

* AI-powered recommendations
* historical analytics
* organization dashboards
* multi-user support
* API usage tracking
