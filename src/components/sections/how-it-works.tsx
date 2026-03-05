import { Users, Compass, Focus, BookOpen } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Embedded Operators",
    description:
      "We work inside your company 2–3 days per week — attending sales calls, writing sequences, building your CRM. Not advice from afar.",
  },
  {
    icon: Compass,
    title: "The VECTOR Framework",
    description:
      "6 years of testing with deep tech startups distilled into a repeatable system. Vision, Execute, Constraints, Traction, Operations, Refinement.",
  },
  {
    icon: Focus,
    title: "Forced Focus",
    description:
      "We'll give you the confidence to kill 80% of your initiatives in the first 10 days. The 20% remaining will actually move the needle.",
  },
  {
    icon: BookOpen,
    title: "A Playbook You Keep",
    description:
      "By month 6, you'll have documented processes, proven channels, and the confidence to hire and lead your commercial team.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Directed force, not advice from afar
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-14 max-w-2xl mx-auto">
          VECTOR isn&rsquo;t a classroom exercise. It&rsquo;s an embedded team
          that builds alongside you.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex gap-5 p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-turquoise/10 flex items-center justify-center">
                <step.icon className="h-6 w-6 text-turquoise" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
