// components/ResultsGrid.tsx

export default function ResultsGrid() {
  const items = Array.from({ length: 6 });

  return (
    <section
      id="results"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="section-card px-6 py-10 sm:px-10">
        <h2 className="mb-6 text-center text-3xl font-semibold text-graphite">
          Before &amp; After Results
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 rounded-3xl bg-white/90 p-3 shadow-soft"
            >
              <div className="grid gap-2 md:grid-cols-2">
                {/* Before */}
                <div className="relative h-28 w-full overflow-hidden rounded-2xl border-2 border-serenity/60">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-serenity via-neuralBlue to-blushPearl" />
                  <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-slate-700">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative h-28 w-full overflow-hidden rounded-2xl border-2 border-softMint/60">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-softMint via-glowPink to-serenity" />
                  <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-slate-700">
                    After
                  </span>
                </div>
              </div>

              <p className="mt-2 text-xs text-slate-600">
                Based on 8 weeks of consistent use with SkinSense. Results may vary.
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Results based on consistent use &amp; AI tracking.
        </p>
      </div>
    </section>
  );
}

