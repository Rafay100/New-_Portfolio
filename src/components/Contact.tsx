import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectType: 'Full-Stack Web App' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-8 bg-[#0C0C0C] border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#B600A8]/10 via-[#7621B0]/10 to-[#00F0FF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D7E2EA] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Initiate Collaboration</span>
          </div>

          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Have an idea? Let&apos;s build it.
          </h2>

          <p className="text-base sm:text-lg text-[#D7E2EA]/70 font-light max-w-2xl mt-4">
            Whether you need a modern full-stack web application, an autonomous AI agent, custom process automation, or creative 3D visuals—let&apos;s discuss your project.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Channels & Socials (5 cols) */}
          <div className="lg:col-span-5 rounded-[36px] bg-[#121218] border border-white/10 p-7 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-semibold mb-3">
                // Direct Contact
              </div>
              <h3 className="font-kanit font-bold text-2xl sm:text-3xl text-white mb-4">
                Get in touch directly
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light leading-relaxed mb-8">
                I am actively seeking full-stack and AI web developer roles, high-impact freelance projects, and technical collaborations.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#B600A8]/20 text-[#B600A8] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#D7E2EA]/50 uppercase">Email Me</div>
                    <div className="text-xs sm:text-sm font-mono text-white group-hover:text-purple-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#D7E2EA]/50 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-mono text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-[#D7E2EA]/50 uppercase mb-3">
                Developer Profiles
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PERSONAL_INFO.githubMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span>Rafay100</span>
                </a>

                <a
                  href={PERSONAL_INFO.githubSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>SRafay</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-[36px] bg-[#121218] border border-white/10 p-7 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 min-h-[400px]"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-kanit font-bold text-2xl text-white">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light max-w-md leading-relaxed">
                  Thank you for reaching out, {formData.name}. Rafay has received your project inquiry and will reply to <span className="text-white font-mono">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '', projectType: 'Full-Stack Web App' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
                  // Project Inquiry Form
                </div>
                <h3 className="font-kanit font-bold text-2xl text-white mb-6">
                  Send a Direct Project Brief
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#D7E2EA]/70 uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#0A0A0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#D7E2EA]/70 uppercase mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full bg-[#0A0A0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#D7E2EA]/70 uppercase mb-1.5">
                    Project Focus
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0A0A0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#B600A8] font-light"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web Application (Next.js / FastAPI)</option>
                    <option value="Autonomous AI Agent">Autonomous AI Agent / Workflow Automation</option>
                    <option value="KPI / Custom Dashboard">KPI / Custom Dashboard (Airtable / Postgres)</option>
                    <option value="Creative AI 3D Animation">Creative AI 3D Content / Animation</option>
                    <option value="Full-Time / Internship Role">Full-Time / Contract Engineering Role</option>
                    <option value="Other">Other Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#D7E2EA]/70 uppercase mb-1.5">
                    Project Details or Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, timeline, or engineering requirements..."
                    className="w-full bg-[#0A0A0E] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full text-white font-medium uppercase tracking-wider text-xs sm:text-sm py-4 transition-transform duration-200 hover:scale-[1.01] active:scale-95 shadow-xl cursor-pointer disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 2px 2px 10px #7721B1',
                    outline: '2px solid white',
                    outlineOffset: '-2px',
                  }}
                >
                  {isSubmitting ? (
                    <span>Dispatching Brief...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
