import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "mh_lead_form_dismissed";

export function FloatingLeadForm() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const interactedRef = useRef(false);
  const autoDismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
    }
  };

  const handleInteract = () => {
    interactedRef.current = true;
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = null;
    }
  };

  useEffect(() => {
    const alreadyDismissed = sessionStorage.getItem(SESSION_KEY);
    if (alreadyDismissed) return;

    const showTimer = setTimeout(() => {
      setVisible(true);
      // Auto-dismiss after 5 seconds if no interaction
      autoDismissTimerRef.current = setTimeout(() => {
        if (!interactedRef.current) {
          setVisible(false);
          sessionStorage.setItem(SESSION_KEY, "1");
        }
      }, 5000);
    }, 1500);

    return () => {
      clearTimeout(showTimer);
      if (autoDismissTimerRef.current) {
        clearTimeout(autoDismissTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
            data-ocid="lead_form.modal"
          />

          {/* Form Card */}
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full max-w-md rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #071C35 0%, #0B2A4A 60%, #0a2340 100%)",
                boxShadow:
                  "0 0 0 1px rgba(37,211,102,0.18), 0 24px 60px rgba(0,0,0,0.65), 0 0 40px rgba(37,211,102,0.08)",
              }}
              onMouseEnter={handleInteract}
              onFocus={handleInteract}
            >
              {/* Top glow bar */}
              <div
                className="h-1 w-full"
                style={{
                  background:
                    "linear-gradient(90deg, #25D366, #128C7E, #25D366)",
                }}
              />

              {/* Close button */}
              <button
                type="button"
                onClick={dismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close"
                data-ocid="lead_form.close_button"
              >
                <X size={16} />
              </button>

              <div className="px-7 pt-6 pb-7">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(37,211,102,0.15)",
                      color: "#25D366",
                      border: "1px solid rgba(37,211,102,0.3)",
                    }}
                  >
                    🔥 Free Offer
                  </span>
                </div>

                {!submitted ? (
                  <>
                    {/* Title */}
                    <h2
                      className="text-xl font-bold text-white leading-tight mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Get FREE Digital Marketing
                      <br />
                      <span style={{ color: "#25D366" }}>Consultation</span>
                    </h2>
                    <p className="text-white/55 text-sm mb-5">
                      Limited slots available — Book yours now!
                    </p>

                    {/* Form */}
                    <form
                      onSubmit={handleSubmit}
                      onInput={handleInteract}
                      data-ocid="lead_form.panel"
                    >
                      <div className="space-y-3">
                        {/* Name */}
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/35 outline-none transition-all"
                            style={{
                              background: "rgba(255,255,255,0.07)",
                              border: "1px solid rgba(255,255,255,0.12)",
                            }}
                            onFocus={(e) => {
                              handleInteract();
                              e.currentTarget.style.borderColor =
                                "rgba(37,211,102,0.5)";
                              e.currentTarget.style.boxShadow =
                                "0 0 0 3px rgba(37,211,102,0.1)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.12)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                            data-ocid="lead_form.input"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone Number (e.g. 98765 43210)"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/35 outline-none transition-all"
                            style={{
                              background: "rgba(255,255,255,0.07)",
                              border: "1px solid rgba(255,255,255,0.12)",
                            }}
                            onFocus={(e) => {
                              handleInteract();
                              e.currentTarget.style.borderColor =
                                "rgba(37,211,102,0.5)";
                              e.currentTarget.style.boxShadow =
                                "0 0 0 3px rgba(37,211,102,0.1)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.12)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                            data-ocid="lead_form.input"
                          />
                        </div>

                        {/* Service Select */}
                        <div className="relative">
                          <select
                            value={service}
                            onChange={(e) => {
                              setService(e.target.value);
                              handleInteract();
                            }}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                            style={{
                              background: "rgba(255,255,255,0.07)",
                              border: "1px solid rgba(255,255,255,0.12)",
                              color: service
                                ? "white"
                                : "rgba(255,255,255,0.35)",
                            }}
                            onFocus={(e) => {
                              handleInteract();
                              e.currentTarget.style.borderColor =
                                "rgba(37,211,102,0.5)";
                              e.currentTarget.style.boxShadow =
                                "0 0 0 3px rgba(37,211,102,0.1)";
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.12)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                            data-ocid="lead_form.select"
                          >
                            <option
                              value=""
                              disabled
                              style={{ background: "#0B2A4A" }}
                            >
                              Select Service Interest
                            </option>
                            <option
                              value="seo"
                              style={{ background: "#0B2A4A" }}
                            >
                              SEO — Search Engine Optimization
                            </option>
                            <option
                              value="smm"
                              style={{ background: "#0B2A4A" }}
                            >
                              Social Media Marketing
                            </option>
                            <option
                              value="ppc"
                              style={{ background: "#0B2A4A" }}
                            >
                              PPC / Google Ads
                            </option>
                            <option
                              value="web"
                              style={{ background: "#0B2A4A" }}
                            >
                              Web Design & Development
                            </option>
                            <option
                              value="content"
                              style={{ background: "#0B2A4A" }}
                            >
                              Content Marketing
                            </option>
                            <option
                              value="email"
                              style={{ background: "#0B2A4A" }}
                            >
                              Email Marketing
                            </option>
                          </select>
                          {/* Chevron icon */}
                          <div
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                            aria-hidden="true"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              aria-hidden="true"
                              focusable="false"
                            >
                              <title>chevron</title>
                              <path
                                d="M2 4l4 4 4-4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98] mt-1"
                          style={{
                            background:
                              "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                            boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          data-ocid="lead_form.submit_button"
                        >
                          Get Free Consultation 🚀
                        </button>
                      </div>
                    </form>

                    {/* Trust line */}
                    <p className="text-center text-white/30 text-xs mt-4">
                      🔒 100% Free · No spam · No commitment
                    </p>
                  </>
                ) : (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-6"
                    data-ocid="lead_form.success_state"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{
                        background: "rgba(37,211,102,0.15)",
                        border: "2px solid rgba(37,211,102,0.4)",
                      }}
                    >
                      <span className="text-3xl">✅</span>
                    </div>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Thank You!
                    </h3>
                    <p className="text-white/60 text-sm">
                      We'll contact you within{" "}
                      <span style={{ color: "#25D366" }}>24 hours</span>.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
