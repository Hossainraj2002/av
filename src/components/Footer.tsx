'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1E293B] bg-[#05070A] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center group">
          <img src="/logolong.jpg" alt="Advantage Venture" className="h-10 md:h-12 w-auto object-contain" />
        </div>
        
        <p className="text-sm text-[#64748B]">
          © {new Date().getFullYear()} Advantage Venture. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
