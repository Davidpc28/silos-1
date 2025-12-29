/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function BookingPage({
  text = "Agendar Cita",
  variant = "primary",
  size = "md",
}: {
  text?: string;
  variant?: "primary" | "secondary" | "white" | "glass";
  size?: "sm" | "md" | "lg";
}) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next") || document.body);
  }, []);

  const variantStyles = {
    primary: {
      backgroundColor: "#336a85",
      color: "white",
      boxShadow: "0 6px 20px rgba(51, 106, 133, 0.35)",
    },
    secondary: {
      backgroundColor: "#f1f1f1",
      color: "#1a202c",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    white: {
      backgroundColor: "white",
      color: "#1a202c",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    glass: {
      backgroundColor: "rgba(45, 55, 72, 0.7)",
      backdropFilter: "blur(12px)",
      color: "white",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  };

  const sizeStyles = {
    sm: {
      padding: "0.5rem 1.5rem",
      fontSize: "0.875rem",
    },
    md: {
      padding: "0.75rem 2rem",
      fontSize: "1rem",
    },
    lg: {
      padding: "1rem 2.5rem",
      fontSize: "1.125rem",
    },
  };

  if (!rootElement) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      <PopupButton
        url="https://calendly.com/d-dpc1992"
        rootElement={rootElement}
        text={text}
        styles={{
          ...variantStyles[variant],
          ...sizeStyles[size],
          borderRadius: "9999px",
          fontWeight: "500",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
}
