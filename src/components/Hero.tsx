import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, FolderGit2, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';
import { HeroScene } from './3d/HeroScene';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Column: Headline & Hero Text */}
        <motion.div
          className="lg:col-span-6 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 w-max backdrop-blur-md shadow-lg shadow-indigo-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium tracking-wide">{portfolioData.personal.availability}</span>
          </motion.div>

          {/* Main Title & Staggered Tagline */}
          <div className="space-y-3">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Hi, I'm <br />
              <span className="text-gradient">{portfolioData.personal.name}</span>
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-gradient-purple tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {portfolioData.personal.title}
            </motion.h2>
          </div>

          {/* Tagline Description */}
          <motion.p
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {portfolioData.personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/40 flex items-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore Projects</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-2xl glass-panel-interactive text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Quick Stats Banner */}
          <motion.div
            className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {portfolioData.metrics.slice(0, 3).map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-black text-white">{metric.value}</span>
                <span className="text-xs text-slate-400">{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Centerpiece Canvas */}
        <motion.div
          className="lg:col-span-6 w-full h-[450px] lg:h-[580px] relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          {/* Glass frame container behind 3D canvas */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-900/20 via-slate-900/40 to-cyan-900/20 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
            <HeroScene />
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-indigo-300 transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
      >
        <a href="#about" aria-label="Scroll to About Section">
          <ArrowDown className="w-5 h-5 text-indigo-400" />
        </a>
      </motion.div>
    </section>
  );
};
