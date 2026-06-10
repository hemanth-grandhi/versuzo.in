import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us | Versuzo",
  description: "Learn about Versuzo — our mission, vision, and how we prepare learners for industry-ready careers.",
  keywords: ["Versuzo", "About", "EdTech", "career programs", "mentorship"],
  openGraph: {
    title: "About Us | Versuzo",
    description: "Learn about Versuzo — our mission, vision, and how we prepare learners for industry-ready careers.",
    url: `${siteConfig.siteUrl}/about-us`,
    siteName: siteConfig.name,
  },
};

export default function AboutPage() {
  return <About />;
}
