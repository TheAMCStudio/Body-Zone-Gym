/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Scale, Sparkles, Trophy, HelpCircle, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import { transformationsData } from '../data/gymData';

export default function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState<Record<string, boolean>>({
    'tr-1': true,
    'tr-2': true,
    'tr-3': true
  });

  const activeStory = transformationsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformationsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformationsData.length) % transformationsData.length);
  };

  const togglePhoto = (id: string) => {
    setShowAfter((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section 
      id="transformations" 
      className="py-24 bg-[#121212] relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-85 h-85 bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Panel */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="transformations-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
            <span className="font-space font-bold text-[9px] tracking-[0.25em] text-zinc-400 uppercase">
              ACTUAL METRICS PROVE
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            TRANSFORMATION <span className="text-[#FF1E1E]">STORIES</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Real local dedicated members, real certified results. Explore how structured gym biomechanics and scientific diet schedules altered physical physiques.
          </p>
        </div>

        {/* Multi-story Card Display */}
        <div className="max-w-5xl mx-auto" id="transformation-carousel">
          <div className="relative">
            
            {/* Carousel navigation triggers */}
            <div className="absolute -left-4 xl:-left-16 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-black border border-zinc-800 hover:border-[#FF1E1E] text-zinc-400 hover:text-[#FF1E1E] flex items-center justify-center cursor-pointer transition-all hover:scale-105"
                aria-label="Previous Transformation"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-black border border-zinc-800 hover:border-[#FF1E1E] text-zinc-400 hover:text-[#FF1E1E] flex items-center justify-center cursor-pointer transition-all hover:scale-105"
                aria-label="Next Transformation"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Active Story Card Frame */}
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden bg-[#0B0B0B] border border-zinc-900 shadow-[0_30px_60px_rgba(0,0,0,0.85)] p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Image Panel on Left (12 Column grid) */}
                <div className="md:col-span-5 relative" id="transformation-photo-block">
                  <div className="relative h-[340px] rounded-lg overflow-hidden border border-zinc-800/80">
                    
                    {/* Before Image */}
                    <div 
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
                        showAfter[activeStory.id] ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                      }`}
                      style={{ backgroundImage: `url(${activeStory.beforeImg})` }}
                    />

                    {/* After Image */}
                    <div 
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
                        showAfter[activeStory.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ backgroundImage: `url(${activeStory.afterImg})` }}
                    />

                    {/* Hover Tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />

                    {/* Left corner before/after label indicator */}
                    <div className="absolute bottom-4 left-4 z-10 font-space text-[10px] font-black tracking-widest text-white uppercase bg-black/85 border border-[#FF1E1E]/40 px-3 py-1.5 rounded">
                      PHOTO STATUS: {showAfter[activeStory.id] ? 'AFTER' : 'BEFORE'}
                    </div>

                    {/* Right corner toggle interactive prompt block */}
                    <button
                      onClick={() => togglePhoto(activeStory.id)}
                      className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-gradient-to-r from-[#FF1E1E] to-[#B31010] text-white text-[10px] font-space font-black tracking-widest uppercase rounded flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity hover:scale-102 cursor-pointer shadow-md"
                    >
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} /> Toggle
                    </button>
                  </div>
                </div>

                {/* Metrics Stats / Bio on Right (7 columns) */}
                <div className="md:col-span-7 space-y-6 text-left" id="transformation-metrics-block">
                  
                  {/* Category Ribbon */}
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-[#FF1E1E]/10 border border-[#FF1E1E]/30 text-[#FF1E1E]">
                      <Trophy className="w-4 h-4" />
                    </span>
                    <span className="font-space text-[10px] text-[#FF1E1E] font-black tracking-widest uppercase block animate-pulse">
                      {activeStory.achievement.toUpperCase()}
                    </span>
                  </div>

                  {/* Name and Basic profile metrics */}
                  <div>
                    <h3 className="font-display font-black text-white text-3xl tracking-wide uppercase italic">
                      {activeStory.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 font-space text-xs text-zinc-500 font-semibold">
                      <span>CLIENT AGE: {activeStory.age} SEC.</span>
                      <span className="text-[#FF1E1E]">•</span>
                      <span>DIETARY SCHEDULE: Bespoke Carb-Overload</span>
                    </div>
                  </div>

                  {/* Before/After Numeric Weight Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-zinc-900">
                    
                    <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-900/60 font-space">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black block">INITIAL RECORD</span>
                      <span className="text-xl font-bold text-zinc-400 flex items-center gap-1 mt-1">
                        <Scale className="w-4 h-4 text-zinc-500" /> {activeStory.initialWeight}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-900/60 font-space">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-black block">TRANSFORMED RECORD</span>
                      <span className="text-xl font-black text-[#FF1E1E] flex items-center gap-1 mt-1 text-glow-red">
                        <Scale className="w-4 h-4" /> {activeStory.finalWeight}
                      </span>
                    </div>

                  </div>

                  {/* Text Description of visual achievements */}
                  <div className="space-y-3 font-sans">
                    <span className="font-space text-[9px] text-zinc-500 font-bold tracking-widest uppercase block">
                      KEY OUTCOME SUMMARY:
                    </span>
                    <p className="text-sm text-zinc-300 font-normal leading-relaxed first-letter:text-[#FF1E1E] first-letter:text-2xl first-letter:font-black">
                      {activeStory.results}
                    </p>
                  </div>

                  {/* Program specifics */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
                      <span>Duration: {activeStory.timeframe}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
                      <span>Support: Personal Certified Trainer</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
