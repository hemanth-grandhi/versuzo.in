"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Check,
  Clock,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { bookConsultation } from "@/lib/api/consultations.api";
import { siteConfig } from "@/lib/constants/site";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await bookConsultation({
        name,
        email,
        phone,
        programInterest: program,
        message,
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setProgram("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const programsList = [
    "DSA + AI/ML Internship",
    "Full Stack Development",
    "Cybersecurity & Risk Management",
    "Cloud Computing & DevOps",
    "Digital Product Design (UI/UX)",
    "Embedded Systems & IoT",
    "Semiconductor & VLSI Design",
    "AI-Driven Electronics",
    "Electric Vehicle Tech & Battery Systems",
    "Industrial Automation & Smart Manufacturing",
    "Renewable Energy & Smart Grid Technologies",
    "Product Design & Manufacturing Excellence",
    "Robotics & Intelligent Automation",
    "Electric Mobility & Automotive Engineering",
    "Digital Marketing & AI",
    "Financial Analytics & Investment Management",
    "Business Development & Sales",
    "Strategic Talent Acquisition (HR)",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white pb-20 pt-32 text-brand-900 dark:bg-brand-950 dark:text-brand-50">
      <div className="absolute -right-48 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/5" />
      <div className="absolute -left-48 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[120px] dark:bg-brand-500/5" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-xs font-bold text-sky-700 shadow-sm dark:border-sky-900/50 dark:bg-sky-950/60 dark:text-sky-400">
            Contact Us
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-900 dark:text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base text-brand-700/80 dark:text-brand-300/80">
            Have questions about our cohort programs or need career guidance?
            Reach out and our team will assist you.
          </p>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-brand-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm leading-relaxed text-brand-700 dark:text-brand-300">
                Connect with our academic advisors or support personnel through
                email, phone, or direct WhatsApp chat.
              </p>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 dark:border-sky-900/30 dark:bg-sky-950/50 dark:text-sky-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                      Email Address
                    </h4>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="text-xs text-brand-600 hover:text-sky-500 hover:underline dark:text-brand-400"
                    >
                      {siteConfig.supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 dark:border-sky-900/30 dark:bg-sky-950/50 dark:text-sky-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                      Phone Support
                    </h4>
                    <a
                      href={`tel:${siteConfig.phoneDial}`}
                      className="text-xs text-brand-600 hover:text-sky-500 hover:underline dark:text-brand-400"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 dark:border-sky-900/30 dark:bg-sky-950/50 dark:text-sky-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                      Headquarters
                    </h4>
                    <p className="text-xs leading-relaxed text-brand-600 dark:text-brand-400">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 dark:border-sky-900/30 dark:bg-sky-950/50 dark:text-sky-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-900 dark:text-white">
                      Business Hours
                    </h4>
                    <p className="text-xs leading-relaxed text-brand-600 dark:text-brand-400">
                      Monday - Saturday: 9:00 AM - 6:00 PM IST
                    </p>
                    <p className="mt-0.5 text-[10px] leading-none text-brand-500/70 dark:text-brand-400/60">
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-brand-100/50 pt-4 dark:border-brand-800/40">
                  <h4 className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-500">
                    Follow Us
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-100 text-brand-600 transition-colors hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 dark:border-brand-800 dark:text-brand-400 dark:hover:border-sky-400 dark:hover:bg-brand-900"
                    >
                      <Instagram className="h-4.5 w-4.5" />
                    </a>
                    <a
                      href={siteConfig.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-100 text-brand-600 transition-colors hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 dark:border-brand-800 dark:text-brand-400 dark:hover:border-sky-400 dark:hover:bg-brand-900"
                    >
                      <Youtube className="h-4.5 w-4.5" />
                    </a>
                    <a
                      href={siteConfig.advisorWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-100 text-brand-600 transition-colors hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600 dark:border-brand-800 dark:text-brand-400 dark:hover:border-sky-400 dark:hover:bg-brand-900"
                    >
                      <MessageCircle className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-50/10 p-6 dark:bg-emerald-950/10">
              <h4 className="flex items-center gap-1.5 text-sm font-bold text-emerald-800 dark:text-emerald-400">
                <MessageCircle className="h-4 w-4" />
                Instant Advisory Chat
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-brand-700 dark:text-brand-300">
                Connect with our academic advisor instantly on WhatsApp for
                immediate guidance on seats, discounts, and program structure.
              </p>
              <div className="mt-4">
                <Button
                  href={siteConfig.advisorWhatsAppUrl}
                  target="_blank"
                  className="!rounded-xl !bg-emerald-600 !px-6 !py-2.5 text-xs font-bold text-white hover:!bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-brand-900/60 dark:bg-brand-950/70">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 to-sky-400" />

              <h3 className="mb-6 font-display text-xl font-bold text-brand-900 dark:text-white">
                Request a Call Back
              </h3>

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-brand-900 dark:text-white">
                      Submission Successful!
                    </h4>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-brand-600 dark:text-brand-400">
                      Thank you for contacting us. One of our academic advisors
                      will review your request and get in touch with you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-xs font-bold text-brand-700 dark:text-brand-350"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full rounded-xl border border-brand-200 bg-brand-50/50 px-4 py-2.5 text-xs text-brand-900 outline-none focus:border-sky-500 focus:bg-white dark:border-brand-850 dark:bg-brand-950/50 dark:text-white dark:focus:border-sky-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-bold text-brand-700 dark:text-brand-350"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="yourname@example.com"
                          className="w-full rounded-xl border border-brand-200 bg-brand-50/50 px-4 py-2.5 text-xs text-brand-900 outline-none focus:border-sky-500 focus:bg-white dark:border-brand-850 dark:bg-brand-950/50 dark:text-white dark:focus:border-sky-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="text-xs font-bold text-brand-700 dark:text-brand-350"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-brand-200 bg-brand-50/50 px-4 py-2.5 text-xs text-brand-900 outline-none focus:border-sky-500 focus:bg-white dark:border-brand-850 dark:bg-brand-950/50 dark:text-white dark:focus:border-sky-400"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="program"
                          className="text-xs font-bold text-brand-700 dark:text-brand-350"
                        >
                          Program of Interest
                        </label>
                        <select
                          id="program"
                          required
                          value={program}
                          onChange={(e) => setProgram(e.target.value)}
                          className="w-full rounded-xl border border-brand-200 bg-brand-50/50 px-3 py-2.5 text-xs text-brand-900 outline-none focus:border-sky-500 focus:bg-white dark:border-brand-850 dark:bg-brand-950/50 dark:text-white dark:focus:border-sky-400"
                        >
                          <option value="">Select a Program</option>
                          {programsList.map((prog) => (
                            <option key={prog} value={prog}>
                              {prog}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-xs font-bold text-brand-700 dark:text-brand-350"
                      >
                        Your Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your query here..."
                        className="w-full rounded-xl border border-brand-200 bg-brand-50/50 px-4 py-2.5 text-xs text-brand-900 outline-none focus:border-sky-500 focus:bg-white dark:border-brand-850 dark:bg-brand-950/50 dark:text-white dark:focus:border-sky-400"
                      />
                    </div>

                    {error && (
                      <p className="mt-1 text-xs font-semibold text-red-500">
                        {error}
                      </p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-sky-600/10 transition-all duration-300 hover:bg-sky-700 hover:shadow-sky-700/20 active:scale-98 disabled:opacity-50 cursor-pointer"
                      >
                        {loading ? "Submitting..." : "Submit Consultation Request"}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
