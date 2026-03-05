import { ApplyModalProvider } from "@/components/apply-modal";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { PainPoints } from "@/components/sections/pain-points";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Results } from "@/components/sections/results";
import { FAQ } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <ApplyModalProvider>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <HowItWorks />
        <Results />
        <FAQ />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </ApplyModalProvider>
  );
}
