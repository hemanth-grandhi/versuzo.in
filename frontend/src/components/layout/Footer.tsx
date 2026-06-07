import { Instagram, MessageCircle, Youtube } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { footerLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

const social = [
  { icon: Instagram, href: siteConfig.instagramUrl, label: "Instagram" },
  { icon: Youtube, href: siteConfig.youtubeUrl, label: "YouTube" },
  { icon: MessageCircle, href: siteConfig.advisorWhatsAppUrl, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white dark:border-brand-800 dark:bg-brand-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="h-10 sm:h-12" />
            <p className="mt-4 max-w-sm text-brand-700/80 dark:text-brand-200/80">
              Transforming Talent into Opportunity and Success
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 text-brand-600 transition-colors hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 dark:border-brand-700 dark:text-brand-300 dark:hover:border-sky-400 dark:hover:bg-brand-900 dark:hover:text-sky-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-900 dark:text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-700 transition-colors hover:text-sky-600 dark:text-brand-200 dark:hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-900 dark:text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-700 transition-colors hover:text-sky-600 dark:text-brand-200 dark:hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-100 pt-8 sm:flex-row dark:border-brand-800">
          <p className="text-sm text-brand-600/70 dark:text-brand-300/70">
            Copyright {new Date().getFullYear()} Versuzo. All rights reserved.
          </p>
          <p className="text-sm text-brand-600/70 dark:text-brand-300/70">
            Built for future-ready careers.
          </p>
        </div>
      </div>
    </footer>
  );
}
