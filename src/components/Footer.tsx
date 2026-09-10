import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Sparkles, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-bold text-white tracking-tight">
              {portfolioData.personal.name}
            </span>
            <p className="text-[11px] text-slate-400">
              Interactive 3D Personal Portfolio
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-400">
          {portfolioData.social.github ? (
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          ) : null}
          {portfolioData.social.linkedin ? (
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          ) : null}
          {portfolioData.social.twitter ? (
            <a
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-2"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          ) : null}
          {portfolioData.social.email ? (
            <a
              href={`mailto:${portfolioData.social.email}`}
              className="hover:text-cyan-400 transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          ) : null}
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-6">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-panel text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all hover:scale-110 active:scale-95"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
