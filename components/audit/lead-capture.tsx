"use client";

import { useState } from "react";

export default function LeadCapture() {
  const [email, setEmail] = useState("");

  const [company, setCompany] = useState("");

  const [role, setRole] = useState("");

  const [success, setSuccess] = useState(false);

  async function submitLead() {
    const response = await fetch("/api/lead", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        company,
        role,
      }),
    });

    if (response.ok) {
      setSuccess(true);
    }
  }

  return (
    <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <h2 className="text-3xl font-bold">
        Save Your Audit Report
      </h2>

      <p className="mt-3 text-zinc-400">
        Save your audit details for future optimization updates.
      </p>

      <div className="mt-6 grid gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-zinc-900 p-3"
        />

        <button
          onClick={submitLead}
          className="rounded-2xl bg-white px-6 py-4 font-semibold text-black"
        >
          Save Report
        </button>

        {success && (
          <p className="text-green-400">
            Audit report saved successfully.
          </p>
        )}
      </div>
    </section>
  );
}