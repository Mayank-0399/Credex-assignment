export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
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

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Start Free Audit
            </button>

            <button className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-zinc-500">
              View Demo Report
            </button>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-3xl font-bold">$18k+</h3>
              <p className="mt-2 text-zinc-400">
                average annual savings identified
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-3xl font-bold">7 tools</h3>
              <p className="mt-2 text-zinc-400">
                benchmarked against current pricing
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-3xl font-bold">2 min</h3>
              <p className="mt-2 text-zinc-400">
                to generate your personalized audit
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}