import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, company, role } = body;

    if (!email) {
      return NextResponse.json(
        {
          error: "Email required",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          email,
          company,
          role,
        },
      ]);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to save lead",
      },
      {
        status: 500,
      }
    );
  }
}