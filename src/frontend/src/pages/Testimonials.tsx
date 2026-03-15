import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "We hired Refresh! Renew! for a full kitchen and main floor renovation. From the first meeting, Mike was clear about the timeline, the costs, and exactly what to expect. The crew showed up every day, cleaned up every evening, and the finished kitchen is absolutely stunning. We've had probably 20 people ask us who did the work. We're already planning our basement with them.",
    name: "Sandra M.",
    project: "Kitchen & Main Floor Renovation",
    stars: 5,
  },
  {
    quote:
      "I was nervous about hiring a contractor after a bad experience with a previous company. Mike sat with us for over an hour on the first visit and answered every question we had. The bathroom renovation was completed in 12 days, exactly on schedule, and the craftsmanship is flawless. The tile work alone is something you'd expect to see in a magazine.",
    name: "James T.",
    project: "Master Ensuite Renovation",
    stars: 5,
  },
  {
    quote:
      "We had a significant water issue in our basement and Refresh! Renew! handled everything — waterproofing, framing, full finish, permits, inspections. The whole thing. Mike kept us updated constantly, there were no surprise costs, and what was a problem basement is now the nicest room in our house.",
    name: "Priya & Raj S.",
    project: "Basement Waterproofing & Finishing",
    stars: 5,
  },
  {
    quote:
      "The deck they built for us is incredible. We described what we wanted — a space where our family could actually live outside — and they delivered something beyond what we imagined. The construction quality is exceptional, the worksite was immaculate, and they finished two days ahead of schedule.",
    name: "David L.",
    project: "Outdoor Deck & Pergola",
    stars: 5,
  },
  {
    quote:
      "Mike and his team completed a full second-storey addition for us. This was a $180,000 project and I will tell you honestly that it was one of the smoothest experiences we could have hoped for. Every permit was handled, every inspection passed first time, and the finished addition looks like it was always part of the original house.",
    name: "The Kowalski Family",
    project: "Two-Storey Home Addition",
    stars: 5,
  },
  {
    quote:
      "I've renovated three houses over the years and worked with a lot of contractors. Refresh! Renew! is the first company where I never had to chase anyone for an update, never had a budget blow-up, and never had to call back about something that wasn't done right. That might sound like a low bar, but in this industry it's genuinely rare.",
    name: "Catherine B.",
    project: "Full Home Renovation",
    stars: 5,
  },
  {
    quote:
      "They replaced all our windows and doors and repainted the entire exterior. The crew was polite, professional, and worked efficiently. Every window is perfectly trimmed and sealed. Our heating bills dropped noticeably the following winter. We're very happy.",
    name: "Ron & Linda P.",
    project: "Window Replacement & Exterior Painting",
    stars: 5,
  },
  {
    quote:
      "The custom built-ins they installed in our living room and home office are absolutely beautiful. The carpentry work is precise, the finishing is perfect, and the design suggestions Mike made really elevated the final result. This is the kind of work you're proud to show people.",
    name: "Angela W.",
    project: "Custom Carpentry & Built-Ins",
    stars: 5,
  },
];

export default function Testimonials() {
  useEffect(() => {
    document.title =
      "Client Testimonials — Refresh! Renew! | Hamilton Renovation Reviews";
  }, []);

  return (
    <div>
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
            Real Clients. Real Results.
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            What Our Clients Say
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Every review below is from a real Hamilton homeowner who trusted us
            with their renovation. We're proud of every single one.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-lg p-8 shadow-card border-l-4 border-gold hover:shadow-lg transition-shadow"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic text-[15px]">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">
                      {t.name}
                    </p>
                    <p className="text-gold text-xs font-medium">{t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-gold mb-4">
            Add Your Story
          </h2>
          <p className="text-white/75 mb-8">
            Join hundreds of Hamilton homeowners who've trusted Refresh! Renew!
            for their most important renovation projects.
          </p>
          <Link
            to="/contact"
            data-ocid="testimonials.cta.primary_button"
            className="inline-block px-10 py-4 bg-gold hover:bg-gold-dark text-white font-bold text-lg rounded shadow-gold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
