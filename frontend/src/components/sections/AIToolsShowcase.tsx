"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface AITool {
  name: string;
  category: string;
  description: string;
  glowColor: string;
  textColor: string;
  logoUrl: string;
  invertInDark?: boolean;
}

const aiTools: AITool[] = [
  {
    name: "ChatGPT",
    category: "LLM & Chatbot",
    description: "Conversational AI & reasoning model by OpenAI",
    glowColor: "rgba(16, 163, 127, 0.35)",
    textColor: "#10a37f",
    logoUrl: "/logos/chatgpt.svg"
  },
  {
    name: "Claude",
    category: "LLM & Reasoning",
    description: "Sleek, human-like reasoning & writing by Anthropic",
    glowColor: "rgba(217, 119, 87, 0.35)",
    textColor: "#d97757",
    logoUrl: "/logos/claude.svg"
  },
  {
    name: "Gemini",
    category: "Multimodal AI",
    description: "Google's powerful native multimodal intelligence",
    glowColor: "rgba(59, 130, 246, 0.35)",
    textColor: "#3b82f6",
    logoUrl: "/logos/gemini.svg"
  },
  {
    name: "Perplexity",
    category: "AI Search",
    description: "Conversational answer engine searching web in real-time",
    glowColor: "rgba(20, 184, 166, 0.35)",
    textColor: "#14b8a6",
    logoUrl: "/logos/perplexity.svg"
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    description: "Artistic & hyper-realistic text-to-image generator",
    glowColor: "rgba(99, 102, 241, 0.35)",
    textColor: "#6366f1",
    logoUrl: "/logos/midjourney.svg"
  },
  {
    name: "DALL-E",
    category: "Image Generation",
    description: "OpenAI's creative image generator built into ChatGPT",
    glowColor: "rgba(13, 148, 136, 0.35)",
    textColor: "#0d9488",
    logoUrl: "/logos/dalle.svg"
  },
  {
    name: "Cursor",
    category: "AI Code Editor",
    description: "The AI-first code editor fork of VS Code",
    glowColor: "rgba(59, 130, 246, 0.35)",
    textColor: "#3b82f6",
    logoUrl: "/logos/cursor.svg"
  },
  {
    name: "GitHub Copilot",
    category: "Coding Companion",
    description: "Everyday AI programmer integrated into your IDE",
    glowColor: "rgba(99, 102, 241, 0.35)",
    textColor: "#6366f1",
    logoUrl: "/logos/githubcopilot.svg"
  },
  {
    name: "Windsurf",
    category: "AI IDE",
    description: "Flow state IDE by Codeium with deep agentic capabilities",
    glowColor: "rgba(6, 182, 212, 0.35)",
    textColor: "#06b6d4",
    logoUrl: "/logos/windsurf.svg"
  },
  {
    name: "Replit AI",
    category: "Cloud Workspace",
    description: "Build and deploy software in the browser with AI",
    glowColor: "rgba(249, 115, 22, 0.35)",
    textColor: "#f97316",
    logoUrl: "/logos/replit.svg"
  },
  {
    name: "Bolt.new",
    category: "StackBlitz AI",
    description: "Instant, fully functional full-stack web dev in browser",
    glowColor: "rgba(234, 179, 8, 0.35)",
    textColor: "#eab308",
    logoUrl: "/logos/bolt.svg"
  },
  {
    name: "Lovable",
    category: "Fullstack Builder",
    description: "GPT Engineer-powered no-code app generator",
    glowColor: "rgba(244, 63, 94, 0.35)",
    textColor: "#f43f5e",
    logoUrl: "/logos/lovable.svg"
  },
  {
    name: "V0",
    category: "UI Generator",
    description: "Vercel's generative UI model styling with Tailwind & shadcn",
    glowColor: "rgba(17, 24, 39, 0.35)",
    textColor: "#111827",
    logoUrl: "/logos/v0.svg",
    invertInDark: true
  },
  {
    name: "Notion AI",
    category: "Productivity AI",
    description: "Write, summarize, brainstorm, and edit inside Notion",
    glowColor: "rgba(168, 85, 247, 0.35)",
    textColor: "#a855f7",
    logoUrl: "/logos/notion.svg",
    invertInDark: true
  },
  {
    name: "Grammarly",
    category: "Writing Assistant",
    description: "Real-time communication reviewer and rewrite assistant",
    glowColor: "rgba(21, 194, 107, 0.35)",
    textColor: "#15c26b",
    logoUrl: "/logos/grammarly.svg"
  },
  {
    name: "Jasper",
    category: "Content Marketing",
    description: "Enterprise grade AI content generator & copywriter",
    glowColor: "rgba(124, 58, 237, 0.35)",
    textColor: "#7c3aed",
    logoUrl: "/logos/jasper.png"
  },
  {
    name: "Canva AI",
    category: "Visual Design",
    description: "Magic design suite for text-to-graphics creation",
    glowColor: "rgba(139, 92, 246, 0.35)",
    textColor: "#8b5cf6",
    logoUrl: "/logos/canva.png"
  },
  {
    name: "Runway",
    category: "AI Video",
    description: "Gen-2 text-to-video creative suite for filmmakers",
    glowColor: "rgba(239, 68, 68, 0.35)",
    textColor: "#ef4444",
    logoUrl: "/logos/runway.svg"
  },
  {
    name: "Synthesia",
    category: "AI Avatar",
    description: "Create video presentations from text scripts with avatars",
    glowColor: "rgba(59, 130, 246, 0.35)",
    textColor: "#3b82f6",
    logoUrl: "/logos/synthesia.png"
  },
  {
    name: "ElevenLabs",
    category: "Voice Generation",
    description: "Hyper-realistic voice cloning & text-to-speech engine",
    glowColor: "rgba(75, 85, 99, 0.35)",
    textColor: "#4b5563",
    logoUrl: "/logos/elevenlabs.svg",
    invertInDark: true
  },
  {
    name: "HeyGen",
    category: "Video Gen",
    description: "Studio-quality AI video generator with custom avatars",
    glowColor: "rgba(249, 115, 22, 0.35)",
    textColor: "#f97316",
    logoUrl: "/logos/heygen.png"
  },
  {
    name: "Zapier AI",
    category: "Work Automation",
    description: "Connect apps and automate complex processes with AI instructions",
    glowColor: "rgba(249, 115, 22, 0.35)",
    textColor: "#f97316",
    logoUrl: "/logos/zapier.svg"
  },
  {
    name: "ClickUp AI",
    category: "Project Mgmt",
    description: "AI-assisted task templates, writing, and summaries",
    glowColor: "rgba(236, 72, 153, 0.35)",
    textColor: "#ec4899",
    logoUrl: "/logos/clickup.svg"
  },
  {
    name: "Framer AI",
    category: "Web Creator",
    description: "Generate and publish web designs using natural text prompts",
    glowColor: "rgba(59, 130, 246, 0.35)",
    textColor: "#3b82f6",
    logoUrl: "/logos/framer.svg",
    invertInDark: true
  },
  {
    name: "Gamma",
    category: "Doc/Slide Creator",
    description: "A new medium for presenting ideas powered by AI",
    glowColor: "rgba(168, 85, 247, 0.35)",
    textColor: "#a855f7",
    logoUrl: "/logos/gamma.png"
  },
  {
    name: "Tome",
    category: "Presentations",
    description: "Generate beautiful presentation decks in minutes",
    glowColor: "rgba(239, 68, 68, 0.35)",
    textColor: "#ef4444",
    logoUrl: "/logos/tome.png"
  },
  {
    name: "DeepSeek",
    category: "LLM & Coding",
    description: "High-performance reasoning and open-source models",
    glowColor: "rgba(30, 64, 175, 0.35)",
    textColor: "#1e40af",
    logoUrl: "/logos/deepseek.svg"
  },
  {
    name: "Grok",
    category: "Real-time LLM",
    description: "xAI's chatbot with real-time news access via X",
    glowColor: "rgba(107, 114, 128, 0.35)",
    textColor: "#6b7280",
    logoUrl: "/logos/grok.svg",
    invertInDark: true
  },
  {
    name: "Character AI",
    category: "Persona Chat",
    description: "Engage with customizable historical and fictional personas",
    glowColor: "rgba(249, 115, 22, 0.35)",
    textColor: "#f97316",
    logoUrl: "/logos/characterai.png"
  },
  {
    name: "Poe",
    category: "LLM Aggregate",
    description: "Interact with multiple AI models in a single interface",
    glowColor: "rgba(234, 88, 12, 0.35)",
    textColor: "#ea580c",
    logoUrl: "/logos/poe.svg"
  },
  {
    name: "Leonardo AI",
    category: "Asset Generator",
    description: "Generate production-grade creative graphic assets",
    glowColor: "rgba(234, 179, 8, 0.35)",
    textColor: "#eab308",
    logoUrl: "/logos/leonardo.png"
  },
  {
    name: "Suno",
    category: "Music Gen",
    description: "Generate full-fidelity vocal songs and instrumentals",
    glowColor: "rgba(249, 115, 22, 0.35)",
    textColor: "#f97316",
    logoUrl: "/logos/suno.svg"
  },
  {
    name: "Udio",
    category: "Audio/Music",
    description: "Text-to-music AI creator specializing in clean song stems",
    glowColor: "rgba(236, 72, 153, 0.35)",
    textColor: "#ec4899",
    logoUrl: "/logos/udio.svg"
  },
  {
    name: "Phind",
    category: "Dev Search",
    description: "Search engine for developers delivering code blueprints",
    glowColor: "rgba(2, 132, 199, 0.35)",
    textColor: "#0284c7",
    logoUrl: "/logos/phind.svg"
  },
  {
    name: "Tabnine",
    category: "Autocompletion",
    description: "Contextual AI code autocompletion and agent utility",
    glowColor: "rgba(79, 70, 229, 0.35)",
    textColor: "#4f46e5",
    logoUrl: "/logos/tabnine.png"
  },
  {
    name: "Codeium",
    category: "IDE Assistant",
    description: "Free fast AI autocomplete and code chat extension",
    glowColor: "rgba(14, 165, 233, 0.35)",
    textColor: "#0ea5e9",
    logoUrl: "/logos/codeium.png"
  },
  {
    name: "Hugging Face",
    category: "Model Hub",
    description: "The home of open-source artificial intelligence",
    glowColor: "rgba(234, 179, 8, 0.35)",
    textColor: "#eab308",
    logoUrl: "/logos/huggingface.svg"
  },
  {
    name: "LangChain",
    category: "LLM Orchestration",
    description: "Framework to assemble LLMs with agent chain logic",
    glowColor: "rgba(34, 197, 94, 0.35)",
    textColor: "#22c55e",
    logoUrl: "/logos/langchain.svg"
  },
  {
    name: "Pinecone",
    category: "Vector Database",
    description: "High performance database vector index for RAG queries",
    glowColor: "rgba(22, 163, 74, 0.35)",
    textColor: "#16a34a",
    logoUrl: "/logos/pinecone.png"
  },
  {
    name: "n8n",
    category: "Workflow Dev",
    description: "Fair-code workflow automation nodes with custom AI agents",
    glowColor: "rgba(255, 75, 75, 0.35)",
    textColor: "#ff4b4b",
    logoUrl: "/logos/n8n.svg"
  },
  {
    name: "CrewAI",
    category: "Agent Framework",
    description: "Orchestrate role-playing cooperative AI agent crews",
    glowColor: "rgba(220, 38, 38, 0.35)",
    textColor: "#dc2626",
    logoUrl: "/logos/crewai.svg"
  },
  {
    name: "OpenAI API",
    category: "Model Endpoint",
    description: "Power applications with advanced model inference endpoints",
    glowColor: "rgba(16, 163, 127, 0.35)",
    textColor: "#10a37f",
    logoUrl: "/logos/openaiapi.svg",
    invertInDark: true
  }
];

