"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Program } from "@/types/content";

interface ProgramsProps {
  programs: Program[];
}

export function Programs({ programs }: ProgramsProps) {
  return (
    <section id="programs" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Featured Programs"
          title="Programs designed for career growth"
          description="Choose from industry-leading cohort-based programs taught by experts from top companies."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <FadeIn key={program.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-shadow hover:border-sky-200 hover:shadow-xl dark:border-brand-800 dark:bg-brand-900"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800 backdrop-blur-sm dark:bg-brand-900/90 dark:text-brand-100">
                    {program.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-brand-900 dark:text-white">
                      {program.title}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium text-brand-700 dark:text-brand-200">
                        {program.rating}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <Image
                      src={program.mentor.image}
                      alt={program.mentor.name}
                      width={36}
                      height={36}
                      className="rounded-full ring-2 ring-white dark:ring-brand-800"
                    />
                    <div>
                      <p className="text-sm font-medium text-brand-900 dark:text-white">
                        {program.mentor.name}
                      </p>
                      <p className="text-xs text-brand-600/70 dark:text-brand-300/70">
                        Lead Mentor
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-brand-100 pt-4 dark:border-brand-800">
                    <span className="flex items-center gap-1.5 text-sm text-brand-600/70 dark:text-brand-300/70">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </span>
                    <span className="text-lg font-bold text-sky-600 dark:text-sky-400">
                      {program.price}
                    </span>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
