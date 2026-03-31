import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  ChevronDown,
  ChevronRight,
  Globe,
  MapPin,
  Search,
  Settings,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ParticleField } from "../../components/ParticleField";
import { useSEO } from "../../hooks/useSEO";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const benefits = [
  {
    icon: <TrendingUp size={28} className="text-seagreen" />,
    title: "Higher Google Rankings",
    description:
      "We push your website to the top of Google search results for the most relevant keywords in your industry and location.",
  },
  {
    icon: <BarChart2 size={28} className="text-seagreen" />,
    title: "More Organic Traffic",
    description:
      "Consistent SEO work drives a steady stream of free, targeted visitors to your site — 24/7, without paying for every click.",
  },
  {
    icon: <MapPin size={28} className="text-seagreen" />,
    title: "Local SEO Dominance",
    description:
      "Rank in Google Maps and local search results so customers in Varanasi and nearby cities find you first, every time.",
  },
  {
    icon: <Settings size={28} className="text-seagreen" />,
    title: "Technical SEO Excellence",
    description:
      "From site speed and mobile optimization to crawlability and schema markup — we handle all the technical details Google loves.",
  },
  {
    icon: <Shield size={28} className="text-seagreen" />,
    title: "Long-term ROI",
    description:
      "Unlike paid ads that stop the moment you pause the budget, SEO compounds over time and delivers returns for years.",
  },
  {
    icon: <Globe size={28} className="text-seagreen" />,
    title: "Keyword Strategy",
    description:
      "We identify the exact search terms your customers use and build a targeted strategy around high-intent, conversion-ready keywords.",
  },
];

const faqs = [
  {
    q: "What is SEO and why does my business need it?",
    a: "SEO (Search Engine Optimization) is the process of improving your website so it ranks higher on Google. If your website doesn't appear on the first page of Google when someone searches for your product or service, you're losing potential customers every day. SEO helps you get found organically — without paying for ads.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Most businesses start seeing noticeable improvements in rankings and traffic within 3 to 6 months. For competitive industries, it can take 6 to 12 months to reach the top positions. However, the results are sustainable and continue growing over time.",
  },
  {
    q: "How much does SEO cost in Varanasi?",
    a: "Our SEO packages are customized based on your business size, competition level, and goals. We offer flexible monthly plans designed for small businesses and growing companies alike. Contact us for a free consultation and a personalized quote.",
  },
  {
    q: "Do I really need SEO if I'm already running Google Ads?",
    a: "Yes! Google Ads give you immediate visibility, but the moment you stop paying, your traffic drops to zero. SEO builds a permanent foundation. The best strategy combines both — PPC for instant results while SEO builds your long-term organic presence.",
  },
  {
    q: "What is Local SEO and how does it help Varanasi businesses?",
    a: "Local SEO focuses on making your business visible for location-based searches like 'digital marketing agency in Varanasi.' We optimize your Google Business Profile, build local citations, and ensure your NAP (Name, Address, Phone) is consistent across the web.",
  },
  {
    q: "How does MarketingHubb approach SEO differently?",
    a: "We combine technical SEO, content strategy, and authoritative link building into one cohesive plan. We don't use shortcuts or black-hat tactics that could get your site penalized. Every action we take is designed to deliver lasting rankings that hold up through Google algorithm updates.",
  },
  {
    q: "What is technical SEO?",
    a: "Technical SEO covers the behind-the-scenes elements of your website: page speed, mobile-friendliness, HTTPS security, site structure, XML sitemaps, robots.txt, schema markup, and more. These factors tell Google how to crawl and index your site correctly.",
  },
  {
    q: "Will my ranking drop if I stop doing SEO?",
    a: "Over time, yes. SEO is an ongoing process. Competitors are constantly optimizing, Google updates its algorithm regularly, and new content must be created to stay relevant. Pausing SEO doesn't cause an immediate drop, but gradually your rankings will decline as competitors continue investing.",
  },
];

