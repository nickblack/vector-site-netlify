export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/NB_OnlySymbol_White_AW.png"
            alt="Nick Black"
            className="h-5 w-auto"
          />
          <span className="text-white/60 text-sm">
            VECTOR by Nick Black &middot; {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://nickblack.us"
            className="text-white/40 hover:text-white/70 text-sm transition-colors"
          >
            nickblack.us
          </a>
          <a
            href="https://www.linkedin.com/in/nickblack/"
            className="text-white/40 hover:text-white/70 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:info@nickblack.us"
            className="text-white/40 hover:text-white/70 text-sm transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
