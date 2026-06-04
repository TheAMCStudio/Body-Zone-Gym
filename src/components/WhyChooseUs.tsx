/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { benefitsData } from '../data/gymData';

interface WhyChooseUsProps {
  onCtaClick: () => void;
}

export default function WhyChooseUs({ onCtaClick }: WhyChooseUsProps) {
  
  // Custom Dynamic Icon Renderer
  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Dumbbell className={className} />;
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      
      {/* Modern Carbon Diagonal Strip Asset */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Panel */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="about-heading">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-4 bg-white/5 border-l-2 border-[#FF1E1E] mb-6"
          >
            <span className="font-space font-bold text-[10px] tracking-[0.3em] text-[#FF1E1E] uppercase">
              THE GOLD STANDARD
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none"
          >
            WHY BODY ZONE <span className="text-trace-white">STANDS ALONE</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto"
          >
            We designed a workspace that completely redefines the physical training culture in Pattoki, utilizing advanced mechanics, beautiful spatial design, and elite hospitality.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div id="benefits-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              id={`benefit-card-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-8 rounded-none bg-[#121212] border-t-0 border-r-0 border-b-0 border-l-4 border-[#B8B8B8] hover:border-l-[#FF1E1E] hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.8)] group overflow-hidden"
            >
              {/* Dynamic Overlay Glowing effect */}
              <div className="absolute -inset-0.5 bg-[#FF1E1E] rounded-lg blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#FF1E1E]/5 blur-md transform translate-x-4 -translate-y-4 group-hover:bg-[#FF1E1E]/10 transition-colors" />

              <div className="space-y-6">
                {/* Custom Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 flex items-center justify-center group-hover:bg-[#FF1E1E] group-hover:border-[#FF1E1E] transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,30,30,0.5)]">
                  {renderIcon(benefit.iconName, "w-6 h-6 text-[#FF1E1E] group-hover:text-white transition-colors duration-500")}
                </div>

                {/* Text Block */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-white text-lg sm:text-xl tracking-wider uppercase group-hover:text-[#FF1E1E] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Center Action Prompter */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-zinc-950/80 border border-zinc-900 max-w-2xl">
            <div className="grow px-6 py-4 rounded-full bg-zinc-900/30 flex flex-wrap items-center justify-center gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block animate-pulse" />
                <span className="font-sans text-xs font-bold text-zinc-300 uppercase tracking-widest">WANT A GUIDED tour?</span>
              </div>
              <span className="font-sans text-xs text-zinc-500">Visit us today and receive free 1x biometric analyzer review.</span>
              <button
                onClick={onCtaClick}
                className="px-5 py-2.5 rounded-full bg-[#FF1E1E] hover:bg-white text-white hover:text-black font-display font-black text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md"
              >
                REQUEST TOUR
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
