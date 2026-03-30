import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-[#0B0B0C] text-gray-400 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-xl"
                style={{
                  background: "linear-gradient(135deg, #43B89A, #36967e)",
                }}
              >
                M
              </div>
              <span className="text-white font-bold text-xl">
                Marketing<span style={{ color: "#43B89A" }}>Hubb</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Best Digital Marketing Agency in Varanasi. We help brands grow
              through data-driven strategies and creative innovation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-seagreen hover:text-navy-DEFAULT transition-all"
                aria-label="Facebook"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-seagreen hover:text-navy-DEFAULT transition-all"
                aria-label="Instagram"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-seagreen hover:text-navy-DEFAULT transition-all"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-seagreen hover:text-navy-DEFAULT transition-all"
                aria-label="Twitter/X"
              >
                <SiX size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm hover:text-seagreen transition-colors"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "SEO Optimization",
                "Social Media Marketing",
                "PPC / Google Ads",
                "Content Marketing",
                "Web Design",
                "Email Marketing",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-seagreen transition-colors"
                  >
                    → {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm">
                <MapPin size={16} className="text-seagreen mt-0.5 shrink-0" />
                <span>Mahmoorganj Akashwani, Varanasi 221010</span>
              </div>
              <div className="flex gap-3 text-sm">
                <Phone size={16} className="text-seagreen mt-0.5 shrink-0" />
                <a
                  href="tel:+917307260253"
                  className="hover:text-seagreen transition-colors"
                >
                  +91 73072 60253
                </a>
              </div>
              <div className="flex gap-3 text-sm">
                <Mail size={16} className="text-seagreen mt-0.5 shrink-0" />
                <a
                  href="mailto:saurabhcgoubey200@gmail.com"
                  className="hover:text-seagreen transition-colors"
                >
                  saurabhcgoubey200@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>
            © {year} MarketingHubb. Best Digital Marketing Agency in Varanasi.{" "}
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-seagreen hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
