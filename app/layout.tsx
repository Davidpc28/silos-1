import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SILOS - Subastas Judiciales e Inmobiliarias",
  description: "SILOS - Subastas Judiciales e Inmobiliarias",
  keywords: ["subastas", "judiciales", "inmobiliarias", "silos"],
  authors: [{ name: "SILOS", url: "https://silos.com" }],
  creator: "SILOS",
  publisher: "SILOS",
  openGraph: {
    title: "SILOS - Subastas Judiciales e Inmobiliarias",
    description: "SILOS - Subastas Judiciales e Inmobiliarias",
    url: "https://silos.com",
    siteName: "SILOS",
    images: [
      {
        url: "https://silos.com/images/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SILOS - Subastas Judiciales e Inmobiliarias",
    description: "SILOS - Subastas Judiciales e Inmobiliarias",
    images: ["https://silos.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
