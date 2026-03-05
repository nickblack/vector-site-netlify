const companies = [
  "Crypto Quantique",
  "Rain",
  "PricingMonkey",
  "QuestDB",
  "Signal AI",
  "Xeneta",
];

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Trusted by deep tech founders at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-muted-foreground/50 font-medium text-sm md:text-base tracking-wide hover:text-foreground transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
