"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import type { Stat } from "@/types/content";

interface TrustProps {
  stats: Stat[];
  partners: string[];
}

export function Trust({ stats, partners }: TrustProps) {
  return (
    <section className="border-y border-brand-100 bg-surface-muted py-16 dark:border-brand-800 dark:bg-brand-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-900 sm:text-4xl dark:text-white">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 text-sm font-medium text-brand-700/80 dark:text-brand-200/80">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-16">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-brand-600/70 dark:text-brand-300/70">
            Trusted by learners hired at
          </p>
          <div className="relative w-full overflow-hidden py-4">
            {/* Soft gradient fade-out edges for premium marquee aesthetic */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F4F8FC] to-[#F4F8FC]/0 dark:from-brand-950 dark:to-brand-950/0" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F4F8FC] to-[#F4F8FC]/0 dark:from-brand-950 dark:to-brand-950/0" />

            <div className="animate-marquee-ltr flex items-center gap-16 md:gap-24">
              {/* Double mapping of partner logos to guarantee seamless infinite loop */}
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {partner.component}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const PARTNER_LOGOS = [
  {
    name: "Google",
    component: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-auto transition-all duration-300 group-hover:scale-110">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    )
  },
  {
    name: "Microsoft",
    component: (
      <svg viewBox="0 0 23 23" fill="none" className="h-7.5 w-auto transition-all duration-300 group-hover:scale-110">
        <rect x="0" y="0" width="11" height="11" fill="#F25022" />
        <rect x="12" y="0" width="11" height="11" fill="#7FBA00" />
        <rect x="0" y="12" width="11" height="11" fill="#00A4EF" />
        <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
      </svg>
    )
  },
  {
    name: "Amazon",
    component: (
      <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110">
        <svg viewBox="0 0 60 22" fill="currentColor" className="h-7 w-auto text-[#232F3E] dark:text-white">
          <text x="0" y="14" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: "16px", letterSpacing: "-0.5px" }}>amazon</text>
          <path d="M12 16.5c10 3.5 25 3.5 35 0c1.5-.5 2.2-1.2 1.8-1.7c-.4-.5-1.5.2-2 .5c-9 3-23 3-32 0c-.5-.3-1.5-.8-2-.5c-.5.4.5 1.2 1.2 1.7z" fill="#FF9900"/>
        </svg>
      </div>
    )
  },
  {
    name: "Meta",
    component: (
      <svg viewBox="0 0 24 24" fill="#0668E1" className="h-7.5 w-auto transition-all duration-300 group-hover:scale-110">
        <path d="M16.92 6c-2.3 0-4.32 1.4-5.32 3.4C10.6 7.4 8.58 6 6.28 6 2.82 6 0 8.7 0 12c0 3.3 2.82 6 6.28 6 2.3 0 4.32-1.4 5.32-3.4 1 2 3.02 3.4 5.32 3.4 3.46 0 6.28-2.7 6.28-6 0-3.3-2.82-6-6.28-6zm-10.64 9.5c-1.92 0-3.48-1.57-3.48-3.5S4.36 8.5 6.28 8.5c1.47 0 2.76.92 3.25 2.3-.65.98-1.63 2.1-3.25 4.7zm10.64 0c-1.62-2.6-2.6-3.72-3.25-4.7.49-1.38 1.78-2.3 3.25-2.3 1.92 0 3.48 1.57 3.48 3.5s-1.56 3.5-3.48 3.5z"/>
      </svg>
    )
  },
  {
    name: "Stripe",
    component: (
      <svg viewBox="0 0 60 22" fill="#635BFF" className="h-8 w-auto transition-all duration-300 group-hover:scale-110">
        <text x="0" y="17" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 900, fontSize: "20px", letterSpacing: "-0.5px" }}>stripe</text>
      </svg>
    )
  },
  {
    name: "Salesforce",
    component: (
      <svg viewBox="0 0 24 24" fill="#00A1E0" className="h-8 w-auto transition-all duration-300 group-hover:scale-110">
        <path d="M21.7 10.4c-.2-.6-.6-1-1.1-1.3c-.2-.7-.6-1.3-1.2-1.7c-.6-.4-1.3-.6-2-.6c-.5 0-1 .1-1.4.3c-.6-.8-1.4-1.3-2.4-1.5c-1-.2-2-.1-2.9.3c-.8.4-1.4 1-1.8 1.8c-.3-.1-.7-.2-1-.2c-.9 0-1.7.3-2.4.9c-.7.6-1.1 1.4-1.2 2.3c-.6-.1-1.2 0-1.8.3c-.5.3-.9.7-1.2 1.2c-.3.5-.4 1.1-.3 1.7c0 .6.2 1.1.5 1.6c.4.5.9.8 1.5 1c.4.1.7.1 1.1.1h15c.6 0 1.2-.2 1.7-.5c.5-.3.9-.8 1.1-1.3c.2-.5.3-1.1.2-1.7c-.1-.7-.4-1.2-.8-1.7z" />
      </svg>
    )
  }
];
