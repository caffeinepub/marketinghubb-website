import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  FileText,
  Mail,
  Monitor,
  Search,
  Share2,
  TrendingUp,
} from "lucide-react";
import { useEffect } from "react";
import { ParticleField } from "../components/ParticleField";
import { useSEO } from "../hooks/useSEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

type ServicePath =
  | "/services/seo"
  | "/services/smm"
  | "/services/ppc"
  | "/services/content-marketing"
  | "/services/web-design"
  | "/services/email-marketing";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  path: ServicePath;
}

const services: ServiceItem[] = [
  {
    icon: <Search size={40} className="text-seagreen" />,
    title: "SEO Optimization",
    description:
      "Achieve top rankings on Google with our comprehensive SEO strategies. We combine technical excellence with content optimization to drive organic traffic that converts.",
    features: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "Link Building Campaigns",
    ],
    path: "/services/seo",
  },
  {
    icon: <Share2 size={40} className="text-seagreen" />,
    title: "Social Media Marketing",
    description:
      "Build a powerful brand presence across Instagram, Facebook, LinkedIn, and more. We create scroll-stopping content and manage communities that drive real engagement.",
    features: [
      "Platform-Specific Strategy",
      "Content Creation & Scheduling",
      "Paid Social Campaigns",
    ],
    path: "/services/smm",
  },
  {
    icon: <TrendingUp size={40} className="text-seagreen" />,
    title: "PPC / Google Ads",
    description:
      "Maximize every advertising rupee with precision-targeted pay-per-click campaigns. Our certified experts manage Google Ads, Meta Ads, and more for peak ROI.",
    features: [
      "Google Ads Management",
      "Conversion Tracking",
      "A/B Testing & Optimization",
    ],
    path: "/services/ppc",
  },
  {
    icon: <FileText size={40} className="text-seagreen" />,
    title: "Content Marketing",
    description:
      "Tell your brand's story with content that educates, inspires, and converts. From blog posts to video scripts, we create content that establishes authority.",
    features: [
      "Blog & Article Writing",
      "Video Script Creation",
      "Infographics & Visual Content",
    ],
    path: "/services/content-marketing",
  },
  {
    icon: <Monitor size={40} className="text-seagreen" />,
    title: "Web Design & Development",
    description:
      "Beautiful, fast, and conversion-optimized websites that make your brand stand out. We build digital experiences that turn visitors into customers.",
    features: [
      "Custom Website Design",
      "Landing Page Optimization",
      "Mobile-First Development",
    ],
    path: "/services/web-design",
  },
  {
    icon: <Mail size={40} className="text-seagreen" />,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized email campaigns. Our automated sequences deliver the right message to the right person at the perfect time.",
    features: [
      "Campaign Strategy & Design",
      "Marketing Automation",
      "Analytics & Reporting",
    ],
    path: "/services/email-marketing",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "Deep dive into your business, competitors, and target audience to uncover opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Build a data-backed roadmap aligned with your business goals and budget.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Implement campaigns with precision, creativity, and continuous quality control.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "Analyze results, extract insights, and continuously improve for maximum ROI.",
  },
];

const industries = [
  { emoji: "🛒", name: "E-commerce" },
  { emoji: "🏥", name: "Healthcare" },
  { emoji: "🏡", name: "Real Estate" },
  { emoji: "🎓", name: "Education" },
  { emoji: "🍽️", name: "Restaurant" },
  { emoji: "🏨", name: "Hotels" },
  { emoji: "💼", name: "Finance" },
  { emoji: "⚖️", name: "Legal" },
  { emoji: "🚗", name: "Automotive" },
  { emoji: "💄", name: "Fashion" },
  { emoji: "💊", name: "Pharma" },
  { emoji: "🏗️", name: "Construction" },
  { emoji: "📱", name: "Technology" },
  { emoji: "🎯", name: "Startups" },
  { emoji: "🛠️", name: "Manufacturing" },
  { emoji: "✈️", name: "Travel" },
  { emoji: "🌾", name: "Agriculture" },
  { emoji: "🏋️", name: "Fitness" },
  { emoji: "🎭", name: "Entertainment" },
  { emoji: "🔧", name: "Services" },
];

