import { FadeIn } from "@/components/ui/FadeIn";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <FadeIn className={`mb-14 max-w-3xl ${alignClass}`}>
      {label && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-brand-700/80 dark:text-brand-200/80">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
