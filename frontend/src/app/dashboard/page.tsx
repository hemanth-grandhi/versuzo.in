"use client";

import { useEffect } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { 
  User as UserIcon, 
  BookOpen, 
  Calendar, 
  Award, 
  LogOut, 
  AlertCircle, 
  CheckCircle, 
  MessageSquare,
  Sparkles,
  Loader
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  // Route protection
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-sky-500" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="relative min-h-screen bg-brand-50/20 dark:bg-brand-950/20 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Glowing Blurs */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              User Portal
            </span>
            <h1 className="font-display text-3xl font-bold text-brand-900 dark:text-white mt-1">
              Welcome back, {user.name}!
            </h1>
            <p className="text-sm text-brand-600 dark:text-brand-400 mt-1">
              Manage your cohort progress, check certificates, and contact your mentors.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {user.role === "admin" && (
              <Button href="/admin" variant="outline" className="!px-4 !py-2 shrink-0">
                Admin Panel
              </Button>
            )}
            <button
              onClick={() => {
                logout();
                router.push("/login");
              }}
              className="flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-4 py-2 text-xs font-semibold text-brand-700 hover:bg-brand-50 hover:text-brand-900 transition-all dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300 dark:hover:bg-brand-900 shrink-0 cursor-pointer"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </button>
          </div>
        </div>

        {/* Verification Alert Banner */}
        {user.verified === 0 && (
          <div className="flex items-start md:items-center gap-3 rounded-2xl bg-amber-500/10 border border-amber-200/50 p-4 text-xs text-amber-800 dark:text-amber-400">
            <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5 md:mt-0" />
            <div className="flex-1 md:flex items-center justify-between gap-4">
              <span>
                Your email address <strong>{user.email}</strong> is not yet verified. Please click the link sent to your inbox to unlock all career features.
              </span>
            </div>
          </div>
        )}

        {/* Dashboard Content Grid */}
        <div className="grid gap-6 md:grid-cols-12">
          
          {/* Main Enrolled Course Timeline Placeholder */}
          <div className="md:col-span-8 rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 space-y-6">
            <h3 className="font-display text-xl font-bold text-brand-900 dark:text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-sky-500" />
              Your Program Status
            </h3>
            
            <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-brand-200 rounded-2xl dark:border-brand-800 bg-brand-50/20 dark:bg-brand-950/20 space-y-4">
              <div className="h-12 w-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-900 dark:text-white">Ready to begin your upskilling journey?</h4>
                <p className="text-xs text-brand-600 dark:text-brand-400 mt-1 max-w-sm mx-auto">
                  Browse our portfolio of career accelerator programs to enroll, choose your timeline, and work on production capstones.
                </p>
              </div>
              <Button href="/programs" variant="primary" className="!px-6 !py-2.5 text-xs">
                Explore Programs
              </Button>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Account Details Profile Card */}
            <div className="rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 space-y-4">
              <h3 className="font-display text-lg font-bold text-brand-900 dark:text-white flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-sky-500" />
                Profile Information
              </h3>
              <div className="space-y-3 border-t border-brand-100/60 dark:border-brand-900/40 pt-4 text-xs text-brand-700 dark:text-brand-300">
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-500">Full Name</span>
                  <span className="font-bold text-brand-900 dark:text-white">{user.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-500">Email Address</span>
                  <span className="font-bold text-brand-900 dark:text-white truncate max-w-[180px]">{user.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-500">Verification</span>
                  <span className={`inline-flex items-center gap-1 font-bold ${user.verified ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
                    {user.verified ? <CheckCircle className="h-3.5 w-3.5" /> : <AlertCircle className="h-3.5 w-3.5" />}
                    {user.verified ? "Verified" : "Pending"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-500">Role Status</span>
                  <span className="font-bold uppercase tracking-wider text-brand-900 dark:text-white">{user.role}</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 space-y-4">
              <h3 className="font-display text-lg font-bold text-brand-900 dark:text-white flex items-center gap-2">
                <Award className="h-5 w-5 text-sky-500" />
                Credentials & Certificates
              </h3>
              <p className="text-xs text-brand-600 dark:text-brand-400 leading-relaxed">
                Dual training & project execution certificates will be unlocked once you complete the coursework evaluation and project handoffs.
              </p>
              <div className="flex gap-2.5 items-center bg-brand-50/50 dark:bg-brand-900/30 p-3 rounded-xl border border-brand-100/40 text-[11px] font-semibold text-brand-600 dark:text-brand-400">
                <Calendar className="h-4 w-4 text-sky-500 shrink-0" />
                <span>No credentials generated yet.</span>
              </div>
            </div>

            {/* Support / Mentorship Contact */}
            <div className="rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 space-y-3">
              <h3 className="font-display text-lg font-bold text-brand-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-sky-500" />
                Advisor Assistance
              </h3>
              <p className="text-xs text-brand-600 dark:text-brand-400 leading-relaxed">
                Have questions about curriculum, timings, or payments? Schedule a free direct call with our academic team.
              </p>
              <Button href="/contact-us" variant="outline" className="w-full text-xs !py-2 mt-2">
                Book a Consultation
              </Button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
