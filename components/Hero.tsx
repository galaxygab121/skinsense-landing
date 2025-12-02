export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-20">
        
        {/* Left text */}
        <div className="relative z-10 max-w-xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-serenity">
            AI-Powered Skincare
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-graphite sm:text-5xl lg:text-6xl">
            Smart skincare.
            <br />
            <span className="text-graphite">Powered by science.</span>
          </h1>
          <p className="text-base text-slate-700 sm:text-lg">
            SkinSense analyzes your skin to build a personalized routine 
            based on real dermatological science and AI computer vision.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#waitlist" className="btn-primary">Join the Waitlist</a>
            <a href="#video" className="btn-outline">Watch Demo</a>
          </div>
        </div>

        {/* Right phone mockup */}
        <div className="relative z-10 flex w-full justify-center lg:w-auto">
          <div className="relative h-[480px] w-[240px] rounded-[3rem] bg-slate-900 shadow-soft shadow-slate-800/40">
            <div className="absolute inset-[6px] rounded-[2.6rem] bg-white">
              <div className="flex h-full flex-col gap-4 rounded-[2.4rem] bg-gradient-to-b from-white via-white to-slate-50 p-4">
                
                <div className="mt-2 text-xs font-semibold text-slate-500">
                  Your Skin Profile
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  {[
                    { label: "Acne Level", value: "Mild" },
                    { label: "Redness", value: "Medium" },
                    { label: "Texture", value: "Smooth" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-start justify-between rounded-2xl bg-white/90 p-2 shadow-sm"
                    >
                      <span className="text-[10px] text-slate-500">
                        {item.label}
                      </span>
                      <span className="mt-1 text-xs font-semibold text-graphite">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-1 text-xs font-semibold text-slate-600">
                  PM · Night Serum
                </div>

                <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-white/90 p-3 shadow-sm">
                  <div className="h-20 w-full rounded-xl bg-gradient-to-tr from-serenity via-glowPink to-softMint" />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-graphite">
                      Gentle Cleanser
                    </p>
                    <p className="text-[10px] text-slate-500">
                      With niacinamide, hyaluronic acid, and aloe to soothe and hydrate.
                    </p>
                  </div>
                  <button className="mt-auto rounded-full bg-serenity/90 py-2 text-center text-xs font-semibold text-white">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-20 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-serenity/60 via-glowPink/60 to-softMint/60 blur-3xl" />
        </div>

      </div>
    </section>
  );
}
