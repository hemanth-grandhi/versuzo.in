"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { apiFetch, ApiError } from "@/lib/api/client";
import { 
  Users, 
  PhoneCall, 
  Terminal, 
  ShieldAlert, 
  ArrowLeft,
  CheckCircle, 
  AlertCircle, 
  Loader,
  Search,
  RefreshCw
} from "lucide-react";
import Link from "next/link";

interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  role: string;
  verified: number;
  created_at: string;
}

interface ConsultationLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  status: string;
  createdAt: string;
}

interface ActivityLog {
  id: string;
  user_id: string | null;
  action: string;
  details: string;
  timestamp: string;
}

export default function AdminPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"users" | "leads" | "logs">("users");
  const [users, setUsers] = useState<RegisteredUser[]>([]);
  const [leads, setLeads] = useState<ConsultationLead[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Route security gate: check for admin role
  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push("/login");
      } else if (user.role !== "admin") {
        router.push("/dashboard");
      }
    }
  }, [user, authLoading, router]);

  // Fetch admin lists
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("versuzo_auth_token");
      if (!token) throw new Error("Authentication token not found");

      const [usersData, leadsData, logsData] = await Promise.all([
        apiFetch<RegisteredUser[]>("/api/v1/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        apiFetch<ConsultationLead[]>("/api/v1/admin/leads", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        apiFetch<ActivityLog[]>("/api/v1/admin/logs", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setUsers(usersData);
      setLeads(leadsData);
      setLogs(logsData);
    } catch (err: any) {
      setError(err.message || "Failed to load admin metrics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.role === "admin") {
      fetchData();
    }
  }, [user]);

  if (authLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-sky-500" />
      </div>
    );
  }

  if (!user || user.role !== "admin") return null;

  // Search filter implementations
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLogs = logs.filter(
    (log) =>
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-50/20 dark:bg-brand-950/20 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Glowing Blurs */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-brand-100/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70">
          <div>
            <div className="flex items-center gap-2">
              <Link href="/dashboard" className="text-brand-500 hover:text-sky-600 flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                <ArrowLeft className="h-4 w-4" /> Back to Dashboard
              </Link>
            </div>
            <h1 className="font-display text-3xl font-bold text-brand-900 dark:text-white mt-2 flex items-center gap-2.5">
              Academic Administration Panel
            </h1>
            <p className="text-sm text-brand-600 dark:text-brand-400 mt-1">
              Audit registered users, manage career consultation leads, and monitor activity logs.
            </p>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-xs font-bold text-brand-700 hover:bg-brand-50 disabled:opacity-50 transition-all dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300 dark:hover:bg-brand-900 cursor-pointer shrink-0"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh Data
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="flex items-center gap-3 rounded-2xl bg-rose-500/10 border border-rose-200/50 p-4 text-xs text-rose-700 dark:text-rose-400">
            <ShieldAlert className="h-5 w-5 text-rose-500 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Summary Statistics Widgets */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-brand-100/80 bg-white/70 p-5 shadow-lg backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-brand-900 dark:text-white">{users.length}</p>
              <p className="text-xs font-semibold text-brand-500 uppercase tracking-wide">Registered Users</p>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-100/80 bg-white/70 p-5 shadow-lg backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <PhoneCall className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-brand-900 dark:text-white">{leads.length}</p>
              <p className="text-xs font-semibold text-brand-500 uppercase tracking-wide">Consultation Leads</p>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-100/80 bg-white/70 p-5 shadow-lg backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
              <Terminal className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-brand-900 dark:text-white">{logs.length}</p>
              <p className="text-xs font-semibold text-brand-500 uppercase tracking-wide">Audit Events</p>
            </div>
          </div>
        </div>

        {/* Tab Controls and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-200/50 pb-4 dark:border-brand-800/50">
          <div className="flex gap-2">
            {[
              { id: "users", label: "Users", icon: Users },
              { id: "leads", label: "Leads", icon: PhoneCall },
              { id: "logs", label: "Audit Logs", icon: Terminal },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setSearchTerm("");
                  }}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand-900 text-white dark:bg-brand-800"
                      : "text-brand-600 bg-white/50 border border-brand-100/50 hover:bg-brand-50 dark:text-brand-300 dark:bg-brand-950/40 dark:border-brand-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-brand-200 bg-white pl-9 pr-3 py-2.5 text-xs text-brand-900 placeholder-brand-400 outline-none focus:border-sky-500 dark:border-brand-800 dark:bg-brand-950 dark:text-white dark:focus:border-sky-400"
            />
          </div>
        </div>

        {/* Tab Panel Renderings */}
        {loading ? (
          <div className="flex justify-center py-20 bg-white/50 rounded-3xl dark:bg-brand-950/20 border border-brand-100/50 dark:border-brand-900">
            <Loader className="h-8 w-8 animate-spin text-sky-500" />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-3xl border border-brand-100 bg-white shadow-xl dark:border-brand-900 dark:bg-brand-950">
            
            {/* 1. USERS TAB */}
            {activeTab === "users" && (
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-brand-50/50 border-b border-brand-100 dark:bg-brand-900/20 dark:border-brand-900 text-brand-500 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email Address</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Verification</th>
                    <th className="px-6 py-4">Registered Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-100 dark:divide-brand-900 font-medium text-brand-700 dark:text-brand-300">
                  {filteredUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-brand-50/30 dark:hover:bg-brand-900/10">
                      <td className="px-6 py-4 font-bold text-brand-900 dark:text-white">{u.name}</td>
                      <td className="px-6 py-4">{u.email}</td>
                      <td className="px-6 py-4 uppercase tracking-wider">{u.role}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 font-bold ${u.verified ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
                          {u.verified ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                          {u.verified ? "Verified" : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4">{formatDate(u.created_at)}</td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-10 text-center text-brand-500">
                        No user accounts found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {/* 2. LEADS TAB */}
            {activeTab === "leads" && (
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-brand-50/50 border-b border-brand-100 dark:bg-brand-900/20 dark:border-brand-900 text-brand-500 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Program Interest</th>
                    <th className="px-6 py-4">Notes/Message</th>
                    <th className="px-6 py-4">Date Logged</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-100 dark:divide-brand-900 font-medium text-brand-700 dark:text-brand-300">
                  {filteredLeads.map((l) => (
                    <tr key={l.id} className="hover:bg-brand-50/30 dark:hover:bg-brand-900/10">
                      <td className="px-6 py-4 font-bold text-brand-900 dark:text-white">{l.name}</td>
                      <td className="px-6 py-4">{l.email}</td>
                      <td className="px-6 py-4">{l.phone || "—"}</td>
                      <td className="px-6 py-4 font-bold text-sky-600 dark:text-sky-400">{l.course || "—"}</td>
                      <td className="px-6 py-4 max-w-[200px] truncate" title={l.message}>{l.message || "—"}</td>
                      <td className="px-6 py-4">{formatDate(l.createdAt)}</td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-brand-500">
                        No consultation leads found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {/* 3. LOGS TAB */}
            {activeTab === "logs" && (
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-brand-50/50 border-b border-brand-100 dark:bg-brand-900/20 dark:border-brand-900 text-brand-500 font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Timestamp</th>
                    <th className="px-6 py-4">User ID</th>
                    <th className="px-6 py-4">Action</th>
                    <th className="px-6 py-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-100 dark:divide-brand-900 font-mono text-brand-600 dark:text-brand-400">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-brand-50/30 dark:hover:bg-brand-900/10">
                      <td className="px-6 py-4 text-brand-700 dark:text-brand-300 font-medium">{formatDate(log.timestamp)}</td>
                      <td className="px-6 py-4 text-[10px]">{log.user_id || "—"}</td>
                      <td className="px-6 py-4 font-bold text-purple-600 dark:text-purple-400">{log.action}</td>
                      <td className="px-6 py-4 max-w-sm truncate" title={log.details}>{log.details}</td>
                    </tr>
                  ))}
                  {filteredLogs.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-brand-500 font-sans">
                        No activity logs found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
