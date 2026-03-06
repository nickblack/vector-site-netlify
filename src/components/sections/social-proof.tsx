import Image from "next/image";

const companies = [
  { name: "Crypto Quantique", logo: "/logos/crypto-quantique.svg" },
  { name: "Rain", logo: "/logos/rain.svg" },
  { name: "PricingMonkey", logo: "/logos/pricingmonkey.svg" },
  { name: "QuestDB", logo: "/logos/questdb.svg" },
  { name: "Signal AI", logo: "/logos/signal-ai.svg" },
  { name: "Xeneta", logo: "/logos/xeneta.svg" },
];

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm mb-10">
          Trusted by deep tech founders at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.logo}
              alt={company.name}
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
