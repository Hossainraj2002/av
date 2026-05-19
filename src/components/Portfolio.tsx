'use client';

import React, { useState } from 'react';
import { PARTNERS } from '@/lib/constants';

const LogoCard = ({ partner }: { partner: { name: string, logo: string } }) => {
  const [imgError, setImgError] = useState(false);

  // Generate initials for fallback
  const initials = partner.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="glass-card aspect-[3/2] flex items-center justify-center p-6 rounded-2xl group cursor-pointer hover:border-[#38BDF8]/40 hover:bg-[#1E293B]/40 transition-all duration-300">
      {!imgError ? (
        <img 
          src={partner.logo} 
          alt={`${partner.name} logo`} 
          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 filter grayscale group-hover:grayscale-0"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E293B] to-[#0B0F14] border border-[#38BDF8]/20 flex items-center justify-center">
            <span className="text-[#F8FAFC] font-bold font-heading">{initials}</span>
          </div>
          <span className="text-xs font-medium tracking-wider text-[#94A3B8] group-hover:text-[#38BDF8]">{partner.name}</span>
        </div>
      )}
    </div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background ambient glow specific to portfolio */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
            Partners & Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto rounded-full mb-8"></div>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
            Proudly supporting and partnering with innovative projects across the Web3 ecosystem.
          </p>
        </div>

        {/* 3 cols on mobile, 4 cols on tablet/desktop */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PARTNERS.map((partner, idx) => (
            <LogoCard key={idx} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
