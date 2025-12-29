"use client";

import { Button } from "../ui/Button";

type WhatsAppButtonProps = {
  phoneNumber?: string;
  message?: string;
  text?: string;
  variant?: "primary" | "secondary" | "white" | "glass";
  size?: "sm" | "md" | "lg";
};

export default function WhatsAppButton({
  phoneNumber = "+34659363263",
  message = "Hola, me gustaría contactar con vosotros a partir de la web SILOS para obtener más información sobre vuestros servicios.",
  text = "Contactar por WhatsApp",
  variant = "secondary",
  size = "md",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button onClick={handleWhatsAppClick} variant={variant} size={size}>
      {text}
    </Button>
  );
}
