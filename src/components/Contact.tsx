'use client';

import React from 'react';
import { CONTACT_CONTENT } from '@/lib/constants';
import { Mail, AtSign } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#1E293B]/50 bg-gradient-to-b from-[#0B0F14]/0 to-[#05070A]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-white">
          {CONTACT_CONTENT.title}
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
          {/* Email Card */}
          <a 
            href={`mailto:${CONTACT_CONTENT.email}`}
            className="flex items-center gap-4 p-6 glass-card rounded-2xl w-full md:w-1/2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
              <Mail className="w-5 h-5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-sm text-[#64748B] mb-1">Email</p>
              <p className="text-[#F8FAFC] font-medium group-hover:text-[#38BDF8] transition-colors">
                {CONTACT_CONTENT.email}
              </p>
            </div>
          </a>
          
          {/* Twitter Card */}
          <a 
            href={`https://twitter.com/${CONTACT_CONTENT.twitter.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 glass-card rounded-2xl w-full md:w-1/2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
              <AtSign className="w-5 h-5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-sm text-[#64748B] mb-1">X / Twitter</p>
              <p className="text-[#F8FAFC] font-medium group-hover:text-[#38BDF8] transition-colors">
                {CONTACT_CONTENT.twitter}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
