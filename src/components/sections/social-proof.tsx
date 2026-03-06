import Image from "next/image";

const companies = [
  { name: "Crypto Quantique", logo: "/logos/crypto-quantique.svg", className: "h-16 md:h-[4.5rem]" },
  { name: "Rain", logo: "/logos/rain.svg", className: "h-8 md:h-9" },
  { name: "PricingMonkey", logo: "/logos/pricingmonkey.svg", className: "h-6 md:h-7" },
  { name: "QuestDB", logo: "/logos/questdb.svg", className: "h-7 md:h-8" },
  { name: "Signal AI", logo: "/logos/signal-ai.svg", className: "h-7 md:h-8" },
  { name: "Xeneta", logo: "/logos/xeneta.svg", className: "h-7 md:h-8" },
];

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm mb-10">
          Trusted by deep tech founders at
        </p>
        <div className="flex items-center justify-between">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={160}
                height={60}
                className={`${company.className} w-auto opacity-70 hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
