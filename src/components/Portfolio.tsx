'use client';

import React from 'react';
import { PORTFOLIO } from '@/lib/constants';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden border-t border-[#1E293B]/20 bg-gradient-to-b from-[#05070A]/0 to-[#0B0F14]/20">
      {/* Background stars / glowing space aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 !text-[#38BDF8]">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        {/* Responsive grid of portfolio logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto z-10 relative">
          {PORTFOLIO.map((project, idx) => (
            <div 
              key={idx} 
              className="aspect-[4/1] w-full moving-glow-border rounded-xl flex items-center justify-center overflow-hidden group shadow-[0_0_15px_rgba(56,189,248,0.05)]"
            >
              <img 
                src={project.logo} 
                alt={`${project.name} logo`} 
                className="w-full h-full object-contain p-1 opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Globe / Planet Graphic at the bottom (matching screenshot) */}
      <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#38BDF8]/20 via-[#2563EB]/10 to-transparent blur-md"></div>
        {/* Border / Atmosphere */}
        <div className="absolute inset-0 rounded-full border border-[#38BDF8]/20 shadow-[0_0_50px_rgba(56,189,248,0.25)]"></div>
        {/* Grid pattern (representing lines of longitude/latitude) */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px), linear-gradient(to right, rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.08) 1px, transparent 1px)',
          backgroundSize: '12px 12px, 32px 32px, 32px 32px',
          borderRadius: '50%'
        }}></div>
      </div>
    </section>
  );
}
