import { Link } from "@tanstack/react-router";
import { BarChart2, ChevronRight, Lightbulb, Target } from "lucide-react";
import { useEffect } from "react";
import { ParticleField } from "../components/ParticleField";
import { useCountUp } from "../hooks/useCountUp";
import { useSEO } from "../hooks/useSEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

const values = [
  {
    icon: <Lightbulb size={36} className="text-seagreen" />,
    title: "Innovation",
    description:
      "We stay ahead of trends, constantly experimenting with new strategies to keep our clients competitive.",
  },
  {
    icon: <BarChart2 size={36} className="text-seagreen" />,
    title: "Data-Driven",
    description:
      "Every decision is backed by data. We analyze, test, and optimize campaigns for maximum performance.",
  },
  {
    icon: <Target size={36} className="text-seagreen" />,
    title: "Results-Focused",
    description:
      "We measure success by your growth — leads, sales, and revenue. Your success is our success.",
  },
];

function StatCard({
  value,
  suffix,
  label,
}: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="text-center p-8 card-gradient rounded-2xl border border-seagreen/20"
    >
      <div className="text-5xl font-black text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-seagreen font-medium">{label}</div>
    </div>
  );
}

export function AboutPage() {
  useSEO({
    title:
      "About MarketingHubb | Digital Marketing Experts in Varanasi Since 2024",
    description:
      "Learn about MarketingHubb - founded by Saurabh Chaubey in 2024. We are Varanasi's trusted digital marketing agency with 2+ years of expertise in SEO, SMM, and PPC.",
    keywords:
      "about MarketingHubb, Saurabh Chaubey digital marketing, digital marketing agency Varanasi, digital marketing experts Varanasi",
    canonical: "https://marketinghubb.in/about",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About MarketingHubb",
      description:
        "About MarketingHubb digital marketing agency founded by Saurabh Chaubey in Varanasi in 2024.",
      url: "https://marketinghubb.in/about",
    },
  });
  const storyRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const founderRef = useScrollReveal();

  useEffect(() => {
    document.title =
      "About Us | MarketingHubb - Best Digital Marketing Agency in Varanasi";
  }, []);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
        <ParticleField count={15} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-seagreen text-xs font-bold uppercase tracking-widest mb-4">
            Home / About Us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            ABOUT <span style={{ color: "#43B89A" }}>US</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Varanasi's most trusted digital marketing agency. Building brands,
            driving growth.
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

      {/* Story & Mission */}
      <section className="py-24 bg-[#F4FBFA] confetti-bg" ref={storyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="scroll-reveal-left">
              <span className="text-seagreen-dark text-xs font-bold uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mt-2 mb-6 leading-tight">
                FROM VARANASI TO THE WORLD
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MarketingHubb was born in 2024 in the ancient city of Varanasi
                with a bold mission: to democratize digital marketing for Indian
                businesses. Founded in 2024 by Saurabh Chaubey, MarketingHubb
                has quickly grown into a results-driven digital marketing
                agency.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We saw local businesses struggling to compete in the digital
                space while larger agencies catered only to metropolitan
                clients. We built MarketingHubb to bridge that gap — bringing
                world-class digital marketing expertise to businesses in Tier-2
                and Tier-3 cities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have served 150+ clients across India,
                delivering measurable results that translate into real business
                growth.
              </p>
            </div>
            <div className="scroll-reveal-right">
              <span className="text-seagreen-dark text-xs font-bold uppercase tracking-widest">
                Our Mission
              </span>
              <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mt-2 mb-6 leading-tight">
                EMPOWERING BRANDS TO THRIVE ONLINE
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Our Mission",
                    text: "To empower every Indian business with the digital tools and strategies needed to grow, compete, and win online.",
                  },
                  {
                    title: "Our Vision",
                    text: "To become India's most trusted digital marketing partner, known for transparency, results, and innovation.",
                  },
                  {
                    title: "Our Values",
                    text: "Integrity, excellence, creativity, and an unwavering commitment to our clients' success.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="w-1 rounded-full flex-shrink-0"
                      style={{ background: "#43B89A" }}
                    />
                    <div>
                      <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={statsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              By The Numbers
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              WHY CHOOSE US
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value={10} suffix="+" label="Happy Clients" />
            <StatCard value={85} suffix="+" label="Campaigns Delivered" />
            <StatCard value={2} suffix="+" label="Years Experience" />
            <StatCard value={98} suffix="%" label="Client Retention" />
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
                leadership, the agency has delivered 85+ successful campaigns
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
                data-ocid="about.founder.link"
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

      {/* Values */}
      <section className="py-24 bg-[#F4FBFA] confetti-bg" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen-dark text-xs font-bold uppercase tracking-widest">
              What Drives Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mt-2">
              OUR CORE VALUES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="scroll-reveal card-gradient rounded-2xl p-8 border border-seagreen/20 service-card text-center"
                style={{
                  transitionDelay: `${i * 0.15}s`,
                  background: "linear-gradient(135deg, #0B2A4A, #071C35)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(67,184,154,0.1)" }}
                >
                  {v.icon}
                </div>
                <h3 className="text-white font-black text-xl uppercase mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 scroll-reveal">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-navy bg-seagreen hover:bg-seagreen-light transition-all hover:shadow-teal text-sm uppercase tracking-wide"
              data-ocid="about.primary_button"
            >
              Work With Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
