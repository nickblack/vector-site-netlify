import { Card, CardContent } from "@/components/ui/card";
import { ApplyButton } from "@/components/apply-button";
import { Check } from "lucide-react";

const included = [
  "Embedded operators 2–3 days/week",
  "Weekly coaching with Nick Black",
  "VECTOR framework & 20+ GTM models",
  "Sales playbook you keep forever",
  "CRM setup and pipeline development",
  "Structured growth experiments",
  "Dedicated growth manager",
  "Hiring support for your first commercial leader",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          One program. One price.
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
          No tiers, no upsells. Everything you need to go from promising
          technology to proven PMF.
        </p>

        <Card className="border-turquoise/30 shadow-sm">
          <CardContent className="pt-8 pb-8">
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-sm mb-2">
                VECTOR — 6 Month Program
              </p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold">£9,500</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                ~6 months &middot; Considerably less than hiring a head of sales
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <ApplyButton size="lg" className="text-base px-10">
                Apply to VECTOR
              </ApplyButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
