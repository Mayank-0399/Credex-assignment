# Prompts

## Overview

The project primarily uses deterministic audit logic instead of relying heavily on AI-generated outputs. However, prompts were still explored during development for generating readable summaries and improving recommendation explanations.

The focus was to keep outputs:

* concise
* explainable
* business-friendly
* consistent

---

## Summary Generation Prompt

This was the main structure explored for generating personalized summaries:

```txt
Analyze the following AI tool audit results and generate a short business-style summary.

Focus on:
- overspending opportunities
- optimization suggestions
- estimated savings
- overall efficiency

Keep the response concise, readable, and practical.
```

---

## Why Deterministic Logic Was Preferred

During development, I realized that fully AI-generated recommendations often became:

* inconsistent
* overly generic
* difficult to test
* harder to explain

Since the project deals with financial recommendations, predictable outputs felt more reliable.

Because of this, the final implementation uses:

* rule-based savings calculations
* deterministic recommendation logic
* lightweight personalized summaries

instead of depending completely on LLM-generated responses.

---

## Prompting Lessons Learned

A few important things I noticed while experimenting:

* shorter prompts produced more focused summaries
* overly detailed prompts created repetitive outputs
* structured inputs improved consistency
* deterministic systems were easier to debug than free-form AI outputs

---

## Future Improvements

If expanded further, prompts could be used for:

* dynamic recommendation explanations
* vendor comparisons
* procurement suggestions
* personalized optimization reports

while still keeping the core financial calculations deterministic.
