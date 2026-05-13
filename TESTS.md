# Testing Strategy

## Overview

The project uses Vitest for automated testing of the audit engine logic.

The primary goal of testing was to ensure:

* savings calculations remain accurate
* optimization recommendations are predictable
* audit logic behaves consistently across different plans

---

## Current Tests

### Audit Engine Tests

The following scenarios are tested:

* Cursor Business overspending detection
* ChatGPT Team optimization recommendations
* optimized plans with zero savings

---

## Why Deterministic Logic Was Chosen

The audit engine intentionally uses rule-based logic instead of fully AI-generated recommendations because:

* financial recommendations should remain explainable
* outputs should be testable and repeatable
* deterministic systems are easier to debug

---

## Future Improvements

Potential future testing improvements:

* integration testing for API routes
* end-to-end testing with Playwright
* database integration tests
* load testing for production APIs
