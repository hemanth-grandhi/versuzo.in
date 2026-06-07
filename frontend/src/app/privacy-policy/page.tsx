import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Versuzo",
  description: "Privacy Policy and data protection guidelines for Versuzo learners.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-brand-950 text-brand-900 dark:text-brand-50 pt-32 pb-20">
      {/* Background ambient glows */}
      <div className="absolute -right-48 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/5" />
      <div className="absolute -left-48 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[120px] dark:bg-brand-500/5" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-4 py-1.5 text-xs font-bold text-sky-700 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 shadow-sm mb-6">
          🔒 Legal Document
        </span>
        
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-brand-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-brand-500 dark:text-brand-400 mb-10">
          Last updated: June 7, 2026
        </p>

        <div className="prose prose-brand dark:prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed text-brand-700 dark:text-brand-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              1. Data Collection & User Information
            </h2>
            <p>
              We collect information that you provide directly to us when registering for our cohort programs, subscribing to newsletters, requesting career consultation callbacks, or communicating with us. This user information includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact details such as your full name, email address, and telephone number.</li>
              <li>Academic and professional credentials, including university details and work history.</li>
              <li>Billing and invoice information processed securely through our gateway integrations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              2. Cookies Policy
            </h2>
            <p>
              We use functional cookies and similar tracking identifiers to improve platform security, recognize you on your dashboard, persist theme choices (dark/light modes), and perform standard traffic analytics. You can adjust your browser configurations to decline or limit cookies, though doing so might affect dashboard usability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              3. Information Usage
            </h2>
            <p>
              We use the collected information for the following operations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delivering, customizing, and upgrading our educational training and cohort programs.</li>
              <li>Processing student applications, managing enrollments, and granting graduation certifications.</li>
              <li>Connecting you with career advisors, mentors, and prospective hiring managers.</li>
              <li>Sending administrative updates, milestone announcements, and responding to support tickets.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              4. Security Measures
            </h2>
            <p>
              We employ robust administrative and technical protections to shield your data. User passwords are encrypted using strong salted bcrypt algorithms. Secure tokens (JWT) handle platform sessions, and standard SSL/TLS encryption safeguards all active transmissions. Personal data is housed on firewalled servers and never shared with unassociated third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              5. User Rights
            </h2>
            <p>
              As a user, you retain full rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The right to request access to and review the data we hold about you.</li>
              <li>The right to rectify inaccurate, obsolete, or incomplete personal details.</li>
              <li>The right to request the complete deletion of your student account and personal data from our servers.</li>
              <li>The right to withdraw consent for direct marketing correspondence or promotional updates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              6. Contact Information
            </h2>
            <p>
              If you wish to exercise your data rights, request deletions, or ask questions concerning this policy, please reach out to our privacy compliance desk:
            </p>
            <ul className="list-none space-y-2 font-semibold text-brand-900 dark:text-white">
              <li>Company Name: Versuzo</li>
              <li>Email: <a href="mailto:support@versuzo.com" className="text-sky-500 hover:underline">support@versuzo.com</a></li>
              <li>Phone: +91 77025 02125</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
