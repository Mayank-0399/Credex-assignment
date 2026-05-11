type Props = {
  summary: string;
};

export default function AISummary({ summary }: Props) {
  return (
    <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
        Personalized Audit Summary
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Key Insights
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-300">
        {summary}
      </p>
    </section>
  );
}