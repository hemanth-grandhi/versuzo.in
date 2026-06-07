import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Versuzo",
  description: "Terms and Conditions of service for Versuzo platform users.",
};

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-brand-950 text-brand-900 dark:text-brand-50 pt-32 pb-20">
      {/* Background ambient glows */}
      <div className="absolute -right-48 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/5" />
      <div className="absolute -left-48 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[120px] dark:bg-brand-500/5" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 px-4 py-1.5 text-xs font-bold text-sky-700 dark:text-sky-400 border border-sky-100 dark:border-sky-900/50 shadow-sm mb-6">
          🔒 Terms of Service
        </span>
        
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-brand-900 dark:text-white mb-2">
          Terms & Conditions
        </h1>
        <p className="text-xs text-brand-500 dark:text-brand-400 mb-10">
          Last updated: June 7, 2026
        </p>

        <div className="prose prose-brand dark:prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed text-brand-700 dark:text-brand-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              1. Website Usage Terms
            </h2>
            <p>
              By accessing and navigating the website at <a href="https://versuzo.com" className="text-sky-500 hover:underline">versuzo.com</a>, you agree to comply with all applicable local, national, and international laws. Access is permitted on a temporary, non-transferable basis, and we reserve the right to suspend or amend our services without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              2. User Responsibilities
            </h2>
            <p>
              As a user, you agree that you will not:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use our systems or forums to distribute malicious software or spam content.</li>
              <li>Provide false, misleading, or fraudulent information during course registration.</li>
              <li>Disrupt, compromise, or bypass the platform&apos;s security frameworks.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              3. Intellectual Property Rights
            </h2>
            <p>
              All materials hosted on Versuzo—including cohort videos, project code repositories, curriculums, logos, articles, designs, and text—are owned by or licensed to Versuzo and are protected by international copyright and trademark laws. Unauthorized reproduction, resale, or distribution of this content is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              4. Course Access Terms
            </h2>
            <p>
              Upon registration and successful enrollment, we grant you a personal, non-transferable, revocable license to access our online materials, join live sessions, and submit practical assignments. This license is granted solely for your individual professional training and career growth.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              5. Account Usage Rules
            </h2>
            <p>
              You must guard your credentials diligently and prevent third-party access to your student account dashboard. Account credentials may not be shared, and we reserve the right to terminate access immediately without liability if shared credentials or unauthorized login sessions are detected.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              6. Limitation of Liability
            </h2>
            <p>
              The learning materials and practical projects on our platform are provided on an &apos;as is&apos; basis. While we connect you with industry leaders and offer extensive career placement support, Versuzo holds no liability for specific career advancement milestones, external academic accreditation equivalence, or indirect damages arising from the use of our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-900 dark:text-white border-b border-brand-100 dark:border-brand-900/50 pb-2">
              7. Governing Law
            </h2>
            <p>
              These Terms & Conditions are governed by the laws of India, and any disputes, claims, or actions relating to the services will be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
