import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layers } from 'lucide-react';
import { Project } from '../data/PortfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
    setLightPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="h-full flex"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full rounded-2xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between group relative transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        {/* Dynamic Cursor Light Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20"
          style={{
            background: `radial-gradient(600px circle at ${lightPos.x}% ${lightPos.y}%, rgba(129, 140, 248, 0.15), transparent 40%)`,
          }}
        />

        {/* Card Media Preview Header */}
        <div className="relative h-52 overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Category & Status Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-cyan-300">
              {project.category}
            </span>
            {project.status && (
              <span className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[10px] uppercase font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>{project.status}</span>
              </span>
            )}
          </div>

          {/* Quick Metrics Tag */}
          {project.metrics && (
            <div className="absolute bottom-3 left-3 right-3 px-3 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md border border-white/5 text-[11px] font-mono text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
              <span className="truncate">{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
              {project.title}
            </h3>
            <p className="text-xs font-semibold text-gradient-purple mt-0.5 mb-2">
              {project.tagline}
            </p>
            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Pills */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-indigo-950/50 border border-indigo-500/20 text-[11px] font-mono text-indigo-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 z-10">
              <button
                onClick={() => onOpenDetails(project)}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline"
              >
                <span>View Details</span>
                <Layers className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 border border-indigo-400/30 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
                    aria-label="Live Demo Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
