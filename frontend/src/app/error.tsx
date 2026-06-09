"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold text-brand-900 dark:text-white">
        Unable to load content
      </h2>
      <p className="mt-2 max-w-md text-brand-700/80 dark:text-brand-200/80">
        Make sure the backend API is running at{" "}
        <code className="rounded bg-brand-50 px-1 dark:bg-brand-900">
          {process.env.NEXT_PUBLIC_API_URL || "https://versuzo-in-backend.vercel.app"}
        </code>
      </p>
      <div className="mt-6">
        <Button variant="primary" onClick={reset}>
          Try again
        </Button>
      </div>
    </div>
  );
}
