import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo Pill */}
        <motion.a
          href="#hero"
          className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel group transition-all hover:border-indigo-500/40 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img
              src={portfolioData.personal.avatarUrl}
              alt={portfolioData.personal.name}
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
          <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {portfolioData.personal.name}
          </span>
        </motion.a>

        {/* Desktop Nav Links */}
        <motion.nav
          className={`pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${scrolled ? 'glass-panel shadow-lg shadow-black/40' : 'bg-slate-900/40 backdrop-blur-md border border-white/5'
            }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-indigo-600/30 border border-indigo-400/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </motion.nav>

        {/* Action Button & Mobile Toggle */}
        <motion.div
          className="pointer-events-auto flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {portfolioData.social.resume ? (
            <a
              href={portfolioData.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : null}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full glass-panel text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-3 p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            {portfolioData.social.resume ? (
              <div className="pt-2 border-t border-white/10 flex gap-2">
                <a
                  href={portfolioData.social.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-md shadow-indigo-600/30"
                >
                  Download Resume
                </a>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
