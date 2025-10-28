import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#336a85] to-[#4a8aa8] text-white shadow-[0_4px_15px_rgba(51,106,133,0.25)] hover:shadow-[0_6px_20px_rgba(51,106,133,0.35)] hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-[#f1f1f1] text-[#1a202c] hover:bg-[#e5e5e5] shadow-sm hover:shadow-md active:scale-[0.98]",
      white:
        "bg-white text-[#1a202c] hover:bg-gray-50 shadow-sm hover:shadow-md active:scale-[0.98]",
      glass:
        "bg-[rgba(45,55,72,0.7)] backdrop-blur-md text-white border border-white/10 hover:bg-[rgba(45,55,72,0.85)] hover:border-white/20 shadow-lg active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-6 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };

