import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/dynamics/Preloader";
import { SmoothScroll } from "@/components/dynamics/SmoothScroll";
import { OrganizationSchema, WebsiteSchema } from "@/components/Schema";
import { brand } from "@/lib/brand";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} | Specialty Chemicals · Oleo Derivatives · Fatty Alcohol`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "oleo derivatives",
    "fatty acids",
    "fatty alcohol",
    "fatty esters",
    "glycerin",
    "surfactants",
    "specialty chemicals",
    "chemical supplier Mumbai",
    "chemical supplier India",
    brand.name,
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  openGraph: {
    title: brand.name,
    description: brand.description,
    url: brand.url,
    siteName: brand.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/brand/banner1.jpg", width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
    images: ["/images/brand/banner1.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body id="top" className="font-geist antialiased">
        <OrganizationSchema />
        <WebsiteSchema />
        <Preloader />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
