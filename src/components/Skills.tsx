import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench, Sparkles, Brain, Code2, FileCode, Palette, Cpu, Zap, Cloud, GitBranch, Globe, CheckCircle2, Layers } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';

// Dynamic icon resolver helper for technology items
const getTechIcon = (iconName?: string) => {
  const props = { className: "w-3.5 h-3.5" };
  switch (iconName) {
    case 'Code2': return <Code2 {...props} className="w-3.5 h-3.5 text-cyan-400" />;
    case 'FileCode': return <FileCode {...props} className="w-3.5 h-3.5 text-yellow-400" />;
    case 'Palette': return <Palette {...props} className="w-3.5 h-3.5 text-pink-400" />;
    case 'Sparkles': return <Sparkles {...props} className="w-3.5 h-3.5 text-purple-400" />;
    case 'Cpu': return <Cpu {...props} className="w-3.5 h-3.5 text-emerald-400" />;
    case 'Server': return <Server {...props} className="w-3.5 h-3.5 text-indigo-400" />;
    case 'Zap': return <Zap {...props} className="w-3.5 h-3.5 text-amber-400" />;
    case 'Cloud': return <Cloud {...props} className="w-3.5 h-3.5 text-sky-400" />;
    case 'GitBranch': return <GitBranch {...props} className="w-3.5 h-3.5 text-orange-400" />;
    case 'Globe': return <Globe {...props} className="w-3.5 h-3.5 text-cyan-300" />;
    default: return <CheckCircle2 {...props} className="w-3.5 h-3.5 text-indigo-400" />;
  }
};

// Category icon resolver
const getCategoryIcon = (iconName: string) => {
  const props = { className: "w-5 h-5" };
  switch (iconName) {
    case 'Layout': return <Layout {...props} className="w-5 h-5 text-cyan-400" />;
    case 'Server': return <Server {...props} className="w-5 h-5 text-purple-400" />;
    case 'Wrench': return <Wrench {...props} className="w-5 h-5 text-indigo-400" />;
    case 'Sparkles': return <Sparkles {...props} className="w-5 h-5 text-amber-400" />;
    case 'Brain': return <Brain {...props} className="w-5 h-5 text-emerald-400" />;
    default: return <Layers {...props} className="w-5 h-5 text-cyan-400" />;
  }
};

export const Skills: React.FC = () => {
  const categories = portfolioData.skillCategories || [];

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/50 overflow-hidden">
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="relative flex flex-col items-center text-center mb-16">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 uppercase tracking-widest mb-3 inline-block shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            MY SKILLS
          </motion.span>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills I <span className="text-gradient">Work With</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed"
          >
            A curated set of tools and technologies I use to turn ideas into functional, engaging experiences.
          </motion.p>

          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />

          {/* Floating Handwritten/Accent Note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="hidden lg:flex items-center gap-1.5 text-xs text-cyan-300 font-mono tracking-wide bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md absolute right-4 top-2 shadow-lg shadow-cyan-500/10 cursor-default hover:scale-105 transition-transform"
          >
            <span>Always learning ✦</span>
          </motion.div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`col-span-12 md:col-span-6 ${cat.colSpanDesktop} p-6 sm:p-7 rounded-3xl glass-panel-interactive border border-white/10 hover:border-indigo-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-xl hover:shadow-indigo-500/10`}
            >
              {/* Subtle Ambient Hover Sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />

              <div>
                {/* Header: Icon & Category Title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300 shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                {/* Category One-Line Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal mb-5">
                  {cat.description}
                </p>

                {/* Technology Items / Compact Chips */}
                {cat.isPillsOnly ? (
                  /* Compact Tag Pills for Core Strengths */
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.items.map((item, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/25 text-xs font-mono text-indigo-300 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-indigo-900/60 transition-all cursor-default shadow-sm flex items-center gap-2"
                      >
                        {item.imageIcon && (
                          <img
                            src={item.imageIcon}
                            alt={item.name}
                            className="w-4 h-4 object-contain"
                          />
                        )}
                        <span>{item.name}</span>
                      </motion.span>
                    ))}
                  </div>
                ) : (
                  /* Compact Icon + Name Chips for Tech Stack */
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-indigo-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all flex items-center gap-2.5 group/chip cursor-default shadow-md hover:shadow-indigo-500/20"
                      >
                        {item.imageIcon ? (
                          <img
                            src={item.imageIcon}
                            alt={item.name}
                            className="w-5 h-5 object-contain group-hover/chip:scale-110 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(99,102,241,0.4)]"
                          />
                        ) : (
                          getTechIcon(item.iconName)
                        )}
                        <span className="font-sans text-xs font-semibold">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Quote Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-xs sm:text-sm font-mono italic text-slate-400 tracking-wide flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-indigo-500/50" />
            <span>"Not just tools, but a mindset to keep learning."</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-indigo-500/50" />
          </p>
        </motion.div>

      </div>
    </section>
  );
};
