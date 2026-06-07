"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  BookOpen,
  Award,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Users2,
  Trophy,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Link from "next/link";

const stats = [
  { label: "Students Trained", value: "10,000+", icon: GraduationCap, color: "from-sky-400 to-sky-600" },
  { label: "Active Mentors", value: "50+", icon: Users2, color: "from-indigo-400 to-indigo-600" },
  { label: "Placements Ready", value: "92%", icon: Briefcase, color: "from-purple-400 to-purple-600" },
  { label: "Industry Programs", value: "15+", icon: Trophy, color: "from-sky-500 to-indigo-500" },
];

const pillars = [
  {
    title: "Expert Learning",
    description: "Hands-on, project-based curriculum designed and delivered by industry experts.",
    icon: BookOpen,
  },
  {
    title: "Career Mentorship",
    description: "One-on-one guidance to shape your career trajectory and technical growth.",
    icon: Users2,
  },
  {
    title: "Global Certifications",
    description: "Verify your expertise with credentials respected by global technology leaders.",
    icon: Award,
  },
  {
    title: "Career Growth",
    description: "Prepare for top placement opportunities and negotiate packages with confidence.",
    icon: TrendingUp,
  },
];


export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 scroll-mt-24">
      {/* Premium background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-50/50 to-transparent dark:via-brand-950/20" />
      <div className="absolute -right-48 top-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/5" />
      <div className="absolute -left-48 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[100px] dark:bg-sky-500/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Core Narrative / Introduction */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeader
              label="Our Story"
              title="About Versuzo"
              description="Empowering students and professionals to bridge the gap between traditional learning and modern industry demands."
              align="left"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn delay={0.2} className="space-y-6 text-brand-700/90 dark:text-brand-200/90 leading-relaxed text-base">
              <p>
                <strong className="font-semibold text-brand-900 dark:text-white">Versuzo</strong> was founded by <strong className="font-semibold text-brand-900 dark:text-white">Hemanth Grandhi (Founder)</strong> and <strong className="font-semibold text-brand-900 dark:text-white">Nishank Durgam (CEO)</strong> with a vision to bridge the gap between education and industry by empowering students with practical, job-ready skills.
              </p>
              <p>
                At Versuzo, we believe that talent alone is not enough—students need the right guidance, industry exposure, and opportunities to transform their potential into successful careers. Our platform is designed to help learners gain in-demand skills through expert-led courses, live training sessions, hands-on projects, certifications, and career-focused mentorship. The goal is to make quality skill development accessible, affordable, and impactful for every learner.
              </p>
              <p>
                We work closely with industry professionals and organizations to ensure that our programs align with real-world requirements. Whether you are a student looking to build your career, a graduate preparing for placements, or a professional seeking to upskill, Versuzo provides the tools, knowledge, and support needed to achieve your goals.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <FadeIn direction="right" delay={0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-xl dark:border-brand-900 dark:bg-brand-950 dark:hover:border-sky-800">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-tr from-sky-400/10 to-indigo-600/10 transition-transform duration-500 group-hover:scale-110" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-sky">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-brand-900 dark:text-white">
                Our Mission
              </h3>
              <p className="mt-4 text-brand-700/80 dark:text-brand-200/80 leading-relaxed">
                Transforming Talent into Opportunity and Success by providing practical, industry-relevant learning experiences that prepare individuals for the future workforce.
              </p>
            </div>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn direction="left" delay={0.2}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-xl dark:border-brand-900 dark:bg-brand-950 dark:hover:border-indigo-800">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-tr from-indigo-400/10 to-purple-600/10 transition-transform duration-500 group-hover:scale-110" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-indigo-500/30">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-brand-900 dark:text-white">
                Our Vision
              </h3>
              <p className="mt-4 text-brand-700/80 dark:text-brand-200/80 leading-relaxed">
                To become a trusted learning platform that empowers learners with the skills, confidence, and opportunities needed to excel in a rapidly evolving world.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Core Pillars / Learning Grid */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-900 dark:text-white">
              Why Learn With Us
            </h3>
            <p className="mt-3 text-brand-600/80 dark:text-brand-300/80">
              A comprehensive system built around employability, industry readiness, and support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl border border-brand-100 bg-white/60 p-6 transition-all duration-300 hover:bg-white hover:shadow-md dark:border-brand-900 dark:bg-brand-950/40 dark:hover:bg-brand-950">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 dark:bg-brand-900/60 dark:text-sky-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-bold text-brand-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-sm text-brand-700/80 dark:text-brand-300/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
