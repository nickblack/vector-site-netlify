import { ExternalLink, BookOpen, ArrowUpRight, MessageSquare, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    icon: MessageSquare,
    title: "Bob Moesta Interview Reviewer",
    description: "Analyse your discovery interview transcripts. Maps the Four Forces, the purchase decision timeline, and coaches you on interviewing technique.",
    href: "https://github.com/nickblack/skills",
    tag: "Interview Analysis",
  },
  {
    icon: Zap,
    title: "Four Forces Challenge",
    description: "Stress-test your understanding of the push, pull, anxiety, and inertia acting on your buyers. Get challenged on blind spots.",
    href: "https://github.com/nickblack/skills",
    tag: "Framework",
  },
  {
    icon: Target,
    title: "Jobs & Outcomes",
    description: "Sharpen your JTBD statements and map functional, emotional, and social outcomes. Reframe from supply-side to demand-side thinking.",
    href: "https://github.com/nickblack/skills",
    tag: "Framework",
  },
];

const otherResources = [
  {
    icon: BookOpen,
    title: "Articles",
    description: "Hand-picked articles on customer discovery, switching forces, and demand-side thinking.",
    href: "https://nickblack.us/articles.html",
    linkText: "Read articles",
  },
  {
    icon: ArrowUpRight,
    title: "VECTOR Program",
    description: "The 6-month deep tech commercialisation program. Embedded operators, repeatable GTM, proven results.",
    href: "/",
    linkText: "Learn about VECTOR",
  },
];

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-20 pb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Resources
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Keep practising. These AI-powered Claude skills let you apply today&rsquo;s
        frameworks to your own product right now.
      </p>

      {/* Claude Skills */}
      <h3 className="text-lg font-semibold mb-4">Claude Skills</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {skills.map((skill) => (
          <a
            key={skill.title}
            href={skill.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border-border h-full transition-colors group-hover:border-turquoise/40">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-purple/10 flex items-center justify-center">
                    <skill.icon className="h-4 w-4 text-purple" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-normal">
                    {skill.tag}
                  </Badge>
                </div>
                <h4 className="font-semibold text-sm mb-2">{skill.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Other Resources */}
      <div className="grid md:grid-cols-2 gap-4">
        {otherResources.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            target={resource.href.startsWith("http") ? "_blank" : undefined}
            rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group"
          >
            <Card className="border-border h-full transition-colors group-hover:border-turquoise/40">
              <CardContent className="p-5">
                <div className="flex gap-4">
                  <div className="h-9 w-9 rounded-lg bg-turquoise/10 flex items-center justify-center shrink-0">
                    <resource.icon className="h-4 w-4 text-turquoise" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{resource.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      {resource.description}
                    </p>
                    <span className="text-xs text-turquoise font-medium inline-flex items-center gap-1">
                      {resource.linkText}
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
