export default function VideoSection() {
  return (
    <section
      id="video"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="section-card overflow-hidden p-6 sm:p-8">
        <h2 className="mb-4 text-center text-2xl font-semibold text-graphite">
          Watch the SkinSense Preview
        </h2>
        <p className="mb-6 text-center text-sm text-slate-600">
          See how AI analyzes your skin and builds a routine in under 60 seconds.
        </p>

        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-serenity/40">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="SkinSense demo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
