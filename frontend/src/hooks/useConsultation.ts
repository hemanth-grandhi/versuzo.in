"use client";

import { useState } from "react";
import { bookConsultation } from "@/lib/api";
import type { ConsultationPayload } from "@/types/content";

export function useConsultation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function submit(payload: ConsultationPayload) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await bookConsultation(payload);
      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit consultation"
      );
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading, error, success };
}
