'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1E293B] bg-[#05070A] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center">
            <span className="text-white font-bold text-xs font-heading leading-none tracking-tighter">A</span>
          </div>
          <span className="text-sm font-bold text-white font-heading tracking-tight">Advantage Venture</span>
        </div>
        
        <p className="text-sm text-[#64748B]">
          © {new Date().getFullYear()} Advantage Venture. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
