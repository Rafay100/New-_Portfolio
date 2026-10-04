import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Play,
  Pause,
  Wrench,
  Tv,
  CheckCircle2,
} from 'lucide-react';
import { CREATIVE_STUDIO_PROJECTS } from '../data/portfolioData';
import type { CreativeProject } from '../data/portfolioData';

export const CreativeAiLab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<CreativeProject>(CREATIVE_STUDIO_PROJECTS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const categories = [
    'All',
    '3D Animation',
    'Video Production',
    'Character Animation',
    'Storytelling & Narrative',
    'Industrial & Process',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? CREATIVE_STUDIO_PROJECTS
      : CREATIVE_STUDIO_PROJECTS.filter(
          (p) => p.category === selectedCategory || (selectedCategory === '3D Animation' && p.category.includes('3D'))
        );

  const studioPipeline = [
    {
      num: '01',
      title: 'Prompt Architecture & Asset Consistency',
      desc: 'Formulating multi-angle reference embeddings, custom lighting parameters, and texture conditioning to ensure absolute character and scene consistency across all cuts.',
      badge: 'Midjourney v6 & SDXL ControlNet',
    },
    {
      num: '02',
      title: 'Scene-Based Neural Video Generation',
      desc: 'Calibrating camera trajectories (pan, tilt, orbit), motion vectors, and frame interpolation models to generate cinematic 3D motion from keyframe renders.',
      badge: 'Runway Gen-3 & Kling AI Video',
    },
    {
      num: '03',
      title: 'Voice AI & Narrative Pacing',
      desc: 'Composing comedic timing, expressive voice synthesis, and dynamic character dialogue mapped to emotional high-points and cultural humor cues.',
      badge: 'ElevenLabs Neural Speech',
    },
    {
      num: '04',
      title: 'Post-Production & Viral Optimization',
      desc: 'Precision color grading, sound design layering, and 3-second retention hooks optimized specifically for vertical mobile viewing on Reels, TikTok, and Shorts.',
      badge: 'Short-Form Audience Retention',
    },
  ];

  return (
    <section id="ai-lab" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#09090D] border-t border-white/5 overflow-hidden">
      {/* Background Studio Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#B600A8]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B600A8]/15 border border-[#B600A8]/30 text-xs font-mono text-[#E491DC] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Generative Media &bull; 3D Animation Studio</span>
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Creative AI Lab
          </h2>

          <p className="text-base sm:text-lg text-[#D7E2EA]/80 font-light max-w-2xl mt-4">
            Where engineering precision meets generative cinema: 3D character animation, scene-based neural video production, and high-retention visual storytelling.
          </p>

          {/* Brand Badge */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white flex items-center gap-2">
              <Tv className="w-3.5 h-3.5 text-purple-400" />
              <span>Original Content Brand: <strong>Veggie Village World</strong></span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              Family-Friendly &bull; Social Media Formats
            </span>
          </div>
        </div>

        {/* Studio Categories Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-purple-900/40 scale-105'
                  : 'bg-white/5 border border-white/10 text-[#D7E2EA]/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Interactive Studio Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Interactive Project Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 justify-center">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-semibold mb-1 flex items-center justify-between">
              <span>// Studio Portfolio Disciplines</span>
              <span className="text-[10px] text-[#D7E2EA]/40">Select discipline</span>
            </div>

            {filteredProjects.map((project) => {
              const isSelected = activeProject.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#151520] border-purple-500/60 shadow-xl shadow-purple-950/40 translate-x-2'
                      : 'bg-[#101016] border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]/60">
                      {project.category}
                    </span>
                    {project.brandTag && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {project.brandTag}
                      </span>
                    )}
                  </div>

                  <div className="font-kanit font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </div>
                  <div className="text-xs text-[#D7E2EA]/60 font-light line-clamp-1 mt-0.5">
                    {project.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Studio Production Viewer (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="rounded-[36px] bg-[#12121A] border border-white/15 p-6 sm:p-9 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[540px]"
              >
                {/* Visual Ambient Glow */}
                <div
                  className="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full pointer-events-none opacity-30"
                  style={{ backgroundColor: activeProject.accentColor }}
                />

                <div>
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D7E2EA]">
                        {activeProject.category}
                      </span>
                      {activeProject.statsLabel && (
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {activeProject.statsLabel}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/60">
                      <span>{activeProject.aspectRatio}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-kanit font-black text-2xl sm:text-4xl text-white mb-2 leading-tight">
                    {activeProject.title}
                  </h3>

                  <div
                    className="text-xs sm:text-sm font-mono font-medium mb-6 uppercase tracking-wider"
                    style={{ color: activeProject.accentColor }}
                  >
                    {activeProject.subtitle}
                  </div>

                  {/* Simulated Studio Media Monitor Card */}
                  <div className="rounded-2xl bg-[#08080C] border border-white/10 p-4 mb-6 shadow-inner relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] font-mono text-[#D7E2EA]/60">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-white font-bold">STUDIO MONITOR &bull; AI PIPELINE</span>
                      </div>
                      <span className="text-cyan-400">4K UPSCALE &bull; 60FPS</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#D7E2EA]/90 font-light leading-relaxed mb-4">
                      {activeProject.description}
                    </p>

                    {/* Interactive Playback Control Simulation */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isPlaying ? 'Active Pipeline' : 'Paused'}</span>
                      </button>

                      <div className="flex items-center gap-2 text-[10px] text-[#D7E2EA]/50">
                        <span>Rendering Engine: Generative Diffusion</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Animation & Production Techniques */}
                  <div className="mb-6">
                    <div className="text-xs font-mono uppercase text-white/80 font-bold mb-2.5 flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-purple-400" />
                      <span>Production Techniques &amp; Methodologies:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProject.techniques.map((tech, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#D7E2EA]/80 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Tools & Platforms */}
                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-[#D7E2EA]/50 uppercase mb-1.5">
                      Generative Toolchain:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-[#D7E2EA]/50 uppercase mb-1.5">
                      Platforms:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.platforms.map((plat) => (
                        <span
                          key={plat}
                          className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] font-mono text-purple-300"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Studio Production Workflow / 4 Stages Architecture */}
        <div className="mt-12">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-1">
              // Creative Process
            </div>
            <h3 className="font-kanit font-bold text-2xl sm:text-3xl text-white">
              End-to-End Generative Animation Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioPipeline.map((stage) => (
              <div
                key={stage.num}
                className="rounded-[28px] bg-[#121218] border border-white/10 p-6 flex flex-col justify-between shadow-xl relative group hover:border-white/20 transition-all"
              >
                <div>
                  <div className="font-kanit font-black text-3xl text-purple-400/80 mb-3 font-mono">
                    {stage.num}
                  </div>
                  <h4 className="font-kanit font-bold text-lg text-white mb-2 leading-snug">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed mb-6">
                    {stage.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-cyan-300">
                  {stage.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
