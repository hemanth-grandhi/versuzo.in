import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/versuzo-logo.png";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({
  className = "h-9 w-auto sm:h-10",
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
      aria-label="Versuzo home"
    >
      <Image
        src={LOGO_SRC}
        alt="Versuzo Logo"
        width={914}
        height={559}
        className={`object-contain object-left transition-all duration-300 dark:invert dark:hue-rotate-180 dark:contrast-125 scale-[2.35] origin-left ${className}`}
        priority={priority}
      />
    </Link>
  );
}

