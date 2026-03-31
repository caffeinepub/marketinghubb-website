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

export function ServicesPage() {
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
          <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
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
      <section className="py-24 bg-[#F4FBFA] confetti-bg" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h3 className="text-white font-black text-xl uppercase mb-3">
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
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
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
                <h3 className="text-white font-black text-lg uppercase mb-3">
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
