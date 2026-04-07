import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Mail,
  Monitor,
  Search,
  Share2,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
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

const faqsLeft = [
  {
    q: "What is digital marketing and why does my business need it?",
    a: "Digital marketing uses online channels like Google, social media, and email to promote your business. In today's digital world, your customers are online — and digital marketing helps you reach them exactly when they're searching for your services, driving more leads and sales at a lower cost than traditional advertising.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term strategy. You can expect to see initial improvements in rankings and traffic within 3–6 months. Significant, sustainable results typically take 6–12 months depending on your industry competition and the current state of your website.",
  },
  {
    q: "What makes MarketingHubb different from other digital marketing agencies in Varanasi?",
    a: "We are a local Varanasi-based agency with deep understanding of the local market, customer behavior, and regional competition. We offer transparent reporting, no long-term contracts, and customized strategies — not one-size-fits-all packages.",
  },
  {
    q: "How much does digital marketing cost?",
    a: "Our pricing is flexible and tailored to your goals and budget. We offer plans starting from affordable monthly packages for small businesses to comprehensive enterprise solutions. Contact us for a free consultation and custom quote.",
  },
  {
    q: "Can you help my business rank on Google Maps and local search?",
    a: "Yes! Local SEO is one of our specialties. We optimize your Google Business Profile, build local citations, and implement geo-targeted strategies to help your business appear prominently in Varanasi and nearby location searches.",
  },
  {
    q: "Do you offer social media marketing services?",
    a: "Absolutely. We manage Instagram, Facebook, LinkedIn, and YouTube for businesses of all sizes. Our SMM services include content creation, scheduling, community management, and paid social media campaigns to grow your audience and engagement.",
  },
];

const faqsRight = [
  {
    q: "What is PPC and how can it benefit my business?",
    a: "PPC (Pay-Per-Click) advertising lets you place ads on Google and other platforms, paying only when someone clicks. It's the fastest way to get your business in front of high-intent customers. Our PPC experts manage your budget efficiently to maximize ROI.",
  },
  {
    q: "Do I need a website to start digital marketing?",
    a: "A professional website is highly recommended as it serves as your digital headquarters. However, we can start with social media marketing and Google Business Profile optimization while building your website simultaneously. We also offer web design and development services.",
  },
  {
    q: "How do you measure the success of a digital marketing campaign?",
    a: "We track key performance indicators (KPIs) including website traffic, keyword rankings, conversion rates, cost per lead, social media engagement, and return on ad spend (ROAS). You'll receive regular detailed reports so you always know how your campaigns are performing.",
  },
  {
    q: "Can you handle digital marketing for a small business or startup?",
    a: "Yes! We work with businesses of all sizes — from individual entrepreneurs and startups to established brands. Our flexible packages are designed to deliver maximum impact even on a limited budget.",
  },
  {
    q: "What industries do you serve?",
    a: "We have experience across 20+ industries including retail, healthcare, real estate, education, hospitality, e-commerce, manufacturing, finance, and many more. Our strategies are always customized to your specific industry and target audience.",
  },
  {
    q: "How do I get started with MarketingHubb?",
    a: "Getting started is simple. Contact us via WhatsApp (+91 73072 60253) or fill out our contact form for a free strategy consultation. We'll analyze your current digital presence, understand your goals, and propose a customized plan — with no obligation.",
  },
];

