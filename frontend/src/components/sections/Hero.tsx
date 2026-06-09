"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  GraduationCap,
  TrendingUp,
  Users,
  User,
  Phone,
  ChevronDown,
  Check,
  Search,
  Code,
  Cpu,
  Zap,
  Wrench,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

function LetterReveal({ text, className = "", delay = 0 }: LetterRevealProps) {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

const PROGRAM_CATEGORIES = [
  {
    id: "cse",
    name: "Software & Technology",
    programs: [
      { value: "DSA + AI/ML Internship Program", label: "DSA + AI/ML Internship", description: "Data structures, algorithms, and applied machine learning" },
      { value: "Full Stack Development Internship Program", label: "Full Stack Development", description: "Modern web apps with React, Next.js, and Node.js" },
      { value: "Cybersecurity & Risk Management Internship Program", label: "Cybersecurity & Risk Management", description: "Network security, ethical hacking, and risk analysis" },
      { value: "Cloud Computing & DevOps Internship Program", label: "Cloud Computing & DevOps", description: "AWS, Docker, Kubernetes, and CI/CD pipelines" },
      { value: "Digital Product Design (UI/UX) Internship Program", label: "Digital Product Design (UI/UX)", description: "User research, wireframing, prototyping, and Figma" },
    ]
  },
  {
    id: "ece",
    name: "Electronics & Embedded Systems",
    programs: [
      { value: "Embedded Systems & IoT Internship Program", label: "Embedded Systems & IoT", description: "Microcontrollers, firmware dev, and IoT architecture" },
      { value: "Semiconductor & VLSI Design Internship Program", label: "Semiconductor & VLSI Design", description: "Verilog, FPGA prototyping, and chip design basics" },
      { value: "AI-Driven Electronics & Intelligent Systems Internship Program", label: "AI-Driven Electronics", description: "Neural networks on edge hardware and smart systems" },
    ]
  },
  {
    id: "eee",
    name: "Electrical & Automation",
    programs: [
      { value: "Electric Vehicle Technology & Battery Systems Internship Program", label: "Electric Vehicle Technology", description: "EV powertrains, battery management systems, and motor control" },
      { value: "Industrial Automation & Smart Manufacturing Internship Program", label: "Industrial Automation", description: "PLCs, SCADA, industrial robotics, and Industry 4.0" },
      { value: "Renewable Energy & Smart Grid Technologies Internship Program", label: "Renewable Energy", description: "Solar/wind power systems and modern smart grid design" },
    ]
  },
  {
    id: "mech",
    name: "Mechanical & Robotics",
    programs: [
      { value: "Product Design & Manufacturing Excellence Internship Program", label: "Product Design & Manufacturing", description: "CAD/CAM, solid modeling, and design for manufacturing" },
      { value: "Robotics & Intelligent Automation Internship Program", label: "Robotics & Automation", description: "Kinematics, robotic arms programming, and sensors" },
      { value: "Electric Mobility & Advanced Automotive Engineering Internship Program", label: "Electric Mobility & Automotive", description: "Hybrid systems, vehicle dynamics, and chassis design" },
    ]
  },
  {
    id: "mgmt",
    name: "Management & Business",
    programs: [
      { value: "Digital Marketing & AI Internship Program", label: "Digital Marketing & AI", description: "SEO, growth hacking, and AI content generation tools" },
      { value: "Financial Analytics & Investment Management Internship Program", label: "Financial Analytics", description: "Financial modeling, portfolio theory, and data analytics" },
      { value: "Business Development & Sales Internship Program", label: "Business Development & Sales", description: "B2B sales strategies, lead gen, and CRM tools" },
      { value: "Strategic Talent Acquisition (HR) Internship Program", label: "Strategic Talent Acquisition", description: "Modern recruitment, talent management, and HR analytics" },
    ]
  }
];

const COURSE_LINKS: Record<string, string> = {
  "DSA + AI/ML Internship Program": "/courses/ai-ml-internship",
  "Full Stack Development Internship Program": "/courses/full-stack-development",
  "Cybersecurity & Risk Management Internship Program": "/courses/cybersecurity",
  "Cloud Computing & DevOps Internship Program": "/courses/cloud-devops",
  "Digital Product Design (UI/UX) Internship Program": "/courses/digital-product-design",
  "Embedded Systems & IoT Internship Program": "/courses/embedded-systems-iot",
  "Semiconductor & VLSI Design Internship Program": "/courses/semiconductor-vlsi",
  "AI-Driven Electronics & Intelligent Systems Internship Program": "/courses/ai-driven-electronics",
  "Electric Vehicle Technology & Battery Systems Internship Program": "/courses/ev-tech-battery",
  "Industrial Automation & Smart Manufacturing Internship Program": "/courses/industrial-automation",
  "Renewable Energy & Smart Grid Technologies Internship Program": "/courses/renewable-energy",
  "Product Design & Manufacturing Excellence Internship Program": "/courses/product-design-manufacturing",
  "Robotics & Intelligent Automation Internship Program": "/courses/robotics-automation",
  "Electric Mobility & Advanced Automotive Engineering Internship Program": "/courses/electric-mobility-automotive",
  "Digital Marketing & AI Internship Program": "/courses/digital-marketing-ai",
  "Business Development & Sales Internship Program": "/courses/business-development-sales",
  "Strategic Talent Acquisition (HR) Internship Program": "/courses/hr-talent-acquisition",
  "Financial Analytics & Investment Management Internship Program": "/courses/financial-analytics",
};

function CategoryIcon({ categoryId, className = "h-4 w-4" }: { categoryId: string; className?: string }) {
  switch (categoryId) {
    case "cse":
      return <Code className={className} />;
    case "ece":
      return <Cpu className={className} />;
    case "eee":
      return <Zap className={className} />;
    case "mech":
      return <Wrench className={className} />;
    case "mgmt":
      return <Briefcase className={className} />;
    default:
      return <GraduationCap className={className} />;
  }
}

export function Hero() {
  const [course, setCourse] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [openDirection, setOpenDirection] = useState<"up" | "down">("up");
  const [maxDropdownHeight, setMaxDropdownHeight] = useState<number>(350);

  const handleCallClick = (e: React.MouseEvent) => {
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (typeof window !== "undefined" && window.innerWidth < 768);
    if (isMobileDevice) {
      // Direct native browser calling behavior
      return;
    } else {
      // Prevent immediate tab swap and pop calling app + advisory card
      e.preventDefault();
      window.location.href = "tel:+917702502125";
      setShowCallPopup(true);
    }
  };

  // Helper to open dropdown measuring available space
  const openDropdown = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const padding = 16;
      const defaultMaxHeight = 350;
      
      // Ensure it opens upward and has a safe height limit based on space above
      setOpenDirection("up");
      setMaxDropdownHeight(Math.max(180, Math.min(defaultMaxHeight, spaceAbove - padding)));
    }
    setIsDropdownOpen(true);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    } else {
      openDropdown();
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) {
      setErrorMsg("Please select a program first.");
      openDropdown();
      return;
    }
    const selectedProgram = PROGRAM_CATEGORIES.flatMap(cat => cat.programs).find(p => p.value === course);
    const courseName = selectedProgram ? selectedProgram.label : course;

    const fullMessage = `Hello Versuzo Team,

I am interested in enrolling in the following program:

Course: ${courseName}

I would like to know more about:
• Course Curriculum
• Duration
• Fees Structure
• Internship Opportunities
• Certifications Included
• Placement Assistance
• Enrollment Process

Please share the complete details.

Thank you.`;
    const whatsappNumber = "917702502125";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const selectedProgramObj = PROGRAM_CATEGORIES.flatMap(cat => cat.programs)
    .find(p => p.value === course);
  const selectedCategory = PROGRAM_CATEGORIES.find(cat =>
    cat.programs.some(p => p.value === course)
  );

  const filteredCategories = PROGRAM_CATEGORIES.map(cat => {
    const matchingPrograms = cat.programs.filter(p =>
      p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, programs: matchingPrograms };
  }).filter(cat => cat.programs.length > 0);

  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1.05, 1],
          x: [0, 20, -15, 10, 0],
          y: [0, -30, 15, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 0.9, 1.1, 0.98, 1],
          x: [0, -15, 10, -5, 0],
          y: [0, 20, -15, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800 dark:border-brand-700 dark:bg-brand-900/50 dark:text-sky-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
              </span>
              New cohorts starting soon
            </motion.span>
 
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-900 sm:text-4xl lg:text-5xl dark:text-white">
              Learn From Industry Experts.{" "}
              <span className="gradient-text block mt-1 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Transforming Talent into Opportunity and Success
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-700/80 dark:text-brand-200/80">
              Versuzo helps students and professionals gain practical skills
              through live cohort-based programs, expert mentorship, and
              real-world projects that accelerate your career.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#our-programs" variant="primary">
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-brand-600/70 dark:text-brand-300/70">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-500" />
                2,000+ learners
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-sky-500" />
                Industry certificates
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-sky-500" />
                Live cohort learning
              </span>
            </div>

            {/* Compact Direct Enrollment horizontal card placed under the stats (left column) */}
            <div className="mt-3">
              <div className="inline-flex w-full max-w-md items-center justify-between gap-4 rounded-lg bg-white/60 p-2.5 pr-3 shadow-sm border border-sky-100">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-sky-700">Direct Enrollment</span>
                  <span className="text-xs text-slate-600">Quick online enrollment</span>
                </div>
                <button
                  type="button"
                  aria-label="Enroll Now - opens enrollment form in a new tab"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScxEi10N-tIhc_fLIQJ9UZHA03dvmhjvNgCUz1ApPEfndzNjg/viewform", "_blank", "noopener,noreferrer")}
                  className="ml-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-sky-500 to-brand-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:opacity-95 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none flex flex-col gap-6"
          >
            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-100 shadow-xl aspect-[16/10.5] dark:border-brand-800 bg-brand-50/50">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                alt="Students collaborating"
                fill
                className="object-cover"
                priority
              />
              
              {/* Spacing optimization replacement */}

              {/* Career Growth Badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm dark:bg-brand-900/95 border border-brand-100/30 dark:border-brand-800/30 select-none">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white shadow-md shadow-sky-500/20">
                  <TrendingUp className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-medium text-brand-600 dark:text-brand-400 leading-tight">Career Growth</div>
                  <div className="text-xs font-bold text-brand-900 dark:text-white leading-tight">+85% job placement</div>
                </div>
              </div>
            </div>

            {/* Small WhatsApp Call Box (Consultation Form) */}
            <div className="relative z-30 rounded-3xl border border-brand-100 bg-white p-5 shadow-xl shadow-brand/5 dark:border-brand-800 dark:bg-brand-900">
              {/* Background gradient glows inside the card */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-500/5 dark:bg-sky-500/10 blur-3xl pointer-events-none" />
              
              <div className="space-y-2.5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                    Need Help Choosing the Right Program?
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    Speak directly with a Versuzo Career Advisor.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">

                  <div className="relative" ref={containerRef}>
                    <label className="sr-only">Program Interest</label>

                    {selectedProgramObj && selectedCategory ? (
                      /* Selected Program Pill/Card trigger */
                      <button
                        type="button"
                        onClick={toggleDropdown}
                        suppressHydrationWarning={true}
                        className="relative z-40 w-full flex items-center justify-between text-left rounded-xl border-2 border-emerald-500 bg-white dark:bg-slate-900 p-3 shadow-md hover:border-emerald-600 focus:outline-none transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-sm shadow-emerald-500/20 shrink-0">
                            <CategoryIcon categoryId={selectedCategory.id} className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider leading-none mb-1">{selectedCategory.name}</div>
                            <div className="text-xs font-black text-slate-900 dark:text-white leading-tight">{selectedProgramObj.label}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-[9px] font-black text-emerald-800 dark:bg-emerald-900/65 dark:text-emerald-300">
                            ✓ Selected
                          </span>
                          <ChevronDown className={`h-4.5 w-4.5 text-slate-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </div>
                      </button>
                    ) : (
                      /* Default Placeholder trigger */
                      <button
                        type="button"
                        onClick={toggleDropdown}
                        suppressHydrationWarning={true}
                        className={`w-full flex items-center justify-between text-left rounded-xl border-2 bg-white dark:bg-slate-900 pl-3.5 pr-4 py-3 text-sm font-bold transition-all cursor-pointer shadow-sm ${
                          errorMsg
                            ? "border-red-500 text-red-600 dark:text-red-400 hover:border-red-600"
                            : "border-sky-500 text-slate-800 dark:text-white hover:border-sky-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <GraduationCap className={`h-5 w-5 ${errorMsg ? "text-red-500" : "text-sky-500"}`} />
                          <span>Select Program of Interest</span>
                        </div>
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${errorMsg ? "text-red-500" : "text-slate-500"} ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                    )}

                    {/* Custom Dropdown Menu Panel - solid upward popup */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          style={{ maxHeight: maxDropdownHeight }}
                          className="absolute left-0 right-0 md:-left-4 md:-right-4 z-[9999] rounded-2xl border-2 border-sky-600 bg-white p-5 shadow-[0_25px_60px_rgba(0,0,0,0.25)] dark:border-sky-500 dark:bg-slate-900 overflow-y-auto bottom-full mb-3.5 scrollbar-thin opacity-100"
                        >
                          {/* Solid white backing panel to completely prevent image/text show-through */}
                          <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl -z-10" />

                          {/* Search Input Box */}
                          <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                            <div className="relative">
                              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                              <input
                                type="text"
                                placeholder="Search programs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                suppressHydrationWarning={true}
                                className="w-full rounded-xl border border-slate-200 bg-slate-100 pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 outline-none focus:border-sky-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </div>

                          {/* Program List */}
                          <div className="space-y-4">
                            {filteredCategories.map((cat, idx) => (
                              <div key={cat.id} className="space-y-3">
                                {/* Divider line between categories (except first) */}
                                {idx > 0 && (
                                  <div className="border-t border-slate-200 dark:border-slate-800 my-5" />
                                )}

                                {/* Category Header */}
                                <div className="px-2 py-1.5 text-sm font-black uppercase tracking-wider text-sky-950 dark:text-sky-300 flex items-center gap-2">
                                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400 border border-sky-200 dark:border-sky-900">
                                    <CategoryIcon categoryId={cat.id} className="h-3.5 w-3.5" />
                                  </div>
                                  {cat.name}
                                </div>
                                
                                {/* Category Options - Card Design */}
                                <div className="space-y-2.5">
                                  {cat.programs.map((p) => {
                                    const isSelected = course === p.value;
                                    return (
                                      <button
                                        key={p.value}
                                        type="button"
                                        onClick={() => {
                                          setCourse(p.value);
                                          setIsDropdownOpen(false);
                                          setSearchQuery("");
                                          setErrorMsg("");
                                        }}
                                        className={`w-full text-left rounded-xl p-4 transition-all duration-300 flex items-start gap-3.5 shadow-sm border hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${
                                          isSelected
                                            ? "bg-sky-50/30 border-2 border-sky-600 dark:bg-sky-950/20 dark:border-sky-400"
                                            : "bg-white dark:bg-slate-900 border-sky-100 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-400 hover:bg-sky-50/10 dark:hover:bg-slate-800/10"
                                        }`}
                                      >
                                        {/* Icon Container */}
                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-transform duration-350 ${
                                          isSelected
                                            ? "bg-sky-600 text-white border-sky-500"
                                            : "bg-sky-50 text-sky-600 border-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:border-slate-700"
                                        }`}>
                                          <CategoryIcon categoryId={cat.id} className="h-4.5 w-4.5" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-1.5 min-w-0">
                                              {isSelected && (
                                                <Check className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0" />
                                              )}
                                              <span className={`text-sm font-extrabold leading-snug truncate ${
                                                isSelected ? "text-sky-600 dark:text-sky-450" : "text-slate-900 dark:text-white"
                                              }`}>
                                                {p.label}
                                              </span>
                                            </div>
                                          </div>
                                          {p.description && (
                                            <p className="text-[12px] text-slate-600 dark:text-slate-350 mt-1 leading-relaxed font-semibold">
                                              {p.description}
                                            </p>
                                          )}
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                            {filteredCategories.length === 0 && (
                              <div className="px-3 py-6 text-center text-xs text-slate-500">
                                No programs found matching &quot;{searchQuery}&quot;
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {errorMsg && (
                    <div className="text-xs font-bold text-red-500 dark:text-red-400 mt-1 mb-2 px-1">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    <button
                      type="submit"
                      suppressHydrationWarning={true}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/10 transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-700/20 active:scale-98 cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.79-4.024l.409.243c1.455.864 3.06 1.319 4.71 1.32h.005c5.626 0 10.201-4.571 10.204-10.198.002-2.727-1.059-5.291-2.99-7.224C17.29 2.189 14.73 1.13 12.014 1.13 6.386 1.13 1.812 5.701 1.81 11.328c-.001 1.737.453 3.429 1.314 4.908l.267.458L2.39 20.443l3.828-1.004c1.402.766 2.973 1.17 4.57 1.173.003 0 .005 0 .007 0zm10.743-7.516c-.297-.15-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      Chat on WhatsApp
                    </button>
                    
                    <a
                      href="tel:+917702502125"
                      onClick={handleCallClick}
                      suppressHydrationWarning={true}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-sky-600/10 transition-all duration-300 hover:bg-sky-700 hover:shadow-sky-700/20 active:scale-98 cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>

                  {/* VISIBLE NUMBER DISPLAY FOOTER */}
                  <div className="mt-3 text-center border-t border-brand-100/50 pt-3 dark:border-brand-800/40">
                    <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest block mb-0.5">
                      Call Us:
                    </span>
                    <a
                      href="tel:+917702502125"
                      onClick={handleCallClick}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                    >
                      <Phone className="h-3 w-3" />
                      +91 7702502125
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Calling Fallback Modal */}
      <AnimatePresence>
        {showCallPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 shadow-2xl dark:border-brand-800 dark:bg-brand-950 text-center"
            >
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 to-brand-600" />
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowCallPopup(false);
                  setCopied(false);
                }}
                className="absolute top-3 right-3 text-brand-400 hover:text-brand-600 dark:hover:text-white text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-50 dark:hover:bg-brand-900 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 dark:bg-brand-900/40 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-brand-800/80 mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>

              <h3 className="font-display text-lg font-bold text-brand-900 dark:text-white">
                Call Versuzo
              </h3>
              
              <a 
                href="tel:+917702502125"
                className="text-xl font-extrabold text-sky-600 dark:text-sky-400 my-4 inline-block hover:underline"
              >
                +91 7702502125
              </a>

              <p className="text-xs text-brand-500 dark:text-brand-400 mb-6 max-w-[240px] mx-auto">
                Opening calling application. You can also copy the number or reach out via WhatsApp below.
              </p>

              <div className="flex flex-col gap-3">
                {/* Copy Number Button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("+91 7702502125");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 py-3 text-xs font-bold transition-all dark:bg-brand-900 dark:hover:bg-brand-800 dark:text-brand-200 cursor-pointer border border-brand-100 dark:border-brand-800"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      Number Copied!
                    </>
                  ) : (
                    "Copy Number"
                  )}
                </button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/917702502125?text=Hello%20Versuzo%20Team%2C%20I%20would%20like%20to%20connect%20with%20a%20career%20advisor."
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-xs font-bold transition-all cursor-pointer shadow-md shadow-emerald-600/10"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  Call via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
