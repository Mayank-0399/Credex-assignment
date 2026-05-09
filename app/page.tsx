import AuditForm from "@/components/audit/audit-form";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            AI Spend Audit
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            You’re probably overspending on AI tools.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Instantly analyze your AI stack, identify wasted spend,
            discover cheaper alternatives, and calculate annual savings
            opportunities for your team.
          </p>
        </div>

        <AuditForm />
      </section>
    </main>
  );
}