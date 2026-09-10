import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, GraduationCap, Award, Users } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'leadership'>('experience');

  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/40 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 mb-3 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Experience & Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Career & <span className="text-gradient">Education</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 rounded-full mt-3 origin-left"
          />
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`relative px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'experience' ? 'text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white glass-panel'
            }`}
          >
            {activeTab === 'experience' && (
              <motion.div
                layoutId="activeExpTab"
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Briefcase className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Work Experience ({portfolioData.experience.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`relative px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'education' ? 'text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white glass-panel'
            }`}
          >
            {activeTab === 'education' && (
              <motion.div
                layoutId="activeExpTab"
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <GraduationCap className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Education ({portfolioData.education.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`relative px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
              activeTab === 'leadership' ? 'text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white glass-panel'
            }`}
          >
            {activeTab === 'leadership' && (
              <motion.div
                layoutId="activeExpTab"
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <Users className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Positions of Responsibility ({portfolioData.leadership.length})</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">

          {/* TAB 1: WORK EXPERIENCE */}
          {activeTab === 'experience' && (
            <motion.div
              key="tab-experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 sm:pl-10 border-l-2 border-indigo-500/20 space-y-12"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.8 }}
                className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent"
              />

              {portfolioData.experience.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15,
                    type: 'spring',
                    stiffness: 90,
                    damping: 14
                  }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 90 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="absolute -left-[31px] sm:-left-[47px] top-2 w-7 h-7 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.6)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${item.current ? 'bg-cyan-400 animate-ping' : 'bg-indigo-400'}`} />
                    <div className={`absolute w-2.5 h-2.5 rounded-full ${item.current ? 'bg-cyan-400' : 'bg-indigo-400'}`} />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="p-6 sm:p-8 rounded-2xl glass-panel-interactive border border-white/10 hover:border-indigo-500/40 transition-all duration-300 space-y-4 shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-gradient-purple">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 shadow-inner">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] uppercase font-bold text-emerald-300 animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.location}</span>
                    </div>

                    <ul className="space-y-2.5 pt-2">
                      {item.description.map((desc, dIdx) => (
                        <motion.li
                          key={dIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + dIdx * 0.08 + 0.1 }}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed group/item"
                        >
                          <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                          <span>{desc}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-white/10 hover:border-indigo-500/50 hover:text-cyan-300 text-[11px] font-mono text-slate-400 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TAB 2: EDUCATION */}
          {activeTab === 'education' && (
            <motion.div
              key="tab-education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl glass-panel-interactive border border-white/10 hover:border-indigo-500/40 flex flex-col justify-between space-y-4 shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-semibold text-gradient-purple mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    {edu.details && (
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {edu.details}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300 font-mono shadow-inner">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TAB 3: POSITIONS OF RESPONSIBILITY */}
          {activeTab === 'leadership' && (
            <motion.div
              key="tab-leadership"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {portfolioData.leadership.map((lead, idx) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="p-6 sm:p-8 rounded-2xl glass-panel-interactive border border-white/10 hover:border-indigo-500/40 space-y-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{lead.role}</h3>
                      <p className="text-xs font-semibold text-cyan-400">{lead.organization}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {lead.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};
