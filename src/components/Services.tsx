'use client';

import React from 'react';
import { SERVICES_CONTENT } from '@/lib/constants';

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
            {SERVICES_CONTENT.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_CONTENT.services.map((service, idx) => {
            const Icon = service.icon;
            // Make the first two items span larger if needed, but a standard grid is cleaner.
            // Using a bento-box style for a premium feel.
            const isWide = idx === 0 || idx === 3;
            
            return (
              <div 
                key={service.id} 
                className={`glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 ${isWide ? 'lg:col-span-2' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0B0F14] border border-[#38BDF8]/20 flex items-center justify-center mb-6 group-hover:border-[#38BDF8]/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all">
                  <Icon className="w-7 h-7 text-[#38BDF8]" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#F8FAFC] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
