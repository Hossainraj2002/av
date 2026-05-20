'use client';

import React from 'react';
import { NAV_LINKS, CONTACT_CONTENT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#05070A] pt-16 pb-8">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[30vh] bg-[#2563EB]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info & Social Icons */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <img src="/logolong.jpg" alt="Advantage Venture" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm mt-2">
              Empowering crypto and Web3 startups with capital, advisory support, exchange collaboration, and strategic marketing networks.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {/* X / Twitter */}
              <a 
                href={`https://x.com/${CONTACT_CONTENT.twitter.replace('@', '')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Telegram */}
              <a 
                href={`https://t.me/${CONTACT_CONTENT.telegram.replace('@', '')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.38-.49 1.04-.75 4.09-1.78 6.82-2.95 8.18-3.51 3.89-1.61 4.7-1.89 5.23-1.9.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.2z"/>
                </svg>
              </a>

              {/* Email via Gmail Web Compose */}
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_CONTENT.email}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resource Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfUtt3laAWBiauF3EqnMJFuY2hj5w-_4uq5UTd6uAoIgfSyFQ/viewform?usp=publish-editor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
                >
                  Submit Pitch Deck
                </a>
              </li>
              <li>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_CONTENT.email}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
                >
                  Support Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Disclaimer */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Disclaimer</h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Advantage Venture is a venture network and strategic consulting group. Blockchain and Web3 investments carry high volatility and financial risk. Information on this site is not financial advice.
            </p>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} Advantage Venture. All Rights Reserved.
          </p>
          <p className="text-xs text-[#64748B]">
            Empowering the Web3 ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
