import { AuditResult } from "./audit-engine";

export function generateSummary(
  results: AuditResult[]
) {
  const totalSavings = results.reduce(
    (sum, result) => sum + result.monthlySavings,
    0
  );

  const optimizedTools = results.filter(
    (result) => result.monthlySavings > 0
  ).length;

  if (totalSavings > 500) {
    return `
Your organization appears to have substantial AI infrastructure overspending opportunities. 
Several tools are currently operating on higher-cost plans that may not align with actual team requirements. 
Based on the audit, optimizing plan selection and consolidating spending could generate meaningful annual savings while maintaining similar productivity levels.
`;
  }

  if (totalSavings > 100) {
    return `
Your AI stack shows moderate optimization opportunities across multiple tools. 
A few subscriptions appear slightly overprovisioned relative to team size and usage patterns. 
Adjusting plan selection and reviewing collaboration requirements could help reduce recurring monthly costs.
`;
  }

  if (optimizedTools === 0) {
    return `
Your current AI tooling setup appears relatively efficient for your team size and usage profile. 
The audit did not identify any major overspending patterns or unnecessary enterprise-tier subscriptions at this time.
`;
  }

  return `
Your audit identified a small number of opportunities to optimize AI spending efficiency. 
Minor plan adjustments and subscription consolidation may help reduce recurring costs while preserving current workflows.
`;
}