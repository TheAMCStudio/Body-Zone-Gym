/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Dumbbell, Zap, Settings, Star } from 'lucide-react';

export default function FeaturedEquipment() {
  const eliteEquipment = [
    {
      id: "eq-1",
      name: "Hammer Strength Leg Press",
      brand: "Hammer Strength® USA",
      type: "Linear Roller Plate Loaded",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600",
      spec: "45-degree linear safety stops, 1000kg maximum loading weight capacity, ultra-stable track biomechanics."
    },
    {
      id: "eq-2",
      name: "Life Fitness Chest Press",
      brand: "Life Fitness® Insignia Series",
      type: "Independent ISO-Lateral",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
      spec: "Independent moving arms for balanced muscular volume recruitment, custom gas-assisted seats."
    },
    {
      id: "eq-3",
      name: "Assault AirBike Pro Elite",
      brand: "Assault Fitness® Pro Line",
      type: "Air Resistance Console",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600",
      spec: "High torque steel fan blade, multi-mode LCD screen, targets anaerobic endurance threshold development."
    },
    {
      id: "eq-4",
      name: "Nautilus Glute Drive",
      brand: "Nautilus® Plate Loaded",
      type: "Bio-Structural Hip Thrust",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600",
      spec: "Ergononic waist pad belts, absolute safe spine stabilization line, maximum gluteus activation."
    }
  ];

  return (
    <section 
      id="equipment" 
      className="py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="equipment-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
            <span className="font-space font-bold text-[9px] tracking-[0.25em] text-zinc-400 uppercase">
              BIOMECHANICAL PRECISION
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            IMPORTED <span className="text-[#FF1E1E]">EQUIPMENT LINE</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            We provide only authentic imported lines. Train on biomechanically optimized weight machines tailored to safeguard your joints and maximize deep fiber fatigue.
          </p>
        </div>

        {/* Equipment horizontal/vertical cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="equipment-grid">
          {eliteEquipment.map((eq, idx) => {
            return (
              <motion.div
                key={eq.id}
                id={`eq-card-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-xl overflow-hidden bg-gradient-to-b from-[#121212] via-[#0D0D0D] to-[#0A0A0A] border border-zinc-900 hover:border-[#FF1E1E]/30 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex flex-col h-full"
              >
                {/* Visual Image container with red grid overlays */}
                <div className="relative h-48 overflow-hidden bg-zinc-950">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${eq.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
                  
                  {/* Floating certification seal */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[8px] font-space font-bold tracking-widest text-[#FF1E1E] bg-black/85 border border-[#FF1E1E]/30 uppercase rounded-sm">
                      <ShieldCheck className="w-3 h-3 text-[#FF1E1E]" /> 100% IMPORTED
                    </span>
                  </div>
                </div>

                {/* Content block */}
                <div className="p-6 flex flex-col grow justify-between text-left space-y-4">
                  <div className="space-y-1">
                    <span className="font-space text-[8px] font-black uppercase tracking-widest text-zinc-500 block">
                      {eq.brand}
                    </span>
                    <h3 className="font-display font-extrabold text-white text-base sm:text-lg tracking-wider group-hover:text-[#FF1E1E] transition-colors duration-300 uppercase">
                      {eq.name}
                    </h3>
                    <span className="font-space text-[9px] font-bold text-zinc-400 uppercase tracking-widest block bg-zinc-900/40 border border-zinc-900 px-2 py-0.5 rounded w-max">
                      {eq.type}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed font-semibold">
                    {eq.spec}
                  </p>

                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] uppercase font-space font-bold text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Settings className="w-3.5 h-3.5 text-zinc-650" /> BIOMECHANICAL
                    </span>
                    <span className="text-[#FF1E1E] flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#FF1E1E]" /> ELITE WORKOUT
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
