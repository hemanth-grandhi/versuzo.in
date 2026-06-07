"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LearningStep } from "@/types/content";

interface LearningExperienceProps {
  steps: LearningStep[];
}

export function LearningExperience({ steps }: LearningExperienceProps) {
  return (
    <section className="section-padding section-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Learning Experience"
          title="Your journey to success"
          description="A proven 5-step pathway from enrollment to career advancement."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-brand-900 via-sky-500 to-transparent lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 lg:text-right">
                    <div
                      className={`rounded-2xl border border-brand-100 bg-white p-6 shadow-sm dark:border-brand-800 dark:bg-brand-900 ${
                        i % 2 === 1 ? "lg:text-left" : "lg:ml-auto lg:max-w-md"
                      } ${i % 2 === 0 ? "lg:mr-auto lg:max-w-md" : ""}`}
                    >
                      <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                        Step {step.step}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-brand-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-brand-700/80 dark:text-brand-200/80">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    className="icon-gradient relative z-10 flex h-16 w-16 shrink-0 items-center justify-center self-start rounded-2xl text-xl font-bold lg:self-center"
                  >
                    {step.step}
                  </motion.div>

                  <div className="hidden flex-1 lg:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