export function AIToolsShowcase() {
  // Triple items to ensure smooth infinite wrap on ultra-wide screens
  const marqueeItems = [...aiTools, ...aiTools, ...aiTools];

  return (
    <section className="relative overflow-hidden py-20 bg-brand-50/50 dark:bg-brand-950/20 border-y border-brand-100/50 dark:border-brand-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Enroll in Our Programs and Learn Top AI Tools from Industry Mentors"
          description="Gain hands-on experience with the most widely used AI tools through expert-led training, real-world projects, internships, and practical learning."
        />
      </div>

      {/* Marquee Wrapper with side vignettes */}
      <div className="relative mt-12 w-full select-none overflow-hidden py-10">
        {/* Left Vignette */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-brand-950 dark:via-brand-950/80 dark:to-transparent z-20 pointer-events-none" />
        
        {/* Right Vignette */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-brand-950 dark:via-brand-950/80 dark:to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track: 80s duration for slow, elegant, premium marquee */}
        <div 
          style={{ animationDuration: "80s" }} 
          className="flex w-max animate-marquee-ltr gap-6 px-3"
        >
          {marqueeItems.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              style={{
                "--glow-color": tool.glowColor,
                "--text-color": tool.textColor,
              } as React.CSSProperties}
              className="group relative flex h-28 w-44 flex-col items-center justify-center rounded-2xl border border-brand-100/60 bg-white/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-[var(--text-color)] hover:bg-white hover:shadow-[0_10px_30px_-5px_var(--glow-color)] dark:border-brand-800/40 dark:bg-brand-900/20 dark:hover:bg-brand-900/60"
            >
              {/* Logo icon container */}
              <div className="flex h-12 w-28 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={tool.logoUrl}
                  alt={`${tool.name} Logo`}
                  className={`h-8 max-w-[100px] object-contain transition-all duration-300 ${
                    tool.invertInDark ? "dark:invert dark:brightness-200" : ""
                  }`}
                />
              </div>

              {/* Tool Name */}
              <span className="mt-2 text-xs font-semibold tracking-wide text-brand-900 dark:text-brand-100">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
