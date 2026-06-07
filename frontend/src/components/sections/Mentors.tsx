"use client";

import Image from "next/image";
import { Linkedin, Calendar, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Mentor } from "@/types/content";

interface MentorsProps {
  mentors: Mentor[];
}

export function Mentors({ mentors }: MentorsProps) {
  return (
    <section id="mentors" className="section-padding relative overflow-hidden bg-white dark:bg-brand-950">
      {/* Decorative ambient elements */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-950/20" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-900/10" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Expert Mentors"
          title="Learn from industry leaders"
          description="Our mentors bring decades of experience from the world's most innovative companies."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor, i) => {
            const isFeatured = mentor.name === "Vamshi Vobbilisetti";

            return (
              <FadeIn key={mentor.name} delay={i * 0.1}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 dark:bg-brand-900
                    ${isFeatured 
                      ? "border-sky-300 shadow-[0_10px_35px_-8px_rgba(75,179,230,0.25)] hover:border-sky-400 dark:border-sky-700/60" 
                      : "border-brand-100 hover:border-sky-200 hover:shadow-xl dark:border-brand-800/80 dark:hover:border-brand-700"
                    }`}
                >
                  {/* Subtle Card Accent for Featured Mentor */}
                  {isFeatured && (
                    <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-900 via-sky-500 to-sky-400" />
                  )}

                  {/* Badge */}
                  {mentor.badge && (
                    <span 
                      className={`absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm
                        ${isFeatured 
                          ? "bg-gradient-to-r from-sky-500 to-sky-600" 
                          : "bg-brand-700"
                        }`}
                    >
                      {isFeatured && <Sparkles className="h-2.5 w-2.5" />}
                      {mentor.badge}
                    </span>
                  )}

                  <div>
                    {/* Mentor Image Showcase with ambient background ring */}
                    <div className="relative mx-auto mt-4 h-32 w-32">
                      <div className={`absolute inset-0 -m-1 rounded-full bg-gradient-to-br transition-transform duration-500 group-hover:scale-105
                        ${isFeatured 
                          ? "from-brand-900 via-sky-500 to-sky-400 p-[3px] opacity-100" 
                          : "from-sky-100 to-sky-200 p-[2px] opacity-70 group-hover:opacity-100 dark:from-sky-800 dark:to-sky-900"
                        }`} 
                      />
                      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white dark:border-brand-900">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="128px"
                          priority={isFeatured}
                        />
                      </div>
                    </div>

                    {/* Name and Titles */}
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-brand-900 dark:text-white transition-colors duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                        {mentor.name}
                      </h3>
                      
                      <p className="mt-2 text-sm font-semibold tracking-wide text-sky-600 dark:text-sky-400">
                        {mentor.designation}
                      </p>
                      
                      <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-300">
                        {mentor.company}{mentor.location ? ` • ${mentor.location}` : ""}
                      </p>

                      {/* Dynamic Logos Container */}
                      {mentor.logos && mentor.logos.length > 0 && (
                        <div className="mt-4 flex items-center justify-center gap-3">
                          {mentor.logos.map((logo, logoIdx) => (
                            <div
                              key={logoIdx}
                              className="flex h-8 items-center justify-center rounded-lg bg-brand-50/50 p-1.5 shadow-sm border border-brand-100/60 transition-all duration-300 hover:scale-110 dark:bg-white dark:border-white"
                            >
                              <Image
                                src={logo}
                                alt="Partner Logo"
                                width={68}
                                height={20}
                                className="h-5 w-auto object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      
                      {mentor.experience && (
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-500/70 dark:text-brand-400/60">
                          {mentor.experience} experience
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="mt-6 pt-4 border-t border-brand-50 dark:border-brand-800/60 flex items-center justify-between gap-3">
                    {/* LinkedIn Link */}
                    <a
                      href={mentor.linkedin}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-100 text-brand-600 transition-colors hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 dark:border-brand-800 dark:text-brand-400 dark:hover:border-sky-400 dark:hover:bg-brand-900 dark:hover:text-sky-400"
                      aria-label={`${mentor.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4.5 w-4.5" />
                    </a>

                    {/* High Converting Primary CTA */}
                    <button
                      className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs font-bold transition-all duration-300 hover:shadow-md
                        ${isFeatured
                          ? "bg-gradient-to-r from-brand-900 to-sky-600 text-white hover:from-sky-600 hover:to-brand-900"
                          : "border border-brand-200 bg-transparent text-brand-900 hover:bg-brand-50 dark:border-brand-800 dark:text-brand-300 dark:hover:bg-brand-800 dark:hover:text-white"
                        }`}
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Book 1:1 Session</span>
                    </button>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
