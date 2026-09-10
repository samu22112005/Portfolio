import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../data/PortfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/15 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image banner */}
          <div className="relative h-64 sm:h-80 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030612] via-[#030612]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-600/80 text-white text-xs font-semibold backdrop-blur-md inline-block">
                  {project.category}
                </span>
                {project.status && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/30 border border-amber-500/50 text-amber-300 text-xs font-bold backdrop-blur-md inline-flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>{project.status}</span>
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-gradient-purple">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2 flex items-center gap-1.5 font-mono">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.fullDetails || project.description}
              </p>
            </div>

            {/* Tech Stack List */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 font-mono">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-white">Performance Benchmark</h4>
                  <p className="text-xs text-slate-300 font-mono">{project.metrics}</p>
                </div>
              </div>
            )}

            {/* Modal Footer Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl glass-panel-interactive text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                  </a>
                ) : null}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 flex items-center gap-2 hover:scale-105 transition-all"
                  >
                    <span>Launch Live Application</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
