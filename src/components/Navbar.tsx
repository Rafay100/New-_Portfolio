import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Creative AI Lab', href: '#ai-lab', highlight: true },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0C0C]/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B600A8] to-[#7621B0] p-[1.5px] shadow-lg shadow-purple-900/30 transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0C0C0C] rounded-[10px] flex items-center justify-center">
              <span className="font-kanit font-black text-lg text-white tracking-wider">
                R<span className="text-[#B600A8]">.</span>AI
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-kanit font-bold text-base tracking-wide text-white group-hover:text-[#D7E2EA] transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400/90 font-mono tracking-wider uppercase">
                Available
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-200 ${
                link.highlight
                  ? 'text-[#B600A8] hover:text-white hover:bg-[#B600A8]/20 flex items-center gap-1.5'
                  : 'text-[#D7E2EA]/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.highlight && <Sparkles className="w-3 h-3 text-[#B600A8]" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / GitHub */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.githubMain}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200"
            title="GitHub Profile (Rafay100)"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-wider text-xs px-5 py-2.5 transition-transform duration-200 hover:scale-[1.03] active:scale-95 shadow-md"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 2px 2px 8px #7721B1',
              outline: '1.5px solid white',
              outlineOffset: '-2px',
            }}
          >
            <span>Let&apos;s Talk</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0C0C0C]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-wider font-medium py-2 px-3 rounded-lg transition-colors ${
                    link.highlight
                      ? 'text-[#B600A8] bg-[#B600A8]/10 flex items-center gap-2'
                      : 'text-[#D7E2EA] hover:bg-white/5'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-4 h-4 text-[#B600A8]" />}
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.githubMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#D7E2EA] font-mono hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>github.com/Rafay100</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0]"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
