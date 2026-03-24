import { CopyableTemplate } from "./copyable-template";

export function JTBD() {
  return (
    <section id="jtbd" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Jobs to Be Done
      </h2>
      <p className="text-muted-foreground mb-4 max-w-2xl">
        People don&rsquo;t buy products. They &ldquo;hire&rdquo; them to make progress in their lives.
        The job isn&rsquo;t about your product &mdash; it&rsquo;s about the progress they were already
        trying to make before you existed.
      </p>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Use this template to articulate the job your product does from the buyer&rsquo;s
        perspective, not yours.
      </p>
      <CopyableTemplate
        title="JTBD Statement Template"
        content={`When I [situation/context],\nI want to [motivation],\nso I can [outcome].`}
        className="mb-8"
      />
      <div className="bg-muted/50 rounded-xl p-6">
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
          Example
        </h4>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Founder version (supply side):</p>
            <p className="text-sm italic">
              &ldquo;When I need ML inference, I want to use our optimised API, so I can get faster results.&rdquo;
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Buyer version (demand side):</p>
            <p className="text-sm italic font-medium">
              &ldquo;When my team is waiting hours for model outputs, I want to unblock production deployments, so I can ship features on schedule and keep my board confident we&rsquo;re executing.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
