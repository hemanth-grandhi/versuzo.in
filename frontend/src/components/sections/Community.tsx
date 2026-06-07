"use client";

import Image from "next/image";
import { Calendar, MessageCircle, Users, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { CommunityFeature } from "@/types/content";

const icons = [Users, MessageCircle, Calendar];

interface CommunityProps {
  features: CommunityFeature[];
}

const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 shrink-0" fill="currentColor">
    <path
      d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z"
      className="fill-sky-500"
    />
    <polygon points="9.545,8.432 15.818,12 9.545,15.568" fill="white" />
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 shrink-0">
    <defs>
      <radialGradient id="ig-logo-grad" cx="30%" cy="107%" r="130%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="30%" stopColor="#7DD3FC" />
        <stop offset="60%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#0A214B" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="url(#ig-logo-grad)" />
    <path
      d="M12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7.4c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9c0 1.6-1.3 2.9-2.9 2.9zm4.9-7.9c-.58 0-1.05-.47-1.05-1.05s.47-1.05 1.05-1.05 1.05.47 1.05 1.05-.47 1.05-1.05 1.05z"
      fill="white"
    />
    <path
      d="M17 2H7c-2.76 0-5 2.24-5 5v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm3.5 15c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5V7c0-1.93 1.57-3.5 3.5-3.5h10c1.93 0 3.5 1.57 3.5 3.5v10z"
      fill="white"
    />
  </svg>
);

export function Community({ features }: CommunityProps) {
  const handleSocialClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    platform: "youtube" | "instagram"
  ) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const urls = {
      youtube: {
        app: "youtube://www.youtube.com/@versuzo?si=5RYHAvcI8t8tOTWz",
        web: "https://youtube.com/@versuzo?si=5RYHAvcI8t8tOTWz",
      },
      instagram: {
        app: "instagram://user?username=versuzo",
        web: "https://www.instagram.com/versuzo?igsh=Y2p5Z3dmNHBiczk5&utm_source=qr",
      },
    };

    const { app, web } = urls[platform];

    if (isMobile) {
      window.location.href = app;
      const start = Date.now();
      setTimeout(() => {
        if (Date.now() - start < 1500) {
          window.open(web, "_blank");
        }
      }, 1000);
    } else {
      window.open(web, "_blank");
    }
  };

  return (
    <section className="section-padding section-surface">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              label="Community"
              title="Join a thriving learner community"
              description="Connect, collaborate, and grow with thousands of ambitious professionals worldwide."
              align="left"
            />

            <div className="space-y-6">
              {features.map((feature, i) => {
                const Icon = icons[i];
                return (
                  <FadeIn key={feature.title} delay={i * 0.1}>
                    <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-5 dark:border-brand-800 dark:bg-brand-900">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-brand-900 dark:text-sky-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-brand-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                            {feature.stat}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-brand-700/80 dark:text-brand-200/80">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          <FadeIn direction="left" className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=700&fit=crop"
                alt="Active learner community networking"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold text-white">
                  10,000+ active members
                </p>
                <p className="mt-1 text-white/80">
                  Weekly events, workshops & networking
                </p>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
              ].map((src, n) => (
                <div
                  key={n}
                  className="h-12 w-12 overflow-hidden rounded-full border-2 border-white ring-2 ring-sky-500 dark:border-brand-900"
                >
                  <Image
                    src={src}
                    alt=""
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Social Media Integration */}
        <div className="mt-20 pt-16 border-t border-brand-100 dark:border-brand-800/80">
          <SectionHeader
            label="Social Connect"
            title="Connect With Versuzo"
            description="Stay connected with our growing community and get access to exclusive learning content, career opportunities, live events, and industry updates."
          />

          <p className="mt-6 text-center text-sm md:text-base text-brand-700/80 dark:text-brand-200/80 max-w-3xl mx-auto leading-relaxed">
            Follow Versuzo for career insights, internship updates, industry trends, live sessions, workshops, and student success stories.
          </p>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 max-w-5xl mx-auto">
            {/* YouTube Card */}
            <FadeIn delay={0.1}>
              <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.1)] hover:border-sky-400 dark:border-brand-800 dark:bg-brand-900/40 dark:hover:border-sky-650">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-950/20">
                      <YouTubeLogo />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        YouTube
                      </h3>
                      <p className="text-xs text-brand-600/70 dark:text-brand-300/70">
                        @versuzo
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-brand-700/85 dark:text-brand-200/80 leading-relaxed">
                    Watch our in-depth tutorials, cohort previews, masterclasses, and student success stories designed to accelerate your growth.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="https://youtube.com/@versuzo?si=5RYHAvcI8t8tOTWz"
                    onClick={(e) => handleSocialClick(e, "youtube")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:bg-sky-700 hover:shadow-sky-700/30 active:scale-98"
                  >
                    Subscribe on YouTube
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Instagram Card */}
            <FadeIn delay={0.2}>
              <div className="group relative flex flex-col justify-between h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.1)] hover:border-sky-400 dark:border-brand-800 dark:bg-brand-900/40 dark:hover:border-sky-650">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-950/20">
                      <InstagramLogo />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        Instagram
                      </h3>
                      <p className="text-xs text-brand-600/70 dark:text-brand-300/70">
                        @versuzo
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-brand-700/85 dark:text-brand-200/80 leading-relaxed">
                    Get daily insights, internship notifications, expert advice, live stream updates, and mentor sessions directly on your feed.
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.instagram.com/versuzo?igsh=Y2p5Z3dmNHBiczk5&utm_source=qr"
                    onClick={(e) => handleSocialClick(e, "instagram")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:bg-sky-700 hover:shadow-sky-700/30 active:scale-98"
                  >
                    Follow on Instagram
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
