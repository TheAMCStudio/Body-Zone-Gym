/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/gymData';
import { Testimonial } from '../types';

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#121212] relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="testimonials-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
            <span className="font-space font-bold text-[9px] tracking-[0.25em] text-zinc-400 uppercase">
              COMMUNITY VOICE
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            MEMBER <span className="text-[#FF1E1E]">VERDICTS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Read authentic reviews from Pattoki's prominent state residents, busy professionals, and dedicated athletes who have forged their physical strength here.
          </p>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonialsData.map((test, idx) => {
            return (
              <motion.div
                key={test.id}
                id={`test-card-${test.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-lg bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-[#121212] border border-zinc-900 hover:border-[#FF1E1E]/25 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.8)] relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Floating quote watermark */}
                <div className="absolute top-6 right-6 text-zinc-900 group-hover:text-[#FF1E1E]/5 transition-colors duration-500 pointer-events-none">
                  <Quote className="w-20 h-20 transform scale-x-[-1]" />
                </div>

                <div className="space-y-6 text-left relative z-10">
                  {/* Rating Stars Bar */}
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 text-[#FF1E1E] fill-[#FF1E1E]" />
                    ))}
                  </div>

                  <blockquote className="font-sans text-sm text-zinc-300 leading-relaxed font-semibold italic">
                    "{test.quote}"
                  </blockquote>
                </div>

                {/* Avatar Profile Footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-900/80 mt-6 text-left relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#FF1E1E]/20 shrink-0 bg-zinc-900">
                    <img 
                      src={test.avatar} 
                      alt={test.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-white text-sm tracking-wide uppercase">
                      {test.name}
                    </h4>
                    <span className="font-space text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
                      {test.role}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Brand rating aggregate widget */}
        <div className="mt-16 text-center" id="testimonials-aggregate-rating">
          <div className="inline-flex items-center gap-3 py-3 px-6 rounded-full bg-[#0B0B0B] border border-zinc-900 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-sans text-xs text-zinc-400 font-bold uppercase tracking-wider">
              GOOGLE REVIEWS AGGREGATE RATING: <span className="text-white">4.9 / 5.0</span> (Based on 140+ Reviews)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
