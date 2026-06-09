export const siteConfig = {
  name: "Versuzo",
  domain: "versuzo.in",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://versuzo.in",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://versuzo-in-backend.vercel.app",
  description:
    "Versuzo - Transforming Talent into Opportunity and Success through cohort-based learning, mentorship, and real-world projects.",
  supportEmail: "support@versuzo.com",
  phoneDisplay: "+91 77025 02125",
  phoneDial: "+917702502125",
  instagramUrl:
    "https://www.instagram.com/versuzo?igsh=Y2p5Z3dmNHBiczk5&utm_source=qr",
  youtubeUrl: "https://youtube.com/@versuzo?si=5RYHAvcI8t8tOTWz",
  advisorWhatsAppUrl:
    "https://wa.me/917702502125?text=Hello%20Versuzo%20Team%2C%20I%20want%20to%20talk%20to%20an%20advisor%20regarding%20your%20courses%20and%20career%20counseling%20programs.%20Please%20assist%20me%20with%20the%20next%20steps.",
  mentorSessionUrl:
    "https://wa.me/917702502125?text=Hello%20Versuzo%20Team%2C%20I%20would%20like%20to%20book%20a%201%3A1%20mentor%20session.%20Please%20share%20the%20available%20slots.",
} as const;