export function SeoPage() {
  useSEO({
    title:
      "SEO Services in Varanasi | Best Search Engine Optimization | MarketingHubb",
    description:
      "Professional SEO services in Varanasi by MarketingHubb. Rank higher on Google, drive organic traffic and grow your business. Expert local & national SEO strategies.",
    keywords:
      "SEO services Varanasi, search engine optimization Varanasi, local SEO Varanasi, best SEO agency Varanasi, Google ranking Varanasi, SEO company Varanasi",
    canonical: "https://marketinghubb.in/services/seo",
  });
  const detailsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "SEO Services in Varanasi | Search Engine Optimization | MarketingHubb";
  }, []);

  return (
    <div className="page-transition">
      <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
        <ParticleField count={15} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-seagreen text-xs font-bold uppercase tracking-widest mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {" / "}
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            {" / SEO"}
          </p>
          <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            SEO <span style={{ color: "#43B89A" }}>SERVICES</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Rank Higher on Google. Drive More Traffic. Grow Your Business in
            Varanasi.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-navy bg-seagreen uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
              data-ocid="seo.primary_button"
            >
              Get Free SEO Audit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" ref={detailsRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mt-2 mb-6">
              SEARCH ENGINE OPTIMIZATION IN VARANASI
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
              <p>
                In today's digital-first world, your customers are searching for
                your products and services online right now. The question is —
                can they find you? If your business isn't appearing on the first
                page of Google search results, you're effectively invisible to
                thousands of potential customers every single day.
              </p>
              <p>
                At <strong>MarketingHubb</strong>, we specialize in{" "}
                <strong>SEO services in Varanasi</strong> that are built for
                real, measurable results. We're not just another agency throwing
                keywords at a wall and hoping something sticks. Every strategy
                we build is rooted in data, fueled by creativity, and executed
                with precision.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Why SEO Matters More Than Ever
              </h3>
              <p>
                Google processes over 8.5 billion searches every single day.
                When someone in Varanasi types "best digital marketing agency
                near me" or "SEO company in Varanasi," they're actively looking
                for what you offer. Ranking on page one for those searches isn't
                luck — it's strategy, and it's exactly what we do.
              </p>
              <p>
                Our <strong>SEO in Varanasi</strong> approach covers every angle
                of search engine optimization: on-page SEO, off-page link
                building, technical SEO, local SEO, and content optimization. We
                perform deep keyword research to understand what your ideal
                customers are searching for, then craft a roadmap to get you
                ranking for those exact terms.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Our SEO Process
              </h3>
              <p>
                We begin every engagement with a thorough{" "}
                <strong>SEO audit</strong> — analyzing your current rankings,
                site health, competitor positions, and keyword gaps. We optimize
                your <strong>Google Business Profile</strong>, build consistent
                local citations, and generate genuine reviews that boost your
                visibility in local search. Every month, you receive a detailed
                report showing your rankings, traffic growth, and the specific
                work completed. No vague promises — just clear data showing your
                progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={benefitsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              Why Choose Our SEO
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              KEY BENEFITS OF SEO
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`seo.benefit.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(67,184,154,0.1)" }}
                >
                  {b.icon}
                </div>
                <h3 className="text-white font-black text-lg uppercase mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" ref={faqRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mt-2">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="scroll-reveal border border-gray-200 rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 0.07}s` }}
                data-ocid={`seo.faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-navy hover:text-seagreen transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-ocid={`seo.faq.toggle.${i + 1}`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-seagreen" : "text-gray-400"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #36967e 0%, #43B89A 100%)",
        }}
        ref={ctaRef}
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mb-4">
            Ready to Rank on Page 1 of Google?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Get a free SEO audit and discover exactly what's holding your
            website back from the top.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
            data-ocid="seo.cta_button"
          >
            Get Free SEO Consultation <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
