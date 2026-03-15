import { Link } from "@tanstack/react-router";
import { CheckCircle2, Users } from "lucide-react";
import { useEffect } from "react";

const team = [
  { name: "Mike R.", role: "Owner & Lead Contractor", initials: "MR" },
  { name: "Sarah T.", role: "Project Coordinator", initials: "ST" },
  { name: "Dave M.", role: "Lead Carpenter", initials: "DM" },
  { name: "Kim P.", role: "Design Consultant", initials: "KP" },
];

const credentials = [
  { id: "license", text: "Licensed General Contractor — Province of Ontario" },
  { id: "insurance", text: "Fully Insured: General Liability & WSIB" },
  { id: "obc", text: "Ontario Building Code Certified" },
  { id: "experience", text: "15+ Years Serving Hamilton & Area" },
  { id: "projects", text: "200+ Projects Successfully Completed" },
  { id: "member", text: "Member, Hamilton-Halton Home Builders’ Association" },
];

const stats = [
  { value: "15+", label: "Years in Hamilton" },
  { value: "200+", label: "Projects Completed" },
  { value: "12", label: "Skilled Tradespeople" },
  { value: "100%", label: "Permitted & Inspected" },
];

export default function About() {
  useEffect(() => {
    document.title =
      "About Us — Refresh! Renew! | Licensed General Contractor Hamilton Ontario";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-5" />
          <p className="eyebrow text-gold mb-5">Our Story</p>
          <h1 className="hero-headline text-4xl sm:text-6xl text-white mb-5">
            About Refresh! Renew!
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            15 years building and renovating homes in Hamilton — one project,
            one handshake, one satisfied homeowner at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <img
                src="/assets/generated/craftsman-work.dim_1200x800.jpg"
                alt="Mike R., Owner of Refresh! Renew!, at work on a renovation"
                loading="lazy"
                className="w-full rounded shadow-card object-cover aspect-[4/3]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gold text-white rounded px-6 py-4 shadow-gold">
                <p className="font-display font-bold text-3xl leading-none">
                  15+
                </p>
                <p className="text-sm font-semibold mt-1">Years in Hamilton</p>
              </div>
            </div>

            {/* Text */}
            <div className="pt-8 lg:pt-0">
              {/* Signature heading with gold underline accent */}
              <p className="eyebrow text-gold mb-4">From the Owner</p>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-3">
                Built on Honesty,
                <br />
                <span className="text-gold italic">Delivered with Pride</span>
              </h2>
              {/* Gold rule beneath heading */}
              <div className="w-14 h-1 bg-gold mb-8 rounded-full" />

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My name is Mike R., and I’ve been building and renovating
                  homes in Hamilton for over 15 years. I started Refresh! Renew!
                  because I believed homeowners in this community deserved a
                  contractor who showed up on time, communicated clearly, and
                  actually cared about the finished product — not just the
                  cheque at the end.
                </p>
                <p>
                  We’ve grown from a two-person operation into a team of 12
                  skilled tradespeople, but we’ve never lost that personal
                  approach. Every project gets my direct involvement — from the
                  initial walkthrough to the final punch list. I’m on job sites
                  regularly, not just at the contract signing.
                </p>
                <p>
                  Our team includes licensed carpenters, electricians, plumbers,
                  and painters who have all worked together for years. That’s
                  not an accident — good tradespeople stay where the work is
                  done right and the clients are respected. We have a reputation
                  in Hamilton to protect, and we take that seriously.
                </p>
                <p>
                  What drives me is the moment a homeowner walks into their
                  finished space for the first time. That reaction — that look
                  on their face — is why we do this work. We’re not just
                  renovating houses. We’re improving the way people live in
                  their homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-10 px-6">
                <p className="font-display font-bold text-4xl text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading text-3xl text-charcoal mb-3">
              Our Credentials
            </h2>
            <p className="text-gray-600">
              Fully licensed, insured, and Ontario Building Code compliant on
              every job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {credentials.map((c, i) => (
              <div
                key={c.id}
                className="flex items-start gap-3 bg-white rounded p-4 border border-border shadow-xs hover:border-gold/30 transition-colors"
                data-ocid={`about.credentials.item.${i + 1}`}
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-charcoal text-sm font-medium">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-8 h-8 text-gold mx-auto mb-3" />
            <h2 className="section-heading text-3xl text-charcoal mb-3">
              The Team Behind the Work
            </h2>
            <p className="text-gray-600">
              12 skilled tradespeople. Decades of combined experience. One
              shared standard.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="text-center"
                data-ocid={`about.team.item.${i + 1}`}
              >
                <div className="w-20 h-20 rounded-full bg-charcoal flex items-center justify-center mx-auto mb-4 shadow-card ring-2 ring-gold/20">
                  <span className="font-display font-bold text-2xl text-gold">
                    {member.initials}
                  </span>
                </div>
                <p className="font-semibold text-charcoal text-sm">
                  {member.name}
                </p>
                <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="section-heading text-3xl sm:text-4xl text-white mb-2">
            Ready to Meet
          </h2>
          <h2 className="section-heading text-3xl sm:text-4xl text-gold italic mb-6">
            the Team?
          </h2>
          <p className="text-white/70 mb-8">
            Book your free consultation and see firsthand why Hamilton
            homeowners trust us with their most important renovation projects.
          </p>
          <Link
            to="/contact"
            data-ocid="about.cta.primary_button"
            className="inline-block px-10 py-4 bg-gold hover:bg-gold-dark text-white font-extrabold text-sm uppercase tracking-widest rounded-sm shadow-gold transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
