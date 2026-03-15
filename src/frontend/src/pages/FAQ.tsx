import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

const faqs = [
  {
    id: "licensed",
    q: "Are you licensed and insured?",
    a: "Yes. Refresh! Renew! is a fully licensed general contracting firm in the Province of Ontario. We carry comprehensive general liability insurance and WSIB coverage for all workers on every job site. We're happy to provide certificates of insurance before work begins.",
  },
  {
    id: "permits",
    q: "Do you pull permits?",
    a: "Absolutely. Any work requiring a permit under the Ontario Building Code — including structural work, additions, basement finishing, and electrical or plumbing changes — will be permitted. We manage the entire permit application and inspection process with the City of Hamilton. Unpermitted work creates real problems when you sell your home or make an insurance claim. We won't cut that corner.",
  },
  {
    id: "quote-detail",
    q: "How detailed is your quote?",
    a: "Very detailed. You'll receive a line-item written quote that breaks down labour and materials for every phase of the project. We don't provide vague lump-sum quotes because we believe you deserve to know exactly what you're paying for.",
  },
  {
    id: "payment",
    q: "What is your payment schedule?",
    a: "We typically structure payments in three to four milestone-based installments tied to project phases — not arbitrary calendar dates. You never pay in full until the work is complete and you're satisfied. We'll discuss the specific schedule in the contract.",
  },
  {
    id: "changes",
    q: "How do you handle unexpected costs or changes mid-project?",
    a: "Any change to the original scope of work — whether requested by you or required by an unforeseen condition — is documented in a written Change Order before any additional work is done. You'll know the cost and agree to it in writing before we proceed. There are no surprise invoices.",
  },
  {
    id: "timeline",
    q: "How long will my renovation take?",
    a: "This depends entirely on the scope. A bathroom renovation typically takes 10–15 business days. A kitchen takes 3–5 weeks. A full home renovation or addition can take 3–6 months. We'll provide a detailed schedule in your quote so you know exactly when work starts and ends.",
  },
  {
    id: "references",
    q: "Do you have references I can speak to?",
    a: "Yes, and we encourage it. We'll provide references from recent clients who completed projects similar to yours. We'd rather earn your trust through other homeowners' words than ask you to take ours for it.",
  },
  {
    id: "project-manager",
    q: "Will there be a project manager on site daily?",
    a: "Yes. Every project has a dedicated site supervisor who is on location throughout the workday. For larger projects, Mike himself is on site regularly. You will always have a direct phone number and will never feel like you're being ignored.",
  },
];

export default function FAQ() {
  useEffect(() => {
    document.title =
      "FAQ — Refresh! Renew! | Common Questions About Our Hamilton Renovation Services";
  }, []);

  return (
    <div>
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
            Common Questions
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Honest answers to the questions every Hamilton homeowner asks before
            hiring a contractor.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-cream border border-border rounded-lg px-6 data-[state=open]:border-gold/50 transition-colors"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-charcoal font-semibold text-left hover:text-gold hover:no-underline py-5 text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-sm sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-charcoal rounded-lg p-8 text-center">
            <p className="text-white/80 mb-4">
              Have a question that's not answered here? Call us directly or send
              a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+19055550182"
                className="px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-white font-semibold rounded transition-colors text-sm"
              >
                (905) 555-0182
              </a>
              <Link
                to="/contact"
                data-ocid="faq.cta.primary_button"
                className="px-6 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded transition-colors text-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
