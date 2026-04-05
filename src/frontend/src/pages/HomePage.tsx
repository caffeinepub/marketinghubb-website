import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Globe,
  HeadphonesIcon,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  Monitor,
  Search,
  Share2,
  ShieldCheck,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ParticleField } from "../components/ParticleField";
import { useCountUp } from "../hooks/useCountUp";
import { useSEO } from "../hooks/useSEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

type HomeServicePath =
  | "/services/seo"
  | "/services/smm"
  | "/services/ppc"
  | "/services/content-marketing"
  | "/services/web-design"
  | "/services/email-marketing";

interface HomeServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: HomeServicePath;
}

const services: HomeServiceItem[] = [
  {
    icon: <Search size={32} className="text-seagreen" />,
    title: "SEO Optimization",
    description:
      "Dominate search rankings with our data-driven SEO strategies. We boost your organic traffic and visibility.",
    path: "/services/seo",
  },
  {
    icon: <Share2 size={32} className="text-seagreen" />,
    title: "Social Media Marketing",
    description:
      "Build a powerful social presence. We create engaging content that converts followers into customers.",
    path: "/services/smm",
  },
  {
    icon: <TrendingUp size={32} className="text-seagreen" />,
    title: "PPC Advertising",
    description:
      "Maximize ROI with precision-targeted paid campaigns on Google, Facebook, and Instagram.",
    path: "/services/ppc",
  },
  {
    icon: <FileText size={32} className="text-seagreen" />,
    title: "Content Marketing",
    description:
      "Tell your brand story. We craft compelling content that educates, engages, and drives conversions.",
    path: "/services/content-marketing",
  },
  {
    icon: <Monitor size={32} className="text-seagreen" />,
    title: "Web Design",
    description:
      "Beautiful, conversion-optimized websites that make lasting impressions and drive business growth.",
    path: "/services/web-design",
  },
  {
    icon: <Mail size={32} className="text-seagreen" />,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized email campaigns that deliver results.",
    path: "/services/email-marketing",
  },
];

const whyCards = [
  {
    icon: <Trophy size={28} className="text-seagreen" />,
    title: "Proven Results",
    description:
      "100+ brands grown, 500+ campaigns delivered with measurable ROI. Our track record speaks louder than promises.",
  },
  {
    icon: <MapPin size={28} className="text-seagreen" />,
    title: "Local Expertise",
    description:
      "Deep understanding of Varanasi's unique market dynamics combined with national-scale strategy and execution.",
  },
  {
    icon: <ShieldCheck size={28} className="text-seagreen" />,
    title: "Transparent Pricing",
    description:
      "No hidden charges. No jargon. Clear deliverables, defined timelines, and full accountability on every rupee spent.",
  },
  {
    icon: <Layers size={28} className="text-seagreen" />,
    title: "360° Digital Services",
    description:
      "SEO to social to web design — everything under one roof. One agency, one strategy, zero coordination headaches.",
  },
  {
    icon: <LineChart size={28} className="text-seagreen" />,
    title: "Data-Driven Approach",
    description:
      "Every decision backed by analytics, insights, and real-time reporting. We let numbers guide our creativity.",
  },
  {
    icon: <HeadphonesIcon size={28} className="text-seagreen" />,
    title: "Dedicated Support",
    description:
      "A personal account manager for every client, always available. Your success is our full-time job.",
  },
];

const faqsLeft = [
  {
    q: "What services does MarketingHubb offer?",
    a: "We offer SEO, Social Media Marketing, PPC Advertising, Content Marketing, Web Design, and Email Marketing — all under one roof.",
  },
  {
    q: "How long before I see results?",
    a: "SEO typically shows results in 3–6 months. PPC and Social Media campaigns can show traction within weeks of launch.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. We've helped everything from local Varanasi shops to growing startups scale their digital presence effectively.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "We offer flexible monthly plans with no long-term lock-in. You're free to scale up, pause, or stop anytime.",
  },
  {
    q: "How do you measure success?",
    a: "We track KPIs like traffic, leads, conversions, ROAS, and engagement — all shared in detailed monthly reports.",
  },
  {
    q: "Can I get a custom marketing plan?",
    a: "Yes! Every client gets a tailored strategy based on their business goals, budget, and target audience.",
  },
];

const faqsRight = [
  {
    q: "What makes you different from other agencies?",
    a: "We combine local market expertise with global best practices, and we treat every client's brand like our own business.",
  },
  {
    q: "Do you offer website development?",
    a: "Yes, we design and develop fast, modern, SEO-optimized websites built to convert visitors into loyal customers.",
  },
  {
    q: "How much does digital marketing cost?",
    a: "Packages start at affordable rates tailored to your goals. Contact us for a free consultation and custom quote.",
  },
  {
    q: "Will I have a dedicated account manager?",
    a: "Yes, every client is assigned a dedicated account manager for seamless communication, updates, and reporting.",
  },
  {
    q: "Do you handle content creation?",
    a: "Yes, our team creates blogs, social posts, ad copies, videos, and more — all branded to your unique voice.",
  },
  {
    q: "How do I get started?",
    a: "Simply contact us via our form, WhatsApp, or call. We'll schedule a free strategy call and kick off within days.",
  },
];

