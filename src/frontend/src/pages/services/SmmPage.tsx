import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  ChevronDown,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ParticleField } from "../../components/ParticleField";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const benefits = [
  {
    icon: <Users size={28} className="text-seagreen" />,
    title: "Brand Awareness",
    description:
      "Put your brand in front of thousands of people in Varanasi and beyond. We craft content that gets noticed, shared, and remembered.",
  },
  {
    icon: <Heart size={28} className="text-seagreen" />,
    title: "Community Building",
    description:
      "Build a loyal fanbase around your brand. We manage comments, DMs, and discussions to create genuine relationships with your audience.",
  },
  {
    icon: <Target size={28} className="text-seagreen" />,
    title: "Lead Generation",
    description:
      "Turn social followers into real business leads with strategic calls-to-action, lead magnets, and conversion-focused campaigns.",
  },
  {
    icon: <Share2 size={28} className="text-seagreen" />,
    title: "Platform Expertise",
    description:
      "Instagram, Facebook, LinkedIn, YouTube, Twitter — we know each platform inside out and tailor your strategy for each one.",
  },
  {
    icon: <MessageCircle size={28} className="text-seagreen" />,
    title: "Content Creation",
    description:
      "Scroll-stopping posts, Reels, Stories, and graphics created by our in-house creative team. Your feed will always look on-brand and engaging.",
  },
  {
    icon: <BarChart2 size={28} className="text-seagreen" />,
    title: "Paid Social Campaigns",
    description:
      "Highly targeted Meta and Instagram ads that reach your exact audience by age, interest, location, and behavior — maximizing every rupee.",
  },
];

const faqs = [
  {
    q: "What is Social Media Marketing (SMM)?",
    a: "Social Media Marketing is the use of platforms like Instagram, Facebook, LinkedIn, and YouTube to promote your brand, engage with your audience, and drive traffic to your website. It includes both organic content (posts, stories, reels) and paid advertising.",
  },
  {
    q: "Which social media platforms should my business be on?",
    a: "It depends on your business type and target audience. Instagram and Facebook are great for most local businesses in Varanasi. LinkedIn is ideal for B2B companies. YouTube works well for brands with video content. We help you identify the right platforms and build a focused strategy for each.",
  },
  {
    q: "How often should I post on social media?",
    a: "Consistency matters more than frequency. For most businesses, posting 4-6 times per week on Instagram and Facebook is effective. We create a content calendar tailored to your brand so you never run out of ideas and always stay active.",
  },
  {
    q: "What is a social media strategy and why do I need one?",
    a: "A social media strategy is a roadmap that outlines your goals, target audience, content themes, posting schedule, and KPIs. Without a strategy, social media becomes random and ineffective. We build a customized plan that aligns your social presence with your business objectives.",
  },
  {
    q: "How do you measure success in social media marketing?",
    a: "We track key metrics including follower growth, engagement rate (likes, comments, shares), reach and impressions, website traffic from social, and lead generation. We provide monthly reports with detailed analytics so you can see exactly how your investment is performing.",
  },
  {
    q: "What is paid social media advertising?",
    a: "Paid social (Meta Ads, Instagram Ads) lets you reach audiences beyond your existing followers with highly targeted campaigns. You can target people by location, age, interests, behaviors, and even custom audiences. It's one of the most cost-effective ways to reach new customers in Varanasi.",
  },
  {
    q: "Can social media replace SEO for my business?",
    a: "No — they serve different purposes and work best together. SEO captures people actively searching for your services, while social media builds brand awareness and community. A combined approach gives you both immediate visibility and long-term organic growth.",
  },
  {
    q: "How much does social media marketing cost?",
    a: "Our SMM packages start from affordable monthly plans suitable for small businesses in Varanasi. The cost depends on the number of platforms, posting frequency, content creation requirements, and whether paid advertising is included. Contact us for a custom quote.",
  },
];

export function SmmPage() {
  const detailsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "Social Media Marketing in Varanasi | SMM Services | MarketingHubb";
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
            {" / Social Media Marketing"}
          </p>
          <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            SOCIAL MEDIA <span style={{ color: "#43B89A" }}>MARKETING</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Build a Powerful Brand Presence on Instagram, Facebook & LinkedIn.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-navy bg-seagreen uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
              data-ocid="smm.primary_button"
            >
              Get SMM Strategy <ArrowRight size={18} />
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
              SOCIAL MEDIA MARKETING IN VARANASI
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
              <p>
                Social media isn't just a place to post pictures — it's where
                your customers spend hours every day. Instagram, Facebook,
                YouTube, and LinkedIn have become the most powerful
                brand-building tools available to any business, big or small. If
                your brand isn't showing up in the feeds of your target audience
                in Varanasi, you're leaving an enormous opportunity on the
                table.
              </p>
              <p>
                At <strong>MarketingHubb</strong>, we offer comprehensive{" "}
                <strong>Social Media Marketing (SMM) in Varanasi</strong> that
                goes far beyond just posting content. We develop
                platform-specific strategies, create scroll-stopping visuals and
                videos, manage your community, run targeted paid campaigns, and
                provide detailed monthly analytics — all designed to grow your
                brand and drive real business results.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Building a Brand That People Love
              </h3>
              <p>
                Great social media is built on storytelling. We work closely
                with every client to understand their brand voice, values, and
                target audience. Whether you're a restaurant in Assi Ghat, a
                clothing boutique in Lanka, or a professional service firm in
                Sigra — we craft content that speaks directly to your local
                audience while also appealing to a broader market.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Paid Social: Reaching Your Exact Customer
              </h3>
              <p>
                Our team of certified Meta Ads specialists creates highly
                targeted campaigns that reach your ideal customer based on age,
                location, interests, and behaviors. We continuously monitor
                performance, run A/B tests on creatives and audiences, and
                optimize every aspect of your campaigns to improve results month
                over month. You get full transparency with regular reporting and
                access to your ad account dashboards at all times.
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
              Why Choose Our SMM
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              KEY BENEFITS OF SOCIAL MEDIA MARKETING
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`smm.benefit.${i + 1}`}
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
                data-ocid={`smm.faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-navy hover:text-seagreen transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-ocid={`smm.faq.toggle.${i + 1}`}
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
            Ready to Build Your Social Media Presence?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Let's create a social media strategy that grows your brand and
            brings in real customers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
            data-ocid="smm.cta_button"
          >
            Start Your SMM Campaign <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
