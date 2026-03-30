import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingButtons() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      data-ocid="floating.panel"
    >
      {/* Call */}
      <a
        href="tel:+917307260253"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        style={{ background: "linear-gradient(135deg, #071C35, #0B2A4A)" }}
        aria-label="Call us"
        data-ocid="floating.button"
      >
        <Phone size={22} />
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/917307260253"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        aria-label="WhatsApp us"
        data-ocid="floating.button"
      >
        <SiWhatsapp size={24} />
      </a>
    </div>
  );
}
