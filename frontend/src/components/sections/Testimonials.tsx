"use client";

import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  // Duplicate the testimonials array 3 times to ensure a mathematically perfect, gapless loop
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 dark:bg-brand-950 border-t border-brand-100/80 dark:border-brand-900/50 w-full bg-[#FAFBFD]">
      {/* Subtle ambient light glows */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-40 w-80 rounded-full bg-sky-500/10 blur-2xl dark:bg-brand-900/10" />

      {/* Section Headers */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-4 py-1.5 text-xs font-bold text-sky-700 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 shadow-sm mb-4">
            🎓 Success Stories
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl dark:text-white">
            Hear From Our Students
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-brand-700/80 dark:text-brand-300/80">
            Real stories from learners who transformed their careers with Versuzo.
          </p>
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="w-full overflow-hidden">
        <div className="relative w-full py-4 overflow-hidden">
          
          {/* Fade out masks on the sides */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#FAFBFD] to-[#FAFBFD]/0 dark:from-brand-950 dark:to-brand-950/0" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#FAFBFD] to-[#FAFBFD]/0 dark:from-brand-950 dark:to-brand-950/0" />

          {/* RTL Marquee Scroller - Pauses scrolling when hovered */}
          <div 
            className="animate-marquee-rtl flex items-stretch gap-6 w-max hover:[animation-play-state:paused]"
            style={{ animationDuration: "180s" }}
          >
            {duplicatedTestimonials.map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="group relative flex w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-brand-100/80 bg-white/95 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand dark:border-brand-850 dark:bg-brand-900/80 backdrop-blur-sm shadow-sm"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`h-4 w-4 ${
                          j < t.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-amber-200 dark:text-brand-800"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-xs md:text-sm text-brand-700/95 dark:text-brand-200/90 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Footer Metadata - Text-based design (No images) */}
                <div className="mt-6 pt-4 border-t border-brand-100/60 dark:border-brand-800/40">
                  <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                    {t.name}
                  </h4>
                  {/* Course Name */}
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
