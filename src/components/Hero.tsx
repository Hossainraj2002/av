'use client';

import React from 'react';
import { HERO_CONTENT } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-0 md:min-h-screen flex items-center pt-28 pb-16 md:pt-24 md:pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold font-heading leading-tight md:leading-[1.1] mb-4 md:mb-8 text-white tracking-tight"
          >
            {HERO_CONTENT.heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-[#94A3B8] mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {HERO_CONTENT.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-20"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUtt3laAWBiauF3EqnMJFuY2hj5w-_4uq5UTd6uAoIgfSyFQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full btn-primary font-medium text-base md:text-lg text-center">
              Submit Pitch Deck
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
