'use client';

import React, { useState } from 'react';
import { CONTACT_CONTENT } from '@/lib/constants';
import { Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      telegram: formData.get('telegram'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      
      if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#1E293B]/50 bg-gradient-to-b from-[#0B0F14]/0 to-[#05070A]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
          {CONTACT_CONTENT.title}
        </h2>
        <p className="text-[#94A3B8] mb-12 max-w-2xl mx-auto">
          Reach out to us directly through the form below. Whether you're pitching a project or looking for strategic partnerships, our team is ready to connect.
        </p>
        
        <div className="max-w-xl mx-auto glass-card p-8 rounded-3xl border-[#38BDF8]/20 relative overflow-hidden">
          {/* Subtle glow behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2563EB]/5 blur-[60px] pointer-events-none z-0"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6 text-left">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#F8FAFC] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="founder@startup.com"
                className="w-full bg-[#0B0F14]/80 border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="telegram" className="block text-sm font-medium text-[#F8FAFC] mb-2">
                Telegram Username
              </label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                required
                placeholder="@username"
                className="w-full bg-[#0B0F14]/80 border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#F8FAFC] mb-2">
                Message / Pitch Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-[#0B0F14]/80 border border-[#1E293B] rounded-xl px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none"
              ></textarea>
            </div>
            
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            
            {isSuccess && (
              <p className="text-green-400 text-sm">Your message has been sent successfully! We will get back to you soon.</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
