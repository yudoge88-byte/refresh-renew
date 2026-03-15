import { Link } from "@tanstack/react-router";
import {
  Bath,
  Brush,
  ChefHat,
  ClipboardList,
  DoorOpen,
  Home,
  Layers,
  PaintBucket,
  Plus,
  Square,
  TreePine,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: Home,
    title: "Full Home Renovations",
    desc: "From gutting a dated interior to delivering a stunning modern home, we manage every trade, every permit, and every detail. The result: a completely transformed space that looks and feels brand new.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Renovations",
    desc: "Your kitchen is the heart of your home. We design and build custom kitchens with new cabinetry, countertops, tile work, lighting, and appliances — the kind of kitchen you'll want to show off.",
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    desc: "From a quick refresh to a full spa-style overhaul, we handle tile, plumbing rough-in, vanities, shower glass, and all finishing. You'll never want to leave your new bathroom.",
  },
  {
    icon: Layers,
    title: "Basement Finishing & Waterproofing",
    desc: "Turn your unused basement into a rec room, home office, or income suite. We waterproof, frame, insulate, wire, and finish — Ontario Building Code compliant with all required permits.",
  },
  {
    icon: Plus,
    title: "Home Additions & Extensions",
    desc: "Need more space without moving? We design and build seamless additions that match your existing home’s character — from in-law suites to full second-storey additions.",
  },
  {
    icon: TreePine,
    title: "Deck & Outdoor Living Spaces",
    desc: "A professionally built deck or outdoor living area adds real value and transforms how you use your home. We build in composite, wood, and PVC — from simple decks to full outdoor kitchens.",
  },
  {
    icon: Square,
    title: "Flooring Installation",
    desc: "Hardwood, engineered wood, luxury vinyl plank, tile, and carpet — we install all flooring types with precision. Proper subfloor prep and a flawless finish every time.",
  },
  {
    icon: PaintBucket,
    title: "Drywall & Plastering",
    desc: "Smooth walls, clean lines, and invisible seams. Whether it’s a new build, addition, or repair, our drywall team delivers a professional finish ready for paint.",
  },
  {
    icon: Brush,
    title: "Interior & Exterior Painting",
    desc: "A fresh coat transforms any space. Our painters prep properly, use premium materials, and apply clean, even coverage. Interior or exterior, we leave your home looking sharp.",
  },
  {
    icon: DoorOpen,
    title: "Window & Door Replacement",
    desc: "New windows and doors improve comfort, energy efficiency, and curb appeal dramatically. We supply and install quality products with proper air sealing and finishing.",
  },
  {
    icon: Wrench,
    title: "Custom Carpentry & Trim Work",
    desc: "Built-ins, crown moulding, wainscoting, custom shelving — our carpenters bring craftsmanship back. These are the details that elevate a renovation from good to exceptional.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "For large or complex builds, we serve as your dedicated project manager — coordinating trades, tracking schedules, managing budgets, and communicating daily so you’re never left wondering.",
  },
];

export default function Services() {
  useEffect(() => {
    document.title =
      "Services — Refresh! Renew! | Kitchen, Bathroom & Full Home Renovations Hamilton";
  }, []);

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-charcoal py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-5" />
          <p className="eyebrow text-gold mb-5">What We Build</p>
          <h1 className="hero-headline text-4xl sm:text-6xl text-white mb-5">
            Our Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Full-service general contracting for Hamilton homeowners. From
            single-room renovations to complete home transformations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="relative bg-cream rounded overflow-hidden p-8 border border-border border-l-4 border-l-transparent group hover:border-l-gold hover:shadow-card transition-all duration-300"
                data-ocid={`services.item.${i + 1}`}
              >
                {/* Ghost number — signature detail */}
                <span
                  className="absolute top-3 right-4 font-display font-bold text-[4.5rem] leading-none text-charcoal/[0.04] pointer-events-none select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>

                <h3 className="section-heading text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* OBC compliance note */}
          <div className="mt-14 bg-charcoal rounded p-8 text-center">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              <span className="text-gold font-semibold">
                Ontario Building Code Compliance:
              </span>{" "}
              All work is performed in compliance with the Ontario Building
              Code. We pull all required permits and handle inspections —
              protecting you, your home, and your investment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="section-heading text-3xl text-charcoal mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-600 mb-8">
            Book a free consultation and we’ll help you figure out exactly what
            your project needs — and what it will realistically cost.
          </p>
          <Link
            to="/contact"
            data-ocid="services.cta.primary_button"
            className="inline-block px-10 py-4 bg-gold hover:bg-gold-dark text-white font-extrabold text-sm uppercase tracking-widest rounded-sm shadow-gold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
