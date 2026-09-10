import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, User, MapPin, Briefcase, Sparkles, Code2 } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const jsonSnippet = `{
  "developer": "${portfolioData.personal.name}",
  "role": "${portfolioData.personal.title}",
  "location": "${portfolioData.personal.location}",
  "status": "${portfolioData.personal.availability}",
  "education": "B.E. Computer Science & Engineering",
  "focus": ["Java", "Python", "JavaScript", "React.js", "AI Tools"],
  "philosophy": "Building practical software experiences with code, AI & problem-solving"
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 mb-3 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Discover My Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Profile Card + Terminal UI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Profile Photo Spotlight Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="p-6 rounded-3xl glass-panel-interactive border border-white/10 flex flex-col sm:flex-row items-center gap-6 shadow-2xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500" />

              {/* Profile Image with Glowing Ring */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 shadow-[0_0_25px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition-all duration-500">
                  <img
                    src={portfolioData.personal.avatarUrl}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-top rounded-xl border border-slate-900 shadow-md"
                  />
                </div>

                {/* Floating Online Badge */}
                <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-slate-950/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Active</span>
                </div>
              </div>

              {/* Profile Text Meta */}
              <div className="flex flex-col gap-2 text-center sm:text-left z-10">
                <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs text-cyan-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Developer Portfolio</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs font-semibold text-gradient-purple">
                  {portfolioData.personal.title}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 font-mono text-[11px]">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {portfolioData.personal.location}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 font-mono text-[11px] text-indigo-300">
                    <Briefcase className="w-3 h-3 text-purple-400" />
                    Open to Work
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Terminal UI */}
            <div className="rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
              <div className="px-4 py-3 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    developer.json
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors text-xs flex items-center gap-1"
                  aria-label="Copy JSON code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[11px] font-mono">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-5 font-mono text-xs text-slate-300 bg-slate-950/40 overflow-x-auto leading-relaxed">
                <pre className="text-indigo-300">
                  <code>
                    {jsonSnippet}
                  </code>
                </pre>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Narrative Bio & Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {portfolioData.personal.bio.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {portfolioData.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl glass-panel-interactive flex flex-col justify-between border border-white/10 hover:border-indigo-500/40"
                >
                  <span className="text-2xl font-black text-white text-gradient">{metric.value}</span>
                  <div className="mt-2">
                    <p className="text-xs font-bold text-slate-200">{metric.label}</p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{metric.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
