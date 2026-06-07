"use client";

import { useEffect, useState, Suspense } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, AlertTriangle, CheckCircle, Loader } from "lucide-react";

function ResetPasswordForm() {
  const { user, resetPassword, loading, error, clearError } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Read reset token on mount
  useEffect(() => {
    const t = searchParams.get("token");
    setToken(t);
  }, [searchParams]);

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
    setSuccess(false);

    if (!token) {
      setFormError("Reset token is missing. Please request a new reset link.");
      return;
    }

    if (!password || !confirmPassword) {
      setFormError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setFormError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    try {
      await resetPassword(token, password);
      setSuccess(true);
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      // Error handled by AuthProvider context
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
            Choose New Password
          </h2>
          <p className="mt-2 text-sm text-brand-600 dark:text-brand-400">
            Set your new account password to restore access
          </p>
        </div>

        {/* Success Alert */}
        {success && (
          <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-200/50 p-4 text-xs text-emerald-700 dark:text-emerald-400">
            <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
            <span>Password reset successfully! You can now log in.</span>
          </div>
        )}

        {/* Error Display */}
        {(error || formError || !token) && (
          <div className="flex items-start gap-3 rounded-2xl bg-rose-500/10 border border-rose-200/50 p-4 text-xs text-rose-700 dark:text-rose-400">
            <AlertTriangle className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
            <span>{!token ? "Reset token is missing from URL link." : formError || error}</span>
          </div>
        )}

        <div className="rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-2xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-4 w-4 text-brand-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Min 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/50 pl-10 pr-3 py-2.5 text-sm text-brand-900 placeholder-brand-400 outline-none transition-all focus:border-sky-500 focus:bg-white dark:border-brand-800 dark:bg-brand-900/50 dark:text-white dark:focus:border-sky-400 dark:focus:bg-brand-900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-4 w-4 text-brand-400" />
                </div>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-xl border border-brand-200 bg-brand-50/50 pl-10 pr-3 py-2.5 text-sm text-brand-900 placeholder-brand-400 outline-none transition-all focus:border-sky-500 focus:bg-white dark:border-brand-800 dark:bg-brand-900/50 dark:text-white dark:focus:border-sky-400 dark:focus:bg-brand-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !token}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/10 transition-all hover:from-sky-600 hover:to-brand-700 disabled:opacity-50 active:scale-[0.98] cursor-pointer mt-4"
            >
              {loading ? (
                <Loader className="h-4 w-4 animate-spin" />
              ) : (
                "Set New Password"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-brand-600 dark:text-brand-400 border-t border-brand-100/50 pt-4 dark:border-brand-900/50">
            Ready to log in?{" "}
            <Link
              href="/login"
              className="font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-sky-500" />
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}
