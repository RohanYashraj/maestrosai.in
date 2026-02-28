import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maestrosai.in"),
  title: {
    default: "MaestrosAI | High-Trust AI for Insurance",
    template: "%s | MaestrosAI",
  },
  description:
    "AI systems insurers can trust. Custom AI layers for underwriting, claims, and actuarial decisioning with full explainability.",
  openGraph: {
    title: "MaestrosAI | High-Trust AI for Insurance",
    description:
      "Custom AI layers for underwriting, claims, and actuarial decisioning with full explainability.",
    url: "https://maestrosai.in",
    siteName: "MaestrosAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaestrosAI | High-Trust AI for Insurance",
    description:
      "Custom AI layers for underwriting, claims, and actuarial decisioning with full explainability.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MaestrosAI",
    url: "https://maestrosai.in",
    logo: "https://maestrosai.in/logo.png",
    description: "High-trust AI solutions for the insurance industry.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
