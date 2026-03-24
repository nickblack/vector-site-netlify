import { Card, CardContent } from "@/components/ui/card";
import { CopyableTemplate } from "./copyable-template";

export function FourForces() {
  return (
    <section id="four-forces" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        The Four Forces of Progress
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Every buying decision is a battle between four forces. Buyers move from their current way
        to the new way when the forces of attraction are greater than the forces of resistance.
      </p>

      {/* Four Forces Diagram */}
      <div className="bg-muted/50 rounded-xl p-6 md:p-10 mb-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex-shrink-0 text-center">
            <div className="h-20 w-20 rounded-full bg-white border-2 border-border flex items-center justify-center mx-auto mb-2">
              <span className="text-xs font-bold uppercase text-muted-foreground">Current Way</span>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            {/* Forces driving change */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-10 bg-turquoise rounded flex items-center justify-between px-4">
                <span className="text-white text-sm font-bold">PUSH</span>
                <span className="text-white text-lg">&rarr;</span>
              </div>
              <div className="flex-1 h-10 bg-turquoise rounded flex items-center justify-between px-4">
                <span className="text-white text-sm font-bold">PULL</span>
                <span className="text-white text-lg">&rarr;</span>
              </div>
            </div>
            {/* Forces resisting change */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-10 bg-white border border-border rounded flex items-center justify-between px-4">
                <span className="text-lg">&larr;</span>
                <span className="text-sm font-bold text-muted-foreground">INERTIA</span>
              </div>
              <div className="flex-1 h-10 bg-white border border-border rounded flex items-center justify-between px-4">
                <span className="text-lg">&larr;</span>
                <span className="text-sm font-bold text-muted-foreground">ANXIETIES</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="h-20 w-20 rounded-full bg-turquoise flex items-center justify-center mx-auto mb-2">
              <span className="text-xs font-bold uppercase text-white">New Way</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p><span className="font-semibold text-turquoise">Push:</span> <span className="text-muted-foreground">&ldquo;My current way just won&rsquo;t cut it anymore&rdquo;</span></p>
          </div>
          <div>
            <p><span className="font-semibold text-turquoise">Pull:</span> <span className="text-muted-foreground">&ldquo;This new way looks pretty good to me&rdquo;</span></p>
          </div>
          <div>
            <p><span className="font-semibold">Inertia:</span> <span className="text-muted-foreground">&ldquo;There&rsquo;s things holding me back from changing&rdquo;</span></p>
          </div>
          <div>
            <p><span className="font-semibold">Anxieties:</span> <span className="text-muted-foreground">&ldquo;I have a few concerns about this new way&rdquo;</span></p>
          </div>
        </div>
      </div>

      {/* Actionable Tactics */}
      <Card className="border-border">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">
            Your job isn&rsquo;t to push harder. It&rsquo;s to reduce anxiety and break habits.
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-turquoise mb-1">Reduce Anxiety</h4>
              <p className="text-muted-foreground">Case studies with peers, free trials, easy migration, social proof.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Break Habits</h4>
              <p className="text-muted-foreground">Show the hidden cost of the status quo, make switching painless.</p>
            </div>
            <div>
              <h4 className="font-semibold text-turquoise mb-1">Amplify Push</h4>
              <p className="text-muted-foreground">Help them see the pain they&rsquo;ve normalised.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Clarify Pull</h4>
              <p className="text-muted-foreground">Business cases, ROI, mirror their language &mdash; not yours &mdash; to understand the goal they want to achieve.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CopyableTemplate
        title="Four Forces Worksheet"
        content={`For your product, map out:\n\nPUSH: What's so broken they're willing to look for something new?\nPULL: What does "better" look like in their mind?\nINERTIA: What habits keep them stuck with the status quo?\nANXIETIES: What fears stop them from switching?`}
        className="mt-6"
      />
    </section>
  );
}