function OrbIcon({
  icon,
  className,
}: { icon: React.ReactNode; className: string }) {
  return (
    <div
      className={`absolute w-12 h-12 rounded-xl flex items-center justify-center bg-navy-light border border-seagreen/30 shadow-teal ${className}`}
      style={{
        top: "50%",
        left: "50%",
        marginTop: "-24px",
        marginLeft: "-24px",
      }}
    >
      {icon}
    </div>
  );
}

function HeroOrb() {
  return (
    <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-seagreen/20" />
      <div className="absolute inset-8 rounded-full border border-seagreen/15" />

      {/* Central M tile */}
      <div
        className="absolute inset-16 rounded-3xl flex items-center justify-center animate-pulse-glow"
        style={{ background: "linear-gradient(135deg, #0B2A4A, #071C35)" }}
      >
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-5xl animate-float"
          style={{ background: "linear-gradient(135deg, #43B89A, #36967e)" }}
        >
          M
        </div>
      </div>

      {/* Orbiting icons */}
      <div
        className="absolute inset-0"
        style={{ animation: "orbit 10s linear infinite" }}
      >
        <OrbIcon
          icon={<BarChart2 size={20} className="text-seagreen" />}
          className=""
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ animation: "orbit 14s linear infinite reverse" }}
      >
        <OrbIcon
          icon={<Megaphone size={20} className="text-seagreen-light" />}
          className=""
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ animation: "orbit2 12s linear infinite" }}
      >
        <OrbIcon
          icon={<Search size={20} className="text-seagreen" />}
          className=""
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ animation: "orbit4 16s linear infinite reverse" }}
      >
        <OrbIcon
          icon={<Globe size={20} className="text-seagreen-light" />}
          className=""
        />
      </div>
    </div>
  );
}

