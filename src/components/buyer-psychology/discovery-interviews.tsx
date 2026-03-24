import { Check, X } from "lucide-react";
import { CopyableTemplate } from "./copyable-template";

const isItems = [
  "A structured conversation to understand the buyer's world",
  "25-30 minutes of focused listening",
  "The highest-ROI activity in early-stage",
  "A way to discover what's already in your buyer's head",
];

const isntItems = [
  "A sales call or demo",
  "A chance to pitch (not even a little)",
  "A survey or focus group",
  "A conversation where you talk more than 30% of the time",
];

const steps = [
  {
    name: "Context",
    time: "2 min",
    question: "\"Tell me about your role and what you're working on\"",
  },
  {
    name: "Trigger",
    time: "5 min",
    question: "\"When did you first start looking for a solution to X?\"",
  },
  {
    name: "Journey",
    time: "10 min",
    question: "\"Walk me through what happened next...\"",
  },
  {
    name: "Four Forces",
    time: "5 min",
    question: "\"What almost stopped you from switching?\" \"What would you go back to if this disappeared?\"",
  },
  {
    name: "Outcomes",
    time: "3 min",
    question: "\"What does success look like for you?\"",
  },
];

export function DiscoveryInterviews() {
  return (
    <section id="discovery-interviews" className="scroll-mt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        The Discovery Interview
      </h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        You now see the buyer&rsquo;s world. The question is: how do you learn what&rsquo;s
        actually in their head? You ask them. But most founders are terrible at it.
      </p>

      {/* IS / ISN'T */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-turquoise/5 border border-turquoise/20 rounded-xl p-6">
          <h3 className="font-semibold text-turquoise mb-4">A discovery interview IS:</h3>
          <ul className="space-y-3">
            {isItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <Check className="h-4 w-4 text-turquoise shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
          <h3 className="font-semibold text-red-400 mb-4">A discovery interview IS NOT:</h3>
          <ul className="space-y-3">
            {isntItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Five-part structure */}
      <h3 className="font-semibold text-xl mb-6">
        The five-part interview structure
      </h3>
      <div className="space-y-4 mb-8">
        {steps.map((step, index) => (
          <div key={step.name} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full bg-turquoise flex items-center justify-center text-white text-sm font-bold shrink-0">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px flex-1 bg-turquoise/20 my-1" />
              )}
            </div>
            <div className="pb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <h4 className="font-semibold">{step.name}</h4>
                <span className="text-xs text-muted-foreground">({step.time})</span>
              </div>
              <p className="text-sm text-muted-foreground italic">
                {step.question}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CopyableTemplate
        title="Interview Question Template"
        content={`CONTEXT (2 min)\n"Tell me about your role and what you're working on"\n\nTRIGGER (5 min)\n"When did you first start looking for a solution to X?"\n\nJOURNEY (10 min)\n"Walk me through what happened next..."\n\nFOUR FORCES (5 min)\n"What almost stopped you from switching?"\n"What would you go back to if this disappeared?"\n\nOUTCOMES (3 min)\n"What does success look like for you?"`}
      />
    </section>
  );
}
