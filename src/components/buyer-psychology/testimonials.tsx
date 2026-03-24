import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "We started with a lot of mixed opinions in our team and we walked away knowing exactly who to target, how to talk to them, and what to do next.",
    name: "Bijan",
    role: "CEO, Mach42",
    theme: "Buyer clarity",
    image: "/images/bijan-mach42.jpg",
  },
  {
    quote:
      "What we were doing previously was \u2018Oh, are they interested? Let\u2019s do a POC.\u2019 But now we shouldn\u2019t be putting any resource in until we know what your commercial pain point is, how we\u2019re solving that, and if it\u2019s worth trying to address. Having the criteria to kill deals \u2014 that\u2019s the key.",
    name: "Aaron Wade",
    role: "BD Lead, Gaussion",
    theme: "Discovery interviews",
    image: "/images/aaron-wade.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          What founders say after applying these frameworks
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Real feedback from deep tech founders who&rsquo;ve put buyer psychology into practice through VECTOR.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border">
              <CardContent className="p-6 md:p-8">
                <Quote className="h-6 w-6 text-purple/40 mb-4" />
                <blockquote className="text-base md:text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-turquoise/20 flex items-center justify-center text-turquoise font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
