'use client';

import React from 'react';

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#05070A]" />
      
      {/* 3D Grid Layer */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Radial Blue/Cyan Glow (Top Center) */}
      <div className="glow-orb top-[-20%] left-[50%] translate-x-[-50%] w-[60vw] h-[60vh] bg-[#2563EB]/10" />
      <div className="glow-orb top-[-10%] left-[50%] translate-x-[-50%] w-[40vw] h-[40vh] bg-[#38BDF8]/15" />
      
      {/* Floating Orbs for Subtle Motion */}
      <div className="glow-orb top-[20%] left-[10%] w-[30vw] h-[30vh] bg-[#2563EB]/5 animate-float" />
      <div className="glow-orb bottom-[10%] right-[10%] w-[40vw] h-[40vh] bg-[#38BDF8]/5 animate-float-delayed" />
      
      {/* Deep Navy Gradient Overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/40 via-[#05070A]/80 to-[#05070A]" />
    </div>
  );
}
