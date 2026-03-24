import { Cog, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const outcomes = [
  {
    icon: Cog,
    title: "Functional",
    color: "text-turquoise",
    bgColor: "bg-turquoise/10",
    description: "It works better, faster, or cheaper.",
    example: "\"This tool processes data 10x faster than our current setup.\"",
  },
  {
    icon: Heart,
    title: "Emotional",
    color: "text-purple",
    bgColor: "bg-purple/10",
    description: "I feel confident, safe, or in control.",
    example: "\"I won't be the one blamed if there's a security breach.\"",
  },
  {
    icon: Users,
    title: "Social",
    color: "text-acid-green",
    bgColor: "bg-acid-green/10",
    description: "I look smart, innovative, or responsible to my team and board.",
    example: "\"My CTO will see me as the person who modernised our stack.\"",
  },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Three Types of Outcomes
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Every purchase satisfies three kinds of outcomes &mdash; and founders usually only
        think about functional ones. The emotional and social outcomes are usually what tips the decision.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {outcomes.map((outcome) => (
          <Card key={outcome.title} className="border-border">
            <CardContent className="p-6">
              <div className={`h-10 w-10 rounded-lg ${outcome.bgColor} flex items-center justify-center mb-4`}>
                <outcome.icon className={`h-5 w-5 ${outcome.color}`} />
              </div>
              <h3 className={`font-semibold text-lg mb-2 ${outcome.color}`}>
                {outcome.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {outcome.description}
              </p>
              <p className="text-xs italic text-muted-foreground/80">
                {outcome.example}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
