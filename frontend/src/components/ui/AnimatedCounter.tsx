"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "10,000+", "92%", "50+"
  duration?: number; // in seconds
}

export function AnimatedCounter({ value, duration = 1.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract the digits
    const numberMatch = value.replace(/,/g, "").match(/\d+/);
    if (!numberMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numberMatch[0], 10);
    const hasCommas = value.includes(",");
    
    // Extract non-digits for prefix and suffix
    const numberIdx = value.search(/\d/);
    const prefix = numberIdx > 0 ? value.substring(0, numberIdx) : "";
    
    // Find suffix (everything after the last digit)
    const suffixMatch = value.match(/\d+([^0-9]*)$/);
    const suffix = suffixMatch ? suffixMatch[1] : "";

    let start = 0;
    const end = target;
    if (start === end) {
      setDisplayValue(value);
      return;
    }

    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const updateCounter = () => {
      frame++;
      // Ease out quad
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress); // easeOutQuad
      const current = Math.round(start + easeProgress * (end - start));

      let formatted = current.toString();
      if (hasCommas) {
        formatted = current.toLocaleString();
      }

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (frame < totalFrames) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value); // Make sure the exact original string is set at the end
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
