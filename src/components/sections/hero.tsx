import { Button } from "@/components/ui/button";
import { ApplyButton } from "@/components/apply-button";

export function Hero() {
  return (
    <section className="bg-dark pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-purple text-sm font-medium tracking-widest uppercase mb-6">
              6-Month Commercialisation Program
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6">
              You&rsquo;re a brilliant technologist forced to become a mediocre
              salesperson.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              VECTOR embeds experienced operators who build your GTM engine with
              you. In 6 months, you&rsquo;ll have repeatable sales and the
              confidence to hire your commercial team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <ApplyButton size="lg" className="text-base px-8">
                Apply to VECTOR
              </ApplyButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 text-white bg-white/5 hover:bg-white/15 hover:border-white/60 text-base"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
            <p className="text-white/40 text-sm">
              We select 5 deep tech companies per year. Not 50. Not 500. Five.
            </p>
          </div>

          {/* Right — video */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <iframe
              src="https://share.descript.com/embed/bR8Z1j35FZf"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="What is VECTOR — Nick Black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
