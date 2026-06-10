"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { navLinks } from "@/lib/constants/navigation";
import { useAuth } from "@/components/providers/AuthProvider";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const { user, logout } = useAuth();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] dark:border-brand-900 dark:bg-brand-950"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Logo priority />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isProgramsActive = link.label === "Programs" && (pathname.startsWith("/courses/") || pathname.startsWith("/programs"));
            const href = link.href;
            return (
              <Link
                key={link.href}
                href={href}
                className={`text-[15px] font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                  isProgramsActive
                    ? "text-sky-600 dark:text-sky-400 font-semibold"
                    : "text-brand-700 dark:text-brand-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 text-brand-700 transition-colors hover:bg-brand-50 dark:text-brand-200 dark:hover:bg-brand-900"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}

          {user ? (
            <>
              {user.role === "admin" && (
                <Button href="/admin" variant="ghost" className="!px-4 !py-2">
                  Admin
                </Button>
              )}
              <Button href="/dashboard" variant="outline" className="!px-4 !py-2 border-brand-200 dark:border-brand-800">
                Dashboard
              </Button>
              <button
                onClick={() => {
                  logout();
                  router.push("/login");
                }}
                className="rounded-xl bg-brand-900 px-5 py-2.5 text-[15px] font-medium text-white hover:bg-brand-800 transition-colors dark:bg-brand-800 dark:hover:bg-brand-700 cursor-pointer"
              >
                Log out
              </button>
            </>
          ) : null}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 text-brand-700 dark:text-brand-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-brand-700 dark:text-brand-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-brand-100 bg-white dark:border-brand-900 dark:bg-brand-950 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const isProgramsActive = link.label === "Programs" && (pathname.startsWith("/courses/") || pathname.startsWith("/programs"));
                const href = link.href;
                return (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium hover:bg-brand-50 dark:hover:bg-brand-900 ${
                      isProgramsActive
                        ? "text-sky-600 dark:text-sky-400 font-semibold bg-brand-50/55 dark:bg-brand-900/30"
                        : "text-brand-800 dark:text-brand-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {user && (
                <div className="mt-2 flex flex-col gap-2 border-t border-brand-100 pt-4 dark:border-brand-800">
                  <Button href="/dashboard" variant="outline" className="w-full" onClick={() => setMobileOpen(false)}>
                    Dashboard
                  </Button>
                  {user.role === "admin" && (
                    <Button href="/admin" variant="outline" className="w-full" onClick={() => setMobileOpen(false)}>
                      Admin Panel
                    </Button>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                      router.push("/login");
                    }}
                    className="w-full rounded-xl bg-brand-900 py-3 text-sm font-semibold text-white text-center hover:bg-brand-800 dark:bg-brand-800 dark:hover:bg-brand-700 cursor-pointer"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
