const steps = [
  {
    title: "Take the Quiz",
    description: "Tell us about your skin type, concerns, and lifestyle.",
    color: "from-softMint/60 to-softMint/30",
    icon: "📋",
  },
  {
    title: "Scan Your Skin",
    description: "Our AI analyzes your skin textures in seconds.",
    color: "from-glowPink/60 to-glowPink/30",
    icon: "📷",
  },
  {
    title: "Get Your Routine",
    description: "Receive a routine that fits your biology.",
    color: "from-serenity/60 to-serenity/30",
    icon: "🧴",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-semibold text-graphite">
        How It Works
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="section-card relative flex flex-col items-center gap-4 p-8 text-center rounded-[2.5rem]"
          >
            <div className={`absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b ${step.color} blur-xl`} />
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-soft text-2xl">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-graphite">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
