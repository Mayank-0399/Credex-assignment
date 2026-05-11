import { NextResponse } from "next/server";

import { generateSummary } from "@/lib/generate-summary";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { results } = body;

    const summary = generateSummary(results);

    return NextResponse.json({
      summary,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate summary",
      },
      {
        status: 500,
      }
    );
  }
}