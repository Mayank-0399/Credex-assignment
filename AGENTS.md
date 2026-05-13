# Agents

## Overview

This project currently uses deterministic audit logic instead of autonomous AI agents. The recommendations and summaries are generated through structured rule-based workflows to keep outputs predictable, explainable, and easy to test.

---

## Why No Autonomous Agents Were Used

The goal of the project was to create:

* reliable financial recommendations
* predictable optimization outputs
* fast response times
* low operational cost

For this reason, deterministic logic was preferred over fully autonomous agent-based systems.

---

## Current “Agent-Like” Responsibilities

Even without autonomous agents, the application still separates responsibilities into modular systems:

### Audit Engine

Handles:

* pricing analysis
* savings calculations
* recommendation generation

### Summary Generator

Handles:

* personalized summaries
* readable business insights
* optimization explanations

### Lead Capture System

Handles:

* user information collection
* persistence into Supabase

---

## Future Agent Possibilities

Future versions of the product could include AI agents for:

* dynamic pricing analysis
* AI tool comparison research
* vendor benchmarking
* procurement recommendations
* usage-based optimization

---

## Engineering Decision

The project intentionally prioritizes:

* explainability
* maintainability
* low infrastructure cost
* testability

instead of relying heavily on autonomous AI workflows.

