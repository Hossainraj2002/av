'use client';

import React from 'react';
import { PARTNERS } from '@/lib/constants';

export default function Partners() {
  return (
    <section id="partners" className="py-24 relative overflow-hidden border-t border-[#1E293B]/20">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] bg-[#38BDF8]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
            Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        {/* Responsive grid of partner logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {PARTNERS.map((partner, idx) => (
            <div 
              key={idx} 
              className="aspect-[4/1] w-full bg-[#05070A]/40 border border-white/5 rounded-xl shadow-[0_0_8px_rgba(255,255,255,0.02)] flex items-center justify-center p-3 hover:border-[#38BDF8]/30 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] transition-all duration-300 group"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-w-full max-h-full object-contain opacity-75 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
