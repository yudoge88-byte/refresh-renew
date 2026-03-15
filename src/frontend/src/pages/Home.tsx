import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Home as HomeIcon,
  MapPin,
  MessageSquare,
  Shield,
  Star,
} from "lucide-react";
import { useEffect } from "react";

const featuredServices = [
  {
    title: "Kitchen Renovations",
    desc: "Custom cabinetry, quartz countertops, new lighting, and appliances — the kind of kitchen you'll want to show off to everyone you know.",
    img: "/assets/generated/kitchen-reno.dim_1200x800.jpg",
    to: "/services" as const,
  },
  {
    title: "Bathroom Renovations",
    desc: "From a quick refresh to a full spa-style overhaul — tile, vanities, shower glass, and all finishing included.",
    img: "/assets/generated/bathroom-reno.dim_1200x800.jpg",
    to: "/services" as const,
  },
  {
    title: "Basement Finishing",
    desc: "Turn your unused basement into a rec room, home office, or income suite — fully permitted and Ontario Building Code compliant.",
    img: "/assets/generated/basement-reno.dim_1200x800.jpg",
    to: "/services" as const,
  },
];

const testimonials = [
  {
    quote:
      "From the first meeting, Mike was clear about the timeline, the costs, and exactly what to expect. The finished kitchen is absolutely stunning. We've had probably 20 people ask us who did the work.",
    name: "Sandra M.",
    project: "Kitchen & Main Floor Renovation",
  },
  {
    quote:
      "The bathroom renovation was completed in 12 days, exactly on schedule, and the craftsmanship is flawless. The tile work alone is something you'd expect to see in a magazine.",
    name: "James T.",
    project: "Master Ensuite Renovation",
  },
  {
    quote:
      "Mike kept us updated constantly, there were no surprise costs, and what was a problem basement is now the nicest room in our house.",
    name: "Priya & Raj S.",
    project: "Basement Waterproofing & Finishing",
  },
];

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: MessageSquare, label: "Free Consultations" },
  { icon: HomeIcon, label: "Residential & Commercial" },
  { icon: Clock, label: "On-Time & On-Budget" },
  { icon: MapPin, label: "Serving Hamilton & Area" },
];

export default function Home() {
  useEffect(() => {
    document.title =
      "Refresh! Renew! — General Contractor Hamilton Ontario | Home Renovations";
  }, []);

  return (
    <div>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center"
        style={{ minHeight: "100svh" }}
      >
        {/* Photo layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-home.dim_1600x900.jpg"
            alt="Beautifully renovated Hamilton home interior"
            className="w-full h-full object-cover object-center"
          />
          {/* Cinematic gradient: translucent top → near-opaque bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.175 0.015 265 / 0.25) 0%, oklch(0.175 0.015 265 / 0.62) 45%, oklch(0.175 0.015 265 / 0.93) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-28">
          {/* Gold rule accent */}
          <div className="w-10 h-0.5 bg-gold mx-auto mb-5" />

          {/* Eyebrow */}
          <p className="eyebrow text-gold mb-6">
            Hamilton’s Trusted General Contractor
          </p>

          {/* Headline */}
          <h1 className="hero-headline text-4xl sm:text-6xl lg:text-[5.25rem] text-white mb-7 text-balance">
            Transforming Hamilton Homes—
            <br className="hidden sm:block" />
            <span className="text-gold italic">Quality Renovations</span>
            <br className="hidden sm:block" />
            Built to Last
          </h1>

          {/* Sub-headline */}
          <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Over 15 years. Licensed &amp; insured. Every project on time, on
            budget, and built to the standard your home deserves.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-ocid="hero.quote.primary_button"
              className="px-10 py-4 bg-gold hover:bg-gold-dark text-white font-extrabold text-sm uppercase tracking-widest rounded-sm shadow-gold transition-all duration-200 hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/portfolio"
              data-ocid="hero.work.secondary_button"
              className="px-10 py-4 bg-transparent border-2 border-gold/60 text-white hover:bg-gold/15 font-bold text-sm uppercase tracking-widest rounded-sm transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Bottom vignette blending into trust bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.175 0.015 265 / 1))",
          }}
        />
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
      <section className="bg-charcoal border-t-2 border-gold/25">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
            {trustItems.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-3 text-center py-10 px-4 ${
                  i < trustItems.length - 1 ? "lg:border-r border-white/10" : ""
                }`}
              >
                {/* Icon in contained circle */}
                <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-white text-xs sm:text-sm font-semibold leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading text-3xl sm:text-4xl text-charcoal mb-6">
            15 Years of Earned Trust in Hamilton
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Refresh! Renew!, we’ve spent 15+ years earning the trust of
            Hamilton homeowners one project at a time. We’re a full-service
            general contracting firm — meaning we handle everything from permits
            and plans to the final coat of paint. No subcontracting surprises,
            no hidden costs, no chasing your contractor for updates. Just
            skilled tradespeople who show up, communicate clearly, and take
            immense pride in the finished result.
          </p>
        </div>
      </section>

      {/* ── FEATURED SERVICES ───────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="eyebrow text-gold/80 mb-3">What We Build</p>
            <h2 className="section-heading text-3xl sm:text-4xl text-charcoal">
              Our Most Popular Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded overflow-hidden shadow-card group hover:shadow-lg transition-all duration-300"
                data-ocid={`home.services.item.${i + 1}`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 border-t-2 border-t-transparent group-hover:border-t-gold transition-colors duration-300">
                  <h3 className="section-heading text-xl text-charcoal mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <Link
                    to={s.to}
                    className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                    data-ocid={`home.services.link.${i + 1}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              data-ocid="home.all_services.button"
              className="inline-block px-8 py-3 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="eyebrow text-gold/80 mb-3">Client Stories</p>
            <h2 className="section-heading text-3xl sm:text-4xl text-charcoal">
              What Hamilton Homeowners Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-cream rounded p-8 border-l-4 border-gold relative overflow-hidden"
                data-ocid={`home.testimonials.item.${i + 1}`}
              >
                {/* Ghost quotation mark */}
                <span
                  className="absolute -top-2 -right-1 font-display text-[8rem] leading-none text-charcoal/5 pointer-events-none select-none"
                  aria-hidden="true"
                >
                  “
                </span>
                <div className="flex gap-0.5 mb-4 relative">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 italic relative">
                  “{t.quote}”
                </blockquote>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    {t.name}
                  </p>
                  <p className="text-gold text-xs font-medium mt-0.5">
                    {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              data-ocid="home.testimonials.link"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all duration-200"
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 relative overflow-hidden">
        {/* Subtle texture lines */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, oklch(0.63 0.155 68) 0px, oklch(0.63 0.155 68) 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
            Ready to Start
          </h2>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl text-gold italic mb-6">
            Your Project?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Your free consultation and detailed quote cost nothing. We visit
            your home, listen to your goals, and give you an honest assessment —
            no pressure, no obligation.
          </p>
          <Link
            to="/contact"
            data-ocid="home.cta.primary_button"
            className="inline-block px-12 py-4 bg-gold hover:bg-gold-dark text-white font-extrabold text-sm uppercase tracking-widest rounded-sm shadow-gold transition-all duration-200 hover:shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
