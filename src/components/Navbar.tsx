'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all">
            <span className="text-white font-bold text-xl font-heading leading-none tracking-tighter">A</span>
          </div>
          <span className="text-xl font-bold text-white font-heading tracking-tight">Advantage Venture</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-white/5 border border-[#1E293B] text-white text-sm font-medium hover:bg-[#2563EB]/10 hover:border-[#38BDF8]/50 transition-all"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-[#1E293B]/50 flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[#F8FAFC] hover:text-[#38BDF8] py-2 border-b border-[#1E293B]/30"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
