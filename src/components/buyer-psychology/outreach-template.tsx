import { CopyableTemplate } from "./copyable-template";

export function OutreachTemplate() {
  return (
    <section id="outreach-template" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        The Outreach Message
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        This template gets a 40%+ response rate. The keys: no pitch, genuine curiosity,
        time-bounded ask, and an offer to share what you learn.
      </p>
      <CopyableTemplate
        title="Outreach Template"
        content={`Hi [Name],\n\nI'm researching how [role/industry] teams handle [problem area]. I'm not selling anything \u2014 I'm trying to understand the problem better before building a solution.\n\nWould you be open to a 20-minute conversation? Happy to share what I learn.\n\nBest,\n[Your name]`}
      />
      <div className="mt-6 bg-muted/50 rounded-xl p-6">
        <h4 className="font-semibold text-sm mb-3">Why this works:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-medium text-foreground">No pitch</span> &mdash; removes the
            &ldquo;they&rsquo;re going to sell me something&rdquo; barrier.
          </div>
          <div>
            <span className="font-medium text-foreground">Genuine curiosity</span> &mdash; people
            love talking about their own problems.
          </div>
          <div>
            <span className="font-medium text-foreground">Time-bounded</span> &mdash; 20 minutes
            is easy to say yes to.
          </div>
          <div>
            <span className="font-medium text-foreground">Value exchange</span> &mdash; offering
            to share learnings makes it feel reciprocal.
          </div>
        </div>
      </div>
    </section>
  );
}
