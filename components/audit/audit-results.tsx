import { AuditResult } from "@/lib/audit-engine";

type Props = {
  results: AuditResult[];
};

export default function AuditResults({ results }: Props) {
  const totalMonthlySavings = results.reduce(
    (sum, result) => sum + result.monthlySavings,
    0
  );

  const totalAnnualSavings = results.reduce(
    (sum, result) => sum + result.annualSavings,
    0
  );

  return (
    <section className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-green-400">
          Audit Results
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Potential Savings: $
          {totalMonthlySavings.toFixed(0)}/month
        </h2>

        <p className="mt-3 text-zinc-400">
          Estimated annual savings:
          {" "}
          <span className="font-semibold text-white">
            ${totalAnnualSavings.toFixed(0)}
          </span>
        </p>
      </div>

      <div className="space-y-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-black/30 p-6"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  {result.tool}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {result.reason}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-sm text-zinc-500">
                  Current Spend
                </p>

                <p className="text-xl font-semibold">
                  ${result.currentSpend}
                </p>

                <p className="mt-3 text-sm text-zinc-500">
                  Recommended Spend
                </p>

                <p className="text-xl font-semibold text-green-400">
                  ${result.recommendedSpend}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-900 p-5">
              <p className="font-semibold">
                {result.recommendation}
              </p>

              <p className="mt-2 text-zinc-400">
                Monthly Savings:
                {" "}
                <span className="font-semibold text-green-400">
                  ${result.monthlySavings}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}