function StatCard({
  value,
  suffix,
  label,
}: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-black text-white mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-seagreen text-sm font-medium">{label}</div>
    </div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-seagreen/20 rounded-xl overflow-hidden"
      style={{ background: "rgba(11,42,74,0.5)" }}
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left group"
        onClick={() => setOpen((o) => !o)}
        data-ocid={`faq.toggle.${index + 1}`}
      >
        <span className="text-white font-semibold text-sm leading-snug group-hover:text-seagreen transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-seagreen shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function HomePage() {
  useSEO({
    title: "Best Digital Marketing Agency in Varanasi | MarketingHubb",
    description:
      "MarketingHubb is Varanasi's #1 digital marketing agency. Expert SEO, Social Media Marketing, PPC, Web Design & Content Marketing. Get free consultation. Call +91 73072 60253.",
    keywords:
      "best digital marketing agency Varanasi, SEO Varanasi, social media marketing Varanasi, digital marketing company Varanasi, online marketing Varanasi, MarketingHubb",
    canonical: "https://marketinghubb.in/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Best Digital Marketing Agency in Varanasi | MarketingHubb",
      description:
        "MarketingHubb is Varanasi's leading digital marketing agency offering SEO, SMM, PPC, Web Design and Content Marketing.",
      url: "https://marketinghubb.in/",
    },
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const coreContentRef = useScrollReveal();
  const whyRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const seoContentRef = useScrollReveal();
  const founderRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    document.title =
      "MarketingHubb | Best Digital Marketing Agency in Varanasi";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "MarketingHubb - Best Digital Marketing Agency in Varanasi. Expert SEO, Social Media, PPC, Content Marketing & Web Design services.",
      );
    }
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <div className="page-transition" ref={heroRef}>
      {/* Hero */}
      <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
        <ParticleField count={25} />

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            className="w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,30 1440,60 L1440,120 L0,120 Z"
              fill="#F4FBFA"
              opacity="0.06"
            />
            <path
              d="M0,80 C240,20 480,100 720,60 C960,20 1200,100 1440,50 L1440,120 L0,120 Z"
              fill="#43B89A"
              opacity="0.08"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div
                className={`transition-all duration-700 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                  style={{
                    background: "rgba(67,184,154,0.15)",
                    color: "#43B89A",
                    border: "1px solid rgba(67,184,154,0.3)",
                  }}
                >
                  #1 Digital Marketing Agency in Varanasi
                </span>
              </div>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight text-white mb-6 transition-all duration-700 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                GROW YOUR <span style={{ color: "#43B89A" }}>BUSINESS</span>{" "}
                WITH
                <br />
                DIGITAL MARKETING
              </h1>
              <p
                className={`text-gray-300 text-lg mb-8 leading-relaxed max-w-xl transition-all duration-700 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                Best Digital Marketing Agency in Varanasi — We help brands grow
                through data-driven strategies, creative campaigns, and
                measurable results.
              </p>
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full font-bold text-navy text-sm uppercase tracking-wide transition-all hover:scale-105 hover:shadow-teal-lg"
                  style={{ background: "#43B89A" }}
                  data-ocid="home.primary_button"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="px-7 py-3.5 rounded-full font-bold text-white text-sm uppercase tracking-wide border border-white/30 hover:border-seagreen hover:text-seagreen transition-all"
                  data-ocid="home.secondary_button"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right: Orb */}
            <div
              className={`flex justify-center transition-all duration-700 ${
                heroVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <HeroOrb />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#F4FBFA] confetti-bg" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen-dark text-xs font-bold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mt-2 mb-4 tracking-tight">
              OUR SERVICES
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored for growth in
              the Indian market and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20 service-card teal-glow"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(67,184,154,0.1)" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-lg uppercase mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>
                <Link
                  to={s.path}
                  className="inline-flex items-center gap-1 text-seagreen text-sm font-semibold hover:gap-2 transition-all"
                  data-ocid="home.link"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#F4FBFA] confetti-bg" ref={founderRef}>
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
                data-ocid="founder.link"
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

      {/* About Preview */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={aboutRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <div className="scroll-reveal-left">
              <div className="grid grid-cols-2 gap-8">
                <StatCard value={100} suffix="+" label="Happy Clients" />
                <StatCard value={5} suffix="+" label="Years Experience" />
                <StatCard value={500} suffix="+" label="Campaigns" />
                <StatCard value={98} suffix="%" label="Satisfaction Rate" />
              </div>
            </div>

            {/* About text */}
            <div className="scroll-reveal-right">
              <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2 mb-4 leading-tight">
                ABOUT MARKETINGHUBB
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                MarketingHubb is Varanasi's premier digital marketing agency.
                Since 2024, we've helped businesses transform their online
                presence and achieve remarkable growth.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our team of passionate marketers, designers, and strategists
                combine creativity with data science to deliver campaigns that
                truly move the needle.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-navy bg-seagreen hover:bg-seagreen-light transition-all hover:shadow-teal"
                data-ocid="home.link"
              >
                Learn More About Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE CONTENT SECTION ===== */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #040f1e 0%, #071C35 50%, #0B2A4A 100%)",
        }}
        ref={coreContentRef}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: "#43B89A" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: "#43B89A" }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section label */}
          <div className="text-center mb-16 scroll-reveal">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(67,184,154,0.12)",
                color: "#43B89A",
                border: "1px solid rgba(67,184,154,0.25)",
              }}
            >
              Our Story &amp; Mission
            </span>
            <h2 className="text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
              Powering Digital Growth in{" "}
              <span style={{ color: "#43B89A" }}>Varanasi &amp; Beyond</span>
            </h2>
          </div>

          {/* Sub-section 1 */}
          <div className="scroll-reveal mb-14">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/15"
              style={{ background: "rgba(11,42,74,0.55)" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <TrendingUp size={22} className="text-seagreen" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    Born to Democratize Digital Marketing
                  </h3>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    Our Founding Vision
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">
                MarketingHubb was founded with a single, unwavering vision: to
                democratize world-class digital marketing for businesses in
                Varanasi and across India. For too long, powerful marketing
                strategies were the exclusive domain of large corporations with
                deep pockets. We changed that. We brought enterprise-grade
                expertise, tools, and talent to every business — from the chai
                stall on Assi Ghat to ambitious startups dreaming of national
                scale.
              </p>
              <p className="text-gray-400 leading-relaxed">
                In today's hyper-connected world, having a digital presence is
                no longer optional — it's survival. Every scroll that skips your
                brand is a lost impression. Every missed click is a missed
                customer. Every day without a strategy is a day your competitor
                gains ground. We exist to make sure that never happens to your
                business.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="scroll-reveal mb-14 text-center">
            <div
              className="inline-block relative px-8 py-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(67,184,154,0.1), rgba(67,184,154,0.05))",
                border: "1px solid rgba(67,184,154,0.3)",
              }}
            >
              <span
                className="text-5xl font-black leading-none absolute -top-3 left-5"
                style={{ color: "rgba(67,184,154,0.4)" }}
              >
                &ldquo;
              </span>
              <p className="text-xl lg:text-2xl font-bold text-white italic leading-snug">
                Your success is our success — that's not just a tagline,
                <br className="hidden lg:block" /> it's how we operate, every
                single day.
              </p>
              <p className="text-seagreen text-sm font-semibold mt-3">
                — MarketingHubb Philosophy
              </p>
            </div>
          </div>

          {/* Stat callouts */}
          <div className="scroll-reveal grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { val: "100+", label: "Brands Grown" },
              { val: "5+", label: "Years of Expertise" },
              { val: "500+", label: "Campaigns Delivered" },
              { val: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl py-6 px-4 border border-seagreen/20"
                style={{ background: "rgba(67,184,154,0.07)" }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ color: "#43B89A" }}
                >
                  {stat.val}
                </div>
                <div className="text-gray-400 text-xs mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="scroll-reveal flex items-center gap-4 mb-14">
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(67,184,154,0.2)" }}
            />
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "rgba(67,184,154,0.15)",
                border: "1px solid rgba(67,184,154,0.4)",
              }}
            >
              <Star size={14} className="text-seagreen" />
            </div>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(67,184,154,0.2)" }}
            />
          </div>

          {/* Sub-section 2 */}
          <div className="scroll-reveal mb-14">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/15"
              style={{ background: "rgba(11,42,74,0.55)" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <BarChart2 size={22} className="text-seagreen" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    Where Data Meets Creativity
                  </h3>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    Our Approach
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">
                We blend cutting-edge data analytics, creative storytelling, and
                advanced technology to build brands that don't just participate
                in their market — they dominate it. Our methodology is built on
                the belief that great marketing is both art and science. The art
                lives in your brand's story, your voice, your emotional
                connection with customers. The science lives in keyword
                research, A/B testing, conversion funnels, and real-time
                performance dashboards.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our services span SEO, Social Media, PPC Advertising, Content
                Marketing, Web Design, and Email Marketing — each crafted with
                precision, purpose, and a relentless focus on your business
                outcomes. We don't chase vanity metrics. We chase growth. We've
                helped 100+ businesses in Varanasi and across India transform
                from local shops into recognized, trusted brands with loyal
                customer bases.
              </p>
            </div>
          </div>

          {/* Process steps */}
          <div className="scroll-reveal mb-14">
            <h3 className="text-center text-white font-black uppercase text-lg tracking-wide mb-8">
              Our <span style={{ color: "#43B89A" }}>5-Step</span> Growth
              Process
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: "01",
                  label: "Discover",
                  desc: "Deep-dive into your brand, audience & competitors",
                },
                {
                  step: "02",
                  label: "Strategy",
                  desc: "Build a custom roadmap aligned to your goals",
                },
                {
                  step: "03",
                  label: "Execute",
                  desc: "Launch high-impact, precision-targeted campaigns",
                },
                {
                  step: "04",
                  label: "Optimize",
                  desc: "Test, iterate, and improve with live data",
                },
                {
                  step: "05",
                  label: "Scale",
                  desc: "Amplify what works and grow without limits",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="text-center rounded-2xl p-5 border border-seagreen/15 relative"
                  style={{
                    background: "rgba(11,42,74,0.6)",
                    transitionDelay: `${i * 0.08}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black mx-auto mb-3"
                    style={{
                      background: "rgba(67,184,154,0.2)",
                      color: "#43B89A",
                    }}
                  >
                    {item.step}
                  </div>
                  <div className="text-white font-black text-sm uppercase mb-2">
                    {item.label}
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-section 3 */}
          <div className="scroll-reveal">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/15"
              style={{ background: "rgba(11,42,74,0.55)" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <ShieldCheck size={22} className="text-seagreen" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    Radical Transparency. Real Results.
                  </h3>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    Our Promise
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                We believe in radical transparency — no jargon, no hidden fees,
                no smoke and mirrors. Every campaign we run is measured, every
                rupee you invest is accountable, and every report we send tells
                the full story — wins and learnings alike. We are Varanasi's
                most trusted name in digital marketing, with 2 years of proven
                results, and we've built that reputation one honest conversation
                at a time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "No hidden charges or surprise fees",
                  },
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "Monthly transparent performance reports",
                  },
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "Every rupee tracked with full accountability",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-2 rounded-xl p-4"
                    style={{ background: "rgba(67,184,154,0.07)" }}
                  >
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-reveal">
            <span className="text-seagreen-dark text-xs font-bold uppercase tracking-widest">
              Industries
            </span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-white mt-2 mb-4 tracking-tight">
              Driving Results Across{" "}
              <span style={{ color: "#43B89A" }}>Every Industry</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Our expertise spans{" "}
              <strong className="text-white">20+ industries</strong> with
              customized strategies for every business sector.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
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
            ].map((industry) => (
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
                <span className="text-white text-sm font-semibold text-center leading-tight">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE MARKETINGHUBB ===== */}
      <section className="py-28 bg-[#F0FAF8] confetti-bg" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen-dark text-xs font-bold uppercase tracking-widest">
              Reasons to Partner With Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-navy mt-2 mb-4 tracking-tight">
              Why Choose{" "}
              <span style={{ color: "#43B89A" }}>MarketingHubb?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              We don't just run campaigns — we build partnerships, drive growth,
              and deliver results that make a real difference to your bottom
              line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20 service-card teal-glow"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`why.card.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(67,184,154,0.1)" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-white font-black text-lg uppercase mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="scroll-reveal mt-14 flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <Users size={16} className="text-seagreen" />,
                text: "100+ Happy Clients",
              },
              {
                icon: <Star size={16} className="text-seagreen" />,
                text: "5-Star Rated Agency",
              },
              {
                icon: <ShieldCheck size={16} className="text-seagreen" />,
                text: "Certified Experts",
              },
              {
                icon: <Globe size={16} className="text-seagreen" />,
                text: "National Reach",
              },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-seagreen/20 text-navy-dark text-sm font-semibold shadow-sm"
              >
                {badge.icon} {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={faqRef}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
          style={{ background: "#43B89A" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-reveal">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(67,184,154,0.12)",
                color: "#43B89A",
                border: "1px solid rgba(67,184,154,0.25)",
              }}
            >
              Got Questions?
            </span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-white mb-4 tracking-tight">
              Frequently Asked{" "}
              <span style={{ color: "#43B89A" }}>Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about working with MarketingHubb.
              Can't find an answer?{" "}
              <Link
                to="/contact"
                className="text-seagreen hover:underline font-semibold"
              >
                Contact us
              </Link>
              .
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4" data-ocid="faq.list">
            {/* Left column */}
            <div className="flex flex-col gap-4 scroll-reveal-left">
              {faqsLeft.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 scroll-reveal-right">
              {faqsRight.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i + 6} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEO RICH CONTENT SECTION ===== */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "#F4FBFA" }}
        ref={seoContentRef}
      >
        {/* Subtle bg pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #43B89A 0, #43B89A 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section header */}
          <div className="text-center mb-16 scroll-reveal">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(27,160,152,0.1)",
                color: "#1BA098",
                border: "1px solid rgba(27,160,152,0.25)",
              }}
            >
              Digital Marketing Varanasi
            </span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-navy leading-tight mb-4">
              Best Digital Marketing Agency{" "}
              <span style={{ color: "#1BA098" }}>in Varanasi</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-base leading-relaxed">
              Looking for the best digital marketing agency in Varanasi that
              actually delivers real, measurable results? You've landed at the
              right place. MarketingHubb is Varanasi's most trusted digital
              marketing company — and on this page, we'll tell you exactly why.
            </p>
          </div>

          {/* Block 1 — Why Varanasi businesses need digital marketing */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#fff" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(27,160,152,0.1)" }}
                >
                  <Globe size={22} style={{ color: "#1BA098" }} />
                </div>
                <div>
                  <h2 className="text-navy text-xl font-black uppercase tracking-wide mb-1">
                    Why Every Varanasi Business Needs Digital Marketing Right
                    Now
                  </h2>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#1BA098" }}
                  >
                    The Opportunity Is Massive — Don't Miss It
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Varanasi isn't just one of India's oldest cities — it's one of
                its fastest-growing business hubs. With millions of tourists,
                students, pilgrims, and a booming local economy, the city is
                full of opportunity. But here's the thing: most businesses in
                Varanasi are still stuck doing things the old-school way. Word
                of mouth, pamphlets, local newspaper ads, the occasional
                hoarding. And while there's nothing wrong with that, you're
                leaving a LOT of money on the table if you're not online.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Think about it — when someone in Varanasi searches for "best
                hotel near Kashi Vishwanath," "CA near me in Varanasi," or
                "wedding photographer Varanasi," what shows up? If it's not your
                business, it's your competitor's. Every single day, thousands of
                people in Varanasi are searching for products and services just
                like yours.{" "}
                <strong className="text-navy">SEO in Varanasi</strong>, done
                right, puts you right in front of those people — exactly when
                they're ready to buy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                And it's not just search engines. Social media has completely
                changed how Varanasi's younger population discovers businesses.
                Whether it's Instagram reels, Facebook ads, or YouTube shorts —
                if you're not showing up in their feeds, someone else is.{" "}
                <strong className="text-navy">
                  Social media marketing (SMM) in Varanasi
                </strong>{" "}
                has become one of the most powerful, cost-effective ways to
                reach your audience and build a loyal customer base.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The bottom line? Digital marketing isn't a luxury anymore. It's
                the oxygen your business needs to survive and grow in today's
                market. And as the{" "}
                <strong className="text-navy">
                  best digital marketing agency in Varanasi
                </strong>
                , MarketingHubb is here to make that transition smooth,
                effective, and profitable for you.
              </p>
            </div>
          </div>

          {/* Keyword highlight callout */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-6 border-l-4"
              style={{
                background: "rgba(27,160,152,0.08)",
                borderLeftColor: "#1BA098",
              }}
            >
              <p className="text-navy font-semibold text-base italic leading-relaxed">
                "We've helped 100+ businesses in Varanasi get found on Google,
                grow their social media presence, and convert online traffic
                into actual paying customers. From local kirana stores to luxury
                hotels, from coaching centres to hospitals — MarketingHubb has
                done it all."
              </p>
              <p
                className="text-sm mt-3 font-bold"
                style={{ color: "#1BA098" }}
              >
                — Saurabh Goubey, Founder, MarketingHubb
              </p>
            </div>
          </div>

          {/* Block 2 — SEO in Varanasi */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#0B2A4A" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <Search size={22} className="text-seagreen" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    SEO in Varanasi — Rank #1 on Google, Get Real Customers
                  </h2>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    Search Engine Optimization Varanasi
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Let's be honest — Google has changed everything. Your customers
                aren't flipping through a phone directory anymore. They're
                pulling out their phones, typing a quick search, and calling the
                first business that comes up. If you're not on page 1, you
                practically don't exist. That's the harsh reality of modern
                business. And that's exactly why{" "}
                <strong className="text-seagreen">
                  search engine optimization in Varanasi
                </strong>{" "}
                is such a game-changer.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our SEO team at MarketingHubb doesn't just stuff keywords and
                hope for the best. We do proper, Google-friendly, white-hat SEO
                — the kind that builds lasting rankings and brings in qualified
                traffic for years. We start with a deep audit of your website,
                understand your target keywords (both short-tail and long-tail),
                analyze your competitors, and then build a strategy that's
                tailor-made for your specific business and local Varanasi
                market.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                From on-page optimization (titles, meta descriptions, headings,
                content) to off-page work (quality backlinks, local citations,
                Google Business Profile optimization) — we handle it all. We
                also do technical SEO to make sure your site loads fast, is
                mobile-friendly, and gives Google zero reason to ignore it. Our{" "}
                <strong className="text-seagreen">
                  SEO services in Varanasi
                </strong>{" "}
                have helped businesses rank on page 1 for competitive keywords
                within 3–6 months — and keep them there.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    label: "On-Page SEO",
                    desc: "Keyword-rich, structured, Google-optimized content & meta tags",
                  },
                  {
                    label: "Local SEO",
                    desc: "Google Maps ranking, local citations & Varanasi-specific targeting",
                  },
                  {
                    label: "Technical SEO",
                    desc: "Site speed, mobile optimization, Core Web Vitals & crawlability",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-4 border border-seagreen/20"
                    style={{ background: "rgba(67,184,154,0.07)" }}
                  >
                    <p className="text-seagreen font-bold text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 3 — SMM in Varanasi */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#fff" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(27,160,152,0.1)" }}
                >
                  <Share2 size={22} style={{ color: "#1BA098" }} />
                </div>
                <div>
                  <h2 className="text-navy text-xl font-black uppercase tracking-wide mb-1">
                    SMM in Varanasi — Build a Brand People Actually Follow
                  </h2>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#1BA098" }}
                  >
                    Social Media Marketing Varanasi
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Social media isn't just about posting pretty pictures. Done
                right, it's a full-blown sales engine. The people of Varanasi —
                students at BHU, young professionals, shoppers, tourists —
                they're all on Instagram, Facebook, and YouTube every single
                day.{" "}
                <strong className="text-navy">
                  Social media marketing in Varanasi
                </strong>{" "}
                is about showing up in their feeds with content that stops the
                scroll, sparks a conversation, and eventually turns a follower
                into a customer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                MarketingHubb's{" "}
                <strong className="text-navy">SMM services in Varanasi</strong>{" "}
                cover everything — content creation (graphics, reels, carousels,
                stories), copywriting, community management, paid social ad
                campaigns, influencer tie-ups, and monthly analytics reporting.
                We handle your Instagram, Facebook, LinkedIn, YouTube, and even
                WhatsApp Business — so you can focus on running your business
                while we build your brand's digital reputation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We've helped boutiques, restaurants, hospitals, coaching
                institutes, travel companies, and dozens of other businesses in
                Varanasi grow their social following from near-zero to thousands
                of engaged, real followers — not just vanity numbers. Our
                content team understands Varanasi's culture, its people, and the
                stories that resonate locally. That's what makes us the best{" "}
                <strong className="text-navy">
                  social media marketing agency in Varanasi
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Block 4 — PPC & Google Ads */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#071C35" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <TrendingUp size={22} className="text-seagreen" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    Google Ads &amp; PPC — Fast Results, Smart Budgets
                  </h2>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    Pay-Per-Click Advertising Varanasi
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                SEO takes time — and that's a good thing because the results
                last. But what if you need leads TODAY? That's where Google Ads
                and PPC (Pay-Per-Click) advertising comes in. With a
                well-structured Google Ads campaign, your business can appear at
                the very top of search results within hours — ahead of every
                organic result, ahead of every competitor. You only pay when
                someone actually clicks. It's one of the most efficient forms of
                advertising ever invented.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our PPC experts at MarketingHubb build campaigns with surgical
                precision. We research the exact keywords your Varanasi
                customers are searching, write compelling ad copy that gets
                clicks, set up tight targeting parameters, and continuously
                optimize the campaign to squeeze the maximum return out of every
                rupee. We've run successful Google Ads campaigns for real estate
                businesses, hospitals, coaching centres, e-commerce brands, and
                more — consistently delivering a strong ROAS (Return on Ad
                Spend).
              </p>
              <p className="text-gray-300 leading-relaxed">
                We also run Facebook &amp; Instagram Ads for businesses that
                want to build awareness, drive website traffic, or generate
                leads directly through social platforms. If you've tried running
                ads yourself and burnt money with nothing to show for it, you
                know how easy it is to get it wrong. Hand it over to our team —
                we'll make your budget work harder.
              </p>
            </div>
          </div>

          {/* Block 5 — Content Marketing */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#fff" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(27,160,152,0.1)" }}
                >
                  <FileText size={22} style={{ color: "#1BA098" }} />
                </div>
                <div>
                  <h2 className="text-navy text-xl font-black uppercase tracking-wide mb-1">
                    Content Marketing That Educates, Engages &amp; Converts
                  </h2>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#1BA098" }}
                  >
                    Content Strategy &amp; Creation Varanasi
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here's a truth most agencies won't tell you — content is the
                foundation of everything in digital marketing. Good SEO needs
                good content. Social media needs good content. Email marketing
                needs good content. Even paid ads need good content for the
                landing pages. Without quality content, every other digital
                marketing effort is like trying to fill a leaky bucket.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our content team at MarketingHubb creates blogs, articles,
                website copy, social media posts, video scripts, email
                newsletters, case studies, and more — all written with your
                brand's unique voice, all optimized for search engines, and all
                designed to move your audience through the buyer's journey. We
                understand Varanasi's local context and can write content that
                resonates with your audience whether they're speaking Hindi,
                English, or a beautiful mix of both.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A well-maintained blog with consistent, keyword-rich content can
                bring you thousands of organic visitors every month — for free,
                without spending a rupee on ads. It positions you as an
                authority in your industry, builds trust with potential
                customers, and gives Google a hundred reasons to rank you
                higher. That's why content marketing is one of the best
                long-term investments you can make in your
                <strong className="text-navy">
                  {" "}
                  digital marketing strategy in Varanasi
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Block 6 — Web Design */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#0B2A4A" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <Monitor size={22} className="text-seagreen" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    Web Design in Varanasi — Your Website Is Your #1 Salesperson
                  </h2>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    Website Design &amp; Development
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your website is often the very first impression a potential
                customer gets of your business. In a split second, they decide —
                does this look trustworthy? Is this professional? Should I stay
                or hit the back button? Studies show you have less than 3
                seconds to make that first impression. A slow, outdated, or
                confusing website doesn't just hurt your brand — it actively
                drives customers away.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                MarketingHubb designs and develops fast, beautiful,
                mobile-responsive websites that are built to convert visitors
                into customers. We don't use cheap templates and call it a day.
                Every website we build is custom-designed to reflect your brand
                identity, optimized for SEO from day one, and built with
                conversion in mind — clear CTAs, intuitive navigation, fast
                loading speeds, and a user experience that just feels right.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you need a simple business website, a full-featured
                e-commerce store, a portfolio site, or a landing page for your
                ad campaigns — we've got you covered. We've delivered websites
                for businesses across Varanasi in industries including tourism,
                real estate, education, healthcare, retail, and more. Our
                websites don't just look good — they rank on Google, load fast
                on mobile, and actually help you grow your business.
              </p>
            </div>
          </div>

          {/* Block 7 — Local SEO */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#fff" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(27,160,152,0.1)" }}
                >
                  <MapPin size={22} style={{ color: "#1BA098" }} />
                </div>
                <div>
                  <h2 className="text-navy text-xl font-black uppercase tracking-wide mb-1">
                    Local SEO for Varanasi — Get Found by Customers Near You
                  </h2>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#1BA098" }}
                  >
                    Local Search Optimization Varanasi
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you run a local business in Varanasi — a restaurant, a
                clinic, a boutique, a coaching institute, a travel agency,
                whatever it is — local SEO is your most powerful marketing tool.
                "Near me" searches have exploded in India. People search for
                "best biryani near me in Varanasi," "dentist near Sigra," "CA
                near Lanka BHU" — thousands of these searches happen every
                single day. Local SEO makes sure your business shows up in those
                results.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our local SEO services include full Google Business Profile
                optimization (so you show up in Google Maps and the local
                "3-pack"), building consistent local citations (NAP — Name,
                Address, Phone) across directories, earning local reviews, and
                creating location-specific content that targets Varanasi
                customers. We know Varanasi's neighbourhoods — Sigra, Lanka,
                Godowlia, Assi, Mahmoorganj, Cantt, Varanasi Cantonment — and we
                build geo-targeted strategies that work specifically in your
                area.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Local SEO is also incredibly cost-effective compared to
                traditional advertising. Once you rank well locally, the traffic
                keeps coming in without ongoing ad spend. It's the gift that
                keeps on giving. As the leading{" "}
                <strong className="text-navy">
                  digital marketing company in Varanasi
                </strong>
                , we've helped dozens of local businesses dominate their local
                search results — and we can do the same for you.
              </p>
            </div>
          </div>

          {/* Block 8 — Why MarketingHubb */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#071C35" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <Trophy size={22} className="text-seagreen" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    Why MarketingHubb Is the Best Digital Marketing Agency in
                    Varanasi
                  </h2>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    Our Competitive Advantage
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Look, we know there are other digital marketing agencies in
                Varanasi. We're not going to pretend there aren't. But here's
                what makes us genuinely different — and we're not just saying
                this for marketing purposes, we mean it. We're a Varanasi-based
                team. We live here. We know this market. We understand what
                Varanasi customers want, how they search, what kind of content
                they respond to, and how local businesses operate. That's a huge
                advantage that no outsider agency can replicate.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Second, we don't do cookie-cutter strategies. Every client we
                work with gets a custom strategy built specifically for their
                business, their goals, and their budget. Whether you're spending
                ₹10,000 a month or ₹5 lakhs a month, you get the same level of
                strategic thinking, the same quality of work, and the same
                commitment to results. We don't have "junior account managers"
                who just copy-paste strategies. Our senior team is personally
                involved in every campaign.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                Third — and this one matters a lot — we're transparent to a
                fault. You'll always know exactly what we're doing, why we're
                doing it, and what results it's producing. No jargon-heavy
                reports that make your head spin. Just clear, honest, actionable
                updates. If something's not working, we'll tell you and fix it.
                If something's working brilliantly, we'll scale it. That's how
                we've built a reputation as the most trusted{" "}
                <strong className="text-seagreen">
                  digital marketing agency in Varanasi
                </strong>
                .
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "Local Varanasi team with deep market knowledge",
                  },
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "Custom strategies for every single client",
                  },
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "100% transparent reporting with no fluff",
                  },
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "Proven results across 10+ industries",
                  },
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "Affordable pricing with no hidden charges",
                  },
                  {
                    icon: <CheckCircle size={16} className="text-seagreen" />,
                    text: "Dedicated account manager for every client",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-2 rounded-xl p-4"
                    style={{ background: "rgba(67,184,154,0.07)" }}
                  >
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 9 — Results & Approach */}
          <div className="scroll-reveal mb-12">
            <div
              className="rounded-2xl p-8 lg:p-10 border border-seagreen/20"
              style={{ background: "#fff" }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(27,160,152,0.1)" }}
                >
                  <BarChart2 size={22} style={{ color: "#1BA098" }} />
                </div>
                <div>
                  <h2 className="text-navy text-xl font-black uppercase tracking-wide mb-1">
                    Our Results Speak for Themselves
                  </h2>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#1BA098" }}
                  >
                    Real Impact, Real Numbers
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We've worked with businesses across hospitality, education,
                healthcare, real estate, retail, and professional services in
                Varanasi and surrounding regions. Without naming clients
                publicly (we respect privacy), here's the kind of impact our
                work has delivered: A local coaching institute in Lanka went
                from getting 10–15 enquiries a month to 80–100 enquiries per
                month after our SEO and Google Ads work. A boutique hotel near
                Assi Ghat saw direct booking revenue increase by 40% in under 6
                months after we revamped their social media presence and ran
                targeted Instagram ads.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A dental clinic in Sigra that was barely visible online started
                ranking on Google's first page for multiple local keywords
                within 4 months of our local SEO work — and their patient
                footfall increased noticeably. A travel company in Varanasi
                Cantonment saw their website traffic triple after we implemented
                a content marketing strategy combined with SEO — and they
                started getting consistent international tourist inquiries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These aren't one-off lucky results. This is what happens when
                you combine deep local knowledge with modern digital marketing
                expertise and actually put in the work. This is what{" "}
                <strong className="text-navy">
                  MarketingHubb — the best digital marketing company in Varanasi
                </strong>{" "}
                — does for every single client we take on.
              </p>
            </div>
          </div>

          {/* Block 10 — Get Started */}
          <div className="scroll-reveal mb-4">
            <div
              className="rounded-2xl p-8 lg:p-10 border-2"
              style={{
                background: "linear-gradient(135deg, #0B2A4A 0%, #071C35 100%)",
                borderColor: "rgba(67,184,154,0.4)",
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(67,184,154,0.15)" }}
                >
                  <ArrowRight size={22} className="text-seagreen" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-black uppercase tracking-wide mb-1">
                    How to Get Started With MarketingHubb
                  </h2>
                  <p className="text-seagreen text-xs font-semibold uppercase tracking-widest">
                    It's Simple, Fast &amp; Risk-Free
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">
                Getting started is easier than you think. There's no big upfront
                commitment, no confusing paperwork, no pressure. Just reach out
                to us — through our contact form, a WhatsApp message, or a
                simple phone call — and we'll set up a free strategy
                consultation. In that call, we'll understand your business, your
                goals, and your current digital presence, and give you a clear
                picture of what's possible and how we'd approach it.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                If it feels like a good fit (and we're confident it will), we'll
                put together a custom proposal with clear deliverables,
                timelines, and pricing. No vague "packages," no hidden fees, no
                surprises. You'll know exactly what you're getting before you
                spend a single rupee. We work on a monthly retainer basis with
                no long-term contracts — because we believe our results should
                keep you with us, not a contract.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-navy uppercase tracking-wide hover:scale-105 transition-all"
                  style={{ background: "#43B89A" }}
                  data-ocid="seo.primary_button"
                >
                  Get Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/917307260253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-seagreen border border-seagreen/50 uppercase tracking-wide hover:bg-seagreen/10 transition-all"
                  data-ocid="seo.button"
                >
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>

          {/* Bottom SEO keyword cloud */}
          <div className="scroll-reveal mt-12 text-center">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              MarketingHubb — Best Digital Marketing Agency in Varanasi | SEO in
              Varanasi | SMM in Varanasi | Social Media Marketing Varanasi |
              Search Engine Optimization Varanasi | Digital Marketing Company
              Varanasi | Google Ads Varanasi | PPC Agency Varanasi | Web Design
              Varanasi | Local SEO Varanasi | Content Marketing Varanasi |
              Online Marketing Varanasi | Digital Marketing Services Varanasi |
              Instagram Marketing Varanasi | Facebook Ads Varanasi | Mahmoorganj
              Akashwani Varanasi 221010
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #36967e 0%, #43B89A 50%, #5CC7AE 100%)",
        }}
        ref={ctaRef}
      >
        <ParticleField count={10} />
        <div className="max-w-4xl mx-auto px-4 text-center relative scroll-reveal">
          <div className="w-16 h-1 bg-white/40 mx-auto mb-8 rounded-full" />
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-navy mb-6 leading-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-navy/70 text-lg mb-10 max-w-2xl mx-auto">
            Join 100+ businesses that trust MarketingHubb for their digital
            marketing success. Let's create your growth story together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
              data-ocid="home.primary_button"
            >
              Contact Us Today
            </Link>
            <a
              href="https://wa.me/917307260253"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-navy border-2 border-navy uppercase tracking-wide hover:bg-navy hover:text-seagreen transition-all"
              data-ocid="home.button"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-navy/60 text-sm">
            <span className="flex items-center gap-1">
              <Star size={14} className="text-navy" /> 5-Star Rated
            </span>
            <span>•</span>
            <span>100% Transparent</span>
            <span>•</span>
            <span>No Long-Term Contracts</span>
          </div>
        </div>
      </section>
    </div>
  );
}
