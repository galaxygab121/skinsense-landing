export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/40 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-600 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-graphite">SkinSense</span>
          <span className="text-[11px] text-slate-500">
            your skin. your science.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="hover:text-graphite">
            Privacy
          </a>
          <a href="#" className="hover:text-graphite">
            Terms
          </a>
          <a href="#" className="hover:text-graphite">
            Press
          </a>
          <a href="#" className="hover:text-graphite">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
