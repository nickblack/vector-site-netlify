import { ArrowLeft, Presentation } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="bg-dark pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to VECTOR
        </a>
        <div className="border-l-4 border-purple pl-6">
          <p className="text-turquoise text-sm font-medium uppercase tracking-wider mb-3">
            VECTOR Reference Guide
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Buyer Psychology 101
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-6">
            Frameworks, templates, and tools to understand what drives your buyers
            &mdash; and how to discover it through interviews.
          </p>
          <a
            href="https://docsend.com/view/36t68g5tpmsgaw5w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors border border-white/15 rounded-lg px-4 py-2"
          >
            <Presentation className="h-4 w-4" />
            View workshop slides
          </a>
        </div>
      </div>
    </section>
  );
}
