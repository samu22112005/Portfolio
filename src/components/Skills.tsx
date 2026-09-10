import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, FileCode, Palette, Box, Sparkles, Layers, Cpu, Server, Database, Cloud, GitBranch, Workflow, Zap, Wrench } from 'lucide-react';
import { portfolioData, Skill } from '../data/PortfolioData';

// Dynamic icon resolver helper
const getSkillIcon = (iconName: string) => {
  const props = { className: "w-5 h-5" };
  switch (iconName) {
    case 'Code2': return <Code2 {...props} />;
    case 'Layout': return <Layout {...props} />;
    case 'FileCode': return <FileCode {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'Box': return <Box {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Server': return <Server {...props} />;
    case 'Database': return <Database {...props} />;
    case 'Cloud': return <Cloud {...props} />;
    case 'GitBranch': return <GitBranch {...props} />;
    case 'Workflow': return <Workflow {...props} />;
    case 'Zap': return <Zap {...props} />;
    default: return <Wrench {...props} />;
  }
};

export const Skills: React.FC = () => {
  const categories = ['All', 'Frontend', 'Backend & Cloud', 'AI & Core CS', 'Tools & Frameworks'] as const;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills = selectedCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 mb-3"
          >
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${selectedCategory === cat
                  ? 'text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white glass-panel'
                }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl glass-panel-interactive flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow accent bar on card top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-400">
                      {skill.category.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="font-semibold text-slate-100 text-sm group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Skill Level Progress Indicator */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-mono">
                    <span>Proficiency</span>
                    <span className="text-cyan-300 font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full shadow-[0_0_8px_#06b6d4]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
