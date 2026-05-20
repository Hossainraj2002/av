'use client';

import React from 'react';
import { PARTNER_CTA_CONTENT } from '@/lib/constants';

export default function PartnerCTA() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden border-[#38BDF8]/30 group">
          {/* Internal Glow Effects */}
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#2563EB]/10 to-transparent pointer-events-none group-hover:from-[#2563EB]/20 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#38BDF8]/10 to-transparent pointer-events-none group-hover:from-[#38BDF8]/20 transition-all duration-700"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white leading-tight">
              {PARTNER_CTA_CONTENT.title}
            </h2>
            <p className="text-lg md:text-xl text-[#94A3B8] mb-10 leading-relaxed max-w-2xl">
              {PARTNER_CTA_CONTENT.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUtt3laAWBiauF3EqnMJFuY2hj5w-_4uq5UTd6uAoIgfSyFQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full btn-primary font-medium text-lg text-center">
                Submit Pitch Deck
              </a>
            </div>
          </div>
          
          {/* Decorative 3D elements */}
          <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-[2px] border-[#38BDF8]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-[1px] border-[#2563EB]/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 bg-gradient-to-tr from-[#2563EB]/20 to-[#38BDF8]/20 rounded-full backdrop-blur-xl border border-[#38BDF8]/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#05070A] shadow-[inset_0_0_20px_rgba(56,189,248,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
