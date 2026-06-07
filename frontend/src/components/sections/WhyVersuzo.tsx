"use client";

import {
  Award,
  BadgeCheck,
  Briefcase,
  Compass,
  FolderKanban,
  Users,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { WhyFeature } from "@/types/content";

interface WhyVersuzoProps {
  features: WhyFeature[];
}

const iconMap = {
  users: Users,
  award: Award,
  folder: FolderKanban,
  compass: Compass,
  badge: BadgeCheck,
  briefcase: Briefcase,
};

export function WhyVersuzo({ features }: WhyVersuzoProps) {
  return (
    <section id="why" className="section-padding section-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Why Versuzo"
          title="Why Learn With Us"
          description="A complete learning ecosystem designed to take you from curious learner to confident professional."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-brand-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-400 dark:border-brand-800 dark:bg-brand-900 dark:hover:border-sky-600">
                  <div className="icon-gradient mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-115 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-brand-700/80 dark:text-brand-200/80">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
