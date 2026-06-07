"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-sky hover:from-sky-600 hover:to-sky-700 dark:from-sky-500 dark:to-sky-600",
  secondary:
    "bg-brand-gradient text-white shadow-brand hover:opacity-95 dark:shadow-sky",
  outline:
    "border-2 border-brand-200 bg-transparent text-brand-900 hover:border-sky-500 hover:text-sky-700 dark:border-brand-700 dark:text-brand-50 dark:hover:border-sky-400 dark:hover:text-sky-300",
  ghost:
    "bg-transparent text-brand-700 hover:bg-brand-50 dark:text-brand-200 dark:hover:bg-brand-900",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  target,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-brand-950";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes} target={target}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
