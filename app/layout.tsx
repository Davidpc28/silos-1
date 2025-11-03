import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
