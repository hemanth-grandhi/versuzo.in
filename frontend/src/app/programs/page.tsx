import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";
import { OurPrograms } from "@/components/sections/OurPrograms";

export const metadata: Metadata = {
  title: "Programs | Versuzo",
  description: "Explore Versuzo's internship and training programs across technology, electronics, electrical, mechanical, and management domains.",
  keywords: ["Versuzo", "Programs", "Internship", "Training", "Career"],
  openGraph: {
    title: "Programs | Versuzo",
    description: "Explore Versuzo's internship and training programs across technology, electronics, electrical, mechanical, and management domains.",
    url: `${siteConfig.siteUrl}/programs`,
    siteName: siteConfig.name,
  },
};

export default function ProgramsPage() {
  return <OurPrograms />;
}
