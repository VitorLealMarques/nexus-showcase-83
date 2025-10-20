import { MessageCircle } from "lucide-react";
import { SOCIAL_LINKS, WHATSAPP_MESSAGE } from "@/config/constants";

/**
 * BOTÃO FLUTUANTE DO WHATSAPP
 * 
 * Configurações em src/config/constants.ts:
 * - SOCIAL_LINKS.whatsapp: Link do WhatsApp
 * - WHATSAPP_MESSAGE.defaultMessage: Mensagem pré-preenchida (opcional)
 */

export const FloatingWhatsApp = () => {
  const whatsappUrl = WHATSAPP_MESSAGE.defaultMessage
    ? `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE.defaultMessage)}`
    : SOCIAL_LINKS.whatsapp;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-medium transition-all hover:scale-110 hover:shadow-lg md:bottom-8 md:right-8"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-float" />
      <span className="hidden font-medium md:block">
        {WHATSAPP_MESSAGE.buttonText}
      </span>
    </a>
  );
};
