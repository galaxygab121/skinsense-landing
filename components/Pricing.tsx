export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 className="mb-3 text-center text-3xl font-semibold text-graphite">
        Unlock Your Best Skin
      </h2>
      <p className="mb-10 text-center text-sm text-slate-600">
        Start free, upgrade when you&apos;re ready to go deeper.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Free */}
        <div className="section-card flex flex-col gap-4 p-8">
          <h3 className="text-lg font-semibold text-graphite">Free</h3>
          <p className="text-3xl font-bold text-graphite">Free</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Skin type quiz</li>
            <li>• Basic AM/PM routine</li>
            <li>• Limited ingredient insights</li>
          </ul>
        </div>

        {/* Premium */}
        <div className="section-card relative flex flex-col gap-4 border border-serenity/60 p-8">
          <div className="absolute right-6 top-6 rounded-full bg-serenity text-xs font-semibold uppercase tracking-wide text-white px-3 py-1">
            Most Popular
          </div>
          <h3 className="text-lg font-semibold text-graphite">Premium</h3>
          <p className="text-3xl font-bold text-graphite">
            $7.99
            <span className="text-sm font-normal text-slate-500"> / month</span>
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• AI skin scan</li>
            <li>• Full ingredient analysis</li>
            <li>• Weekly insights</li>
            <li>• Full AM/PM routine</li>
            <li>• Progress tracking</li>
            <li>• Ad-free experience</li>
          </ul>
          <a href="#waitlist" className="mt-4 self-start btn-primary">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
