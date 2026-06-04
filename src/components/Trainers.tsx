/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Star, Award, Clock, Sparkles, Check, X, ShieldAlert, Activity, ArrowRight, Dumbbell } from 'lucide-react';
import { trainersData } from '../data/gymData';
import { Trainer } from '../types';
import LeadTrainersImg from '../assets/images/gym_trainers_1780606223605.png';

interface EnrichedDetail {
  philosophy: string;
  awards: string[];
  schedule: string;
  successRate: string;
}

const enrichedDetails: Record<string, EnrichedDetail> = {
  "t-hamza": {
    philosophy: "Mechanical tension is the ultimate driver of strength and fiber growth. Respect the progression, track every set.",
    awards: ["1st Place Classic Bodybuilding Champion 2021", "Certified Biomechanical Strength Coach (L3)", "Olympic Barbell Performance Mentor"],
    schedule: "Mon / Wed / Fri: 06:00 AM - 12:00 PM & 05:00 PM - 09:00 PM",
    successRate: "98.4% Success Ratio"
  },
  "t-ayesha": {
    philosophy: "Symmetry is built from postural precision. Form and stabilization define true explosive endurance.",
    awards: ["Master Certified Functional Trainer (REPS)", "L3 Advanced Sports Nutrition Specialist", "Corrective Posture Alignment Expert"],
    schedule: "Tue / Thu / Sat: 07:00 AM - 11:30 AM & 04:00 PM - 08:30 PM",
    successRate: "99.1% Success Ratio"
  },
  "t-sufyan": {
    philosophy: "The barbell is an honest evaluator. Perfect your kinematics, stay disciplined, and the load will follow.",
    awards: ["Gold Medalist Punjab Powerlifting Cup 2023", "Certified Kettlebell Authority Practitioner", "Joint & Ligament Hypertrophy Safety Specialist"],
    schedule: "Tue / Thu / Sat: 05:00 PM - 10:00 PM",
    successRate: "97.8% Success Ratio"
  },
  "t-sheraz": {
    philosophy: "Metabolic rate optimization is clean food chemistry combined with targeted lactic thresholds.",
    awards: ["Certified Weight Management Nutritionist", "Advanced Metabolic Circuit Specialist", "5000+ Active Client Transformation Logs"],
    schedule: "Mon / Wed / Sat: 08:30 AM - 01:00 PM & 04:00 PM - 08:30 PM",
    successRate: "96.5% Success Ratio"
  }
};

interface TrainersProps {
  onBookTrainer?: (trainerName: string) => void;
}

