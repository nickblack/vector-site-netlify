import { Network, Users, Calendar, Send, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const channels = [
  {
    icon: Network,
    title: "Your existing network",
    description: "Advisors, investors, LinkedIn connections, intro requests, warm referrals. Start here \u2014 you'll be surprised how many people are one degree away.",
  },
  {
    icon: Users,
    title: "Customers and communities",
    description: "Current customers, design partners, beta testers. Also: Slack groups, Reddit, Discord, and industry forums where your buyers hang out.",
  },
  {
    icon: Calendar,
    title: "Events and communities",
    description: "Meetups, conferences, webinars. These people are already in \"learning mode\" and open to conversation.",
  },
  {
    icon: Send,
    title: "Cold outreach",
    description: "LinkedIn DMs and email. If you lead with genuine curiosity (not a pitch), response rates are surprisingly high. See the template below.",
  },
  {
    icon: Eye,
    title: "Customers of competitors",
    description: "G2 reviewers, case study subjects, people discussing alternatives online. They've already been through the buying journey you need to understand.",
  },
];

export function Sourcing() {
  return (
    <section id="sourcing" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Where to Find Interview Subjects
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Five places to find people to interview this week.
      </p>
      <div className="space-y-4">
        {channels.map((channel, index) => (
          <Card key={channel.title} className="border-border">
            <CardContent className="p-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-turquoise/10 flex items-center justify-center">
                  <channel.icon className="h-4 w-4 text-turquoise" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    <span className="text-turquoise mr-2">{index + 1}.</span>
                    {channel.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {channel.description}
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
