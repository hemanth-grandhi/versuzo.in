"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Code2,
  Shield,
  Cloud,
  Palette,
  Zap,
  Settings,
  Wrench,
  TrendingUp,
  Briefcase,
  Users,
  DollarSign,
  ArrowRight,
  Sparkles,
  Network
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Program {
  title: string;
  description: string;
  icon: any;
}

interface Department {
  id: string;
  name: string;
  tabLabel: string;
  description: string;
  icon: string;
  gradient: string;
  accentColor: string;
  programs: Program[];
}

const departments: Department[] = [
  {
    id: "cse",
    tabLabel: "Software & Tech",
    name: "Technology Internship & Training Programs",
    description: "Industry-focused internship and training programs designed to help students and professionals gain practical skills, hands-on project experience, industry exposure, certifications, and career-ready expertise in Software Development, Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, Cloud Computing, DevOps, Product Management, Digital Marketing, and other high-demand domains.",
    icon: "💻",
    gradient: "from-brand-900 via-brand-800 to-sky-500",
    accentColor: "sky",
    programs: [
      {
        title: "DSA + AI/ML Internship Program",
        description: "Master Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Generative AI, Prompt Engineering, and real-world AI applications.",
        icon: Cpu,
      },
      {
        title: "Full Stack Development Internship Program",
        description: "Learn frontend, backend, databases, APIs, system design, deployment, and modern development workflows.",
        icon: Code2,
      },
      {
        title: "Cybersecurity & Risk Management Internship Program",
        description: "Develop expertise in ethical hacking, network security, cloud security, governance, compliance, and risk assessment.",
        icon: Shield,
      },
      {
        title: "Cloud Computing & DevOps Internship Program",
        description: "Master AWS, Azure, Docker, Kubernetes, CI/CD pipelines, cloud architecture, and infrastructure automation.",
        icon: Cloud,
      },
      {
        title: "Digital Product Design (UI/UX) Internship Program",
        description: "Learn user research, wireframing, prototyping, design systems, Figma, and product design principles.",
        icon: Palette,
      },
    ],
  },
  {
    id: "ece",
    tabLabel: "Electronics & IoT",
    name: "Electronics & Embedded Systems Internship & Training Programs",
    description: "Industry-focused internship and training programs designed to build expertise in Embedded Systems, VLSI Design, IoT Architecture, and AI-driven Intelligent Systems.",
    icon: "📡",
    gradient: "from-brand-900 via-brand-800 to-sky-500",
    accentColor: "sky",
    programs: [
      {
        title: "Embedded Systems & IoT Internship Program",
        description: "Build smart connected systems using microcontrollers, sensors, communication protocols, and IoT platforms.",
        icon: Network,
      },
      {
        title: "Semiconductor & VLSI Design Internship Program",
        description: "Learn chip design fundamentals, RTL design, verification, FPGA development, and semiconductor workflows.",
        icon: Cpu,
      },
      {
        title: "AI-Driven Electronics & Intelligent Systems Internship Program",
        description: "Develop smart hardware systems, integrating artificial intelligence at the edge, smart sensors, and advanced PCB layouts.",
        icon: Cpu,
      },
    ],
  },
  {
    id: "eee",
    tabLabel: "Electrical & Automation",
    name: "Electrical & Smart Grid Internship & Training Programs",
    description: "Hands-on internship and training programs designed to master Electric Vehicle Technology, Battery Management Systems, Industrial Automation, and Smart Grid Technologies.",
    icon: "⚡",
    gradient: "from-brand-900 via-brand-800 to-sky-500",
    accentColor: "sky",
    programs: [
      {
        title: "Electric Vehicle Technology & Battery Systems Internship Program",
        description: "Master EV architecture, battery management systems, charging technologies, power electronics, and sustainable mobility.",
        icon: Zap,
      },
      {
        title: "Industrial Automation & Smart Manufacturing Internship Program",
        description: "Learn PLCs, SCADA, Industry 4.0 technologies, industrial robotics, and smart factory automation.",
        icon: Settings,
      },
      {
        title: "Renewable Energy & Smart Grid Technologies Internship Program",
        description: "Master power grid modeling, integration of solar & wind energy systems, smart metering, and microgrid controls.",
        icon: Zap,
      },
    ],
  },
  {
    id: "mech",
    tabLabel: "Mechanical & Robotics",
    name: "Mechanical & Robotics Internship & Training Programs",
    description: "Project-based internship and training programs designed to build expertise in CAD/CAM modeling, product design excellence, robotics, and electric mobility engineering.",
    icon: "⚙️",
    gradient: "from-brand-900 via-brand-800 to-sky-500",
    accentColor: "sky",
    programs: [
      {
        title: "Product Design & Manufacturing Excellence Internship Program",
        description: "Learn CAD, CAE, manufacturing processes, product lifecycle management, and industry-standard design practices.",
        icon: Settings,
      },
      {
        title: "Robotics & Intelligent Automation Internship Program",
        description: "Build expertise in robotics, automation systems, sensors, actuators, control systems, and intelligent machines.",
        icon: Wrench,
      },
      {
        title: "Electric Mobility & Advanced Automotive Engineering Internship Program",
        description: "Develop expertise in electric powertrain calibration, chassis dynamics, vehicle simulation, and automotive software.",
        icon: Settings,
      },
    ],
  },
  {
    id: "mgmt",
    tabLabel: "Management & Business",
    name: "Management & Business Internship & Training Programs",
    description: "Professional internship and training programs designed to gain expertise in Digital Marketing, Business Development, Financial Analytics, and Strategic Talent Acquisition.",
    icon: "📈",
    gradient: "from-brand-900 via-brand-800 to-sky-500",
    accentColor: "sky",
    programs: [
      {
        title: "Digital Marketing & AI Internship Program",
        description: "Master performance marketing, social media, SEO, content strategy, analytics, and AI-powered marketing tools.",
        icon: TrendingUp,
      },
      {
        title: "Business Development & Sales Internship Program",
        description: "Learn lead generation, sales strategy, negotiation, CRM systems, customer acquisition, and revenue growth.",
        icon: Briefcase,
      },
      {
        title: "Strategic Talent Acquisition (HR) Internship Program",
        description: "Develop expertise in recruitment, employer branding, workforce planning, HR analytics, and talent management.",
        icon: Users,
      },
      {
        title: "Financial Analytics & Investment Management Internship Program",
        description: "Learn financial modeling, valuation, investment analysis, portfolio management, fintech tools, and business finance.",
        icon: DollarSign,
      },
    ],
  },
];

