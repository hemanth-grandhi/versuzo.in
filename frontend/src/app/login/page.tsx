"use client";

import { useEffect, useState, Suspense } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, AlertTriangle, CheckCircle, Loader } from "lucide-react";

function LoginForm() {
  const { user, login, verifyEmail, loading, error, clearError } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyStatus, setVerifyStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  // Handle email verification token from query params
  useEffect(() => {
    const verifyToken = searchParams.get("verify");
    if (verifyToken) {
      setVerifyStatus("verifying");
      verifyEmail(verifyToken)
        .then(() => {
          setVerifyStatus("success");
        })
        .catch(() => {
          setVerifyStatus("error");
        });
    }
  }, [searchParams, verifyEmail]);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  // Clear errors on unmount
  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    clearError();

    if (!email || !password) {
      setFormError("Please fill in all fields.");
      return;
    }

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      // Error is handled by AuthProvider context
    }
  };

  return (
    <div className="relative flex min-h-[85vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Glowing Blurs */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-900 dark:text-white sm:text-4xl">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-brand-600 dark:text-brand-400">
            Sign in to continue your career accelerator program
          </p>
        </div>

        {/* Verification Status Banner */}
        {verifyStatus === "verifying" && (
          <div className="flex items-center gap-3 rounded-2xl bg-sky-500/10 border border-sky-200/50 p-4 text-xs text-sky-700 dark:text-sky-400">
            <Loader className="h-4 w-4 animate-spin text-sky-500 shrink-0" />
            <span>Verifying your email address, please wait...</span>
          </div>
        )}
        {verifyStatus === "success" && (
          <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-200/50 p-4 text-xs text-emerald-700 dark:text-emerald-400">
            <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
            <span>Email verified successfully! You can now log in.</span>
          </div>
        )}
        {verifyStatus === "error" && (
          <div className="flex items-center gap-3 rounded-2xl bg-rose-500/10 border border-rose-200/50 p-4 text-xs text-rose-700 dark:text-rose-400">
            <AlertTriangle className="h-4.5 w-4.5 text-rose-500 shrink-0" />
            <span>Verification link is invalid or has expired.</span>
          </div>
        )}

        {/* Error Display */}
        {(error || formError) && (
          <div className="flex items-start gap-3 rounded-2xl bg-rose-500/10 border border-rose-200/50 p-4 text-xs text-rose-700 dark:text-rose-400">
            <AlertTriangle className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
            <span>{formError || error}</span>
          </div>
        )}

        <div className="rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-2xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-4 w-4 text-brand-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/50 pl-10 pr-3 py-2.5 text-sm text-brand-900 placeholder-brand-400 outline-none transition-all focus:border-sky-500 focus:bg-white dark:border-brand-800 dark:bg-brand-900/50 dark:text-white dark:focus:border-sky-400 dark:focus:bg-brand-900"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-4 w-4 text-brand-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/50 pl-10 pr-3 py-2.5 text-sm text-brand-900 placeholder-brand-400 outline-none transition-all focus:border-sky-500 focus:bg-white dark:border-brand-800 dark:bg-brand-900/50 dark:text-white dark:focus:border-sky-400 dark:focus:bg-brand-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/10 transition-all hover:from-sky-600 hover:to-brand-700 disabled:opacity-50 active:scale-[0.98] cursor-pointer mt-4"
            >
              {loading ? (
                <Loader className="h-4 w-4 animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-brand-600 dark:text-brand-400 border-t border-brand-100/50 pt-4 dark:border-brand-900/50">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-sky-500" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
