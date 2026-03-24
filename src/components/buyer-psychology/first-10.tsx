export function First10() {
  return (
    <section id="first-10" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        The &ldquo;First 10&rdquo; Framework
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        You don&rsquo;t need 100 interviews. You need 10 quality conversations in the
        next two weeks. Focus on immediacy and quality.
      </p>
      <div className="bg-turquoise/5 border border-turquoise/20 rounded-xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="text-center md:text-left">
            <span className="text-6xl md:text-7xl font-bold text-turquoise">10</span>
            <p className="text-sm text-muted-foreground mt-1">interviews</p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-6xl md:text-7xl font-bold text-turquoise">14</span>
            <p className="text-sm text-muted-foreground mt-1">days</p>
          </div>
          <div className="text-center md:text-left">
            <span className="text-6xl md:text-7xl font-bold text-turquoise">~5</span>
            <p className="text-sm text-muted-foreground mt-1">hours total</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          That&rsquo;s less than one per day. Each takes 25&ndash;30 minutes. The ROI is clarity
          on your buyer that months of building in isolation can&rsquo;t give you.
        </p>
      </div>
    </section>
  );
}
