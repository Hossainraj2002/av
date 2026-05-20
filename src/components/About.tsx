'use client';

import React from 'react';
import { ABOUT_CONTENT } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-heading mb-8 !text-[#38BDF8]">
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
      </div>
    </section>
  );
}