export default function Trainers({ onBookTrainer }: TrainersProps) {
  const [activeTrainerModal, setActiveTrainerModal] = useState<Trainer | null>(null);

  const handleBookSessionClick = (trainerName: string) => {
    if (onBookTrainer) {
      onBookTrainer(trainerName);
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveTrainerModal(null);
  };

  return (
    <section 
      id="trainers" 
      className="py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Visual background gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF1E1E]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FF1E1E]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Geometric Balance alignment */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="trainers-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-4 bg-white/5 border-l-2 border-[#FF1E1E] mb-2"
          >
            <span className="font-space font-bold text-[10px] tracking-[0.3em] text-[#FF1E1E] uppercase flex items-center justify-center gap-1.5">
              CERTIFIED INTELLECT DECK <Sparkles className="w-3 h-3 text-[#FF1E1E] animate-pulse" />
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tighter text-white uppercase italic leading-none">
            EXPERT <span className="text-trace-white">MENTORS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Train under licensed sports science professionals. No amateurs. Our coaches draft strict target calculations to push your physical limits safely.
          </p>
        </div>

        {/* Gym Leadership & Head Coaches Spotlight (Requested 4th Picture) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-zinc-950 border border-zinc-900 rounded-none overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          id="gym-leadership-spotlight"
        >
          <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-[#FF1E1E] to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image section with red glowing backdrop */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[450px] overflow-hidden group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${LeadTrainersImg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-950" />
              <div className="absolute top-4 left-4 bg-zinc-950/90 border border-[#FF1E1E]/40 px-3 py-1 text-[8px] font-space font-black tracking-widest text-[#FF1E1E] uppercase">
                HEAD OFFICERS & FOUNDERS
              </div>
            </div>

            {/* Typography sections */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center space-y-6 text-left relative">
              <div className="space-y-2">
                <span className="font-space font-black text-xs text-[#FF1E1E] tracking-widest uppercase block">
                  BODY ZONE LEADERSHIP & DIRECTORS
                </span>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase leading-none italic">
                  COACH YASIR & <br className="hidden sm:block" />
                  <span className="text-trace-white">COACH SHAKEEL</span>
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                As the executive heads of body culture and personal trainers in chief at Body Zone Gym Pattoki, we welcome you to our world-class iron facility. Together, we engineer strict biomechanical programs designed to craft robust skeletal and symmetrical builds. Our mission is delivering top-tier performance for every single member.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-zinc-900 py-4 font-space">
                <div>
                  <span className="text-[9px] text-zinc-500 uppercase block tracking-wider">Active Division</span>
                  <span className="text-xs text-white font-bold uppercase block mt-1">PRO ATHLETIC CONDITIONING</span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 uppercase block tracking-wider">Client Portfolio</span>
                  <span className="text-xs text-[#FF1E1E] font-bold uppercase block mt-1">1,000+ TRAINED BODIES</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleBookSessionClick("Coaches Yasir & Shakeel")}
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-none bg-[#FF1E1E] hover:bg-[#E01313] text-white font-display text-xs font-black tracking-widest uppercase transition-all duration-300 transform cursor-pointer group shadow-[0_4px_20px_rgba(255,30,30,0.25)] hover:shadow-[0_4px_30px_rgba(255,30,30,0.45)]"
                >
                  <span>CONSULT WITH GYM DIRECTORS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trainers Dynamic Reveals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="trainers-cards-viewport">
          {trainersData.map((trainer, idx) => {
            const enriched = enrichedDetails[trainer.id] || {
              philosophy: "Ready to push elite boundaries.",
              awards: ["Elite Club Certified"],
              schedule: "Flexible hours",
              successRate: "Premium Success Std."
            };

            return (
              <motion.div
                key={trainer.id}
                id={`trainer-card-${trainer.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative h-[480px] w-full bg-zinc-950 border-t-0 border-r-0 border-b-0 border-l-4 border-l-zinc-800 hover:border-l-[#FF1E1E] transition-all duration-500 ease-out group overflow-hidden flex flex-col justify-end shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
              >
                {/* 1. Card Image Frame */}
                <div className="absolute inset-0 z-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${trainer.image})` }}
                  />
                  {/* Cinematic shadow overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-[#0B0B0B] group-hover:via-[#0B0B0B]/90 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[#FF1E1E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Years Experience Floating Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-[8px] font-space font-black tracking-widest text-[#FF1E1E] bg-black/90 border border-[#FF1E1E]/30 uppercase rounded-none">
                    <Star className="w-2.5 h-2.5 fill-[#FF1E1E] text-[#FF1E1E]" /> {trainer.experience.toUpperCase()}
                  </span>
                </div>

                {/* Permanent Instagram Access */}
                <a
                  href={trainer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/95 hover:bg-[#FF1E1E] text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-900 hover:border-[#FF1E1E]/30 transition-all cursor-pointer shadow-md rounded-none"
                  aria-label={`${trainer.name} Instagram profile`}
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* 2. Content Container */}
                <div className="relative z-10 p-6 flex flex-col justify-end text-left w-full h-full select-none">
                  {/* This wrapper stays static and shifts up slightly on hover */}
                  <div className="transition-transform duration-500 ease-out translate-y-0 group-hover:-translate-y-4">
                    <span className="font-space text-[9px] font-black tracking-widest text-[#FF1E1E] uppercase block mb-1">
                      {trainer.role}
                    </span>
                    <h3 className="font-display font-bold text-white text-xl tracking-wide group-hover:text-[#FF1E1E] transition-colors duration-300">
                      {trainer.name}
                    </h3>
                  </div>

                  {/* Revealed Block: Bio, Specializations and Call-to-actions */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-[250px] group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden space-y-4 pt-1">
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal">
                      {trainer.bio}
                    </p>

                    {/* Compact Specs list */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {trainer.specialties.slice(0, 2).map((spec, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-[9px] font-sans font-medium text-zinc-300 rounded-none uppercase tracking-wide"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action CTAs requested */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2" id={`actions-${trainer.id}`}>
                      <button
                        onClick={() => handleBookSessionClick(trainer.name)}
                        className="py-2.5 bg-[#FF1E1E] hover:bg-[#FF2E2E] text-white text-[9px] font-space font-black tracking-widest uppercase transition-all shadow-md text-center rounded-none cursor-pointer"
                      >
                        BOOK SESSION
                      </button>
                      <button
                        onClick={() => setActiveTrainerModal(trainer)}
                        className="py-2.5 bg-transparent hover:bg-white hover:text-black border border-white/20 text-white text-[9px] font-space font-black tracking-widest uppercase transition-all text-center rounded-none cursor-pointer"
                      >
                        FULL PROFILE
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Consultation Bottom Banner */}
        <div className="mt-16 text-center border-t border-zinc-900 pt-10" id="trainers-career-action">
          <p className="font-sans text-xs text-zinc-500 font-medium max-w-lg mx-auto">
            Ready to be coached by one of our professionals? Book an elite 1-on-1 consultation today to schedule your dynamic target evaluation.
          </p>
        </div>

      </div>

      {/* 3. Detailed Full Profile Modal (AnimatePresence) */}
      <AnimatePresence>
        {activeTrainerModal && (() => {
          const t = activeTrainerModal;
          const ed = enrichedDetails[t.id] || {
            philosophy: "Ready to push performance boundaries.",
            awards: ["Elite Club Certified"],
            schedule: "Flexible hours",
            successRate: "95% Success Rate"
          };

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-4xl bg-[#0B0B0B] border border-[#FF1E1E]/30 shadow-[0_30px_70px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto rounded-none relative grid grid-cols-1 md:grid-cols-12 text-left"
                id="trainer-profile-modal"
              >
                {/* Close Button Trigger */}
                <button
                  onClick={() => setActiveTrainerModal(null)}
                  className="absolute top-4 right-4 z-40 w-10 h-10 bg-black/90 hover:bg-[#FF1E1E] text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-zinc-900 hover:border-[#FF1E1E]/30 cursor-pointer"
                  aria-label="Close Profile Dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Photo Column (5 cols) */}
                <div className="md:col-span-5 bg-zinc-950 relative h-72 md:h-auto min-h-[350px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${t.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[8px] font-space font-black tracking-widest text-[#FF1E1E] bg-[#FF1E1E]/10 border border-[#FF1E1E]/30 uppercase rounded-none">
                      <Star className="w-2.5 h-2.5 fill-[#FF1E1E]" /> {t.experience.toUpperCase()}
                    </span>
                    <h4 className="font-display font-bold text-white text-lg tracking-wide bg-black/85 px-3 py-1 inline-block uppercase">
                      {ed.successRate}
                    </h4>
                  </div>
                </div>

                {/* Right Profile Details Column (7 cols) */}
                <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8">
                  {/* Title block */}
                  <div className="space-y-2">
                    <span className="font-space text-[10px] font-bold tracking-[0.25em] text-[#FF1E1E] uppercase block">
                      {t.role}
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tighter text-white uppercase italic">
                      {t.name}
                    </h3>
                  </div>

                  {/* Core Philosophy quotes box */}
                  <div className="p-4 bg-zinc-950 border border-zinc-900 border-l-[#FF1E1E] border-l-4">
                    <span className="font-space text-[8px] text-zinc-500 uppercase tracking-widest font-black block mb-1">
                      COACHING PHILOSOPHY:
                    </span>
                    <p className="font-sans text-xs italic text-zinc-300 leading-relaxed">
                      "{ed.philosophy}"
                    </p>
                  </div>

                  {/* Specialties tags list */}
                  <div className="space-y-3">
                    <span className="font-space text-[10px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#FF1E1E]" /> CORE SPECIALITIES
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {t.specialties.map((spec, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-3 py-1.5 bg-zinc-950 border border-zinc-900 text-xs text-zinc-300 font-sans font-semibold rounded-none flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FF1E1E]" /> {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Official Credentials */}
                  <div className="space-y-3">
                    <span className="font-space text-[10px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#FF1E1E]" /> CERTIFICATIONS & RECOGNITIONS
                    </span>
                    <ul className="space-y-2 font-sans text-xs text-zinc-400">
                      {ed.awards.map((award, aIdx) => (
                        <li key={aIdx} className="flex gap-2.5 items-start">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium text-zinc-300">{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Schedules */}
                  <div className="p-4 bg-zinc-950 border border-zinc-900 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#FF1E1E] shrink-0" />
                    <div>
                      <span className="font-space text-[8px] text-[#FF1E1E] font-black uppercase tracking-widest block">CONSULTATION SLOT TIMETABLE</span>
                      <span className="font-sans text-xs text-zinc-300 block font-semibold mt-0.5">{ed.schedule}</span>
                    </div>
                  </div>

                  {/* Main Action buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
                    <button
                      onClick={() => handleBookSessionClick(t.name)}
                      className="py-4 bg-[#FF1E1E] hover:bg-[#FF2E2E] active:scale-98 text-white font-display text-xs font-black tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 rounded-none cursor-pointer border border-[#FF1E1E]/20"
                    >
                      <span>RESERVE PRIVATE COHORT SESSIONS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={t.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900/80 hover:border-zinc-800 text-zinc-300 hover:text-white font-display text-xs font-black tracking-widest uppercase transition-all duration-300 shadow-sm flex items-center justify-center gap-2 rounded-none cursor-pointer"
                    >
                      <Instagram className="w-4 h-4 text-[#FF1E1E]" />
                      <span>VISIT INSTAGRAM ARCHIVE</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
