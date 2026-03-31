import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Layers,
  Search,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ParticleField } from "../../components/ParticleField";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const benefits = [
  {
    icon: <Zap size={28} className="text-seagreen" />,
    title: "Instant Traffic",
    description:
      "Unlike SEO which takes months, PPC ads go live within hours and start driving targeted visitors to your website immediately.",
  },
  {
    icon: <Target size={28} className="text-seagreen" />,
    title: "Targeted Reach",
    description:
      "Reach people actively searching for your exact product or service — by keyword, location, device, time of day, and more.",
  },
  {
    icon: <DollarSign size={28} className="text-seagreen" />,
    title: "Budget Control",
    description:
      "Set daily and monthly budgets with full control. You only pay when someone actually clicks your ad, making every rupee accountable.",
  },
  {
    icon: <BarChart2 size={28} className="text-seagreen" />,
    title: "Measurable ROI",
    description:
      "Track every conversion, every rupee spent, and every lead generated. PPC offers unmatched transparency in marketing performance.",
  },
  {
    icon: <Search size={28} className="text-seagreen" />,
    title: "Google & Meta Ads",
    description:
      "We manage campaigns across Google Search, Google Display, YouTube, Facebook, and Instagram — putting your brand everywhere your customers are.",
  },
  {
    icon: <Layers size={28} className="text-seagreen" />,
    title: "A/B Testing",
    description:
      "We continuously test ad copy, landing pages, headlines, and audiences to find the winning combinations that lower your cost per click.",
  },
];

const faqs = [
  {
    q: "What is PPC (Pay-Per-Click) advertising?",
    a: "PPC is a form of digital advertising where you pay each time someone clicks on your ad. Google Ads is the most popular PPC platform — your ads appear at the top of Google search results when someone searches for keywords related to your business. You set a budget and only pay when potential customers actually engage with your ad.",
  },
  {
    q: "How does Google Ads work for businesses in Varanasi?",
    a: "Google Ads lets you bid on keywords that your target customers search for. When someone searches 'digital marketing agency in Varanasi', your ad can appear at the very top of the results page. You can target by location (Varanasi, UP, India), language, device, and time of day — making it incredibly precise for local businesses.",
  },
  {
    q: "What is a good ROI for PPC campaigns?",
    a: "A good rule of thumb is a 3:1 to 5:1 return on ad spend — meaning for every ₹1 spent on ads, you should generate ₹3 to ₹5 in revenue. However, ROI varies by industry, competition, and conversion rate. We track every conversion and work continuously to improve your campaign's profitability.",
  },
  {
    q: "How much budget do I need for PPC in Varanasi?",
    a: "You can start with as little as ₹5,000–₹10,000 per month for local targeting in Varanasi. For more competitive industries or wider reach, budgets of ₹20,000–₹50,000+ per month are common. We'll recommend a budget based on your goals, competition, and expected returns.",
  },
  {
    q: "How is PPC different from SEO?",
    a: "PPC gives you immediate visibility at the top of search results, but you pay for each click. SEO builds organic (free) rankings over time but takes 3-6 months to show results. PPC is ideal for quick wins, product launches, and time-sensitive offers. SEO is ideal for sustainable long-term growth. Together, they form a powerful digital marketing strategy.",
  },
  {
    q: "What is Quality Score in Google Ads and why does it matter?",
    a: "Quality Score is Google's rating (1-10) of the relevance and quality of your ads, keywords, and landing pages. A higher Quality Score means lower costs per click and better ad positions. We optimize every element of your campaigns to maintain a high Quality Score, reducing your advertising costs significantly.",
  },
  {
    q: "How do you track conversions in PPC campaigns?",
    a: "We set up conversion tracking through Google Tag Manager, tracking phone calls, form submissions, WhatsApp clicks, and purchases. This tells us exactly which keywords and ads are generating real business, allowing us to shift budget toward what works and cut what doesn't.",
  },
  {
    q: "How quickly will I see results from PPC advertising?",
    a: "PPC campaigns can go live within 24-48 hours of setup. However, we recommend allowing 2-4 weeks for the campaigns to gather data and be properly optimized. During this 'learning phase', we monitor performance closely and make adjustments daily to improve results.",
  },
];

export function PpcPage() {
  const detailsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "PPC Advertising in Varanasi | Google Ads Management | MarketingHubb";
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
            {" / PPC Advertising"}
          </p>
          <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            PPC & <span style={{ color: "#43B89A" }}>GOOGLE ADS</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Get Instant Traffic from Google. Pay Only for Real Clicks. Maximize
            Your ROI.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-navy bg-seagreen uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
              data-ocid="ppc.primary_button"
            >
              Launch My Ads <ArrowRight size={18} />
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
              PPC ADVERTISING & GOOGLE ADS IN VARANASI
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
              <p>
                When you need customers right now — not months from now —
                Pay-Per-Click advertising is the fastest, most controllable way
                to drive high-intent traffic to your business. With Google Ads,
                your website can appear at the very top of search results within
                hours, in front of people who are actively looking for exactly
                what you offer.
              </p>
              <p>
                At <strong>MarketingHubb</strong>, our certified Google Ads
                experts manage <strong>PPC campaigns in Varanasi</strong> for
                businesses of all sizes. We don't just set up campaigns — we
                build high-performance systems that convert clicks into
                customers, continuously optimize for better results, and provide
                complete transparency into where every rupee goes.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Why PPC Advertising Works
              </h3>
              <p>
                The power of <strong>PPC advertising</strong> lies in its
                precision. You can target people searching for specific
                keywords, living in specific locations (like Varanasi, Uttar
                Pradesh, or all of India), using specific devices, at specific
                times of day. Unlike traditional advertising where you pay
                whether anyone pays attention or not, with PPC you only pay when
                someone actually clicks on your ad.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Our Google Ads Management Process
              </h3>
              <p>
                We start with thorough keyword research and competitor analysis,
                then build campaigns with tightly themed ad groups, compelling
                ad copy, and optimized landing pages designed to convert
                visitors into leads or customers. Post-launch, we monitor
                campaigns daily — adjusting bids, testing new ad variations,
                refining audience targeting, and improving Quality Scores to
                lower your cost per click. Our transparent monthly reports show
                you exactly what was spent, how many clicks and conversions were
                generated, and what your return on investment was.
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
              Why Choose Our PPC
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              KEY BENEFITS OF PPC ADVERTISING
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`ppc.benefit.${i + 1}`}
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
                data-ocid={`ppc.faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-navy hover:text-seagreen transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-ocid={`ppc.faq.toggle.${i + 1}`}
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
            Ready to Drive Instant Traffic with Google Ads?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Let our certified PPC experts build a campaign that delivers real
            leads and measurable ROI.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
            data-ocid="ppc.cta_button"
          >
            Get a Free PPC Audit <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
