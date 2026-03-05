import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does VECTOR cost?",
    answer:
      "VECTOR costs £9,500 per month for approximately 6 months. The output is a sales playbook — customer segment, messaging, channels, what works. It's considerably less than hiring a head of sales, with a faster path to results and better ROI.",
  },
  {
    question: "How is VECTOR different from other accelerators?",
    answer:
      "VC-run accelerators are great for fundraising and pitch polish, but weak on sales and GTM. Later-stage accelerators help you scale after PMF. VECTOR fills the gap: helping deep tech founders go from pilot to PMF in six months, focused entirely on building the sales engine.",
  },
  {
    question: "What does the first four weeks look like?",
    answer:
      "Intense. We map your vision (~5 years out), thread milestones back to today, and stress-test your goals (5yr → 3yr → 12mo → 30 days). Then we shift into execution mode using a growth process refined across dozens of deep tech startups.",
  },
  {
    question: "When should I hire a head of sales?",
    answer:
      "When you have a sales playbook. Salespeople won't write their own playbook — they execute one. VECTOR bridges the gap between ready-to-commercialise and having that playbook. Most founders hire their head of sales at the end of the 6-month programme.",
  },
  {
    question: "Does VECTOR work in slow, regulated industries?",
    answer:
      "Yes — VECTOR was born from selling into automotive with 6–24 month sales cycles. We understand complex buying committees, multi-stage wins (pilot → POC → deployment), and the regulatory requirements of finance, aviation, automotive, and medical devices.",
  },
  {
    question: "How do I know I've reached PMF?",
    answer:
      "Simple: you've sold your product 5 times to the same customer segment, satisfying the same needs. It's not mysterious — it's measurable. VECTOR shows you how to go from a handful of pilots to 5, 10, 20 sales.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Founders ask us...
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12">
          The questions we hear most from technical founders.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
