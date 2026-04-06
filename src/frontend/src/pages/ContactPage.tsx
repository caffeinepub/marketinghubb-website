import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { ParticleField } from "../components/ParticleField";
import { useSEO } from "../hooks/useSEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

const inputStyle = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const inputFocusStyle = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid #43B89A",
  outline: "none",
};

const inputClass =
  "w-full px-4 py-3 rounded-xl text-white text-sm transition-all";

function FormField({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  autoComplete,
  ocid,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  autoComplete?: string;
  ocid?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-300 mb-1.5"
        htmlFor={id}
      >
        {label} {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        style={focused ? inputFocusStyle : inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        data-ocid={ocid}
      />
    </div>
  );
}

export function ContactPage() {
  useSEO({
    title:
      "Contact MarketingHubb | Digital Marketing Agency Varanasi | +91 73072 60253",
    description:
      "Contact MarketingHubb for expert digital marketing services in Varanasi. Call +91 73072 60253 or email saurabhcgoubey200@gmail.com. Located at Mahmoorganj Akashwani, Varanasi.",
    keywords:
      "contact MarketingHubb, digital marketing agency contact Varanasi, MarketingHubb phone number, MarketingHubb address Varanasi",
    canonical: "https://marketinghubb.in/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact MarketingHubb",
      url: "https://marketinghubb.in/contact",
    },
  });
  const formRef = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msgFocused, setMsgFocused] = useState(false);

  useEffect(() => {
    document.title =
      "Contact Us | MarketingHubb - Best Digital Marketing Agency in Varanasi";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-24 hero-gradient overflow-hidden">
        <ParticleField count={15} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-seagreen text-xs font-bold uppercase tracking-widest mb-4">
            Home / Contact
          </p>
          <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-tight">
            CONTACT <span style={{ color: "#43B89A" }}>US</span>
          </h1>
          <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto">
            Ready to grow? Let's talk. Our team is here to help you achieve your
            digital goals.
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

      {/* Contact Form + Info */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #071C35 0%, #0B2A4A 100%)",
        }}
        ref={formRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="scroll-reveal-left card-gradient rounded-2xl p-8 border border-seagreen/20">
              <h2 className="text-2xl font-black uppercase text-white mb-2">
                GET IN TOUCH
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitted ? (
                <div
                  className="text-center py-12 flex flex-col items-center gap-4"
                  data-ocid="contact.success_state"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(67,184,154,0.15)" }}
                  >
                    <CheckCircle size={40} className="text-seagreen" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We'll contact you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-navy bg-seagreen hover:bg-seagreen-light transition-all"
                    data-ocid="contact.button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormField
                    id="name"
                    label="Full Name"
                    required
                    value={form.name}
                    onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                    placeholder="Your Full Name"
                    autoComplete="name"
                    ocid="contact.input"
                  />
                  <FormField
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                    placeholder="your@email.com"
                    autoComplete="email"
                    ocid="contact.input"
                  />
                  <FormField
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                    placeholder="+91 73072 60253"
                    autoComplete="tel"
                    ocid="contact.input"
                  />
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-xl text-white text-sm transition-all resize-none"
                      style={msgFocused ? inputFocusStyle : inputStyle}
                      onFocus={() => setMsgFocused(true)}
                      onBlur={() => setMsgFocused(false)}
                      placeholder="Tell us about your project..."
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-bold text-navy bg-seagreen hover:bg-seagreen-light transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    data-ocid="contact.submit_button"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="scroll-reveal-right space-y-6">
              <div>
                <h2 className="text-2xl font-black uppercase text-white mb-6">
                  REACH US AT
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 card-gradient rounded-xl border border-seagreen/20">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(67,184,154,0.1)" }}
                    >
                      <MapPin size={18} className="text-seagreen" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">
                        Office Address
                      </p>
                      <p className="text-gray-400 text-sm">
                        Mahmoorganj Akashwani, Varanasi 221010
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 card-gradient rounded-xl border border-seagreen/20">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(67,184,154,0.1)" }}
                    >
                      <Phone size={18} className="text-seagreen" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">
                        Phone / WhatsApp
                      </p>
                      <a
                        href="tel:+917307260253"
                        className="text-gray-400 text-sm hover:text-seagreen transition-colors"
                      >
                        +91 73072 60253
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 card-gradient rounded-xl border border-seagreen/20">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(67,184,154,0.1)" }}
                    >
                      <Mail size={18} className="text-seagreen" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:saurabhcgoubey200@gmail.com"
                        className="text-gray-400 text-sm hover:text-seagreen transition-colors"
                      >
                        saurabhcgoubey200@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick contact buttons */}
              <div className="flex gap-3">
                <a
                  href="https://wa.me/917307260253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-sm transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                  }}
                  data-ocid="contact.button"
                >
                  <SiWhatsapp size={18} /> WhatsApp Us
                </a>
                <a
                  href="tel:+917307260253"
                  className="flex-1 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-sm transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #071C35, #0B2A4A)",
                    border: "1px solid rgba(67,184,154,0.3)",
                  }}
                  data-ocid="contact.button"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>

              {/* Business Hours */}
              <div className="card-gradient rounded-xl p-5 border border-seagreen/20">
                <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Monday – Saturday</span>
                    <span className="text-seagreen font-medium">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
