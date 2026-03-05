import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    company: "Crypto Quantique",
    badge: "IoT Security",
    outcome: "Siemens partnership in high-growth segment",
    description:
      "Repositioned from crowded industrial PC market to silicon security. Mapped buyer decision path, changed positioning — committed revenue by month three.",
  },
  {
    company: "Rejoule",
    badge: "Battery Tech",
    outcome: "Focused roadmap from 100M-unit dreams to real revenue",
    description:
      "Navigated complex battery technology commercialisation — iterating across product roadmap, grant funding, and market segments to find the optimal path.",
  },
  {
    company: "PricingMonkey",
    badge: "Fintech",
    outcome: "Hired first product leader, rebooted product strategy",
    description:
      "Transformed from founder-led sales into a scalable process. Built the playbook that enabled their first senior hire to succeed from day one.",
  },
];

export function Results() {
  return (
    <section id="results" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Real results, not case study theatre
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
          What happens when technically brilliant founders get the right
          commercial system.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Card key={cs.company} className="border-border">
              <CardContent className="pt-6">
                <Badge
                  variant="secondary"
                  className="mb-4 bg-purple/10 text-purple border-0"
                >
                  {cs.badge}
                </Badge>
                <h3 className="font-semibold text-xl mb-2">{cs.company}</h3>
                <p className="text-turquoise font-medium text-sm mb-3">
                  {cs.outcome}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cs.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
