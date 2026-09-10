import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles } from 'lucide-react';
import { portfolioData, Project } from '../data/PortfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const categories = ['All', '3D Web', 'Fullstack', 'Creative Tech', 'Mobile App'] as const;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Selected <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeCategory === cat
                  ? 'text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white glass-panel'
                }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeProjectTab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
