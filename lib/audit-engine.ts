type AuditEntry = {
  tool: string;
  plan: string;
  monthlySpend: number;
  seats: number;
};

export type AuditResult = {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  recommendation: string;
  reason: string;
};

export function runAudit(entries: AuditEntry[]): AuditResult[] {
  const results: AuditResult[] = [];

  for (const entry of entries) {
    let recommendedSpend = entry.monthlySpend;

    let recommendation = "Current plan looks reasonable.";

    let reason = "No major optimization opportunity detected.";

    if (
      entry.tool === "Cursor" &&
      entry.plan === "Business" &&
      entry.seats <= 2
    ) {
      recommendedSpend = 20 * entry.seats;

      recommendation = "Downgrade to Cursor Pro";

      reason =
        "Cursor Business is usually unnecessary for teams under 3 users.";

    } else if (
      entry.tool === "ChatGPT" &&
      entry.plan === "Team" &&
      entry.seats <= 2
    ) {
      recommendedSpend = 20 * entry.seats;

      recommendation = "Switch to ChatGPT Plus";

      reason =
        "Team collaboration features may not justify the higher price for small teams.";

    } else if (
      entry.tool === "Claude" &&
      entry.plan === "Max"
    ) {
      recommendedSpend = 20 * entry.seats;

      recommendation = "Consider Claude Pro";

      reason =
        "Claude Max may be excessive unless handling extremely high daily usage.";

    } else if (
      entry.tool === "GitHub Copilot" &&
      entry.plan === "Enterprise" &&
      entry.seats < 5
    ) {
      recommendedSpend = 19 * entry.seats;

      recommendation = "Move to GitHub Copilot Business";

      reason =
        "Enterprise tier costs are difficult to justify for very small engineering teams.";

    } else if (
      entry.monthlySpend > 500
    ) {
      recommendedSpend = Math.floor(entry.monthlySpend * 0.75);

      recommendation = "Explore discounted infrastructure credits";

      reason =
        "High AI infrastructure spend may qualify for substantial credit-based discounts.";

    }

    const monthlySavings =
      entry.monthlySpend - recommendedSpend;

    const annualSavings = monthlySavings * 12;

    results.push({
      tool: entry.tool,
      currentSpend: entry.monthlySpend,
      recommendedSpend,
      monthlySavings,
      annualSavings,
      recommendation,
      reason,
    });
  }

  return results;
}