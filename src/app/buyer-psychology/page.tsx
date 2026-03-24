import type { Metadata } from "next";
import { ApplyModalProvider } from "@/components/apply-modal";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { HeroBanner } from "@/components/buyer-psychology/hero-banner";
import { TOC } from "@/components/buyer-psychology/toc";
import { SupplyDemand } from "@/components/buyer-psychology/supply-demand";
import { JTBD } from "@/components/buyer-psychology/jtbd";
import { Outcomes } from "@/components/buyer-psychology/outcomes";
import { BuyerVsUser } from "@/components/buyer-psychology/buyer-vs-user";
import { FourForces } from "@/components/buyer-psychology/four-forces";
import { DiscoveryInterviews } from "@/components/buyer-psychology/discovery-interviews";
import { ThreeRules } from "@/components/buyer-psychology/three-rules";
import { First10 } from "@/components/buyer-psychology/first-10";
import { Sourcing } from "@/components/buyer-psychology/sourcing";
import { OutreachTemplate } from "@/components/buyer-psychology/outreach-template";
import { Resources } from "@/components/buyer-psychology/resources";
import { Testimonials } from "@/components/buyer-psychology/testimonials";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Buyer Psychology 101 — Workshop Reference | VECTOR by Nick Black",
  description:
    "Frameworks, templates, and tools for buyer psychology, discovery interviews, and demand-side thinking. A VECTOR reference guide by Nick Black.",
  openGraph: {
    title: "Buyer Psychology 101 — Workshop Reference",
    description:
      "Frameworks, templates, and tools for understanding buyer psychology. From the VECTOR workshop for deep tech founders.",
    url: "https://vector.nickblack.us/buyer-psychology",
    siteName: "VECTOR by Nick Black",
    type: "website",
  },
};

export default function BuyerPsychologyPage() {
  return (
    <ApplyModalProvider>
      <Header />
      <main className="pt-16">
        <HeroBanner />
        <Testimonials />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
            <div>
              {/* Mobile TOC */}
              <div className="lg:hidden">
                <TOC />
              </div>

              {/* Act 1: Understand */}
              <SupplyDemand />
              <Separator className="mb-16" />
              <JTBD />
              <Separator className="mb-16" />
              <Outcomes />
              <Separator className="mb-16" />
              <BuyerVsUser />
              <Separator className="mb-16" />
              <FourForces />
              <Separator className="mb-16" />

              {/* Act 2: Practice */}
              <DiscoveryInterviews />
              <Separator className="mb-16" />
              <ThreeRules />
              <Separator className="mb-16" />

              {/* Act 3: Act */}
              <First10 />
              <Separator className="mb-16" />
              <Sourcing />
              <Separator className="mb-16" />
              <OutreachTemplate />
              <Separator className="mb-16" />
              <Resources />
            </div>
            {/* Desktop TOC sidebar */}
            <aside className="hidden lg:block">
              <TOC />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </ApplyModalProvider>
  );
}
