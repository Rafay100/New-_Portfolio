import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#08080C] border-t border-white/10 pt-16 pb-12 px-5 sm:px-8 text-[#D7E2EA]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white font-black font-kanit text-sm">
                R
              </div>
              <span className="font-kanit font-bold text-xl text-white">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light max-w-md">
              Full-Stack Web Developer, AI Systems Engineer, and Creative AI Experimenter based in Karachi, Pakistan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.githubMain}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#D7E2EA] hover:text-white transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Rafay100</span>
            </a>

            <a
              href={PERSONAL_INFO.githubSecondary}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#D7E2EA] hover:text-white transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SRafay</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all hover:scale-105 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/40">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React &bull; TypeScript &bull; Tailwind &bull; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
