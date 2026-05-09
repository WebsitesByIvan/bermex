import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/skip-link";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a1e5c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bermexdevelopmentgroup.com"),
  title: {
    default: "Bermex Development Group",
    template: "%s · Bermex Development Group",
  },
  description:
    "Bermex Development Group — architectural vision and luxury residential development.",
  openGraph: {
    title: "Bermex Development Group",
    description:
      "Architecture as an artistic signature — redefining luxury living every day.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cormorant.variable}`}>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
