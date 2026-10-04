import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D7E2EA] mb-4">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Milestones</span>
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Experience &amp; Education
          </h2>

          <p className="text-base sm:text-lg text-[#D7E2EA]/70 font-light max-w-2xl mt-4">
            Professional software engineering internship and university computer science degree credentials.
          </p>
        </div>

        {/* Dual Grid: Work Experience (Left) & University Studies (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Work Experience Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B600A8] font-semibold mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>

            {EXPERIENCE_DATA.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[32px] bg-[#121218] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/25 transition-all"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#B600A8]/10 blur-[70px] rounded-full pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#B600A8]/10 border border-[#B600A8]/30 text-xs font-mono text-[#E491DC]">
                      {exp.type}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#D7E2EA]/60">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-kanit font-bold text-2xl text-white mb-1">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 mb-4">
                    <span>{exp.company}</span>
                    <span className="text-[#D7E2EA]/40">&bull;</span>
                    <span className="flex items-center gap-1 text-xs text-[#D7E2EA]/60 font-mono font-normal">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white/80 font-medium">
                      Key Contributions:
                    </div>
                    {exp.achievements.map((ach, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/85">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D7E2EA]/40">
                  <span>Front-End &amp; UI Engineering</span>
                  <span className="text-emerald-400">Verified Experience</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>University Studies</span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] bg-[#121218] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/25 transition-all h-full"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[70px] rounded-full pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                    Undergraduate Degree
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#D7E2EA]/60">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Pakistan</span>
                  </div>
                </div>

                <h3 className="font-kanit font-bold text-2xl text-white mb-1">
                  {EDUCATION_DATA.degree}
                </h3>

                <div className="text-sm font-medium text-[#B600A8] mb-4">
                  {EDUCATION_DATA.institution}
                </div>

                <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed mb-6">
                  Comprehensive academic curriculum centered on software engineering principles, distributed systems, relational databases, data structures, network communications, and IT project governance.
                </p>

                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/80 font-medium">
                    Core Disciplines:
                  </div>
                  {EDUCATION_DATA.focusAreas.map((area, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs text-[#D7E2EA]/85">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#D7E2EA]/40">
                <span>Computer Science &amp; IT</span>
                <span className="text-cyan-400">In Progress</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
