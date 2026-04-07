import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Globe,
  Headphones,
  Monitor,
  Search,
  Smartphone,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ParticleField } from "../../components/ParticleField";
import { useSEO } from "../../hooks/useSEO";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const benefits = [
  {
    icon: <Monitor size={28} className="text-seagreen" />,
    title: "Custom Design",
    description:
      "Every website we build is 100% custom-designed for your brand — no generic templates. Your site will stand out and reflect your unique identity.",
  },
  {
    icon: <Smartphone size={28} className="text-seagreen" />,
    title: "Mobile-Responsive",
    description:
      "Over 70% of web traffic comes from mobile devices. Every site we build looks and works perfectly on phones, tablets, and desktops.",
  },
  {
    icon: <Zap size={28} className="text-seagreen" />,
    title: "Fast Loading",
    description:
      "Slow websites lose customers and Google ranking. We optimize images, code, and hosting to deliver lightning-fast page speeds.",
  },
  {
    icon: <Search size={28} className="text-seagreen" />,
    title: "SEO-Ready",
    description:
      "Every site is built with SEO best practices from day one — proper structure, meta tags, fast loading, and clean code that Google loves.",
  },
  {
    icon: <Globe size={28} className="text-seagreen" />,
    title: "Conversion Optimized",
    description:
      "Beautiful design is only valuable if it converts visitors into customers. We design with psychology-backed CRO principles built in.",
  },
  {
    icon: <Headphones size={28} className="text-seagreen" />,
    title: "Ongoing Support",
    description:
      "Your website needs updates, security patches, and improvements over time. We offer ongoing maintenance and support packages.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A standard business website typically takes 3-6 weeks from kickoff to launch. E-commerce websites and more complex projects can take 6-12 weeks. The timeline depends on the number of pages, functionality required, and how quickly we receive content and feedback from you.",
  },
  {
    q: "How much does a website cost in Varanasi?",
    a: "Website pricing varies based on complexity. A professional 5-7 page business website typically starts from ₹25,000-₹50,000. E-commerce sites, custom web applications, and larger projects are priced accordingly. We provide detailed quotes after understanding your specific requirements.",
  },
  {
    q: "Do I need a custom website or will a template work?",
    a: "Template websites are cheaper upfront but often limit your branding, performance, and SEO potential. A custom website is built specifically for your business goals, loads faster, ranks better on Google, and gives you complete control over your brand's digital identity. For businesses serious about online growth, custom is the right choice.",
  },
  {
    q: "What is responsive design?",
    a: "Responsive design means your website automatically adjusts its layout and appearance based on the screen size of the device being used — whether that's a desktop monitor, tablet, or smartphone. It's not just a nice feature anymore; Google requires it for good search rankings, and over 70% of users browse on mobile.",
  },
  {
    q: "Will my website rank on Google?",
    a: "We build every website with on-page SEO best practices — proper heading structure, meta tags, image optimization, schema markup, fast loading speed, and clean URL structure. This gives your site a strong SEO foundation. For competitive keyword rankings, we recommend combining web design with our ongoing SEO services.",
  },
  {
    q: "What platform do you use to build websites?",
    a: "We primarily build on WordPress (the world's most popular CMS, powering 43% of all websites) and custom HTML/CSS/JS. For e-commerce, we use WooCommerce or Shopify depending on requirements. The platform is chosen based on your specific needs, content management preferences, and growth plans.",
  },
  {
    q: "Do you provide web hosting?",
    a: "Yes, we can recommend and set up the best hosting solution for your needs. We work with reliable cloud hosting providers that offer fast speeds, strong security, and excellent uptime. We can manage hosting on your behalf or guide you in setting it up yourself.",
  },
  {
    q: "What happens after the website is launched?",
    a: "Launch is just the beginning. We offer post-launch support including bug fixes, content updates, security monitoring, performance optimization, and analytics setup. We also offer monthly maintenance plans for businesses that want ongoing support without worrying about the technical side.",
  },
];

export function WebDesignPage() {
  useSEO({
    title: "Web Design & Development Services in Varanasi | MarketingHubb",
    description:
      "Professional website design and development in Varanasi. MarketingHubb creates fast, mobile-friendly, SEO-optimized websites that convert visitors into customers.",
    keywords:
      "web design Varanasi, website development Varanasi, web design company Varanasi, website designer Varanasi, mobile-friendly website Varanasi",
    canonical: "https://marketinghubb.in/services/web-design",
  });
  const detailsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title =
      "Web Design in Varanasi | Website Development Services | MarketingHubb";
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
            {" / Web Design"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            WEB <span style={{ color: "#43B89A" }}>DESIGN</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Beautiful, Fast & Conversion-Optimized Websites Built for Varanasi
            Businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-navy bg-seagreen uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
              data-ocid="webdesign.primary_button"
            >
              Get a Free Quote <ArrowRight size={18} />
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
              WEB DESIGN & DEVELOPMENT IN VARANASI
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base">
              <p>
                Your website is your most important digital asset. It's often
                the first impression a potential customer has of your business —
                and first impressions matter enormously. A slow, outdated, or
                poorly designed website drives customers away. A fast,
                beautiful, and well-structured website builds trust,
                communicates your value, and converts visitors into paying
                customers.
              </p>
              <p>
                At <strong>MarketingHubb</strong>, we create{" "}
                <strong>custom websites in Varanasi</strong> that look stunning
                on every device, load lightning-fast, and are built to rank on
                Google. Whether you need a 5-page business website, a 50-page
                e-commerce store, or a custom web application — we deliver
                world-class results at competitive prices.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Design That Converts, Not Just Impresses
              </h3>
              <p>
                We believe great web design is more than visual aesthetics —
                it's about guiding visitors toward taking action. Every page we
                design follows{" "}
                <strong>conversion rate optimization (CRO)</strong> principles:
                clear headlines, strategic calls-to-action, trust signals, fast
                load times, and intuitive navigation. We start every project
                with a discovery session to understand your business, target
                audience, and goals. We then create wireframes and design
                mockups for your approval before writing a single line of code.
              </p>
              <h3 className="text-xl font-bold text-navy mt-6">
                Built for Google, Built for Growth
              </h3>
              <p>
                A beautiful website that no one can find is a wasted investment.
                That's why every website we build includes{" "}
                <strong>on-page SEO best practices</strong> from the start:
                proper heading hierarchy, optimized meta tags, fast page speeds,
                mobile responsiveness, schema markup, and clean URL structures.
                We work with trusted hosting providers to ensure your site loads
                fast globally. Our average website scores 90+ on Google
                PageSpeed Insights. After launch, we provide comprehensive
                training so you can manage your website's content independently.
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
              Why Choose Our Web Design
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase text-white mt-2">
              KEY BENEFITS OF OUR WEB DESIGN
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="scroll-reveal card-gradient rounded-2xl p-7 border border-seagreen/20"
                style={{ transitionDelay: `${i * 0.1}s` }}
                data-ocid={`webdesign.benefit.${i + 1}`}
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
                data-ocid={`webdesign.faq.item.${i + 1}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-navy hover:text-seagreen transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-ocid={`webdesign.faq.toggle.${i + 1}`}
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
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-navy/70 mb-8 text-lg">
            Get a free consultation and quote for your website project. Let's
            create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-seagreen bg-navy uppercase tracking-wide hover:scale-105 transition-all shadow-xl"
            data-ocid="webdesign.cta_button"
          >
            Start My Website Project <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
