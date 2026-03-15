import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Hammer, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About" },
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/process" as const, label: "Process" },
  { to: "/testimonials" as const, label: "Testimonials" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/contact" as const, label: "Contact" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // biome-ignore lint/correctness/useExhaustiveDependencies: close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 bg-charcoal ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              data-ocid="nav.home.link"
            >
              <Hammer className="w-5 h-5 text-gold flex-shrink-0 group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-display font-bold text-white text-lg leading-tight">
                Refresh! <span className="text-gold">Renew!</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={`nav.${link.label.toLowerCase()}.link`}
                    className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${
                      isActive ? "text-gold" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                data-ocid="nav.quote.button"
                className="ml-4 px-4 py-2 bg-gold hover:bg-gold-dark text-white text-sm font-semibold rounded transition-colors duration-150 shadow-gold"
              >
                Get a Free Quote
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.menu.toggle"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden border-t border-white/10 py-3 pb-4 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={`nav.${link.label.toLowerCase()}.link`}
                    className={`block px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                      isActive ? "text-gold" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2 px-4">
                <Link
                  to="/contact"
                  data-ocid="nav.quote.button"
                  className="block w-full text-center px-4 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Hammer className="w-5 h-5 text-gold" />
                <span className="font-display font-bold text-xl">
                  Refresh! <span className="text-gold">Renew!</span>
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Transforming Hamilton Homes — Built to Last
              </p>
              <p className="text-white/60 text-xs">
                Licensed &amp; Insured | Ontario Building Code Compliant
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gold mb-4 uppercase tracking-wider text-xs">
                Contact Us
              </h4>
              <div className="space-y-2 text-sm text-white/75">
                <p>
                  <a
                    href="tel:+19055550182"
                    className="text-gold hover:text-gold-light font-semibold text-base transition-colors"
                  >
                    (905) 555-0182
                  </a>
                </p>
                <p>Mon–Fri: 7:30am – 6:00pm</p>
                <p>Saturday: 8:00am – 3:00pm</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gold mb-4 uppercase tracking-wider text-xs">
                Service Area
              </h4>
              <p className="text-sm text-white/75 leading-relaxed">
                Hamilton · Ancaster · Dundas · Stoney Creek · Waterdown ·
                Burlington · Grimsby &amp; Surrounding Areas
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="inline-block mt-2 px-5 py-2.5 bg-gold hover:bg-gold-dark text-white text-sm font-semibold rounded transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Refresh! Renew! General Contracting.
              All rights reserved.
            </p>
            <p>
              Built with <span className="text-gold">♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
