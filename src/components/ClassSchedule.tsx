/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, User, Filter, SlidersHorizontal } from 'lucide-react';
import { scheduleData } from '../data/gymData';
import { ClassSession } from '../types';

interface ClassScheduleProps {
  onClassBookClick: (className: string) => void;
}

export default function ClassSchedule({ onClassBookClick }: ClassScheduleProps) {
  const [selectedDay, setSelectedDay] = useState<ClassSession['day']>('Monday');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const weekdays: ClassSession['day'][] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const categories = ['All', 'Strength', 'Cardio', 'MMA', 'Core'];

  // Filter schedules based on Day and Category keys
  const filteredSessions = scheduleData.filter((session) => {
    const matchesDay = session.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <section 
      id="schedule" 
      className="py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="schedule-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-4 bg-white/5 border-l-2 border-[#FF1E1E] mb-6"
          >
            <span className="font-space font-bold text-[10px] tracking-[0.3em] text-[#FF1E1E] uppercase">
              RESERVED TIMETABLE
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            CLASS <span className="text-trace-white">SCHEDULES</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Plan your physical evolution. Filter sessions dynamically by weekdays or categories to streamline your workout regime.
          </p>
        </div>

        {/* Filtering Interface Panels */}
        <div className="space-y-6 mb-10" id="schedule-filters">
          
          {/* Day Selector Ribbon (Stretches smoothly) */}
          <div className="flex overflow-x-auto pb-3 gap-2 scrollbar-none snap-x" id="schedule-day-ribbon">
            {weekdays.map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  id={`day-btn-${day}`}
                  onClick={() => setSelectedDay(day)}
                  className={`px-6 py-3.5 rounded-none text-xs font-display font-extrabold tracking-widest uppercase transition-all duration-300 snap-center shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FF1E1E] text-white shadow-[0_5px_15px_rgba(255,30,30,0.25)]'
                      : 'bg-[#121212]/80 text-zinc-400 border border-zinc-900 hover:text-white hover:border-zinc-800'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-zinc-900" id="schedule-category-ribbon">
            <div className="flex items-center gap-2 text-zinc-500 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-[#FF1E1E]" />
              <span className="font-space text-[10px] uppercase tracking-widest font-bold">Refine Category</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`cat-btn-${cat}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-space font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? 'bg-white text-black border-white'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-800'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Class Sessions Grid */}
        <motion.div 
          key={`${selectedDay}-${selectedCategory}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="classes-schedule-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session, index) => (
              <div
                key={session.id}
                id={`session-card-${session.id}`}
                className="p-6 rounded-none bg-[#121212] border-t-0 border-r-0 border-b-0 border-l-4 border-[#B8B8B8] hover:border-l-[#FF1E1E] hover:bg-[#1a1a1a] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative group overflow-hidden flex flex-col justify-between h-56"
              >
                {/* Horizontal Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-1 bg-[#FF1E1E] transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />

                {/* Top session segment */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-space text-[9px] font-black tracking-widest uppercase py-1 px-2.5 rounded bg-zinc-950 text-zinc-500 border border-zinc-900">
                      {session.category}
                    </span>
                    <span className="font-space font-semibold text-[10px] text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FF1E1E]" /> {session.time}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-white text-lg tracking-wide uppercase line-clamp-1 group-hover:text-[#FF1E1E] transition-colors">
                    {session.className}
                  </h3>
                </div>

                {/* Bottom session details */}
                <div className="border-t border-zinc-900/80 pt-4 mt-auto space-y-4">
                  <div className="flex items-center justify-between font-sans text-xs">
                    <span className="text-zinc-500 flex items-center gap-1.5 font-medium">
                      <User className="w-3.5 h-3.5 text-[#FF1E1E]" /> {session.trainer}
                    </span>
                    <span className="text-zinc-400 font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-600" /> {session.room}
                    </span>
                  </div>

                  <button
                    onClick={() => onClassBookClick(session.className)}
                    className="w-full py-2.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-300 text-[10px] font-display font-extrabold tracking-widest uppercase hover:bg-[#FF1E1E] hover:text-white hover:border-[#FF1E1E] transition-all duration-200 cursor-pointer"
                  >
                    RESERVE ENTRY slot
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center space-y-4 border border-dashed border-zinc-900 rounded-lg bg-zinc-950/20" id="schedule-empty">
              <Sparkles className="w-10 h-10 text-zinc-700 mx-auto animate-pulse" />
              <div className="space-y-1">
                <span className="font-display font-extrabold text-white text-sm uppercase tracking-wider block">No classes mapped</span>
                <span className="font-sans text-xs text-zinc-500 block">No matching sessions configured under {selectedCategory} sector for {selectedDay}.</span>
              </div>
              <button
                onClick={() => { setSelectedCategory('All'); }}
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded text-[10px] font-space font-bold tracking-widest uppercase cursor-pointer"
              >
                Clear Refinements
              </button>
            </div>
          )}
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-8 text-center" id="schedule-footer-note">
          <span className="font-sans text-[10px] text-zinc-600 uppercase font-bold tracking-wider">
            * Schedule runs regularly. Hours are subject to adjustments on National Holidays.
          </span>
        </div>
      </div>
    </section>
  );
}
