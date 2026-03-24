import { Ban, Clock, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const rules = [
  {
    icon: Ban,
    title: "No Pitching",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    description:
      "Not even a little. Not even \"what if there was a product that...\" Your job is to understand, not to sell.",
  },
  {
    icon: Clock,
    title: "Past, Not Future",
    color: "text-turquoise",
    bgColor: "bg-turquoise/10",
    description:
      "Ask about the past, not the future. \"Tell me about the last time you...\" not \"Would you ever...\" Real behaviour beats stated preference, every time.",
  },
  {
    icon: Flame,
    title: "Follow The Emotion",
    color: "text-purple",
    bgColor: "bg-purple/10",
    description:
      "When they say something with energy \u2014 frustration, excitement, relief \u2014 that's where you dig deeper. Emotion signals what really matters.",
  },
];

export function ThreeRules() {
  return (
    <section id="three-rules" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Three Rules for Great Interviews
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        These rules separate useful interviews from useless ones.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {rules.map((rule) => (
          <Card key={rule.title} className="border-border">
            <CardContent className="p-6">
              <div className={`h-10 w-10 rounded-lg ${rule.bgColor} flex items-center justify-center mb-4`}>
                <rule.icon className={`h-5 w-5 ${rule.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{rule.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {rule.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
