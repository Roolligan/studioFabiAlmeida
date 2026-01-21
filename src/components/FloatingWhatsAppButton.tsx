interface FloatingWhatsAppButtonProps {
  whatsappUrl: string;
}

function FloatingWhatsAppButton({ whatsappUrl }: FloatingWhatsAppButtonProps) {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar atendimento pelo WhatsApp"
    >
      WhatsApp
    </a>
  );
}

export default FloatingWhatsAppButton;
