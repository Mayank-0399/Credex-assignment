import { describe, expect, it } from "vitest";

import { runAudit } from "../lib/audit-engine";

describe("audit engine", () => {
  it("detects Cursor Business overspend", () => {
    const results = runAudit([
      {
        tool: "Cursor",
        plan: "Business",
        monthlySpend: 80,
        seats: 2,
      },
    ]);

    expect(results[0].monthlySavings).toBe(40);
  });

  it("detects ChatGPT Team overspend", () => {
    const results = runAudit([
      {
        tool: "ChatGPT",
        plan: "Team",
        monthlySpend: 30,
        seats: 1,
      },
    ]);

    expect(results[0].monthlySavings).toBe(10);
  });

  it("handles optimized plans", () => {
    const results = runAudit([
      {
        tool: "Cursor",
        plan: "Pro",
        monthlySpend: 20,
        seats: 1,
      },
    ]);

    expect(results[0].monthlySavings).toBe(0);
  });
});