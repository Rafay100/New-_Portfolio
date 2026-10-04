import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code2, Sparkles, GraduationCap, Cpu, Workflow, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Full-Stack Architecture',
      subtitle: 'Next.js, React, TypeScript, FastAPI & Node',
      description:
        'Crafting responsive, secure, and production-ready applications with clean component modularity, strict type safety, and high-performance server architectures.',
      icon: Code2,
      gradient: 'from-cyan-500/20 to-blue-600/20',
      border: 'border-cyan-500/30',
      tagColor: 'text-cyan-400',
    },
    {
      title: 'Agentic AI & LLM Systems',
      subtitle: 'Multi-turn Agents, Tool Calling & RAG',
      description:
        'Architecting autonomous agents that execute multi-step tool calls, query external APIs, retrieve vector knowledge, and handle complex real-world workflows.',
      icon: Bot,
      gradient: 'from-[#B600A8]/20 to-[#7621B0]/20',
      border: 'border-[#B600A8]/30',
      tagColor: 'text-[#E491DC]',
    },
    {
      title: 'Data & Process Automation',
      subtitle: 'Airtable APIs, PostgreSQL, Neon & n8n',
      description:
        'Eliminating manual bottlenecks through automated data syncs, custom KPI calculation engines, webhook pipelines, and structured spreadsheet agents.',
      icon: Workflow,
      gradient: 'from-emerald-500/20 to-teal-600/20',
      border: 'border-emerald-500/30',
      tagColor: 'text-emerald-400',
    },
    {
      title: 'Creative AI & 3D Animation',
      subtitle: 'Character Consistency & AI Video',
      description:
        'Exploring the frontier of AI-generated 3D characters, scene-based animated storytelling (like Veggie Village World), and procedural visual pipelines.',
      icon: Sparkles,
      gradient: 'from-amber-500/20 to-orange-600/20',
      border: 'border-amber-500/30',
      tagColor: 'text-amber-400',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#0C0C0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D7E2EA] mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Developer Philosophy &bull; Background</span>
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            About Syed Abdul Rafay
          </h2>

          <p className="text-base sm:text-lg text-[#D7E2EA]/70 font-light max-w-2xl mt-4">
            Combining rigorous computer science studies with hands-on full-stack development, autonomous AI workflows, and creative experimentation.
          </p>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Bio Card (7 cols) */}
          <div className="lg:col-span-7 rounded-[32px] bg-[#121218] border border-white/10 p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7621B0]/10 blur-[90px] rounded-full pointer-events-none" />

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-semibold mb-3">
                // Professional Journey
              </div>
              <h3 className="font-kanit font-bold text-2xl sm:text-3xl text-white mb-6 leading-snug">
                Turning ambitious ideas into scalable, intelligent software products.
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
                <p>
                  I am an Information Technology student and full-stack developer based in Karachi, Pakistan. My focus spans across frontend design systems, backend REST APIs, relational/serverless databases, and cutting-edge AI integrations.
                </p>
                <p>
                  Rather than building static websites, I engineer <strong className="text-white font-medium">end-to-end digital experiences</strong>—from complex real-time enterprise dashboards (like my Airtable-powered KPI Dashboard) to AI-powered SaaS platforms that orchestrate multi-channel social workflows with Google Gemini.
                </p>
                <p>
                  My long-term mission is to push the boundaries of <strong className="text-white font-medium">Agentic AI and intelligent automation</strong>, creating autonomous systems that act as proactive digital collaborators.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">BBIT / BS-level IT Studies</div>
                  <div className="text-[11px] text-[#D7E2EA]/60 font-mono">Virtual University of Pakistan</div>
                </div>
              </div>

              <a
                href="#projects"
                className="text-xs font-mono uppercase tracking-wider text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1.5"
              >
                <span>View Portfolio Projects</span> &rarr;
              </a>
            </div>
          </div>

          {/* Core Foundations Card (5 cols) */}
          <div className="lg:col-span-5 rounded-[32px] bg-[#121218] border border-white/10 p-6 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3">
                // Academic & Technical Focus
              </div>
              <h3 className="font-kanit font-bold text-xl sm:text-2xl text-white mb-6">
                University IT Foundation
              </h3>

              <div className="space-y-3">
                {EDUCATION_DATA.focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#D7E2EA]/85">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-xs font-mono text-white font-medium mb-1">
                📍 Virtual University of Pakistan (VU)
              </div>
              <div className="text-[11px] text-[#D7E2EA]/60 leading-relaxed font-light">
                Comprehensive coursework in distributed software architecture, data modeling, object-oriented design, and systems engineering.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-[26px] bg-gradient-to-b ${pillar.gradient} border ${pillar.border} p-6 flex flex-col justify-between backdrop-blur-md hover:translate-y-[-4px] transition-all duration-300 shadow-lg`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0C0C0C]/80 border border-white/10 flex items-center justify-center text-white mb-5 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-kanit font-bold text-lg text-white mb-1">
                    {pillar.title}
                  </h4>
                  <div className={`text-xs font-mono mb-3 ${pillar.tagColor}`}>
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs text-[#D7E2EA]/75 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
