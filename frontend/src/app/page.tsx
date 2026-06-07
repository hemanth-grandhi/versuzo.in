import { getLandingContent } from "@/lib/api";

/** Landing content is loaded from the backend API at request time */
export const dynamic = "force-dynamic";
import { Hero } from "@/components/sections/Hero";
import { ImpactTrust } from "@/components/sections/ImpactTrust";
import { OurPrograms } from "@/components/sections/OurPrograms";
import { WhyVersuzo } from "@/components/sections/WhyVersuzo";
import { AIToolsShowcase } from "@/components/sections/AIToolsShowcase";
import { MeetYourMentors } from "@/components/sections/MeetYourMentors";
import { About } from "@/components/sections/About";
import { LearningExperience } from "@/components/sections/LearningExperience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

/**
 * Server page — fetches data via API client only.
 * No business logic; backend owns data & rules.
 */
export default async function Home() {
  const content = await getLandingContent();

  return (
    <>
      <Hero />
      <MeetYourMentors mentors={content.mentors} />
      <WhyVersuzo features={content.whyFeatures} />
      <AIToolsShowcase />
      <OurPrograms />
      <ImpactTrust stats={content.stats} />
      <LearningExperience steps={content.learningSteps} />
      <Testimonials testimonials={content.testimonials} />
      <Community features={content.communityFeatures} />
      <FAQ faqs={content.faqs} />
      <About />
      <FinalCTA />
    </>
  );
}

