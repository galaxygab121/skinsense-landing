const features = [
  {
    title: "Ingredient Analyzer",
    description: "Understand what’s inside your products and what to avoid.",
  },
  {
    title: "Personalized AM/PM",
    description: "Custom morning and night routines for your exact skin profile.",
  },
  {
    title: "Progress Tracking",
    description: "Track changes over time with AI-powered skin scoring.",
  },
  {
    title: "AI Skin Scan",
    description: "Deep skin analysis in seconds using computer vision.",
  },
  {
    title: "Environmental Skin Score",
    description: "Weather-proof your routine based on UV, humidity, and pollution.",
  },
  {
    title: "Neuroscience Mode (Premium)",
    description: "Advanced neural skin optimization inspired by brain science.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 className="mb-3 text-center text-3xl font-semibold text-graphite">
        Unlock Powerful Features
      </h2>
      <p className="mb-10 text-center text-sm text-slate-600">
        Designed with dermatology, data science, and neuroscience in mind.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="section-card flex flex-col gap-3 p-6"
          >
            <h3 className="text-base font-semibold text-graphite">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
