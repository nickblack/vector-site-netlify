import { Building2, Cpu, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    icon: Building2,
    title: "P&L Owners / Business Unit Heads",
    color: "text-turquoise",
    bgColor: "bg-turquoise/10",
    cares: "Ultimately stand to gain from your product being adopted. Motivated by business outcomes, revenue, and efficiency.",
    tip: "Assume they are your buyer until you have concrete evidence to the contrary.",
  },
  {
    icon: Cpu,
    title: "CTOs, Heads of Engineering, R&D",
    color: "text-purple",
    bgColor: "bg-purple/10",
    cares: "Motivated by introducing a new technology (or by blocking it). Usually not motivated by profit directly.",
    tip: "Must progress past them to the P&L owner to close the deal.",
  },
  {
    icon: Scale,
    title: "Purchasing and Legal",
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    cares: "Purchasing negotiate discounts. Legal ensure compliance. They have their own \"jobs\" but they are process gates, not decision-makers.",
    tip: "They are not your buyers. Don't treat them as such.",
  },
];

export function BuyerVsUser() {
  return (
    <section id="buyer-vs-user" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Buyer vs User
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        In B2B, the person who feels the pain and the person who approves the budget are often
        different people &mdash; with different &ldquo;jobs.&rdquo; You need to understand what each one cares about.
      </p>
      <div className="space-y-4">
        {roles.map((role) => (
          <Card key={role.title} className="border-border">
            <CardContent className="p-6">
              <div className="flex gap-5">
                <div className={`flex-shrink-0 h-10 w-10 rounded-lg ${role.bgColor} flex items-center justify-center`}>
                  <role.icon className={`h-5 w-5 ${role.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {role.cares}
                  </p>
                  <p className="text-sm font-medium text-turquoise">
                    {role.tip}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
