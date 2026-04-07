import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Edit3,
  Globe,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ParticleField } from "../../components/ParticleField";
import { useSEO } from "../../hooks/useSEO";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const benefits = [
  {
    icon: <BookOpen size={28} className="text-seagreen" />,
    title: "Authority Building",
    description:
      "Position your brand as the go-to expert in your industry. High-quality content builds trust and credibility that advertising alone cannot buy.",
  },
  {
    icon: <TrendingUp size={28} className="text-seagreen" />,
    title: "SEO-Boosting Content",
    description:
      "Every piece of content we create is optimized for search engines — targeted keywords, proper structure, internal linking, and meta optimization.",
  },
  {
    icon: <Users size={28} className="text-seagreen" />,
    title: "Lead Nurturing",
    description:
      "Move prospects through the sales funnel with content designed for each stage — awareness, consideration, and decision.",
  },
  {
    icon: <Edit3 size={28} className="text-seagreen" />,
    title: "Brand Storytelling",
    description:
      "Connect emotionally with your audience through stories, case studies, and behind-the-scenes content that humanizes your brand.",
  },
  {
    icon: <Globe size={28} className="text-seagreen" />,
    title: "Multi-format Content",
    description:
      "Blogs, infographics, videos, social media content, email newsletters, whitepapers — we create content across all formats and platforms.",
  },
  {
    icon: <RefreshCw size={28} className="text-seagreen" />,
    title: "Consistent Publishing",
    description:
      "Regular, consistent content publication signals authority to Google and keeps your audience engaged. We maintain your content calendar reliably.",
  },
];

const faqs = [
  {
    q: "What is content marketing?",
    a: "Content marketing is a strategic approach to creating and distributing valuable, relevant content — blogs, videos, social posts, infographics, podcasts — to attract and retain a clearly defined audience. Instead of interrupting people with ads, content marketing draws them in by providing genuine value. It's the foundation of long-term digital marketing success.",
  },
  {
    q: "Why does content marketing matter for my Varanasi business?",
    a: "Content marketing builds trust, authority, and organic traffic simultaneously. A well-written blog post about 'best digital marketing tips for Varanasi businesses' can rank on Google, drive traffic for years, and position your brand as the local expert. It's one of the highest-ROI marketing activities for businesses of all sizes.",
  },
  {
    q: "How does content help SEO?",
    a: "Content is the fuel that powers SEO. Search engines rank pages with valuable, relevant, well-structured content higher than thin pages. Every blog post you publish is an opportunity to rank for a new keyword, earn backlinks from other sites, and increase your site's overall authority. Our content strategy is built around ranking for keywords your customers actually search.",
  },
  {
    q: "What type of content should I create for my business?",
    a: "The best content depends on your industry and audience. For most local businesses, a mix of educational blog posts, customer case studies, FAQ pages, service guides, and social media content works well. We analyze your competitors and audience to recommend the most effective content mix for your specific situation.",
  },
  {
    q: "How often should I publish content?",
    a: "For SEO impact, publishing at least 2-4 quality blog posts per month is recommended. Quality always trumps quantity — one outstanding, well-researched article ranks better than ten thin pieces. We create a sustainable content calendar that balances quality output with your resources and goals.",
  },
  {
    q: "Do you write content in Hindi as well as English?",
    a: "Yes! We offer content in both Hindi and English. For businesses targeting audiences in Varanasi and across Uttar Pradesh, Hindi content can be incredibly effective — both for connecting with local audiences and for ranking on Hindi keyword searches, which have far less competition than English equivalents.",
  },
  {
    q: "How do you measure content marketing success?",
    a: "We track a comprehensive set of metrics: organic traffic from search engines, keyword rankings, time-on-page, bounce rate, social shares, backlinks earned, leads generated from content, and ultimately revenue attributed to content. We provide monthly reports that show you exactly how your content investment is paying off.",
  },
  {
    q: "How long before content shows results?",
    a: "Content marketing is a long-term strategy. Most content starts gaining traction in 3-6 months as Google indexes it, it earns backlinks, and rankings improve. However, the results are cumulative — content published today continues generating traffic and leads for years. The earlier you start, the greater your advantage over competitors who delay.",
  },
];

export function ContentMarketingPage() {
  useSEO({
    title: "Content Marketing Services in Varanasi | MarketingHubb",
    description:
      "Strategic content marketing services in Varanasi by MarketingHubb. SEO-optimized blogs, articles, and content that attract, engage and convert your target audience.",
    keywords:
      "content marketing Varanasi, content marketing services Varanasi, blog writing Varanasi, content strategy Varanasi, content marketing agency Varanasi",
    canonical: "https://marketinghubb.in/services/content-marketing",
  });
  const detailsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "Content Marketing Services in Varanasi | Blog & Content Strategy | MarketingHubb";
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
            {" / Content Marketing"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            CONTENT <span style={{ color: "#43B89A" }}>MARKETING</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Build Authority. Drive Traffic. Generate Leads — All Through
            Powerful Content.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-navy bg-seagreen uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
              data-ocid="content.primary_button"
            >
              Get Content Strategy <ArrowRight size={18} />
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
              CONTENT MARKETING SERVICES IN VARANASI
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
              <p>
                In the digital age, content is currency. The brands that
                consistently create and publish high-quality, relevant content
                are the ones that dominate search rankings, build loyal
                audiences, and generate leads without constantly paying for
                every click. Content marketing isn't just blogging — it's a
                strategic discipline that sits at the intersection of SEO,
                storytelling, and sales psychology.
              </p>
              <p>
                At <strong>MarketingHubb</strong>, we offer comprehensive{" "}
                <strong>content marketing services in Varanasi</strong> that are
                built around your business goals. Whether you want to rank on
                Google, establish thought leadership, generate leads, or retain
                customers — we create a content strategy that delivers real,
                measurable outcomes.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Strategy-First Content Creation
              </h3>
              <p>
                Before we write a single word, we research. We analyze your
                competitors' content, identify keyword gaps, study your target
                audience's questions and pain points, and map out a content
                calendar that maximizes your chances of ranking on Google while
                resonating with real people. Our content team consists of
                experienced writers who specialize in digital marketing, SEO,
                and your specific industry. Every piece we create is factually
                accurate, thoroughly researched, naturally keyword-optimized,
                and written in a style that matches your brand voice.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Content That Works for Varanasi Businesses
              </h3>
              <p>
                As a <strong>digital marketing agency based in Varanasi</strong>
                , we understand the local market in ways that national or
                international agencies simply cannot. We know what your
                customers in Varanasi are searching for, what language resonates
                with them (Hindi and English both), and what kinds of content
                establish trust in this market. We create content across
                multiple formats — long-form blog posts, service pages, FAQ
                content, case studies, social media content, email newsletters,
                and video scripts. Most importantly, we track everything,
                providing monthly reports showing organic rankings, traffic
                generated, leads attributed, and engagement metrics.
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
              Why Choose Our Content Marketing
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              KEY BENEFITS OF CONTENT MARKETING
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`content.benefit.${i + 1}`}
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
                data-ocid={`content.faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-navy hover:text-seagreen transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-ocid={`content.faq.toggle.${i + 1}`}
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
            Ready to Build Content That Ranks & Converts?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Let's create a content marketing strategy that establishes your
            authority and drives consistent organic growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
            data-ocid="content.cta_button"
          >
            Start Content Strategy <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
