import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  X,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = [
    'All',
    'Automation & Dashboards',
    'AI & Agents',
    'Full-Stack & SaaS',
    'Web Apps',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#0C0C0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D7E2EA] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Featured Engineering Work</span>
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Featured Projects
          </h2>

          <p className="text-base sm:text-lg text-[#D7E2EA]/70 font-light max-w-2xl mt-4">
            Real full-stack applications, intelligent AI agent workflows, and data-driven systems built with clean architecture and modern toolchains.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg shadow-purple-900/40 scale-105'
                  : 'bg-white/5 border border-white/10 text-[#D7E2EA]/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[36px] bg-[#121218] border border-white/10 p-6 sm:p-9 flex flex-col justify-between shadow-2xl hover:border-white/25 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl ${project.gradient} blur-[75px] rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Top Bar: Category & Status Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase text-[#D7E2EA]/80">
                      {project.category}
                    </span>

                    {project.metricsBadge && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.metricsBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-kanit font-bold text-2xl sm:text-3xl text-white group-hover:text-[#D7E2EA] transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-mono text-[#B600A8] font-medium mb-4">
                    {project.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/75 leading-relaxed font-light mb-6">
                    {project.description}
                  </p>

                  {/* Problem Solved Highlight Card */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
                    <div className="text-[11px] font-mono uppercase text-white/90 font-semibold mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>The Challenge &amp; Solution:</span>
                    </div>
                    <div className="text-xs text-[#D7E2EA]/70 font-light leading-relaxed">
                      {project.problemSolved}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#B600A8] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Tech Stack & Action Links */}
                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-white/5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-[#D7E2EA]/70 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[#D7E2EA] hover:text-white font-medium text-xs font-mono transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-[#B600A8] hover:text-purple-300 transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Architecture Details &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Deep Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#121218] border border-white/20 rounded-[32px] p-6 sm:p-9 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close Project Modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D7E2EA] mb-3">
                <span>{selectedProject.category}</span>
              </div>

              <h3 className="font-kanit font-black text-2xl sm:text-3xl text-white mb-2">
                {selectedProject.title}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-[#B600A8] font-medium mb-6">
                {selectedProject.tagline}
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                <div>
                  <h4 className="font-kanit font-bold text-white uppercase tracking-wider text-xs mb-2">
                    Executive Overview
                  </h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="font-kanit font-bold text-white uppercase tracking-wider text-xs mb-1">
                    Problem &amp; Technical Solution
                  </h4>
                  <p className="text-xs text-[#D7E2EA]/75">{selectedProject.problemSolved}</p>
                </div>

                <div>
                  <h4 className="font-kanit font-bold text-white uppercase tracking-wider text-xs mb-3">
                    Full Feature Breakdown
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/85">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-kanit font-bold text-white uppercase tracking-wider text-xs mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-medium text-xs uppercase tracking-wider shadow-lg"
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs font-mono"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-mono text-[#D7E2EA]/60 hover:text-white cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
