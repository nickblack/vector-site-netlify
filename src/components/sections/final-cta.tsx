import { ApplyButton } from "@/components/apply-button";

export function FinalCTA() {
  return (
    <section className="bg-dark py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
          Get back to doing what you do best.
          <br />
          <span className="text-turquoise">
            We&rsquo;ll make sure the world knows why it matters.
          </span>
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
          We select 5 companies per year. Applications reviewed within 48 hours.
        </p>
        <ApplyButton size="lg" className="text-base px-10">
          Apply to VECTOR
        </ApplyButton>
      </div>
    </section>
  );
}
