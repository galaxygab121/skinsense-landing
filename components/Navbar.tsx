export default function Navbar() {
  return (
    <header className="w-full py-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-serenity via-glowPink to-softMint shadow-soft">
            <span className="text-xs font-bold text-white">SS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-wide">SkinSense</span>
            <span className="text-xs text-slate-500">your skin. your science.</span>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <a href="#how-it-works" className="hover:text-graphite">
            How It Works
          </a>
          <a href="#features" className="hover:text-graphite">
            Features
          </a>
          <a href="#pricing" className="hover:text-graphite">
            Pricing
          </a>
          <a href="#waitlist" className="hover:text-graphite">
            Waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