export function ServicesPage() {
  useSEO({
    title:
      "Digital Marketing Services in Varanasi | SEO, SMM, PPC & More | MarketingHubb",
    description:
      "Complete digital marketing services in Varanasi: SEO, Social Media Marketing, PPC Advertising, Web Design, Email Marketing & Content Marketing. Results-driven strategies.",
    keywords:
      "digital marketing services Varanasi, SEO services Varanasi, SMM services Varanasi, PPC services Varanasi, web design Varanasi, content marketing Varanasi",
    canonical: "https://marketinghubb.in/services",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Digital Marketing Services in Varanasi",
      url: "https://marketinghubb.in/services",
    },
  });
  const servicesRef = useScrollReveal();
  const processRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  useEffect(() => {
    document.title = "Digital Marketing Services Varanasi | MarketingHubb";
  }, []);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
        <ParticleField count={15} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-seagreen text-xs font-bold uppercase tracking-widest mb-4">
            Home / Services
          </p>
          <h1
            className="text-5xl lg:text-7xl font-black uppercase leading-tight"
            style={{ color: "#ffffff" }}
          >
            OUR <span style={{ color: "#43B89A" }}>SERVICES</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Digital Marketing Services in Varanasi — Full-stack solutions
            designed for measurable growth.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 80"
            className="w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="#F4FBFA"
              opacity="0.05"
            />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#071C35]" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading — NO scroll-reveal so it's always visible */}
          <div className="text-center mb-16">
            <p
              className="font-semibold uppercase tracking-widest text-sm mb-3"
              style={{ color: "#43B89A" }}
            >
              What We Offer
            </p>
            <h2
              className="text-3xl lg:text-4xl font-black uppercase mb-4"
              style={{ color: "#ffffff" }}
            >
              Our Digital Marketing{" "}
              <span style={{ color: "#43B89A" }}>Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              From SEO to Social Media, PPC to Web Design — we provide
              end-to-end digital marketing solutions to grow your business in
              Varanasi and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="scroll-reveal group card-gradient rounded-2xl p-8 border border-seagreen/20 service-card flex flex-col"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`services.card.${i + 1}`}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(67,184,154,0.1)" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="font-black text-xl uppercase mb-3"
                  style={{ color: "#ffffff" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {s.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle
                        size={14}
                        className="text-seagreen flex-shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link
                    to={s.path}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-seagreen border border-seagreen/50 hover:bg-seagreen/10 transition-all"
                    data-ocid={`services.learn_more.${i + 1}`}
                  >
                    Learn More <ArrowRight size={13} />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-navy bg-seagreen hover:opacity-90 transition-all group-hover:shadow-teal"
                    data-ocid={`services.get_started.${i + 1}`}
                  >
                    Get Started <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading — no scroll-reveal so always visible */}
          <div className="text-center mb-14">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#43B89A" }}
            >
              Industries
            </span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase mt-2 mb-4 tracking-tight"
              style={{ color: "#ffffff" }}
            >
              Driving Results Across{" "}
              <span style={{ color: "#43B89A" }}>Every Industry</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Our expertise spans{" "}
              <strong style={{ color: "#ffffff" }}>20+ industries</strong> with
              customized strategies for every business sector.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl p-5 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(67,184,154,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(67,184,154,0.12)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(67,184,154,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(67,184,154,0.15)";
                }}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {industry.emoji}
                </span>
                <span
                  className="text-sm font-semibold text-center leading-tight"
                  style={{ color: "#ffffff" }}
                >
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#F4FBFA] confetti-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Founder Photo */}
            <div className="scroll-reveal-left flex justify-center">
              <div
                className="relative"
                style={{ maxWidth: "320px", width: "100%" }}
              >
                <div
                  className="rounded-3xl overflow-hidden border-4"
                  style={{
                    borderColor: "#43B89A",
                    boxShadow:
                      "0 0 40px rgba(67,184,154,0.35), 0 8px 32px rgba(7,28,53,0.18)",
                    aspectRatio: "3/4",
                  }}
                >
                  <img
                    src="/assets/generated/saurabh-founder.jpg"
                    alt="Saurabh Chaubey - Founder, MarketingHubb"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative badge */}
                <div
                  className="absolute -bottom-4 -right-4 rounded-2xl px-5 py-3 text-white text-xs font-bold uppercase tracking-widest shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #43B89A 0%, #2A9D82 100%)",
                  }}
                >
                  Est. 2024
                </div>
              </div>
            </div>

            {/* Right: Founder Info */}
            <div className="scroll-reveal-right">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: "#2A9D82" }}
              >
                Meet Our Founder
              </span>
              <h2
                className="text-4xl lg:text-5xl font-black uppercase leading-tight mb-2"
                style={{ color: "#071C35" }}
              >
                Saurabh
                <br />
                <span style={{ color: "#43B89A" }}>Chaubey</span>
              </h2>
              <p
                className="text-lg font-semibold mb-5"
                style={{ color: "#1A7A62" }}
              >
                Digital Marketing Manager
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #43B89A 0%, #2A9D82 100%)",
                  }}
                >
                  2 Years Experience
                </span>
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide"
                  style={{
                    background: "rgba(67,184,154,0.12)",
                    color: "#1A7A62",
                    border: "1.5px solid #43B89A",
                  }}
                >
                  Est. 2024
                </span>
              </div>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#374151" }}
              >
                Saurabh Chaubey is a passionate digital marketing professional
                with 2 years of hands-on experience in SEO, Social Media, and
                Performance Marketing. He founded MarketingHubb in 2024 with a
                vision to help Varanasi businesses grow online. Under his
                leadership, the agency has delivered 500+ successful campaigns
                for clients across Uttar Pradesh.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold uppercase tracking-wide text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #43B89A 0%, #2A9D82 100%)",
                  boxShadow: "0 4px 20px rgba(67,184,154,0.35)",
                }}
                data-ocid="services.founder.link"
              >
                Connect with Founder
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  role="img"
                  aria-label="Arrow right"
                >
                  <title>Arrow right</title>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={processRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              How We Work
            </span>
            <h2
              className="text-3xl lg:text-4xl font-black uppercase mt-2"
              style={{ color: "#ffffff" }}
            >
              OUR PROCESS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div
                key={step.step}
                className="scroll-reveal text-center relative"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-3/4 w-1/2 h-0.5 bg-seagreen/30" />
                )}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl font-black text-seagreen"
                  style={{
                    background: "rgba(67,184,154,0.1)",
                    border: "1px solid rgba(67,184,154,0.3)",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  className="font-black text-lg uppercase mb-3"
                  style={{ color: "#ffffff" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #36967e 0%, #43B89A 100%)",
        }}
        ref={ctaRef}
      >
        <div className="max-w-4xl mx-auto px-4 text-center relative scroll-reveal">
          <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mb-4">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Let's discuss how our Digital Marketing Services in Varanasi can
            drive your business growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
            data-ocid="services.primary_button"
          >
            Get A Free Consultation <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
