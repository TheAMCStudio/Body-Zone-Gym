import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Zap, ArrowRight, ShieldAlert } from 'lucide-react';
import { programsData } from '../data/gymData';

interface ProgramsViewProps {
  onSelectProgram: (pName: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function ProgramsView({ onSelectProgram }: ProgramsViewProps) {
  return (
    <div id="programs-canvas" className="py-12 sm:py-20 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <motion.div 
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="overflow-hidden mb-2">
          <motion.span 
            variants={itemVariants} 
            className="font-space font-black text-xs text-[#E10600] tracking-widest uppercase block"
          >
            SPECIALIZED DIVISIONS
          </motion.span>
        </div>
        <div className="overflow-hidden p-0.5">
          <motion.h2 
            variants={itemVariants} 
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase italic block"
          >
            TRAINING <span className="text-[#E10600]">PROGRAMS</span>
          </motion.h2>
        </div>
        <motion.p 
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm text-[#B0B0B0] max-w-xl mx-auto mt-3 leading-relaxed"
        >
          Pattoki's only structured science-based workout tracks designed down to the precise metabolic set.
        </motion.p>
      </motion.div>

      {/* Programs List */}
      <div className="space-y-6">
        {programsData.map((program, idx) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="flex flex-col md:flex-row bg-[#121212]/90 border border-zinc-900 overflow-hidden relative group text-left transition-all hover:border-[#E10600]/30"
          >
            {/* Background Red Accent */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#E10600]" />

            {/* Program Details */}
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4 font-space text-[10px] font-bold tracking-widest uppercase">
                  <span className="bg-[#E10600]/10 text-[#E10600] px-2.5 py-1">
                    {program.intensity} INTENSITY
                  </span>
                  <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {program.duration}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl text-white uppercase italic tracking-tight">{program.title}</h3>
                <p className="font-sans text-xs text-[#B0B0B0] mt-3 leading-relaxed max-w-2xl">
                  {program.description}
                </p>

                {/* Benefits sub-bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 font-sans">
                  {program.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-zinc-400 select-none">
                      <div className="w-1.5 h-1.5 bg-[#E10600] rounded-none shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Action */}
              <div className="pt-6 mt-6 border-t border-zinc-900 flex justify-end">
                <button
                  onClick={() => onSelectProgram(program.title)}
                  className="flex items-center gap-2 bg-transparent text-[#E10600] hover:text-white font-display text-xs font-black tracking-widest uppercase cursor-pointer group transition-colors"
                >
                  <span>INQUIRE ABOUT COURSE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Optional Small Image overlay */}
            <div className="hidden md:block w-72 h-auto relative shrink-0 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 filter grayscale brightness-75 group-hover:grayscale-0"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
