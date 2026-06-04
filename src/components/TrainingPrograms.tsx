/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Flame, Timer, TrendingUp, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { programsData } from '../data/gymData';

interface TrainingProgramsProps {
  onCtaClick: () => void;
}

export default function TrainingPrograms({ onCtaClick }: TrainingProgramsProps) {
  const [selectedProg, setSelectedProg] = useState(programsData[0]);

  return (
    <section 
      id="programs" 
      className="py-24 bg-[#121212] relative overflow-hidden"
    >
      {/* Visual Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF1E1E]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FF1E1E]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="programs-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-4 bg-white/5 border-l-2 border-[#FF1E1E] mb-6"
          >
            <span className="font-space font-bold text-[10px] tracking-[0.3em] text-[#FF1E1E] uppercase">
              COACHING DECK
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            ELITE TRAINING <span className="text-trace-white">DIVISIONS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Choose your direction. Our customized training structures combine sports science, continuous motivation, and targeted movement.
          </p>
        </div>

        {/* Dynamic Split Layout: Tabs on Left, Active Program Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="programs-interactive-dashboard">
          
          {/* Tabs Menu Column (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-3" id="programs-menu">
            <span className="font-space text-[10px] text-zinc-500 font-bold uppercase tracking-widest pl-2 mb-2">
              SELECT SPECIALIZATION
            </span>
            {programsData.map((prog, index) => {
              const isSelected = selectedProg.id === prog.id;
              return (
                <button
                  key={prog.id}
                  id={`program-btn-${prog.id}`}
                  onClick={() => setSelectedProg(prog)}
                  className={`w-full text-left p-5 rounded-none border-t-0 border-r-0 border-b-0 border-l-4 transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-[#0B0B0B] border-l-[#FF1E1E] shadow-[0_5px_20px_rgba(255,30,30,0.15)]'
                      : 'bg-[#0B0B0B]/80 border-l-[#B8B8B8] hover:border-l-[#FF1E1E] hover:bg-[#121212]/80'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`block font-space text-[9px] tracking-widest font-black uppercase ${
                      isSelected ? 'text-[#FF1E1E]' : 'text-zinc-500 group-hover:text-zinc-400'
                    }`}>
                      INTENSITY: {prog.intensity}
                    </span>
                    <span className={`block font-display font-extrabold text-sm sm:text-base tracking-wider uppercase ${
                      isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                    }`}>
                      {prog.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                    isSelected ? 'text-[#FF1E1E] translate-x-1' : 'text-zinc-700 group-hover:text-zinc-500'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Highlight Detail Panel (Right) */}
          <div className="lg:col-span-8" id="program-highlight-panel">
            <motion.div
              key={selectedProg.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden bg-[#0B0B0B] border border-zinc-900 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Image Frame with dark red shadows */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${selectedProg.image})` }}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-wrap items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-1 text-[9px] font-black tracking-widest text-[#FF1E1E] bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 uppercase rounded-sm mb-1.5 animate-pulse">
                      {selectedProg.intensity.toUpperCase()} SPECIALIZATION
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase italic tracking-tight leading-none">
                      {selectedProg.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Specification Grid & Benefits */}
              <div className="p-8 space-y-8">
                
                {/* Metrics ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 px-6 rounded-lg bg-[#121212] border border-zinc-900/60 font-space text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block">DURATION</span>
                    <span className="text-sm font-black text-white flex items-center gap-1.5">
                      <Timer className="w-4 h-4 text-[#FF1E1E]" /> {selectedProg.duration}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block">INTENSITY</span>
                    <span className="text-sm font-black text-white flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-[#FF1E1E]" /> {selectedProg.intensity} TIER
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 space-y-1">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block">DEVELOPMENT LEVEL</span>
                    <span className="text-sm font-black text-[#FF1E1E] flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" /> PERFORMANCE MAXIMUM
                    </span>
                  </div>
                </div>

                {/* Narrative Description block */}
                <div className="space-y-3 font-sans text-left">
                  <h4 className="font-display font-extrabold text-sm text-zinc-300 uppercase tracking-wider">
                    {selectedProg.tagline}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                    {selectedProg.description}
                  </p>
                </div>

                {/* Bullet benefits */}
                <div className="space-y-4 text-left">
                  <h4 className="font-display font-black text-white text-xs uppercase tracking-widest">
                    EXPECTED RESULTS & TARGET METRICS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProg.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#FF1E1E] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-zinc-300 font-semibold leading-normal">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Booking action */}
                <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left space-y-1">
                    <span className="font-sans text-[10px] text-zinc-500 block uppercase font-bold">RESERVATION AVAILABLE</span>
                    <span className="font-space text-xs text-zinc-400 block font-semibold">Limited slot allocations under Head Coach</span>
                  </div>
                  <button
                    id={`book-prog-${selectedProg.id}`}
                    onClick={onCtaClick}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-gradient-to-r from-[#FF1E1E] to-[#B31010] hover:from-[#FF2E2E] hover:to-[#C31010] text-white text-xs font-display font-black tracking-widest uppercase transition-all duration-300 shadow-md cursor-pointer"
                  >
                    CONSULT FOR THIS DIVISION
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
