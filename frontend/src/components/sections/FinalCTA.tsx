"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="cta" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-cta-gradient px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggIGQ9Ik0zNiAzNGg0djJoLTR6TTAgMzRoNHYySDB6TTAgMGg0djJIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Start Your Growth Journey Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Join thousands of learners building future-ready careers with
              expert-led programs and mentorship.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/programs"
                variant="secondary"
                className="!bg-white !from-white !to-white !text-brand-900 !shadow-brand hover:!bg-white/95"
              >
                Browse Programs
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={siteConfig.advisorWhatsAppUrl}
                variant="outline"
                target="_blank"
                className="!border-white/50 !text-white hover:!border-sky-300 hover:!bg-sky-500/20 hover:!text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to an Advisor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
