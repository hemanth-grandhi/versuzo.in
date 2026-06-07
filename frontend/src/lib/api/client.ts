import type { ApiResponse } from "@/types/content";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${path}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    next: options?.method === "POST" ? undefined : { revalidate: 60 },
  });

  const json = (await response.json()) as ApiResponse<T> & {
    message?: string;
  };

  if (!response.ok || !json.success) {
    throw new ApiError(
      json.message ?? `Request failed: ${response.status}`,
      response.status
    );
  }

  return json.data;
}
