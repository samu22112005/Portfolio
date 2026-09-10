import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter, MapPin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/PortfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    // Simulated API submission block
    // TODO: Connect your preferred email backend provider here (e.g. EmailJS, Formspree, Resend, or custom API route)
    /*
      Example integration:
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    */

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have a project idea, contract opportunity, or technical question? Feel free to reach out directly through the contact form or via social channels.
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${portfolioData.social.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 hover:bg-indigo-950/40 border border-white/5 hover:border-indigo-500/30 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-slate-400">Direct Email</p>
                    <p className="text-xs font-semibold text-white font-mono">{portfolioData.social.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-white/5 text-slate-200">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-slate-400">Location</p>
                    <p className="text-xs font-semibold text-white">{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-slate-300 mb-3">Connect on Socials</p>
                <div className="flex items-center gap-3">
                  {portfolioData.social.github ? (
                    <a
                      href={portfolioData.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-panel-interactive text-slate-300 hover:text-white"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  ) : null}
                  {portfolioData.social.linkedin ? (
                    <a
                      href={portfolioData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-panel-interactive text-slate-300 hover:text-white"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  ) : null}
                  {portfolioData.social.twitter ? (
                    <a
                      href={portfolioData.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-panel-interactive text-slate-300 hover:text-white"
                      aria-label="Twitter Profile"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass-panel border border-white/10 space-y-5 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Contract"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold tracking-wide shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