function FaqItem({
  faq,
  index,
  colPrefix,
  openIndex,
  setOpenIndex,
}: {
  faq: { q: string; a: string };
  index: number;
  colPrefix: string;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const id = colPrefix === "left" ? index : index + 6;
  const isOpen = openIndex === id;
  return (
    <div
      className="rounded-xl border transition-all duration-200"
      style={{
        background: isOpen ? "rgba(67,184,154,0.06)" : "rgba(255,255,255,0.03)",
        borderColor: isOpen
          ? "rgba(67,184,154,0.45)"
          : "rgba(255,255,255,0.08)",
      }}
      data-ocid={`services.faq.item.${id + 1}`}
    >
      <button
        type="button"
        className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left focus:outline-none"
        onClick={() => setOpenIndex(isOpen ? null : id)}
        aria-expanded={isOpen}
        data-ocid={`services.faq.toggle.${id + 1}`}
      >
        <span className="font-semibold text-white text-sm md:text-base leading-snug pr-2">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{
            color: "#43B89A",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        <p className="px-5 pb-5 text-gray-400 text-sm md:text-base leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

function ServicesFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left column */}
      <div className="flex flex-col gap-4">
        {faqsLeft.map((faq, i) => (
          <FaqItem
            key={faq.q.slice(0, 20)}
            faq={faq}
            index={i}
            colPrefix="left"
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
      {/* Right column */}
      <div className="flex flex-col gap-4">
        {faqsRight.map((faq, i) => (
          <FaqItem
            key={faq.q.slice(0, 20)}
            faq={faq}
            index={i}
            colPrefix="right"
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
}

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
  const locationsRef = useScrollReveal();

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
            className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-tight"
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
                className="group flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-2xl p-3 sm:p-5 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg min-w-0 overflow-hidden"
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
                  className="text-xs sm:text-sm font-semibold text-center leading-tight"
                  style={{ color: "#ffffff" }}
                >
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS SECTION ===== */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={locationsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              Our Locations
            </span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-white mt-2 mb-4 tracking-tight">
              We Serve <span style={{ color: "#43B89A" }}>28 Cities</span>{" "}
              Across India
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              From metro cities to tier-2 towns — MarketingHubb delivers{" "}
              <strong className="text-white">
                world-class digital marketing
              </strong>{" "}
              everywhere in India.
            </p>
          </div>

          {/* Uttar Pradesh */}
          <div className="mb-10 scroll-reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🏛️</span>
              <h3
                className="text-xl font-black uppercase tracking-widest"
                style={{ color: "#43B89A" }}
              >
                Uttar Pradesh
              </h3>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(67,184,154,0.3)" }}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { emoji: "🕌", name: "Varanasi" },
                { emoji: "🏙️", name: "Lucknow" },
                { emoji: "🏯", name: "Agra" },
                { emoji: "🏭", name: "Kanpur" },
                { emoji: "🌊", name: "Prayagraj" },
                { emoji: "🚀", name: "Ghaziabad" },
                { emoji: "💻", name: "Noida" },
                { emoji: "🌆", name: "Greater Noida" },
                { emoji: "⚔️", name: "Meerut" },
                { emoji: "🎓", name: "Aligarh" },
                { emoji: "🏪", name: "Moradabad" },
                { emoji: "🌿", name: "Bareilly" },
                { emoji: "🐘", name: "Gorakhpur" },
                { emoji: "🪶", name: "Mathura" },
                { emoji: "🌸", name: "Vrindavan" },
                { emoji: "✨", name: "Ayodhya" },
                { emoji: "⚒️", name: "Jhansi" },
                { emoji: "🌲", name: "Saharanpur" },
                { emoji: "🏗️", name: "Muzaffarnagar" },
                { emoji: "💎", name: "Firozabad" },
                { emoji: "🌾", name: "Hapur" },
                { emoji: "📚", name: "Rampur" },
                { emoji: "🌺", name: "Shahjahanpur" },
                { emoji: "🎋", name: "Jaunpur" },
                { emoji: "🌻", name: "Azamgarh" },
                { emoji: "⛰️", name: "Mirzapur" },
                { emoji: "🧵", name: "Bhadohi" },
              ].map((city) => (
                <div
                  key={city.name}
                  className="group flex items-center gap-2 rounded-xl px-2 sm:px-3 py-2 sm:py-2.5 transition-all duration-300 hover:-translate-y-0.5 cursor-default min-w-0 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(67,184,154,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(67,184,154,0.15)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(67,184,154,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(67,184,154,0.15)";
                  }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {city.emoji}
                  </span>
                  <span className="text-white text-xs font-semibold leading-tight truncate min-w-0">
                    {city.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Other States */}
          <div className="scroll-reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🇮🇳</span>
              <h3
                className="text-xl font-black uppercase tracking-widest"
                style={{ color: "#43B89A" }}
              >
                Other States
              </h3>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(67,184,154,0.3)" }}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { emoji: "🏛️", name: "Delhi NCR" },
                { emoji: "🌆", name: "Maharashtra" },
                { emoji: "🏰", name: "Rajasthan" },
                { emoji: "💰", name: "Gujarat" },
                { emoji: "💻", name: "Karnataka" },
                { emoji: "🎭", name: "Tamil Nadu" },
                { emoji: "🌴", name: "Kerala" },
              ].map((state) => (
                <div
                  key={state.name}
                  className="group flex items-center gap-2 rounded-xl px-2 sm:px-3 py-2 sm:py-2.5 transition-all duration-300 hover:-translate-y-0.5 cursor-default min-w-0 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(67,184,154,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(67,184,154,0.15)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(67,184,154,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(67,184,154,0.15)";
                  }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {state.emoji}
                  </span>
                  <span className="text-white text-xs font-semibold leading-tight truncate min-w-0">
                    {state.name}
                  </span>
                </div>
              ))}
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

      {/* ===== FAQ SECTION ===== */}
      <section
        className="py-20 px-4"
        style={{ background: "#060f1e" }}
        data-ocid="services.faq.section"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(67,184,154,0.12)",
                color: "#43B89A",
                border: "1px solid rgba(67,184,154,0.3)",
              }}
            >
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Frequently Asked{" "}
              <span style={{ color: "#43B89A" }}>Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Got questions about digital marketing? We&apos;ve got answers.
            </p>
          </div>

          {/* Two-column FAQ grid */}
          <ServicesFaqAccordion />
        </div>
      </section>

      {/* ===== SEO CONTENT SECTION ===== */}
      <section className="py-24 px-4 bg-[#071C35]" data-ocid="services.section">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(67,184,154,0.12)",
                color: "#43B89A",
                border: "1px solid rgba(67,184,154,0.3)",
              }}
            >
              Complete Digital Marketing Guide
            </span>
          </div>

          {/* H1-level intro heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-center mb-8"
            style={{ color: "#ffffff" }}
          >
            Best{" "}
            <span style={{ color: "#43B89A" }}>Digital Marketing Agency</span>{" "}
            in Varanasi — Complete Growth Solutions
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Varanasi is not just India&apos;s spiritual capital — it is also one
            of Uttar Pradesh&apos;s fastest-growing commercial hubs. Thousands
            of businesses, from silk textile traders on Vishwanath Gali to
            modern startups near BHU, are discovering that a strong digital
            presence is no longer optional. It is the single biggest
            differentiator between a business that thrives and one that simply
            survives. <strong className="text-white">MarketingHubb</strong> was
            founded in 2024 with one mission: to be the most trusted{" "}
            <strong className="text-white">
              digital marketing agency in Varanasi
            </strong>{" "}
            that delivers measurable results for local and national brands
            alike.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            As a full-service{" "}
            <strong className="text-white">digital agency in Varanasi</strong>,
            we handle every dimension of your online growth — from getting you
            found on Google to converting social media followers into paying
            customers. Whether you run a boutique, a hospital, a coaching
            institute, or an e-commerce store, our tailored strategies are built
            around your specific goals, budget, and market realities. Our team
            of certified experts brings together deep local knowledge and
            data-driven discipline so that every rupee you invest in digital
            marketing works harder for you.
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(67,184,154,0.4), transparent)",
            }}
          />

          {/* SEO Section */}
          <h2
            className="text-2xl sm:text-3xl font-black mb-5"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#43B89A" }}>SEO Services</span> in Varanasi —
            Rank Higher, Grow Faster
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            Search Engine Optimisation is the foundation of sustainable online
            growth. When a potential customer in Varanasi types{" "}
            <em>&quot;best digital marketing agency near me&quot;</em> or{" "}
            <em>&quot;SEO services Varanasi,&quot;</em> the businesses that
            appear on the first page of Google capture almost 95% of all clicks.
            If your business is not ranking, you are invisible — no matter how
            great your product or service is. Our{" "}
            <strong className="text-white">SEO service in Varanasi</strong> is
            designed to change that, permanently.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            At MarketingHubb, our approach to{" "}
            <strong className="text-white">SEO services in Varanasi</strong> is
            built on four pillars: technical excellence, on-page optimisation,
            off-page authority building, and local SEO. We start with a thorough
            technical audit of your website — checking page speed, crawlability,
            Core Web Vitals, structured data, and mobile usability. Then we
            research the exact keywords your target audience uses, map them to
            the right pages, and craft content that satisfies both users and
            search engine algorithms.
          </p>

          <h3
            className="text-xl font-bold mb-4 mt-6"
            style={{ color: "#43B89A" }}
          >
            What Our SEO Service Includes
          </h3>
          <ul className="space-y-3 mb-6">
            {[
              "In-depth keyword research targeting high-intent local and national terms",
              "On-page SEO: title tags, meta descriptions, heading structure, internal linking",
              "Technical SEO: site speed optimisation, schema markup, XML sitemaps, Core Web Vitals",
              "Off-page SEO: high-authority link building, digital PR, and brand mentions",
              "Local SEO: Google Business Profile optimisation, citation building, map pack rankings",
              "Monthly performance reports with keyword rankings, organic traffic, and conversion data",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 text-sm"
              >
                <span
                  className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(67,184,154,0.2)",
                    color: "#43B89A",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-300 text-base leading-relaxed mb-10">
            The results speak for themselves. Businesses that invest in
            consistent{" "}
            <strong className="text-white">SEO services in Varanasi</strong> see
            a compound growth in organic traffic over time — unlike paid
            advertising, which stops the moment you pause spending. With our
            transparent reporting and honest communication, you will always know
            exactly where your rankings stand and what we are doing to improve
            them.
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(67,184,154,0.4), transparent)",
            }}
          />

          {/* SMM Section */}
          <h2
            className="text-2xl sm:text-3xl font-black mb-5"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#43B89A" }}>
              Social Media Marketing (SMM)
            </span>{" "}
            in Varanasi — Build Your Brand Where Your Audience Lives
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            India has over 500 million active social media users, and a
            significant portion of them are right here in Varanasi and eastern
            Uttar Pradesh. Instagram Reels, Facebook posts, and LinkedIn
            articles have become the primary way consumers discover new brands,
            evaluate credibility, and make purchase decisions. If your business
            is not consistently showing up on these platforms, you are handing
            market share to your competitors.{" "}
            <strong className="text-white">SMM in Varanasi</strong> is no longer
            a luxury for large corporations — it is a necessity for every
            business that wants to stay relevant.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            Our{" "}
            <strong className="text-white">
              social media marketing in Varanasi
            </strong>{" "}
            service is comprehensive and platform-native. We do not just
            schedule generic posts — we create a full social media strategy
            rooted in your brand&apos;s identity, your audience&apos;s
            interests, and the specific content formats that perform best on
            each platform. From short-form Reels for Instagram to
            thought-leadership articles for LinkedIn, every piece of content we
            create is purposeful.
          </p>

          <h3
            className="text-xl font-bold mb-4 mt-6"
            style={{ color: "#43B89A" }}
          >
            Our Social Media Marketing Services
          </h3>
          <ul className="space-y-3 mb-6">
            {[
              "Platform strategy and profile optimisation for Instagram, Facebook, LinkedIn, and YouTube",
              "Custom content creation: graphics, Reels, carousels, and short videos",
              "Community management: responding to comments, DMs, and reviews",
              "Paid social campaigns: Meta Ads, Instagram promotions, and LinkedIn sponsored content",
              "Influencer outreach and collaboration management for Varanasi-based audiences",
              "Monthly social media analytics: reach, engagement rate, follower growth, and conversions",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 text-sm"
              >
                <span
                  className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(67,184,154,0.2)",
                    color: "#43B89A",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-300 text-base leading-relaxed mb-10">
            Effective <strong className="text-white">SMM in Varanasi</strong>{" "}
            means understanding the local culture, seasonal trends like
            festivals such as Diwali, Dev Deepawali, and Holi, and the specific
            aspirations of your target demographic. Our team lives and breathes
            this city — and that local intelligence is what gives your social
            media presence an authentic edge that outside agencies simply cannot
            replicate.
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(67,184,154,0.4), transparent)",
            }}
          />

          {/* PPC Section */}
          <h2
            className="text-2xl sm:text-3xl font-black mb-5"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#43B89A" }}>PPC Advertising</span> in
            Varanasi — Drive Instant, High-Quality Traffic
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            Search Engine Optimisation is a long game. But sometimes your
            business needs results now — a new product launch, a seasonal offer,
            a clinic that needs patients this week. That is where{" "}
            <strong className="text-white">PPC in Varanasi</strong> comes in.
            Pay-Per-Click advertising on Google and Meta platforms lets you
            place your business at the very top of search results immediately,
            targeting the exact keywords and audience segments most likely to
            convert.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            Our <strong className="text-white">PPC services in Varanasi</strong>{" "}
            are centred around one principle: maximum return on every rupee
            spent. We do not believe in set-and-forget campaigns. Our certified
            Google Ads specialists continuously monitor performance, test
            different ad creatives and landing pages, adjust bids based on
            competition and search intent, and ruthlessly eliminate wasted
            spend. The result is a lean, high-performing campaign that delivers
            qualified leads at the lowest possible cost per acquisition.
          </p>

          <h3
            className="text-xl font-bold mb-4 mt-6"
            style={{ color: "#43B89A" }}
          >
            PPC Services We Provide
          </h3>
          <ul className="space-y-3 mb-6">
            {[
              "Google Search Ads: appear at the top of results when customers search for your services",
              "Google Display Network: visual banner ads across thousands of relevant websites",
              "Meta Ads (Facebook & Instagram): precise demographic and interest-based targeting",
              "Conversion tracking and Google Analytics 4 setup for full-funnel visibility",
              "A/B testing of ad copy, headlines, CTAs, and landing pages",
              "Remarketing campaigns to re-engage visitors who did not convert the first time",
              "Detailed ROI reporting: cost per lead, conversion rate, ROAS, and campaign spend breakdown",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 text-sm"
              >
                <span
                  className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(67,184,154,0.2)",
                    color: "#43B89A",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-300 text-base leading-relaxed mb-10">
            Many businesses in Varanasi attempt to run Google Ads themselves and
            end up burning their budget on irrelevant clicks. Our{" "}
            <strong className="text-white">PPC services in Varanasi</strong>{" "}
            remove that risk entirely. From the initial account structure and
            negative keyword lists to ongoing bid management and creative
            refreshes, we handle everything — so you can focus on serving the
            customers we send you.
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(67,184,154,0.4), transparent)",
            }}
          />

          {/* Content Marketing Section */}
          <h2
            className="text-2xl sm:text-3xl font-black mb-5"
            style={{ color: "#ffffff" }}
          >
            <span style={{ color: "#43B89A" }}>Content Marketing</span> in
            Varanasi — Educate, Engage, and Convert
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            &quot;Content is king&quot; is a phrase that has been around for
            years, but its truth has only deepened in the age of AI-generated
            noise. Today, genuinely helpful, well-researched, and authentically
            written content is rarer and more valuable than ever. Businesses
            that invest in serious{" "}
            <strong className="text-white">
              content marketing in Varanasi
            </strong>{" "}
            build compounding advantages: more organic search traffic, stronger
            brand authority, higher customer trust, and lower cost of
            acquisition over time.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            Our content marketing service goes far beyond writing blog posts. We
            develop a full content strategy — identifying the topics your
            audience is actively searching for, the formats they prefer
            (articles, videos, infographics, podcasts, or social content), and
            the distribution channels that will reach them most effectively.
            Every piece of content we create serves a dual purpose: it answers a
            real question for a real person, and it signals expertise to search
            engines through proper on-page SEO integration.
          </p>

          <h3
            className="text-xl font-bold mb-4 mt-6"
            style={{ color: "#43B89A" }}
          >
            Content Formats We Specialise In
          </h3>
          <ul className="space-y-3 mb-6">
            {[
              "Long-form blog posts and in-depth articles (SEO-optimised, 1000–3000 words)",
              "Website copy: home page, service pages, about pages, and landing pages",
              "Video scripts for YouTube, Instagram Reels, and product explainers",
              "Infographics and data visualisations that simplify complex information",
              "Case studies and success stories that build trust with potential clients",
              "Email newsletters that nurture your subscriber list toward conversion",
              "Social media captions, ad copy, and promotional content",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 text-sm"
              >
                <span
                  className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(67,184,154,0.2)",
                    color: "#43B89A",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-300 text-base leading-relaxed mb-10">
            The synergy between{" "}
            <strong className="text-white">
              content marketing in Varanasi
            </strong>{" "}
            and SEO is perhaps the most powerful growth lever available to small
            and medium businesses. When you consistently publish helpful content
            around the topics your customers care about, you build topical
            authority with Google — meaning more of your pages rank, for more
            keywords, generating more organic traffic without additional
            advertising spend. It is a strategy that pays dividends for years.
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(67,184,154,0.4), transparent)",
            }}
          />

          {/* Why Choose Section */}
          <h2
            className="text-2xl sm:text-3xl font-black mb-5"
            style={{ color: "#ffffff" }}
          >
            Why Choose MarketingHubb as Your{" "}
            <span style={{ color: "#43B89A" }}>Digital Agency in Varanasi</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-6">
            There is no shortage of marketing vendors in the digital space, and
            we understand that choosing the right{" "}
            <strong className="text-white">
              digital marketing agency in Varanasi
            </strong>{" "}
            is one of the most important decisions you will make for your
            business this year. Here is what makes MarketingHubb different — and
            why our clients stay with us long after their first campaign.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: "Local Market Expertise",
                body: "We are based in Varanasi. We understand the local consumer mindset, seasonal buying patterns, competitive landscape, and regional language nuances that outside agencies miss.",
              },
              {
                title: "Data-Driven Strategy",
                body: "Every decision we make is backed by data — from keyword research and competitor analysis to campaign performance and conversion tracking. No guesswork, ever.",
              },
              {
                title: "Certified Experts",
                body: "Our team holds certifications in Google Ads, Meta Blueprint, and HubSpot. You are working with professionals who are held to the highest industry standards.",
              },
              {
                title: "Transparent Reporting",
                body: "You get clear, jargon-free monthly reports showing exactly what we did, what results it produced, and what we are planning next. No smoke and mirrors.",
              },
              {
                title: "No Long-Term Contracts",
                body: "We earn your business every single month. Our month-to-month engagement model means you are always free to leave — but our results ensure you will not want to.",
              },
              {
                title: "Proven Results",
                body: "10+ happy clients, 85+ campaigns delivered, and a 98% client satisfaction rate. As a young agency founded in 2024, every campaign matters deeply to us.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(67,184,154,0.15)",
                }}
              >
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "#43B89A" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-300 text-base leading-relaxed mb-10">
            As a growing{" "}
            <strong className="text-white">digital agency in Varanasi</strong>,
            our team brings together specialists in SEO, paid media, social
            media management, content creation, and web development. We do not
            outsource your work to freelancers in other cities — your campaigns
            are managed by people who care about Varanasi&apos;s business
            community because we are part of it. Our founder Saurabh Chaubey
            built MarketingHubb from the ground up with a simple belief: that
            local businesses deserve the same quality of digital marketing
            support that large brands get from big-city agencies — without the
            inflated retainers or the impersonal service.
          </p>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-4 rounded-2xl p-6 mb-12"
            style={{
              background: "rgba(67,184,154,0.07)",
              border: "1px solid rgba(67,184,154,0.2)",
            }}
          >
            {[
              { number: "10+", label: "Happy Clients" },
              { number: "85+", label: "Campaigns Delivered" },
              { number: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-black"
                  style={{ color: "#43B89A" }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(67,184,154,0.4), transparent)",
            }}
          />

          {/* Conclusion / CTA */}
          <h2
            className="text-2xl sm:text-3xl font-black mb-5"
            style={{ color: "#ffffff" }}
          >
            Ready to Grow Your Business with the Right{" "}
            <span style={{ color: "#43B89A" }}>Digital Marketing Partner?</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-5">
            Whether you are looking for top-ranked{" "}
            <strong className="text-white">SEO services in Varanasi</strong>, a
            high-impact{" "}
            <strong className="text-white">
              social media marketing strategy
            </strong>
            , laser-targeted{" "}
            <strong className="text-white">PPC campaigns in Varanasi</strong>,
            or a full{" "}
            <strong className="text-white">content marketing programme</strong>{" "}
            that builds your brand&apos;s authority over time — MarketingHubb
            has the expertise, the tools, and the local understanding to make it
            happen.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Stop losing customers to competitors who are more visible online.
            Partner with Varanasi&apos;s most results-focused{" "}
            <strong className="text-white">digital marketing agency</strong> and
            start building the digital presence your business deserves. The
            first conversation is free — and it could change everything for your
            brand.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "#43B89A", color: "#071C35" }}
              data-ocid="services.primary_button"
            >
              Get Your Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/917307260253?text=Hi%2C%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all"
              style={{
                border: "1px solid rgba(67,184,154,0.5)",
                color: "#43B89A",
                background: "transparent",
              }}
              data-ocid="services.secondary_button"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
