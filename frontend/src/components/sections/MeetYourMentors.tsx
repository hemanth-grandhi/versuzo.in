"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Mentor } from "@/types/content";

interface MeetYourMentorsProps {
  mentors: Mentor[];
}

export function MeetYourMentors({ mentors }: MeetYourMentorsProps) {
  const duplicatedMentors = [
    ...mentors,
    ...mentors,
    ...mentors,
    ...mentors,
    ...mentors,
    ...mentors,
    ...mentors,
    ...mentors,
  ];

  return (
    <section className="relative w-full overflow-hidden border-y border-brand-100/80 bg-[#F4F8FC] py-16 dark:border-brand-900/50 dark:bg-brand-950">
      <div className="pointer-events-none absolute left-1/4 top-0 h-40 w-80 rounded-full bg-brand-500/10 blur-2xl dark:bg-brand-900/10" />

      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 dark:text-white sm:text-4xl">
            Learn From Industry Experts
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-brand-700/80 dark:text-brand-300/80">
            {
              "Meet the professionals working at the world's leading companies who will guide your journey."
            }
          </p>
        </div>
      </div>

      <FadeIn delay={0.2} className="w-full overflow-hidden">
        <div className="relative w-full overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#F4F8FC] to-[#F4F8FC]/0 dark:from-brand-950 dark:to-brand-950/0" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#F4F8FC] to-[#F4F8FC]/0 dark:from-brand-950 dark:to-brand-950/0" />

          <div
            className="animate-marquee-ltr flex w-max items-stretch gap-6"
            style={{ animationDuration: "80s" }}
          >
            {duplicatedMentors.map((mentor, index) => {
              const isVamshi = mentor.name === "Vamshi Vobbilisetti";

              return (
                <div
                  key={`${mentor.name}-${index}`}
                  className="group relative flex w-[260px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border-2 border-sky-400 bg-white/95 p-6 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-brand dark:border-sky-500/80 dark:bg-brand-900/80"
                >
                  <div className="flex flex-1 flex-col items-center">
                    <div className="relative mt-2 h-20 w-20">
                      <div className="absolute inset-0 -m-0.5 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 p-[1.5px] opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 dark:from-brand-800 dark:to-brand-700" />
                      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white dark:border-brand-900">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="80px"
                        />
                      </div>
                    </div>

                    {mentor.badge && (
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-700 dark:border-brand-800/80 dark:bg-brand-900/50 dark:text-brand-300">
                          {mentor.badge}
                        </span>
                      </div>
                    )}

                    <h3 className="mt-4 text-base font-bold text-brand-900 transition-colors duration-300 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                      {mentor.name}
                    </h3>

                    <p className="mt-1 line-clamp-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                      {mentor.designation}
                    </p>

                    <p className="mt-0.5 line-clamp-1 text-[11px] font-medium text-brand-500/80 dark:text-brand-400/80">
                      {mentor.company}
                      {mentor.location ? ` - ${mentor.location}` : ""}
                    </p>
                  </div>

                  <div className="mt-5 w-full border-t border-brand-100/50 pt-3.5 dark:border-brand-800/40">
                    {mentor.logos && mentor.logos.length > 0 && (
                      <div
                        className={`mb-2 flex items-center justify-center gap-2 ${
                          isVamshi ? "gap-3 py-1" : ""
                        }`}
                      >
                        {mentor.logos.map((logo, logoIdx) => (
                          <div
                            key={logoIdx}
                            className={`flex items-center justify-center rounded-lg border border-brand-100/50 bg-white shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md ${
                              isVamshi ? "h-16 w-24" : "h-8 px-2.5 py-1"
                            }`}
                          >
                            <Image
                              src={logo}
                              alt="Company logo"
                              width={isVamshi ? 120 : 64}
                              height={isVamshi ? 48 : 20}
                              className={`${isVamshi ? "h-10 max-w-[80px]" : "h-5"} w-auto object-contain`}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