const programLinks: Record<string, string> = {
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

export function OurPrograms() {
  const [activeTab, setActiveTab] = useState<string>("cse");

  const activeDept = departments.find((dept) => dept.id === activeTab) || departments[0];

  const getWhatsAppEnrollUrl = (deptName: string) => {
    const fullMessage = `Hello Versuzo Team,

I am interested in enrolling in the following program:

Course: ${deptName}

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
    return `https://wa.me/917702502125?text=${encodeURIComponent(fullMessage)}`;
  };

  return (
    <section id="our-programs" className="section-padding relative overflow-hidden scroll-mt-24">
      {/* Background radial glows matching brand colors */}
      <div className="absolute -right-48 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[100px] dark:bg-sky-500/5" />
      <div className="absolute -left-48 bottom-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[100px] dark:bg-brand-500/5" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Internship & Training Programs"
          title={activeDept.name}
          description={activeDept.description}
        />

        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 border-b border-brand-100/60 pb-6 dark:border-brand-900/40">
          {departments.map((dept) => {
            const isActive = activeTab === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                suppressHydrationWarning={true}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300
                  ${isActive 
                    ? "text-white shadow-md bg-brand-900 dark:bg-brand-800" 
                    : "text-brand-700 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-900/60"
                  }`}
              >
                <span>{dept.icon}</span>
                <span>{dept.tabLabel}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-900 via-brand-800 to-sky-500 opacity-90"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Department Programs Grid */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activeDept.programs.map((program, i) => {
                const Icon = program.icon;
                const linkHref = programLinks[program.title] || "#cta";

                return (
                  <Link href={linkHref} key={program.title} className="block h-full">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-100/80 bg-white/95 backdrop-blur-md p-6 shadow-sm hover:border-sky-400/50 hover:shadow-sky dark:border-brand-900/50 dark:bg-brand-950/90 transition-all duration-300 cursor-pointer"
                    >
                      {/* Decorative card glow background using brand gradient */}
                      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-brand-900/10 to-sky-500/10 opacity-[0.04] group-hover:opacity-[0.12] blur-2xl transition-all duration-500" />
                      
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          {/* Department Icon and Sparkle */}
                          <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-900 to-sky-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                              <Icon className="h-6 w-6" />
                            </div>
                            <Sparkles className="h-4 w-4 text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" />
                          </div>

                          {/* Title & Description */}
                          <div className="mt-6">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-brand-900 to-sky-600 bg-clip-text text-transparent dark:from-white dark:to-sky-300 leading-snug">
                              {program.title}
                            </h3>

                            <p className="mt-3 text-xs text-brand-700/80 dark:text-brand-300/80 leading-relaxed">
                              {program.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Premium Bottom Call To Action Block */}
        <FadeIn delay={0.2} className="mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-950 via-brand-900 to-sky-950 px-6 py-12 text-center sm:px-12 sm:py-16 shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggIGQ9Ik0zNiAzNGg0djJuLTR6TTAgMzRoNHYySDB6TTAgMGg0djJIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h4 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to Accelerate Your Career?
              </h4>
              <p className="mt-4 text-white/80 text-base leading-relaxed">
                Join Versuzo and gain industry-ready skills that lead to real opportunities and career success.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  href={getWhatsAppEnrollUrl(activeDept.name)}
                  target="_blank"
                  variant="primary"
                  className="!px-8 !py-3.5 bg-gradient-to-r from-sky-400 to-brand-600 text-white shadow-sky hover:from-sky-500 hover:to-brand-700 transition-all font-bold text-base"
                >
                  Enroll Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
