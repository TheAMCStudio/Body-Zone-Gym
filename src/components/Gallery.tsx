/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Dumbbell, ShieldCheck, Grid } from 'lucide-react';
import { galleryData } from '../data/gymData';
import { GalleryItem } from '../types';
import GymInside1 from '../assets/images/gym_inside_1_1780606181422.png';
import GymInside2 from '../assets/images/gym_inside_2_1780606203636.png';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'weights', label: 'Strength Area' },
    { id: 'cardio', label: 'Cardio Deck' },
    { id: 'group-fitness', label: 'Combat Studio' }
  ];

  const enhancedGalleryData = galleryData.map((item) => {
    if (item.id === "g-1") {
      return { 
        ...item, 
        image: GymInside1, 
        title: "Main Bodybuilding Ground", 
        description: "Our world-class weight line featuring the 'DON'T LIE TO YOURSELF' motivation mural." 
      };
    }
    if (item.id === "g-3") {
      return { 
        ...item, 
        image: GymInside2, 
        title: "Professional Iron Arena", 
        description: "Equipped with heavy plates, racks, and the famous 'EVERY REP MATTERS' graffiti wall." 
      };
    }
    return item;
  });

  const filteredItems = selectedCategory === 'all'
    ? enhancedGalleryData
    : enhancedGalleryData.filter((item) => item.category === selectedCategory);

  return (
    <section 
      id="gallery" 
      className="py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Glow elements */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Panel */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="gallery-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
            <span className="font-space font-bold text-[9px] tracking-[0.25em] text-zinc-400 uppercase">
              VISUAL ASSURANCE
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            GALLERY <span className="text-[#FF1E1E]">ARENA</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Take a visual tour. Real photos representing our actual premium weight-lifting lines, cardiac tracks, heavy bags combat rigs, and luxury locker setups.
          </p>
        </div>

        {/* Gallery categories filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-categories-pills">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-space font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#FF1E1E] text-white border-[#FF1E1E] shadow-[0_4px_15px_rgba(255,30,30,0.25)]'
                    : 'bg-[#121212]/80 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  id={`gallery-card-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-64 rounded-xl overflow-hidden border border-zinc-900 hover:border-[#FF1E1E]/30 group transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.8)] cursor-pointer"
                >
                  {/* Photo wallpaper */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                  
                  {/* Hover icon block */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#FF1E1E] flex items-center justify-center text-white shadow-lg animate-pulse">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text descriptions overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 mt-auto text-left transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-space text-[8px] font-black uppercase tracking-widest text-[#FF1E1E] block mb-1">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="font-display font-extrabold text-white text-base tracking-wider uppercase">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[11px] text-zinc-400 font-medium leading-relaxed mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom stats banner */}
        <div className="mt-16 text-center" id="gallery-footer-action">
          <span className="font-sans text-xs text-zinc-650 flex items-center justify-center gap-1.5 uppercase font-bold">
            <ShieldCheck className="w-4 h-4 text-[#FF1E1E]" /> ALL SPACES SECURED UNDER CCTV PROTOCOLS
          </span>
        </div>

      </div>
    </section>
  );
}
