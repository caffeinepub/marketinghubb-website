import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  ChevronDown,
  ChevronRight,
  Mail,
  RefreshCw,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ParticleField } from "../../components/ParticleField";
import { useSEO } from "../../hooks/useSEO";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const benefits = [
  {
    icon: <TrendingUp size={28} className="text-seagreen" />,
    title: "High ROI",
    description:
      "Email marketing delivers an average return of ₹42 for every ₹1 spent — making it the highest ROI channel in digital marketing.",
  },
  {
    icon: <Mail size={28} className="text-seagreen" />,
    title: "Personalized Messaging",
    description:
      "Send the right message to the right person at the right time. Personalized emails see 6x higher transaction rates than generic blasts.",
  },
  {
    icon: <Zap size={28} className="text-seagreen" />,
    title: "Marketing Automation",
    description:
      "Automate welcome sequences, abandoned cart reminders, follow-ups, and re-engagement campaigns — working for you 24/7.",
  },
  {
    icon: <RefreshCw size={28} className="text-seagreen" />,
    title: "Customer Retention",
    description:
      "Keep existing customers engaged and coming back with regular newsletters, exclusive offers, and loyalty campaigns.",
  },
  {
    icon: <Users size={28} className="text-seagreen" />,
    title: "Audience Segmentation",
    description:
      "Divide your email list by demographics, purchase history, or behavior to deliver hyper-relevant messages that convert.",
  },
  {
    icon: <BarChart2 size={28} className="text-seagreen" />,
    title: "Analytics & Reporting",
    description:
      "Track open rates, click rates, conversions, and revenue generated from each campaign with detailed, actionable reports.",
  },
];

const faqs = [
  {
    q: "What is email marketing and how does it work?",
    a: "Email marketing is the practice of sending targeted messages to a list of subscribers via email to build relationships, nurture leads, and drive sales. It can include newsletters, promotional offers, automated sequences, and transactional emails. It works by delivering value directly to your customers' inboxes, where they're most likely to engage.",
  },
  {
    q: "Is email marketing still effective in 2025?",
    a: "Absolutely! Email marketing remains one of the most effective digital marketing channels. Despite social media's dominance, email delivers higher engagement and conversion rates. There are 4+ billion email users worldwide, and people check their email multiple times per day. For businesses in Varanasi, it's especially powerful for building long-term customer relationships.",
  },
  {
    q: "What is email marketing automation?",
    a: "Email automation means setting up sequences of emails that are sent automatically based on triggers — like when someone signs up for your newsletter, makes a purchase, or hasn't engaged in a while. These automated sequences work 24/7 without any manual effort, nurturing leads and retaining customers on autopilot.",
  },
  {
    q: "How do you build an email list?",
    a: "We help you grow your email list through multiple channels: website opt-in forms, lead magnets (free guides, discounts, checklists), social media promotions, and landing pages. The key is offering genuine value in exchange for someone's email address. We never purchase email lists — all subscribers are opt-in, ensuring high deliverability and engagement.",
  },
  {
    q: "What is a good email open rate?",
    a: "Industry average open rates are 15-25%, though this varies by sector. For e-commerce it's typically 15-20%, for B2B it's 20-25%, and for newsletters it can be 25-35%. We focus on improving your open rates through compelling subject lines, sender name optimization, and sending at optimal times.",
  },
  {
    q: "How many emails should I send per month?",
    a: "For most businesses, 4-8 emails per month is a good starting point. The right frequency depends on your audience, content quality, and business type. We test and analyze engagement data to find the sweet spot where your subscribers look forward to hearing from you.",
  },
  {
    q: "How do you avoid spam folders?",
    a: "Avoiding spam filters requires technical setup (SPF, DKIM, DMARC records), clean list management, good sender reputation, strong engagement metrics, and compliant email content. We handle all technical configurations and follow email best practices to ensure your emails reach the inbox, not the spam folder.",
  },
  {
    q: "What email marketing tools do you use?",
    a: "We work with industry-leading email marketing platforms including Mailchimp, Klaviyo, Brevo (formerly Sendinblue), and ActiveCampaign — depending on your business needs and budget. Each platform has different strengths, and we'll recommend the best fit for your specific requirements and growth plans.",
  },
];

export function EmailMarketingPage() {
  useSEO({
    title: "Email Marketing Services in Varanasi | MarketingHubb",
    description:
      "Effective email marketing campaigns in Varanasi by MarketingHubb. Build customer relationships, boost retention and drive sales with targeted email marketing strategies.",
    keywords:
      "email marketing Varanasi, email marketing services Varanasi, email campaigns Varanasi, email marketing agency Varanasi",
    canonical: "https://marketinghubb.in/services/email-marketing",
  });
  const detailsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "Email Marketing Services in Varanasi | Email Campaigns | MarketingHubb";
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
            {" / Email Marketing"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            EMAIL <span style={{ color: "#43B89A" }}>MARKETING</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Nurture Leads. Retain Customers. Generate Revenue — All Through
            Email.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-navy bg-seagreen uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
              data-ocid="email.primary_button"
            >
              Start Email Campaign <ArrowRight size={18} />
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
              EMAIL MARKETING SERVICES IN VARANASI
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
              <p>
                While everyone chases followers on Instagram and clicks from
                Google, smart businesses are quietly building their most
                valuable digital asset: an email list. Unlike social media
                followers who can disappear with an algorithm change, your email
                subscribers are yours. Email marketing gives you a direct,
                personal line of communication with people who have specifically
                asked to hear from you.
              </p>
              <p>
                At <strong>MarketingHubb</strong>, we offer full-service{" "}
                <strong>email marketing in Varanasi</strong> — from strategy and
                list building to campaign design, automation setup, and
                performance reporting. With the highest ROI of any marketing
                channel (averaging ₹42 for every ₹1 spent), email is the engine
                that keeps working long after the campaign ends.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Email Campaigns That Actually Get Opened
              </h3>
              <p>
                The biggest challenge in email marketing isn't sending emails —
                it's getting them opened, read, and acted upon. Our team writes
                compelling subject lines, designs visually appealing email
                templates, and crafts persuasive copy that drives clicks and
                conversions. We segment your audience based on demographics,
                behavior, and purchase history, ensuring each subscriber
                receives content that's genuinely relevant to them. Segmented
                email campaigns see 14% higher open rates and 100% higher click
                rates compared to non-segmented campaigns.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Marketing Automation: Grow While You Sleep
              </h3>
              <p>
                We build automation workflows for every stage of the customer
                journey: welcome sequences, lead nurturing series, abandoned
                cart recovery, post-purchase follow-ups, win-back campaigns for
                inactive subscribers, and more. Once set up, these sequences
                work 24/7, generating revenue while you focus on growing your
                business.
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
              Why Choose Our Email Marketing
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              KEY BENEFITS OF EMAIL MARKETING
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`email.benefit.${i + 1}`}
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
                data-ocid={`email.faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-navy hover:text-seagreen transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-ocid={`email.faq.toggle.${i + 1}`}
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
            Ready to Unlock the Power of Email Marketing?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Let's build an email marketing strategy that nurtures your leads and
            converts them into loyal customers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
            data-ocid="email.cta_button"
          >
            Get Email Marketing Help <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
