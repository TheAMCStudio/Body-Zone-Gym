/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, ArrowRight, Play, Award, Zap, Sparkles } from 'lucide-react';
import { statsData } from '../data/gymData';
import GymInside1 from '../assets/images/gym_inside_1_1780606181422.png';
import GymInside2 from '../assets/images/gym_inside_2_1780606203636.png';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onJoinClick, onExploreClick }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroBackgrounds = [
    GymInside1,
    GymInside2,
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600"
  ];

  // Auto rotate background pictures for dynamic premium feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#0B0B0B] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Cinematic Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((bgUrl, index) => (
          <div
            key={bgUrl}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-105 ${
              index === activeSlide ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ 
              backgroundImage: `url(${bgUrl})`,
            }}
          />
        ))}
        {/* Dynamic Black Vignette and Carbon Mash Overlays */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        
        {/* Red Accent Spotlight Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF1E1E]/10 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FF1E1E]/5 blur-[150px]" />
      </div>

      {/* Main Structural Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and Buttons Frame */}
          <div className="lg:col-span-8 space-y-8" id="hero-headlines">
            {/* Elite Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block py-2 px-4 bg-white/5 border-l-2 border-[#FF1E1E] mb-6"
            >
              <span className="font-space font-bold text-[10px] tracking-[0.3em] text-[#FF1E1E] uppercase flex items-center gap-1.5">
                PREMIUM FITNESS CLUB &bull; PATTOKI <Sparkles className="w-3 h-3 text-[#FF1E1E] animate-pulse" />
              </span>
            </motion.div>

            {/* Powerful Bold Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase italic leading-[0.9] text-left"
              >
                TRANSFORM <span className="text-white">YOUR BODY.</span> <br />
                <span className="text-trace-white-heavy font-black block mt-2 text-glow-red">ELEVATE YOUR LIFE.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-sans text-sm sm:text-base md:text-lg text-zinc-400 font-normal max-w-2xl leading-relaxed text-left"
              >
                Experience the pure standard of fitness in Pattoki. Train with elite imported strength lines, custom biosensitive coaching guides, and high-octane atmospheres sculpted for maximum aesthetic results.
              </motion.p>
            </div>

            {/* Custom Interactive CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-4"
              id="hero-actions"
            >
              <button
                id="hero-join-cta"
                onClick={onJoinClick}
                className="px-8 py-4 rounded-sm bg-[#FF1E1E] hover:bg-[#FF2E2E] text-white font-display text-sm font-black tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(255,30,30,0.3)] hover:shadow-[0_15px_40px_rgba(255,30,30,0.5)] cursor-pointer flex items-center gap-2 group border border-[#FF1E1E]/20"
              >
                <span>COMMENCE TRANSFORMATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
              
              <button
                id="hero-secondary-cta"
                onClick={onExploreClick}
                className="px-8 py-4 rounded-sm bg-black/40 border border-zinc-800 hover:border-[#FF1E1E]/50 text-white hover:text-[#FF1E1E] font-display text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer backdrop-blur-sm flex items-center gap-2 group hover:bg-[#121212]/50"
              >
                <span>EXPLORE THE ARENA</span>
                <Dumbbell className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 text-zinc-500 group-hover:text-[#FF1E1E]" />
              </button>
            </motion.div>
          </div>

          {/* Quick Floating Cards on Right Panel */}
          <div className="lg:col-span-4 hidden lg:block" id="hero-floating-badge">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative p-6 rounded-xl bg-black/60 border border-zinc-800/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-sm ml-auto"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FF1E1E]/10 blur-xl" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#FF1E1E]/15 border border-[#FF1E1E]/30 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#FF1E1E]" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[#FFFFFF] text-sm tracking-wider uppercase">Pattoki's Legacy</h4>
                  <span className="font-space text-xs text-zinc-500 font-medium">ESTABLISHED 2018</span>
                </div>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                "Pattoki needed a truly international standard fitness facility. Body Zone introduced authentic biomechanics, high cleanliness, and strict results tracking."
              </p>
              <div className="flex items-center justify-between border-t border-zinc-800/60 pt-4">
                <span className="font-space text-[10px] text-zinc-500 uppercase tracking-widest">OWNER & FOUNDER</span>
                <span className="font-display text-white italic font-bold text-xs tracking-wider">M. Ali Butt</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Bottom Statistics Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8 border-t border-zinc-900 pt-12 mt-12 bg-gradient-to-b from-transparent to-[#121212]/5 p-4 rounded-xl"
          id="hero-stats"
        >
          {statsData.map((stat, i) => (
            <div 
              key={stat.label} 
              id={`stat-col-${i}`}
              className="text-left border-l border-zinc-900 pl-4 md:pl-6 first:border-0"
            >
              <span className="block font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tighter leading-none">
                <span className="text-[#FF1E1E]">{stat.value.replace('+', '')}</span>{stat.value.includes('+') ? '+' : ''}
              </span>
              <span className="block font-space text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-widest font-semibold mt-1.5 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
