# Pricing Data

## Overview

The audit engine uses simplified pricing assumptions for common AI productivity tools. The goal is not exact real-time pricing accuracy, but realistic enough benchmarking to generate believable optimization recommendations.

---

## Tool Pricing Assumptions

### Cursor

| Plan     | Estimated Monthly Cost |
| -------- | ---------------------- |
| Pro      | $20                    |
| Business | $40                    |

---

### ChatGPT

| Plan | Estimated Monthly Cost |
| ---- | ---------------------- |
| Plus | $20                    |
| Team | $30                    |

---

### GitHub Copilot

| Plan       | Estimated Monthly Cost |
| ---------- | ---------------------- |
| Individual | $10                    |
| Business   | $19                    |

---

## Why Simplified Pricing Was Used

The project intentionally uses static pricing assumptions because:

* pricing changes frequently
* deterministic calculations are easier to test
* the focus is recommendation logic rather than live pricing APIs

This approach keeps:

* infrastructure simple
* recommendations predictable
* operational costs low

---

## Recommendation Logic

The audit engine looks for situations where:

* enterprise plans are used for very small teams
* monthly spend exceeds expected benchmarks
* cheaper plans could provide similar value

---

## Future Improvements

Potential future improvements:

* live pricing APIs
* vendor benchmarking
* regional pricing support
* usage-based recommendations
* API token consumption analysis

---

## Disclaimer

Pricing values are approximate and intended for MVP demonstration purposes only.
