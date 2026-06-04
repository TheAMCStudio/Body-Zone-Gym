/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Sparkles } from 'lucide-react';
import { faqData } from '../data/gymData';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f-1"); // Open first query default

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="faq" 
      className="py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Visual glowing elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Panel */}
        <div className="text-center mb-16 space-y-4" id="faq-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
            <span className="font-space font-bold text-[9px] tracking-[0.25em] text-zinc-400 uppercase">
              REVOLUTION KNOWLEDGE
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            FREQUENTLY ASKED <span className="text-[#FF1E1E]">QUESTIONS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Clear responses to common questions. Rest assured under our high hospitality and biomechanical standards.
          </p>
        </div>

        {/* FAQ Accordions block */}
        <div className="space-y-4" id="faq-accordions-group">
          {faqData.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="rounded-lg overflow-hidden border border-zinc-90 w/85 border-zinc-900 bg-gradient-to-r from-[#121212] to-[#0D0D0D] transition-all duration-300 shadow-sm"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-zinc-900/40"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="p-1 rounded bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 text-[#FF1E1E] shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase group-hover:text-[#FF1E1E]">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4.5 h-4.5 text-[#FF1E1E] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4.5 h-4.5 text-zinc-600 shrink-0" />
                  )}
                </button>

                {/* Collapsible Answer block (AnimatePresence height) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 border-t border-zinc-950 text-left">
                        <p className="font-sans text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed pl-7 sm:pl-8 border-l-2 border-[#FF1E1E]/30">
                          {faq.answer}
                        </p>
                        <div className="mt-3 pl-7 sm:pl-8 flex items-center gap-2">
                          <span className="inline-block px-2 py-0.5 rounded bg-zinc-950 text-zinc-600 text-[8px] font-space font-black uppercase tracking-widest border border-zinc-900">
                            CATEGORY: {faq.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call-out question block */}
        <div className="mt-12 text-center" id="faq-direct-action">
          <div className="inline-block p-4 rounded bg-[#121212] border border-zinc-900 max-w-xl">
            <span className="font-sans text-xs text-zinc-400 font-medium block">
              Still have queries about rules, hours, or packages? Talk directly to our Head Desk representative via WhatsApp click.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
