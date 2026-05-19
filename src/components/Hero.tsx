'use client';

import React from 'react';
import { HERO_CONTENT, STATS } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#38BDF8]/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
            <span className="text-sm font-medium text-[#F8FAFC] tracking-wide">{HERO_CONTENT.label}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight md:leading-[1.1] mb-8 text-white tracking-tight"
          >
            {HERO_CONTENT.heading.split('Exchange Access')[0]}
            <span className="text-gradient-blue">Exchange Access</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {HERO_CONTENT.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full btn-primary font-medium text-lg">
              Book a Meeting
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full btn-secondary font-medium text-lg">
              Submit Pitch Deck
            </a>
          </motion.div>
        </div>

        {/* Stats / Credibility Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group">
                <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#38BDF8]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <span className="text-sm font-semibold text-[#E2E8F0]">{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
