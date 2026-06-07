"use client";

import Image from "next/image";
import { Users, Award, BookOpen, Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { Stat } from "@/types/content";

interface ImpactTrustProps {
  stats: Stat[];
}

export function ImpactTrust({ stats }: ImpactTrustProps) {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "learners":
        return <Users className="h-6 w-6 text-sky-400" />;
      case "mentors":
        return <Award className="h-6 w-6 text-sky-400" />;
      case "programs":
        return <BookOpen className="h-6 w-6 text-sky-400" />;
      case "satisfaction rate":
        return <Heart className="h-6 w-6 text-sky-400" />;
      default:
        return <Award className="h-6 w-6 text-sky-400" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 pt-16 pb-12 text-white border-y border-brand-800/50 w-full">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />

      {/* SECTION 1: IMPACT METRICS - constrained width */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-sky-500/10">
                {/* Glass Card Header Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-inner transition-transform duration-300 group-hover:scale-110">
                  {getIcon(stat.label)}
                </div>
                
                {/* Statistic Value */}
                <h3 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} />
                </h3>
                
                {/* Label */}
                <p className="mt-2 text-sm font-medium tracking-wide text-brand-200/80">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* SECTION 2: TRUSTED BY LEARNERS HIRED AT - full-width edge-to-edge */}
      <div className="w-full pt-6 border-t border-white/5">
        
        {/* Constrained header text */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-8">
          <FadeIn delay={0.2}>
            <h4 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Trusted by Learners Hired At
            </h4>
            <p className="mx-auto mt-2 max-w-2xl text-base text-brand-200/70">
              {"Our learners have secured opportunities at some of the world's most innovative companies."}
            </p>
          </FadeIn>
        </div>

        {/* Edge-to-edge infinite marquee container */}
        <div className="relative w-full overflow-hidden py-3">
          {/* RTL Marquee Scroller - w-max for exact width, smooth premium speed */}
          <div 
            className="animate-marquee-rtl flex items-center gap-6 md:gap-8 w-max"
            style={{ animationDuration: "30s" }}
          >
            {/* Duplicated exactly twice to ensure a perfect, mathematically seamless 50% translation loop without jumps or resets */}
            {[
              ...PARTNERS_LOGOS,
              ...PARTNERS_LOGOS,
            ].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 items-center justify-center h-16 px-6 md:px-8 bg-white/95 rounded-2xl shadow-lg border border-white/10 hover:border-sky-400 hover:scale-105 hover:bg-white transition-all duration-300 select-none cursor-pointer"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-8 w-auto object-contain md:h-9"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const PARTNERS_LOGOS = [
  { name: "Google", src: "/images/google.svg", width: 112, height: 36 },
  { name: "Microsoft", src: "/images/microsoft.svg", width: 140, height: 32 },
  { name: "Amazon", src: "/images/amazon.svg", width: 110, height: 34 },
  { name: "Meta", src: "/images/meta.svg", width: 110, height: 32 },
  { name: "Adobe", src: "/images/adobe.svg", width: 110, height: 32 },
  { name: "Salesforce", src: "/images/salesforce.svg", width: 130, height: 36 },
  { name: "Oracle", src: "/images/oracle.svg", width: 120, height: 30 },
  { name: "Stripe", src: "/images/stripe.svg", width: 110, height: 32 },
  { name: "NVIDIA", src: "/images/nvidia.svg", width: 116, height: 34 },
  { name: "JPMorgan Chase", src: "/logos/jpmorgan.svg", width: 132, height: 32 },
];
