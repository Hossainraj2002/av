'use client';

import React from 'react';
import { ABOUT_CONTENT } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-white">
              {ABOUT_CONTENT.title}
            </h2>
            <div className="space-y-6">
              {ABOUT_CONTENT.paragraphs.map((para, idx) => (
                <p key={idx} className="text-lg text-[#94A3B8] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            {/* Premium 3D Abstract Representation */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/20 to-[#38BDF8]/20 rounded-3xl transform rotate-3 glass-card blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-[#1E293B] to-[#0B0F14] rounded-3xl transform -rotate-3 border border-[#38BDF8]/30 glass-card flex items-center justify-center overflow-hidden">
                <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#38BDF8]/10 via-transparent to-transparent animate-spin-slow"></div>
                <div className="w-32 h-32 border border-[#38BDF8]/30 flex items-center justify-center bg-[#05070A]/80 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.15)] rounded-full p-4 z-10">
                  <img src="/logo.jpg" alt="Advantage Venture Logo" className="w-full h-full object-contain rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
