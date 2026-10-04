import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Bot, Wrench, Sparkles, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-pink-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D7E2EA] mb-4">
            <Layout className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Skills &amp; Tech Matrix
          </h2>

          <p className="text-base sm:text-lg text-[#D7E2EA]/70 font-light max-w-2xl mt-4">
            Technologies and architectural patterns I leverage to build production web applications, autonomous AI agents, and custom data workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-purple-900/40 scale-105'
                  : 'bg-white/5 border border-white/10 text-[#D7E2EA]/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-[30px] bg-[#121218] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-white/25 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background Subtle Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] group-hover:bg-purple-500/10 blur-[50px] transition-colors rounded-full pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                      {getIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="font-kanit font-bold text-lg text-white">
                        {cat.title}
                      </h3>
                      <div className="text-[10px] text-[#D7E2EA]/50 font-mono">
                        {cat.skills.length} core technologies
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#D7E2EA]/60 leading-relaxed font-light mb-6">
                    {cat.description}
                  </p>

                  {/* Skill Chips List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          skill.highlight
                            ? 'bg-white/10 border border-white/20 text-white font-medium shadow-sm'
                            : 'bg-white/[0.03] border border-white/5 text-[#D7E2EA]/80'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-[#B600A8]' : 'bg-[#D7E2EA]/30'}`} />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verified Tag */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D7E2EA]/40">
                  <span>Production &amp; Practical Use</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
