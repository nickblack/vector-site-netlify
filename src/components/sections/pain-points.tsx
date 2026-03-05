import { Card, CardContent } from "@/components/ui/card";
import { Target, Clock, MessageSquareWarning } from "lucide-react";

const pains = [
  {
    icon: Target,
    quote: "I spend all day on sales calls but nothing closes predictably.",
    detail:
      "That Fortune 500 pilot that's been 'about to close' for 6 months? You're wasting cycles on the wrong customers.",
  },
  {
    icon: Clock,
    quote: "My investors keep asking about traction but I'm drowning in pilots.",
    detail:
      "Activity goes up. Conviction does not. You need a system, not more meetings.",
  },
  {
    icon: MessageSquareWarning,
    quote: "Every advisor gives me conflicting advice while my runway burns.",
    detail:
      "One says enterprise sales. Another says PLG. A third suggests channel partners. They're all pattern-matching, not understanding your context.",
  },
];

export function PainPoints() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Sound familiar?
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
          These are the problems we hear from every deep tech founder we work
          with.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <Card
              key={pain.quote}
              className="border-border bg-card hover:border-turquoise/30 transition-colors"
            >
              <CardContent className="pt-6">
                <pain.icon className="h-8 w-8 text-turquoise mb-4" />
                <p className="font-semibold text-lg leading-snug mb-3">
                  &ldquo;{pain.quote}&rdquo;
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pain.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
