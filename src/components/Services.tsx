'use client';

import React from 'react';
import { SERVICES_CONTENT } from '@/lib/constants';

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 border-t border-[#1E293B]/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
            {SERVICES_CONTENT.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SERVICES_CONTENT.services.map((service) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={service.id} 
                className="bg-[#0B0F14]/40 border border-white/5 p-8 rounded-2xl flex flex-col group hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#1E1B4B]/80 border border-[#8B5CF6]/30 flex items-center justify-center mb-6 text-[#A78BFA] group-hover:bg-[#2E1065] group-hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#F8FAFC] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
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
