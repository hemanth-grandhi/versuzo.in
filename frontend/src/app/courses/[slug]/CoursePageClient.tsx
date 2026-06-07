"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Check,
  Calendar,
  Video,
  Users,
  Award,
  Sparkles,
  Clock,
  ChevronDown,
  ChevronUp,
  Download,
  ArrowRight,
  Star,
  BookOpen,
  Terminal,
  Cpu,
  ShieldAlert,
  HelpCircle,
  Briefcase,
  Layers,
  GraduationCap,
  TrendingUp,
  CreditCard,
  Percent,
  Gift,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { CourseDetail } from "@/data/coursesData";

interface CoursePageClientProps {
  course: CourseDetail;
}

export function CoursePageClient({ course }: CoursePageClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  const getWhatsAppEnrollUrl = (courseTitle: string) => {
    const fullMessage = `Hello Versuzo Team,

I am interested in enrolling in the following program:

Course: ${courseTitle}

I would like to know more about:
• Course Curriculum
• Duration
• Fees Structure
• Internship Opportunities
• Certifications Included
• Placement Assistance
• Enrollment Process

Please share the complete details.

Thank you.`;
    return `https://wa.me/917702502125?text=${encodeURIComponent(fullMessage)}`;
  };

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Scroll listener for sticky mobile CTA button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-brand-950 text-brand-900 dark:text-brand-50 pt-16">
      
      {/* Background radial glows matching brand colors */}
      <div className="absolute -right-48 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/5" />
      <div className="absolute -left-48 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[120px] dark:bg-brand-500/5" />

      {/* 1. Page Hero Section */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 border-b border-brand-100/60 dark:border-brand-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-4 py-1.5 text-xs font-bold text-sky-700 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 shadow-sm">
                <span>🔥</span> {course.badge}
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-brand-900 dark:text-white leading-tight">
                {course.title.split(" Internship ")[0]} <br />
                <span className="bg-gradient-to-r from-brand-500 to-sky-400 bg-clip-text text-transparent">
                  Internship Program
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-brand-700 dark:text-brand-300 leading-relaxed max-w-2xl">
                {course.tagline}
              </p>

              {/* Promo Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-brand-100/60 dark:border-brand-900/40">
                <div>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent dark:from-white dark:to-sky-400">
                    {course.duration}
                  </p>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-1 uppercase tracking-wider">
                    Total Duration
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent dark:from-white dark:to-sky-400">
                    {course.fee}
                  </p>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-1 uppercase tracking-wider">
                    Special Program Fee
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent dark:from-white dark:to-sky-400">
                    {course.isProjectBased ? "Project-Based" : "Practical"}
                  </p>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-1 uppercase tracking-wider">
                    Internship Shortlists
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  href={getWhatsAppEnrollUrl(course.title)}
                  target="_blank"
                  variant="primary"
                  className="!px-8 !py-3.5 bg-gradient-to-r from-sky-400 to-brand-600 text-white shadow-sky hover:from-sky-500 hover:to-brand-700 font-bold text-base w-full sm:w-auto"
                >
                  Enroll Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  href="#pricing"
                  variant="outline"
                  className="!px-8 !py-3.5 border-brand-200 dark:border-brand-800 text-brand-900 dark:text-brand-100 hover:border-sky-500 font-bold text-base w-full sm:w-auto"
                >
                  <Download className="h-5 w-5" />
                  Download Brochure
                </Button>
              </div>

            </div>

            {/* Right Card Panel */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-brand-100/80 bg-white/80 dark:border-brand-900/60 dark:bg-brand-950/70 p-6 md:p-8 shadow-brand backdrop-blur-md">
                
                {/* Highlight gradient line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 to-sky-400" />
                
                <h3 className="font-display text-xl font-bold text-brand-900 dark:text-white">
                  Program Highlights
                </h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                      <Clock className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-900 dark:text-white">Intensive Training</p>
                      <p className="text-xs text-brand-700 dark:text-brand-300 mt-1 leading-relaxed">
                        {course.highlights.training}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-900 dark:text-white">Doubt-Clearing & Mentor Guidance</p>
                      <p className="text-xs text-brand-700 dark:text-brand-300 mt-1 leading-relaxed">
                        {course.highlights.mentorship}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                      <Terminal className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-900 dark:text-white">Project Development Phase</p>
                      <div className="text-xs text-brand-700 dark:text-brand-300 mt-1 space-y-1.5 leading-relaxed">
                        <p>{course.highlights.projects.description}</p>
                        <div className="bg-brand-50/50 dark:bg-brand-900/30 p-2.5 rounded-xl border border-brand-100/40 space-y-1">
                          <p><strong>Minor Projects:</strong> {course.highlights.projects.minor.join(", ")}</p>
                          <p><strong>Major Projects:</strong> {course.highlights.projects.major.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                      <Award className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-900 dark:text-white">Internship Opportunity</p>
                      <div className="text-xs text-brand-700 dark:text-brand-300 mt-1 leading-relaxed">
                        <p>{course.highlights.internship}</p>
                        <p className="mt-1 text-[10px] text-brand-600 dark:text-brand-400 italic">
                          Selection based on: Project Quality, Technical Skills, Mentor Evaluation, Attendance & Participation, and Final Assessment.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-brand-100/60 dark:border-brand-900/40 text-center">
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-1">
                    Special Program Fee
                  </span>
                  <span className="text-4xl font-extrabold text-brand-900 dark:text-white">
                    {course.fee}
                  </span>
                  <span className="text-xs text-brand-500 block mt-1">
                    All-inclusive price (No hidden charges)
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Course Overview */}
      <section className="py-16 bg-brand-50/20 dark:bg-brand-950/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white">
              Course Overview
            </h2>
            <p className="text-base md:text-lg text-brand-700 dark:text-brand-300 leading-relaxed">
              {course.overview}
            </p>
          </div>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Card 1: Duration */}
            <div className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-sm hover:shadow-brand transition-all dark:border-brand-900/60 dark:bg-brand-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-900 to-sky-500 text-white shadow-md mb-5">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-900 dark:text-white">
                Program Duration
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-700 dark:text-brand-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <strong>1 Month:</strong> {course.durationDetails.training}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <strong>2 Months:</strong> {course.durationDetails.project}
                </li>
                <li className="flex items-center gap-2 font-bold text-brand-900 dark:text-white border-t border-brand-100/50 dark:border-brand-900/30 pt-2 mt-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Total Duration: {course.durationDetails.total}
                </li>
              </ul>
            </div>

            {/* Card 2: Mode */}
            <div className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-sm hover:shadow-brand transition-all dark:border-brand-900/60 dark:bg-brand-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-900 to-sky-500 text-white shadow-md mb-5">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-900 dark:text-white">
                Delivery Mode & Format
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-700 dark:text-brand-300">
                {course.deliveryMode.map((mode, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {mode}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Support */}
            <div className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-sm hover:shadow-brand transition-all dark:border-brand-900/60 dark:bg-brand-950 sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-900 to-sky-500 text-white shadow-md mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-900 dark:text-white">
                Mentorship & Support
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-700 dark:text-brand-300">
                {course.mentorshipSupport.map((support, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {support}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 2.1 Who Should Enroll & Learning Outcomes Section */}
      <section className="py-16 border-b border-brand-100/60 dark:border-brand-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Who Should Enroll */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-100/80 bg-white dark:border-brand-900/50 dark:bg-brand-950 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 mb-6">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-900 dark:text-white">
                Who Should Enroll
              </h3>
              <p className="mt-3 text-sm text-brand-700 dark:text-brand-300 leading-relaxed">
                This program is tailored specifically for individuals looking to gain industry experience, boost their technical skills, and secure career opportunities:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Engineering students (CSE, ECE, EEE, Mechanical, IT, etc.) looking for practical project-based credits.",
                  "Graduates and final-year students preparing for placement drives and technical interviews.",
                  "Self-taught programmers and professionals wanting to transition into high-growth specialized fields.",
                  "Aspiring developers who want to work on real codebases and get direct mentor reviews."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-brand-700 dark:text-brand-300">
                    <Check className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-100/80 bg-white dark:border-brand-900/50 dark:bg-brand-950 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-900 dark:text-white">
                Learning Outcomes
              </h3>
              <p className="mt-3 text-sm text-brand-700 dark:text-brand-300 leading-relaxed">
                By the end of this intensive 3-month training and internship program, you will be able to:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Architect, program, and deploy robust hardware/software systems based on industry specifications.",
                  "Build a premium developer portfolio consisting of 3 minor and 3 major production-level projects.",
                  "Collaborate effectively using standard version control workflows (Git, GitHub, Pull Requests).",
                  "Qualify for corporate internship placements through evaluations and final project presentations."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-brand-700 dark:text-brand-300">
                    <Check className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Program Structure Timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white sm:text-4xl">
              Program Timeline & Syllabus
            </h2>
            <p className="text-base text-brand-700 dark:text-brand-300 max-w-2xl mx-auto">
              Follow our structured learning roadmap built to transition you from core fundamentals to advanced project deployment.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative border-l-2 border-brand-100 dark:border-brand-900/60 ml-4 md:ml-32 pl-8 space-y-12">
            
            {/* MONTH 1 */}
            <div className="relative">
              
              {/* Badge Circle Indicator */}
              <div className="absolute -left-[43px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 dark:bg-brand-800 text-white ring-4 ring-white dark:ring-brand-950">
                <BookOpen className="h-4 w-4" />
              </div>

              {/* Month Header Label */}
              <div className="md:absolute md:-left-[210px] md:top-2 md:w-40 text-left md:text-right font-display text-sm font-extrabold uppercase tracking-widest text-brand-600 dark:text-sky-400 mb-2 md:mb-0">
                Month 1
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-brand-100 bg-white/50 dark:border-brand-900/40 dark:bg-brand-950/20 p-6 md:p-8 backdrop-blur-sm shadow-sm">
                <h3 className="text-xl font-bold text-brand-900 dark:text-white flex items-center gap-2">
                  {course.timeline.month1.title}
                </h3>
                <p className="text-xs text-brand-600 dark:text-brand-400 mt-1">
                  {course.timeline.month1.subtitle}
                </p>

                {/* Month 1 Content */}
                <div className="grid gap-6 mt-6 sm:grid-cols-2">
                  {course.timeline.month1.topics.map((group, idx) => (
                    <div className="space-y-2" key={idx}>
                      <h4 className="text-sm font-bold text-brand-900 dark:text-white">{group.category}</h4>
                      <ul className="text-xs text-brand-700 dark:text-brand-300 space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* MONTH 2 */}
            <div className="relative">
              
              {/* Badge Circle Indicator */}
              <div className="absolute -left-[43px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 dark:bg-brand-800 text-white ring-4 ring-white dark:ring-brand-950">
                <Briefcase className="h-4 w-4" />
              </div>

              {/* Month Header Label */}
              <div className="md:absolute md:-left-[210px] md:top-2 md:w-40 text-left md:text-right font-display text-sm font-extrabold uppercase tracking-widest text-brand-600 dark:text-sky-400 mb-2 md:mb-0">
                Month 2
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-brand-100 bg-white/50 dark:border-brand-900/40 dark:bg-brand-950/20 p-6 md:p-8 backdrop-blur-sm shadow-sm">
                <h3 className="text-xl font-bold text-brand-900 dark:text-white flex items-center gap-2">
                  {course.timeline.month2.title}
                </h3>
                <p className="text-xs text-brand-600 dark:text-brand-400 mt-1">
                  {course.timeline.month2.subtitle}
                </p>

                {/* Month 2 Content */}
                <div className="grid gap-6 mt-6 sm:grid-cols-2">
                  {course.timeline.month2.topics.map((group, idx) => (
                    <div className="space-y-2" key={idx}>
                      <h4 className="text-sm font-bold text-brand-900 dark:text-white">{group.category}</h4>
                      <ul className="text-xs text-brand-700 dark:text-brand-300 space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* MONTH 3 */}
            <div className="relative">
              
              {/* Badge Circle Indicator */}
              <div className="absolute -left-[43px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 dark:bg-brand-800 text-white ring-4 ring-white dark:ring-brand-950">
                <Award className="h-4 w-4" />
              </div>

              {/* Month Header Label */}
              <div className="md:absolute md:-left-[210px] md:top-2 md:w-40 text-left md:text-right font-display text-sm font-extrabold uppercase tracking-widest text-brand-600 dark:text-sky-400 mb-2 md:mb-0">
                Month 3
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-brand-100 bg-white/50 dark:border-brand-900/40 dark:bg-brand-950/20 p-6 md:p-8 backdrop-blur-sm shadow-sm">
                <h3 className="text-xl font-bold text-brand-900 dark:text-white flex items-center gap-2">
                  {course.timeline.month3.title}
                </h3>
                <p className="text-xs text-brand-600 dark:text-brand-400 mt-1">
                  {course.timeline.month3.subtitle}
                </p>

                {/* Month 3 Content */}
                <div className="grid gap-6 mt-6 sm:grid-cols-2">
                  {course.timeline.month3.topics.map((group, idx) => (
                    <div className="space-y-2" key={idx}>
                      <h4 className="text-sm font-bold text-brand-900 dark:text-white">{group.category}</h4>
                      <ul className="text-xs text-brand-700 dark:text-brand-300 space-y-1">
                        {group.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3.1 Projects & Hands-On Experience Dedicated Showcase */}
      <section className="py-16 bg-brand-50/10 dark:bg-brand-950/20 border-t border-b border-brand-100/60 dark:border-brand-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white">
              Projects & Hands-on Experience
            </h2>
            <p className="text-base text-brand-700 dark:text-brand-300 max-w-xl mx-auto">
              Build a solid industrial engineering portfolio. Work on realistic projects under senior supervision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Minor Projects Card */}
            <div className="relative p-8 rounded-3xl border border-brand-100/80 bg-white dark:border-brand-900/50 dark:bg-brand-950 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 dark:bg-brand-900/40 px-3.5 py-1 text-xs font-bold text-brand-700 dark:text-brand-300 border border-brand-100 dark:border-brand-900/30 mb-4">
                  🛠️ Month 2 Core Modules
                </span>
                <h3 className="font-display text-2xl font-bold text-brand-900 dark:text-white">
                  Minor Projects
                </h3>
                <p className="text-sm text-brand-700 dark:text-brand-300 mt-2 leading-relaxed">
                  Establish code syntax and developer environments by completing three guided minor projects:
                </p>
                <div className="mt-6 space-y-3">
                  {course.highlights.projects.minor.map((proj, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <div className="h-2 w-2 rounded-full bg-brand-500" />
                      <span className="text-sm font-bold text-brand-900 dark:text-brand-100">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Major Projects Card */}
            <div className="relative p-8 rounded-3xl border border-brand-500/30 bg-white dark:border-brand-900/50 dark:bg-brand-950 shadow-md flex flex-col justify-between">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-sky-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Placement Enabler
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-3.5 py-1 text-xs font-bold text-sky-700 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 mb-4">
                  🚀 Month 3 Capstone Systems
                </span>
                <h3 className="font-display text-2xl font-bold text-brand-900 dark:text-white">
                  Major Projects
                </h3>
                <p className="text-sm text-brand-700 dark:text-brand-300 mt-2 leading-relaxed">
                  Build complete product architectures, write clean testing, host the projects live, and prepare for design evaluations:
                </p>
                <div className="mt-6 space-y-3">
                  {course.highlights.projects.major.map((proj, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <div className="h-2 w-2 rounded-full bg-sky-500" />
                      <span className="text-sm font-bold text-brand-900 dark:text-brand-100">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3.2 Career Opportunities After Completion Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white">
              Career Opportunities & Roles
            </h2>
            <p className="text-base text-brand-700 dark:text-brand-300 max-w-xl mx-auto">
              This curriculum is designed to prepare you for highly-sought roles in the tech and engineering markets.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { role: "Junior System Engineer", salary: "₹5.5 - ₹8 LPA", desc: "Responsible for setting up system components, writing basic control logic, and maintaining code databases." },
              { role: "Core Systems Analyst", salary: "₹6.0 - ₹9 LPA", desc: "Monitors operations, runs software audits, audits configurations, and resolves pipeline errors." },
              { role: "Product Development Intern", salary: "₹20K - ₹35K/mo stipend", desc: "Builds prototypes, tests parameters under load, and prepares technical handoffs." },
              { role: "Specialized Engineer / Consultant", salary: "₹7.0 - ₹12 LPA", desc: "Consults on systems integrations, executes optimizations, and maps structural designs." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-brand-100 bg-white dark:border-brand-900/60 dark:bg-brand-950 hover:shadow-brand transition-all flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 border border-brand-100 dark:border-brand-900/30 mb-4">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-brand-900 dark:text-white">{item.role}</h4>
                  <p className="text-xs font-semibold text-brand-500 mt-1">Average Starting: {item.salary}</p>
                  <p className="text-xs text-brand-700 dark:text-brand-300 mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. What Students Will Receive (Certifications & Support) */}
      <section className="py-16 md:py-20 bg-brand-50/20 dark:bg-brand-950/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white">
              What You&apos;ll Receive
            </h2>
            <p className="text-base text-brand-700 dark:text-brand-300 max-w-xl mx-auto">
              Unlock the comprehensive kit of training, credentials, career support, and placement referrals.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {course.whatYouWillReceive.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-5 hover:shadow-brand transition-all dark:border-brand-900/60 dark:bg-brand-950 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 mb-4">
                    <Check className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-700 dark:text-brand-300 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Versuzo? */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white sm:text-4xl">
              Why Choose Versuzo?
            </h2>
            <p className="text-base text-brand-700 dark:text-brand-300 max-w-2xl mx-auto">
              Our unique approach matches educational curriculum with real-world developer timelines.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {course.whyChoose.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-900 to-sky-500 text-white shadow-md">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-900 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-brand-700 dark:text-brand-300 mt-1.5 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Dedicated Pricing & Fees Structure Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white sm:text-4xl">
              Fees & Payment Structure
            </h2>
            <p className="text-base text-brand-700 dark:text-brand-300 max-w-xl mx-auto">
              Start your career transformation today with all-inclusive fee plans and flexible pricing.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            
            {/* Left Main Pricing Card */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-3xl border-2 border-brand-500 bg-white/95 backdrop-blur-md p-8 shadow-brand dark:bg-brand-950/90 flex flex-col justify-between">
              
              {/* Pop tag */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 bg-brand-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-b-xl">
                Limited Seats Available
              </div>

              <div className="mt-4">
                <h3 className="font-display text-2xl font-bold text-brand-900 dark:text-white">
                  {course.title}
                </h3>
                <div className="text-xs text-brand-600 dark:text-brand-400 mt-2 space-y-1 font-semibold">
                  <p>Duration: 3 Months</p>
                  <p>Mode: Live Online Lectures + Project Mentorship</p>
                  <p>Certificate: Dual (Training & Project Execution)</p>
                </div>

                <div className="my-8 text-center sm:text-left">
                  <span className="text-6xl font-extrabold text-brand-900 dark:text-white tracking-tight">
                    {course.feeStructure.amount}
                  </span>
                  <span className="text-xs text-brand-500 block mt-2">
                    One-time Payment • All-inclusive GST & Materials
                  </span>
                </div>

                <div className="border-t border-brand-100/60 dark:border-brand-900/40 pt-6 pb-2 text-left">
                  <h4 className="text-xs font-bold text-brand-900 dark:text-white uppercase tracking-wider mb-4">
                    What&apos;s Included in the Fee:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.feeStructure.included.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-brand-700 dark:text-brand-300">
                        <Check className="h-4 w-4 text-sky-500 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href={getWhatsAppEnrollUrl(course.title)}
                  target="_blank"
                  variant="primary"
                  className="!px-12 !py-4 bg-gradient-to-r from-sky-400 to-brand-600 text-white shadow-sky hover:from-sky-500 hover:to-brand-700 font-extrabold text-lg rounded-full w-full"
                >
                  Enroll Now
                </Button>
                <p className="text-[10px] text-brand-500 mt-3 text-center">
                  Secure Checkout • Instant Enrollment Confirmation
                </p>
              </div>

            </div>

            {/* Right Detailed Fee Layout */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              {/* EMI / Payment plans Card */}
              <div className="p-6 rounded-2xl border border-brand-100/80 bg-white/70 backdrop-blur-sm dark:border-brand-900/60 dark:bg-brand-950/40 shadow-sm space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                  Payment Plans & EMI Options
                </h4>
                <p className="text-xs text-brand-700 dark:text-brand-300 leading-relaxed">
                  {course.feeStructure.paymentPlans}
                </p>
              </div>

              {/* Discounts Card */}
              <div className="p-6 rounded-2xl border border-brand-100/80 bg-white/70 backdrop-blur-sm dark:border-brand-900/60 dark:bg-brand-950/40 shadow-sm space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                  <Percent className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                  Available Discounts
                </h4>
                <p className="text-xs text-brand-700 dark:text-brand-300 leading-relaxed">
                  {course.feeStructure.discounts}
                </p>
              </div>

              {/* Scholarships Card */}
              <div className="p-6 rounded-2xl border border-brand-100/80 bg-white/70 backdrop-blur-sm dark:border-brand-900/60 dark:bg-brand-950/40 shadow-sm space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50">
                  <Gift className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                  Scholarship Information
                </h4>
                <p className="text-xs text-brand-700 dark:text-brand-300 leading-relaxed">
                  {course.feeStructure.scholarship}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="py-16 md:py-20 bg-brand-50/20 dark:bg-brand-950/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-3xl font-bold text-brand-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-brand-700 dark:text-brand-300 max-w-xl mx-auto">
              Got questions? We have got answers. Find out details about syllabus, certificates, and timings.
            </p>
          </div>

          {/* Accordion Lists */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {course.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-100 bg-white/70 dark:border-brand-900/60 dark:bg-brand-950/40 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-brand-900 dark:text-white hover:bg-brand-50/50 dark:hover:bg-brand-900/10 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-sky-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-sky-500" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-xs text-brand-700 dark:text-brand-300 border-t border-brand-100/40 dark:border-brand-900/20 leading-relaxed bg-brand-50/10 dark:bg-brand-950/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. Sticky Mobile CTA Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 inset-x-0 bg-white/95 dark:bg-brand-950/95 border-t border-brand-100/60 dark:border-brand-900/40 p-4 z-40 md:hidden flex items-center justify-between shadow-brand backdrop-blur-md"
          >
            <div>
              <p className="text-xs font-bold text-brand-900 dark:text-white leading-tight">
                {course.title.split(" Internship ")[0]}
              </p>
              <p className="text-sm font-extrabold text-brand-600 dark:text-sky-400 mt-0.5">
                {course.fee} ({course.duration})
              </p>
            </div>
            <Link
              href={getWhatsAppEnrollUrl(course.title)}
              target="_blank"
              className="bg-gradient-to-r from-sky-400 to-brand-600 hover:from-sky-500 hover:to-brand-700 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-sky"
            >
              Enroll Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
