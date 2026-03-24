import { Card, CardContent } from "@/components/ui/card";

export function SupplyDemand() {
  return (
    <section id="supply-demand" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Supply Side vs Demand Side
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Most founders sell from the supply side &mdash; features, specs, what they built.
        Buyers live on the demand side. Understanding this gap changes everything.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-turquoise/30 bg-turquoise/5">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-turquoise">
              Supply Side
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              How founders typically sell:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                Features and specifications
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                What you built and your roadmap
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                Your vision and technology
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                Benefits you think your product has
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-purple/30 bg-purple/5">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-purple">
              Demand Side
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              What buyers actually think about:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                Their struggle and current workaround
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                What &ldquo;done&rdquo; looks like for them
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                Goals, aspirations, pains and problems
              </li>
              <li className="flex gap-2">
                <span className="text-muted-foreground/60">&bull;</span>
                What they&rsquo;re afraid of
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
