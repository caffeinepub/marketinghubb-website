import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/logo-enhanced-transparent.dim_600x200.png"
            alt="MarketingHubb - Best Digital Marketing Agency in Varanasi"
            className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
            style={{
              filter:
                "brightness(1.2) contrast(1.1) drop-shadow(0 0 12px rgba(67,184,154,0.7))",
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                currentPath === link.to
                  ? "text-seagreen active"
                  : "text-gray-300 hover:text-white"
              }`}
              data-ocid="nav.link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-navy bg-seagreen hover:bg-seagreen-light transition-all duration-300 hover:shadow-teal"
            data-ocid="nav.primary_button"
          >
            Get A Free Quote
          </Link>
          <a
            href="https://wa.me/917307260253?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20MarketingHubb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white border-2 border-seagreen hover:bg-seagreen hover:text-navy transition-all duration-300"
            data-ocid="nav.book_now_button"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 px-4 pb-6 pt-4 transition-all duration-300 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium py-2 ${
                  currentPath === link.to ? "text-seagreen" : "text-gray-300"
                }`}
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-navy bg-seagreen text-center"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.primary_button"
            >
              Get A Free Quote
            </Link>
            <a
              href="https://wa.me/917307260253?text=Hi%2C%20I%20want%20to%20book%20a%20consultation%20with%20MarketingHubb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white border-2 border-seagreen text-center"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.book_now_button"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
