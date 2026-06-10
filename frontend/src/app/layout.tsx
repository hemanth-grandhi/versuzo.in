import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { siteConfig } from "@/lib/constants/site";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const orgStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Versuzo",
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/images/versuzo-logo.png`,
  founder: {
    "@type": "Person",
    name: "Hemanth Grandhi",
    jobTitle: "Founder",
  },
  member: [
    {
      "@type": "Person",
      name: "Nishank Durgam",
      jobTitle: "Chief Executive Officer",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDial,
      contactType: "customer support",
      email: siteConfig.supportEmail,
      contactOption: "TollFree",
    },
  ],
  sameAs: [siteConfig.instagramUrl, siteConfig.youtubeUrl],
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: "Versuzo",
  title: {
    default: "Versuzo | Transforming Talent into Opportunity and Success",
    template: "%s | Versuzo",
  },
  description: siteConfig.description,
  keywords: [
    "Versuzo",
    "EdTech",
    "online learning",
    "cohort-based courses",
    "career development",
    "mentorship",
    "product management",
    "data science",
    "AI machine learning",
  ],
  authors: [{ name: "Versuzo" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Versuzo",
    url: siteConfig.siteUrl,
    title: "Versuzo | Transforming Talent into Opportunity and Success",
    description: siteConfig.description,
    images: [
      {
        url: "/images/versuzo-logo.png",
        width: 914,
        height: 559,
        alt: "Versuzo logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Versuzo | Transforming Talent into Opportunity and Success",
    description: siteConfig.description,
  },
  verification: {
    google: "CuF2stqNwc0vkGwKKTXD8vcF8PcwOhVaRFBnjIuJHwk",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // Primary favicon files (place these files in frontend/public)
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "64x64 32x32 24x24 16x16", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/manifest.json" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          // JSON-LD for Organization structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
        />
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
