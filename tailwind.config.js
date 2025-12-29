module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
      
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#5B87DE",
          dark: "#4A6EC7",
          light: "#7BA3E8",
        },
        secondary: {
          DEFAULT: "#4DB5A0",
          dark: "#3D9484",
          light: "#6FCDB9",
        },
        accent: {
          DEFAULT: "#d4af37",
          light: "#f0d884",
        },
        text: {
          primary: "#000000",
          secondary: "#4a5568",
          light: "#718096",
          white: "#ffffff",
        },
        border: {
          primary: "#e2e8f0",
          secondary: "#cbd5e0",
        },
        background: {
          DEFAULT: "#ffffff",
          secondary: "#F2F2F2",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #5B87DE 0%, #4DB5A0 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #4DB5A0 0%, #6FCDB9 100%)",
        "gradient-accent": "linear-gradient(135deg, #d4af37 0%, #f0d884 100%)",
      },
      boxShadow: {
        primary: "0 4px 15px rgba(91, 135, 222, 0.25)",
        "primary-lg": "0 6px 20px rgba(91, 135, 222, 0.35)",
        secondary: "0 4px 15px rgba(77, 181, 160, 0.25)",
        "secondary-lg": "0 6px 20px rgba(77, 181, 160, 0.35)",
      },
    },
  },
};
