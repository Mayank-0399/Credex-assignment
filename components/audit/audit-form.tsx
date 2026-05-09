"use client";

import { useEffect, useState } from "react";

import { tools } from "@/lib/tools";

type ToolEntry = {
  tool: string;
  plan: string;
  monthlySpend: number;
  seats: number;
};

export default function AuditForm() {
  const [entries, setEntries] = useState<ToolEntry[]>([
    {
      tool: "Cursor",
      plan: "Pro",
      monthlySpend: 20,
      seats: 1,
    },
  ]);

  const [teamSize, setTeamSize] = useState(1);

  const [useCase, setUseCase] = useState("coding");

  useEffect(() => {
    const saved = localStorage.getItem("audit-form");

    if (saved) {
      const parsed = JSON.parse(saved);

      setEntries(parsed.entries);
      setTeamSize(parsed.teamSize);
      setUseCase(parsed.useCase);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "audit-form",
      JSON.stringify({
        entries,
        teamSize,
        useCase,
      })
    );
  }, [entries, teamSize, useCase]);

  function addTool() {
    setEntries([
      ...entries,
      {
        tool: "Cursor",
        plan: "Pro",
        monthlySpend: 20,
        seats: 1,
      },
    ]);
  }

  function removeTool(index: number) {
    const updated = [...entries];

    updated.splice(index, 1);

    setEntries(updated);
  }

  function updateEntry(
    index: number,
    field: keyof ToolEntry,
    value: string | number
  ) {
    const updated = [...entries];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setEntries(updated);
  }

  return (
    <section className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Build Your AI Spend Audit
        </h2>

        <p className="mt-3 text-zinc-400">
          Add your current AI tools and spending details.
        </p>
      </div>

      <div className="space-y-6">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-black/30 p-6"
          >
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Tool
                </label>

                <select
                  value={entry.tool}
                  onChange={(e) =>
                    updateEntry(index, "tool", e.target.value)
                  }
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
                >
                  {Object.keys(tools).map((tool) => (
                    <option key={tool}>{tool}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Plan
                </label>

                <select
                  value={entry.plan}
                  onChange={(e) =>
                    updateEntry(index, "plan", e.target.value)
                  }
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
                >
                  {tools[entry.tool as keyof typeof tools].map(
                    (plan) => (
                      <option key={plan}>{plan}</option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Monthly Spend ($)
                </label>

                <input
                  type="number"
                  value={entry.monthlySpend}
                  onChange={(e) =>
                    updateEntry(
                      index,
                      "monthlySpend",
                      Number(e.target.value)
                    )
                  }
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Seats
                </label>

                <input
                  type="number"
                  value={entry.seats}
                  onChange={(e) =>
                    updateEntry(
                      index,
                      "seats",
                      Number(e.target.value)
                    )
                  }
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
                />
              </div>
            </div>

            <button
              onClick={() => removeTool(index)}
              className="mt-4 text-sm text-red-400"
            >
              Remove Tool
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addTool}
        className="mt-6 rounded-2xl border border-zinc-700 px-5 py-3"
      >
        + Add Tool
      </button>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Team Size
          </label>

          <input
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Primary Use Case
          </label>

          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3"
          >
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="data">Data</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
      </div>

      <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
        Generate Audit
      </button>
    </section>
  );
}