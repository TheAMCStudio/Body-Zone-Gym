/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Pre-configured localized WhatsApp message
  const whatsappNumber = "923004567890"; // Authentic standard representation number
  const messageText = encodeURIComponent("Salaam! I visited the Body Zone Gym & Fitness Center Pattoki website. I am highly interested in registering. Can you please share the latest membership package details and timing slots?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40" id="floating-actions-container">
      
      {/* Scroll to Top Trigger (AnimatePresence) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            initial={{ scale: 0.8, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-zinc-950 hover:bg-[#FF1E1E] text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-900 hover:border-[#FF1E1E] transition-colors cursor-pointer shadow-lg outline-none active:scale-95"
            aria-label="Scroll Back To Top"
            id="back-to-top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.4)] cursor-pointer group hover:scale-105 active:scale-95 transition-transform"
        aria-label="Direct WhatsApp Contact"
        id="floating-whatsapp-bubble"
      >
        {/* Pulsing Outer rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 -z-10" />
        
        <MessageCircle className="w-7 h-7" />

        {/* Hover label tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-black border border-zinc-900 text-white text-[10px] font-space font-bold uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Chat With Head Desk
        </span>
      </motion.a>

    </div>
  );
}
