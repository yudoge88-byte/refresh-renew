import { Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  ClipboardCheck,
  FileText,
  HardHat,
  Phone,
  Search,
} from "lucide-react";
import { useEffect } from "react";

const steps = [
  {
    num: 1,
    icon: Phone,
    title: "Free Consultation & Site Visit",
    desc: "We start with a no-obligation site visit where we listen carefully to your goals, walk the space, and ask the right questions. There's no pressure — just an honest conversation about what you want and what it will take to deliver it.",
  },
  {
    num: 2,
    icon: FileText,
    title: "Detailed Quote & Scope of Work",
    desc: "Within 5–7 business days, you'll receive a detailed written quote that itemizes every element of the project — materials, labour, timeline, and payment milestones. No vague line items. No surprises.",
  },
  {
    num: 3,
    icon: ClipboardCheck,
    title: "Contract & Project Timeline",
    desc: "Once you're ready to proceed, we sign a clear contract that protects both parties. You'll receive a full project schedule so you know exactly when each phase begins and ends.",
  },
  {
    num: 4,
    icon: Building2,
    title: "Permits & Approvals (Where Required)",
    desc: "We handle all permit applications and inspections required under the Ontario Building Code. You'll never need to navigate the City of Hamilton permit process on your own — we manage it completely.",
  },
  {
    num: 5,
    icon: HardHat,
    title: "Construction & Regular Progress Updates",
    desc: "Work begins on schedule. You'll receive weekly written updates and photos. Our job site is kept clean, organized, and respectful of your home at all times. You'll always know who is on site and why.",
  },
  {
    num: 6,
    icon: Search,
    title: "Final Walkthrough & Deficiency Review",
    desc: "Before we call a project complete, we walk the entire space together and create a formal deficiency list. Every item gets resolved before final payment is collected.",
  },
  {
    num: 7,
    icon: Award,
    title: "Project Completion & Follow-Up",
    desc: "We provide a completion certificate, copies of all permits and inspection approvals, and full warranty documentation. We also follow up at 30 and 90 days to make sure everything is perfect.",
  },
];

export default function Process() {
  useEffect(() => {
    document.title =
      "Our Process — Refresh! Renew! | How We Manage Your Renovation in Hamilton";
  }, []);

  return (
    <div>
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
            No Surprises. Ever.
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            How a Project Works
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            From first call to final walkthrough — a clear, step-by-step
            breakdown of exactly what to expect.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            We know that hiring a contractor for a major renovation is a big
            decision. We've structured our process to be completely transparent
            so you know exactly what to expect at every stage — from the first
            phone call to the final inspection.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="relative flex gap-6 sm:gap-10 items-start"
                  data-ocid={`process.item.${i + 1}`}
                >
                  <div className="relative z-10 flex-shrink-0 w-16 sm:w-20 h-16 sm:h-20 bg-charcoal rounded-full flex flex-col items-center justify-center shadow-card">
                    <span className="text-gold font-display font-bold text-xl sm:text-2xl leading-none">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 bg-cream rounded-lg p-6 sm:p-8 border border-border hover:border-gold/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-gold flex-shrink-0" />
                      <h3 className="font-display font-bold text-xl text-charcoal">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-charcoal font-medium">
            <span className="text-gold font-semibold">
              Ontario Building Code:
            </span>{" "}
            We handle all permit applications and city inspections required by
            the Ontario Building Code — protecting your home and ensuring your
            renovation is fully compliant and insurable.
          </p>
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-gold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/75 mb-8">
            Step one is completely free. Book your site visit and let's talk
            about your project.
          </p>
          <Link
            to="/contact"
            data-ocid="process.cta.primary_button"
            className="inline-block px-10 py-4 bg-gold hover:bg-gold-dark text-white font-bold text-lg rounded shadow-gold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
