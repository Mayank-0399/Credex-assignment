"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { getAudit } from "@/lib/share";

import LeadCapture from "@/components/audit/lead-capture";

export default function AuditPage() {
  const params = useParams();

  const id = params.id as string;

  const [audit, setAudit] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const data = getAudit(id);

    setAudit(data);
  }, [id]);

  if (!audit) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        <p>Audit not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Shared Audit
        </p>

        <h1 className="mt-4 text-5xl font-black">
          AI Spend Audit Report
        </h1>

        <div className="mt-12 space-y-6">
          {audit.results.map((result: any, index: number) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h2 className="text-2xl font-bold">
                {result.tool}
              </h2>

              <p className="mt-3 text-zinc-400">
                {result.reason}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm text-zinc-500">
                    Current Spend
                  </p>

                  <p className="text-xl font-semibold">
                    ${result.currentSpend}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Recommended Spend
                  </p>

                  <p className="text-xl font-semibold text-green-400">
                    ${result.recommendedSpend}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Monthly Savings
                  </p>

                  <p className="text-xl font-semibold text-green-400">
                    ${result.monthlySavings}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
          <h2 className="text-3xl font-bold">
            Personalized Summary
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            {audit.summary}
          </p>
        </section>

        <div className="mt-10">
          <LeadCapture />
        </div>
      </div>
    </main>
  );
}