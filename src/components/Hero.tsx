import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Bot,
  Cpu,
  Layers,
  ExternalLink,
  Code2,
  Database,
  Workflow,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'agent' | 'stack' | 'automation'>('agent');
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    'Initializing Rafay AI Agent Kernel v2.4...',
    '✓ Connected to Gemini Pro & Vector Memory (RAG)',
    '✓ Next.js App Router + FastAPI Microservices mounted',
    '✓ Airtable API & Neon PostgreSQL connection verified',
    '⚡ Status: Ready to orchestrate full-stack & AI solutions.',
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  const runSimulation = (type: string) => {
    if (isExecuting) return;
    setIsExecuting(true);

    if (type === 'kpi') {
      setSimulatedLogs((prev) => [
        ...prev.slice(-3),
        '> agent.execute("Sync Enterprise KPIs with Airtable")',
        '⚙️ Fetching department performance metrics...',
        '📊 Computing employee score aggregation...',
        '✓ Dashboard synced successfully with 0ms lag.',
      ]);
    } else if (type === 'agent') {
      setSimulatedLogs((prev) => [
        ...prev.slice(-3),
        '> agent.orchestrate("Multi-Agent Content Pipeline")',
        '🤖 Dispatcher assigned: Researcher + Hook Analyzer',
        '📝 Generated 4 viral hooks & SEO captions for TikTok/IG',
        '✓ Scheduled to PostgreSQL queue via Prisma ORM.',
      ]);
    } else if (type === 'excel') {
      setSimulatedLogs((prev) => [
        ...prev.slice(-3),
        '> agent.analyzeSpreadsheet("Q3_Financials.xlsx")',
        '🧮 Executing natural language formula breakdown...',
        '📈 Generated executive summary + automated chart schema',
        '✓ Output verified on Hugging Face / GitHub engine.',
      ]);
    }

    setTimeout(() => {
      setIsExecuting(false);
    }, 600);
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 px-5 sm:px-8 overflow-hidden bg-[#0C0C0C]">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-[#7621B0]/15 via-[#B600A8]/10 to-[#00F0FF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#BE4C00]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(215, 226, 234, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Identity & CTAs (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Top Status & Credential Pills */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D7E2EA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B600A8]/10 border border-[#B600A8]/30 text-xs font-mono text-[#E491DC]">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>Full-Stack &bull; AI &bull; Agents</span>
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-kanit font-black uppercase tracking-tight leading-[0.92] text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            <span className="block text-white">I don&apos;t just</span>
            <span className="block text-white/40">build websites.</span>
            <span className="block hero-heading mt-1">
              I build intelligent digital products.
            </span>
          </motion.h1>

          {/* Subtitle / Positioning Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-[#D7E2EA]/80 font-light leading-relaxed max-w-2xl mt-6"
          >
            Hi, I&apos;m <span className="text-white font-medium">{PERSONAL_INFO.fullName}</span> (
            <span className="text-white font-medium">{PERSONAL_INFO.preferredNick}</span>). An Information
            Technology student &amp; developer crafting modern <span className="text-white font-medium">Full-Stack Web Applications</span>, <span className="text-white font-medium">Autonomous AI Agents</span>, and <span className="text-white font-medium">Creative 3D Visual Content</span>.
          </motion.p>

          {/* Key Competency Mini Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-2.5 mt-6 font-mono text-xs text-[#D7E2EA]/70"
          >
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Next.js &bull; React &bull; TypeScript
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> Python &bull; FastAPI &bull; Node.js
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-pink-400" /> AI Agents &bull; RAG &bull; Gemini
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-emerald-400" /> PostgreSQL &bull; Airtable &bull; Neon
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-full text-white font-medium uppercase tracking-wider text-xs sm:text-sm px-7 py-3.5 transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-xl"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 2px 2px 10px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-2px',
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]/50 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm px-6 py-3 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Let&apos;s Build Together
            </a>

            <a
              href={PERSONAL_INFO.githubMain}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/70 hover:text-white transition-colors ml-1"
            >
              <span>github.com/Rafay100</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Futuristic Agent & Architecture Terminal (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* Outer Holographic Glow Frame */}
          <div className="relative rounded-[28px] p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl backdrop-blur-xl">
            {/* Terminal Window Card */}
            <div className="rounded-[24px] bg-[#0E0E12] border border-white/10 p-5 sm:p-6 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-[#D7E2EA]/60">
                    rafay_agent_kernel.tsx
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">
                    Active Agent Node
                  </span>
                </div>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="flex gap-2 my-4">
                <button
                  onClick={() => setActiveConsoleTab('agent')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeConsoleTab === 'agent'
                      ? 'bg-[#B600A8]/20 text-white border border-[#B600A8]/50'
                      : 'bg-white/5 text-[#D7E2EA]/60 hover:text-white'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" /> Agent Workflows
                </button>
                <button
                  onClick={() => setActiveConsoleTab('stack')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeConsoleTab === 'stack'
                      ? 'bg-cyan-500/20 text-white border border-cyan-500/50'
                      : 'bg-white/5 text-[#D7E2EA]/60 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> Full-Stack
                </button>
                <button
                  onClick={() => setActiveConsoleTab('automation')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeConsoleTab === 'automation'
                      ? 'bg-amber-500/20 text-white border border-amber-500/50'
                      : 'bg-white/5 text-[#D7E2EA]/60 hover:text-white'
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" /> Data &amp; RAG
                </button>
              </div>

              {/* Terminal Output Stream */}
              <div className="bg-[#050508] rounded-xl p-4 font-mono text-xs text-[#D7E2EA]/90 h-[190px] overflow-y-auto space-y-2 border border-white/5">
                {simulatedLogs.map((log, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed ${
                      log.startsWith('>')
                        ? 'text-cyan-400 font-bold'
                        : log.startsWith('✓')
                        ? 'text-emerald-400'
                        : log.startsWith('⚡')
                        ? 'text-purple-400'
                        : 'text-[#D7E2EA]/80'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>

              {/* Interactive Simulation Trigger Chips */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-[#D7E2EA]/60 mb-2.5 flex items-center justify-between">
                  <span>Interactive Agent Testing:</span>
                  <span className="text-[10px] text-purple-400">Click to run task</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => runSimulation('kpi')}
                    disabled={isExecuting}
                    className="p-2 rounded-lg bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 text-left transition-all active:scale-95 group"
                  >
                    <div className="text-[11px] font-medium text-white group-hover:text-purple-300">
                      Sync KPI
                    </div>
                    <div className="text-[9px] text-[#D7E2EA]/50 font-mono">Airtable API</div>
                  </button>

                  <button
                    onClick={() => runSimulation('agent')}
                    disabled={isExecuting}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-600/20 border border-white/10 hover:border-cyan-500/40 text-left transition-all active:scale-95 group"
                  >
                    <div className="text-[11px] font-medium text-white group-hover:text-cyan-300">
                      AI Social SaaS
                    </div>
                    <div className="text-[9px] text-[#D7E2EA]/50 font-mono">Gemini &bull; Hooks</div>
                  </button>

                  <button
                    onClick={() => runSimulation('excel')}
                    disabled={isExecuting}
                    className="p-2 rounded-lg bg-white/5 hover:bg-emerald-600/20 border border-white/10 hover:border-emerald-500/40 text-left transition-all active:scale-95 group"
                  >
                    <div className="text-[11px] font-medium text-white group-hover:text-emerald-300">
                      Excel Agent
                    </div>
                    <div className="text-[9px] text-[#D7E2EA]/50 font-mono">Data Pipeline</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating 3D Accent Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-5 bg-[#14141E] border border-white/20 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#B600A8] to-[#00F0FF] flex items-center justify-center text-white">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase font-kanit">
                Agentic Automation
              </div>
              <div className="text-[10px] text-[#D7E2EA]/60 font-mono">
                Full-Stack + Multi-Agent Systems
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
