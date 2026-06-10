import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";
import { getLandingContent } from "@/lib/api";
import { WhyVersuzo } from "@/components/sections/WhyVersuzo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Why Us | Versuzo",
  description: "Why choose Versuzo — a complete learning ecosystem focused on employability, mentorship, and industry-ready projects.",
  keywords: ["Versuzo", "Why Versuzo", "Why Us", "EdTech", "career readiness"],
  openGraph: {
    title: "Why Us | Versuzo",
    description: "Why choose Versuzo — a complete learning ecosystem focused on employability, mentorship, and industry-ready projects.",
    url: `${siteConfig.siteUrl}/why-us`,
    siteName: siteConfig.name,
  },
};

export default async function WhyUsPage() {
  const content = await getLandingContent();
  return <WhyVersuzo features={content.whyFeatures} />;
}
