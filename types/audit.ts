export type ToolName =
  | "Cursor"
  | "ChatGPT"
  | "Claude"
  | "GitHub Copilot"
  | "Gemini"
  | "OpenAI API"
  | "Anthropic API"
  | "Windsurf";

export interface ToolEntry {
  tool: ToolName;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditInput {
  tools: ToolEntry[];
  teamSize: number;
  useCase: "coding" | "writing" | "research" | "data" | "mixed";
}

export interface AuditRecommendation {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  reason: string;
  recommendation: string;
}