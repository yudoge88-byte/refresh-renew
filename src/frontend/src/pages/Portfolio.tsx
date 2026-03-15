import { Link } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

const categories = [
  "All",
  "Kitchen",
  "Bathroom",
  "Basement",
  "Additions",
  "Decks",
  "Full Home",
] as const;
type Category = (typeof categories)[number];

const projects = [
  {
    img: "/assets/generated/kitchen-reno.dim_1200x800.jpg",
    category: "Kitchen" as Category,
    caption:
      "Complete kitchen gut and remodel — custom white shaker cabinets, quartz waterfall island, new electrical and lighting",
    id: "k1",
  },
  {
    img: "/assets/generated/bathroom-reno.dim_1200x800.jpg",
    category: "Bathroom" as Category,
    caption:
      "Master ensuite renovation — floor-to-ceiling tile, frameless glass shower, floating double vanity, heated floors",
    id: "b1",
  },
  {
    img: "/assets/generated/basement-reno.dim_1200x800.jpg",
    category: "Basement" as Category,
    caption:
      "Full basement finish — open-concept rec room, built-in bar, home theatre, luxury vinyl plank throughout",
    id: "bs1",
  },
  {
    img: "/assets/generated/deck-build.dim_1200x800.jpg",
    category: "Decks" as Category,
    caption:
      "Multi-level composite deck with pergola, outdoor kitchen, and string lighting — added 400 sq ft of outdoor living",
    id: "d1",
  },
  {
    img: "/assets/generated/home-addition.dim_1200x800.jpg",
    category: "Additions" as Category,
    caption:
      "Two-storey rear addition — main floor family room and second-floor primary suite, matched to original home",
    id: "a1",
  },
  {
    img: "/assets/generated/full-home-reno.dim_1200x800.jpg",
    category: "Full Home" as Category,
    caption:
      "Full interior renovation — open-concept main floor, hardwood throughout, new fireplace surround, custom built-ins",
    id: "fh1",
  },
  {
    img: "/assets/generated/kitchen-reno.dim_1200x800.jpg",
    category: "Kitchen" as Category,
    caption:
      "Dark two-tone kitchen renovation — navy lowers, white uppers, gold hardware, butcher block island",
    id: "k2",
  },
  {
    img: "/assets/generated/bathroom-reno.dim_1200x800.jpg",
    category: "Bathroom" as Category,
    caption:
      "Main bath renovation — subway tile, freestanding tub, new vanity and fixtures, in-floor radiant heat",
    id: "b2",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  useEffect(() => {
    document.title =
      "Our Work — Refresh! Renew! | Renovation Portfolio Hamilton Ontario";
  }, []);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <section className="bg-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
            Hamilton Renovations
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Our Work
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Every project tells a story of transformation. Browse our recent
            work across Hamilton and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="flex flex-wrap gap-2 justify-center mb-12"
            data-ocid="portfolio.filter.tab"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                data-ocid={`portfolio.${cat.toLowerCase().replace(/ /g, "-")}.tab`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  active === cat
                    ? "bg-charcoal text-white"
                    : "bg-cream text-charcoal hover:bg-gold/10 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-card aspect-[4/3] cursor-pointer"
                data-ocid={`portfolio.item.${i + 1}`}
              >
                <img
                  src={project.img}
                  alt={project.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="inline-block bg-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <p className="text-white text-sm leading-relaxed">
                      {project.caption}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 sm:hidden">
                  <p className="text-white text-xs leading-relaxed line-clamp-2">
                    {project.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              className="text-center py-16 text-gray-500"
              data-ocid="portfolio.empty_state"
            >
              <p>No projects in this category yet.</p>
            </div>
          )}

          <div className="mt-14 text-center bg-cream rounded-lg p-8 border border-border">
            <MessageSquare className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="text-charcoal font-semibold text-lg mb-2">
              Want to see more?
            </p>
            <p className="text-gray-600 text-sm mb-6">
              These are just a sample of our recent work. Contact us to request
              a full portfolio walkthrough or to speak with past clients about
              their experience.
            </p>
            <Link
              to="/contact"
              data-ocid="portfolio.cta.primary_button"
              className="inline-block px-8 py-3 bg-gold hover:bg-gold-dark text-white font-bold rounded shadow-gold transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
