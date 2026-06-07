import {
  statsData,
  partnersData,
  programsData,
  whyFeaturesData,
  mentorsData,
  learningStepsData,
  testimonialsData,
  communityFeaturesData,
  faqsData,
} from "../data/index.js";
import type { LandingContent, Program } from "../types/index.js";

/** Data access layer — swap JSON imports for DB queries in production */

export class ContentRepository {
  getLandingContent(): LandingContent {
    return {
      stats: statsData,
      partners: partnersData,
      programs: programsData,
      whyFeatures: whyFeaturesData,
      mentors: mentorsData,
      learningSteps: learningStepsData,
      testimonials: testimonialsData,
      communityFeatures: communityFeaturesData,
      faqs: faqsData,
    };
  }

  getAllPrograms(): Program[] {
    return programsData;
  }

  getProgramById(id: string): Program | undefined {
    return programsData.find((p) => p.id === id);
  }
}

export const contentRepository = new ContentRepository();
