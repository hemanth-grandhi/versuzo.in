/** Backend domain types — source of truth for API contracts */

export interface Stat {
  value: string;
  label: string;
}

export interface ProgramMentor {
  name: string;
  image: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  duration: string;
  rating: number;
  price: string;
  image: string;
  mentor: ProgramMentor;
}

export interface WhyFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Mentor {
  name: string;
  designation: string;
  company: string;
  experience: string;
  image: string;
  linkedin: string;
  badge?: string;
  logos?: string[];
  location?: string;
}

export interface LearningStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  transition: string;
  rating: number;
  quote: string;
  image: string;
  hasVideo: boolean;
}

export interface CommunityFeature {
  title: string;
  description: string;
  stat: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LandingContent {
  stats: Stat[];
  partners: string[];
  programs: Program[];
  whyFeatures: WhyFeature[];
  mentors: Mentor[];
  learningSteps: LearningStep[];
  testimonials: Testimonial[];
  communityFeatures: CommunityFeature[];
  faqs: FAQ[];
}

export interface ConsultationRequest {
  name: string;
  email: string;
  phone?: string;
  programInterest?: string;
  message?: string;
}

export interface ConsultationRecord extends ConsultationRequest {
  id: string;
  createdAt: string;
  status: "pending" | "confirmed";
}
