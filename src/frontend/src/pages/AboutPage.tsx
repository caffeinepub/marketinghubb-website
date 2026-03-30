import { Link } from "@tanstack/react-router";
import {
  BarChart2,
  ChevronRight,
  Lightbulb,
  Linkedin,
  Target,
} from "lucide-react";
import { useEffect } from "react";
import { ParticleField } from "../components/ParticleField";
import { useCountUp } from "../hooks/useCountUp";
import { useScrollReveal } from "../hooks/useScrollReveal";

const team = [
  {
    name: "Arjun Sharma",
    role: "CEO & Founder",
    image: "/assets/generated/team-arjun.dim_300x300.jpg",
    bio: "10+ years in digital marketing. Visionary leader who built MarketingHubb from the ground up.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Singh",
    role: "Marketing Director",
    image: "/assets/generated/team-priya.dim_300x300.jpg",
    bio: "Brand storytelling expert with a passion for data-driven campaigns and creative strategy.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rahul Gupta",
    role: "SEO Specialist",
    image: "/assets/generated/team-rahul.dim_300x300.jpg",
    bio: "Search engine wizard who has helped 50+ businesses rank on page 1 of Google.",
    linkedin: "https://linkedin.com",
  },
];

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
  const storyRef = useScrollReveal();
  const teamRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const valuesRef = useScrollReveal();

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
          <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            ABOUT <span style={{ color: "#43B89A" }}>US</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Varanasi’s most trusted digital marketing agency. Building brands,
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
                MarketingHubb was born in 2019 in the ancient city of Varanasi
                with a bold mission: to democratize digital marketing for Indian
                businesses. What started as a two-person team has grown into a
                full-service agency of 15+ passionate professionals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We saw local businesses struggling to compete in the digital
                space while larger agencies catered only to metropolitan
                clients. We built MarketingHubb to bridge that gap — bringing
                world-class digital marketing expertise to businesses in Tier-2
                and Tier-3 cities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we’re proud to have served 150+ clients across India,
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
                    text: "To become India’s most trusted digital marketing partner, known for transparency, results, and innovation.",
                  },
                  {
                    title: "Our Values",
                    text: "Integrity, excellence, creativity, and an unwavering commitment to our clients’ success.",
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

      {/* Team */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={teamRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              Our People
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              THE TEAM BEHIND THE GROWTH
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="scroll-reveal bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
                style={{ transitionDelay: `${i * 0.15}s` }}
                data-ocid={`about.team.card.${i + 1}`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-navy font-black text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-seagreen-dark font-semibold text-sm uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-seagreen-dark text-sm font-semibold hover:text-seagreen transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#F4FBFA] confetti-bg" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen-dark text-xs font-bold uppercase tracking-widest">
              By The Numbers
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-navy mt-2">
              WHY CHOOSE US
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value={150} suffix="+" label="Happy Clients" />
            <StatCard value={500} suffix="+" label="Campaigns Delivered" />
            <StatCard value={5} suffix="+" label="Years Experience" />
            <StatCard value={98} suffix="%" label="Client Retention" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={valuesRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-seagreen text-xs font-bold uppercase tracking-widest">
              What Drives Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              OUR CORE VALUES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="scroll-reveal card-gradient rounded-2xl p-8 border border-seagreen/20 service-card text-center"
                style={{ transitionDelay: `${i * 0.15}s` }}
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
