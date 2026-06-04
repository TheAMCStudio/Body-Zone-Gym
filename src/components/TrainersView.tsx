import React from 'react';
import { motion } from 'motion/react';
import { Award, ArrowRight, Instagram } from 'lucide-react';
import { trainersData } from '../data/gymData';
import FoundersImg from '../assets/images/gym_trainers_1780606223605.png';

interface TrainersViewProps {
  onBookTrainer: (trainerName: string) => void;
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

export default function TrainersView({ onBookTrainer }: TrainersViewProps) {
  return (
    <div id="trainers-canvas" className="py-12 sm:py-20 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            MEET OUR ELITE STAFF
          </motion.span>
        </div>
        <div className="overflow-hidden p-0.5">
          <motion.h2 
            variants={itemVariants} 
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase italic block"
          >
            PROFESSIONAL <span className="text-[#E10600]">COACHES</span>
          </motion.h2>
        </div>
        <motion.p 
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm text-[#B0B0B0] max-w-xl mx-auto mt-3 leading-relaxed"
        >
          Our specialists are certified, deeply motivated physical educators dedicated to perfect form execution.
        </motion.p>
      </motion.div>

      {/* Gym Leadership Spotlight (Founders / Head Coaches) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-16 bg-[#121212]/90 border border-zinc-900 rounded-none overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-32 h-1 bg-[#E10600]" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">
          {/* Photo banner */}
          <div className="md:col-span-5 h-[320px] md:h-[400px] relative overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${FoundersImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950/40 via-transparent to-transparent md:to-[#121212]" />
          </div>

          {/* Text panel */}
          <div className="md:col-span-7 p-8 md:p-12 text-left space-y-4">
            <span className="font-space font-bold text-xs text-[#E10600] tracking-widest uppercase block">
              HEAD SYSTEM COACHES & DIRECTORS
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase italic tracking-tight">
              COACH YASIR & COACH SHAKEEL
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
              As the Head Directors of Body Zone Gym & Fitness Center Pattoki, together we construct 
              strict biomechanical programs designed to build safe power, joint stability, and aesthetic lines. 
              We are committed to delivering the ultimate training standards for all members.
            </p>
            <div className="border-t border-zinc-900 pt-4 flex">
              <button
                onClick={() => onBookTrainer("Coaches Yasir & Shakeel")}
                className="inline-flex items-center gap-2 text-[#E10600] hover:text-white font-display text-xs font-black tracking-widest uppercase cursor-pointer transition-colors"
              >
                <span>CONSULT WITH DIRECTORS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid of Elite Team Trainers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainersData.map((trainer, idx) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="bg-[#121212]/90 border border-zinc-900 relative group text-left flex flex-col justify-between h-full hover:border-[#E10600]/30 transition-all"
          >
            <div>
              {/* Photo */}
              <div className="h-[250px] relative overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url(${trainer.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/10 to-transparent" />
              </div>

              {/* Title Info */}
              <div className="p-5 space-y-2">
                <h4 className="font-display font-black text-lg text-white uppercase italic tracking-tight">{trainer.name}</h4>
                <p className="font-space text-[10px] text-[#E10600] font-black tracking-wider uppercase">{trainer.role}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#B0B0B0] font-sans">
                  <Award className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>{trainer.experience}</span>
                </div>
              </div>
            </div>

            {/* Specialties Overlay & Button */}
            <div className="p-5 border-t border-zinc-900/40 bg-zinc-950/20">
              <button
                onClick={() => onBookTrainer(trainer.name)}
                className="w-full text-center py-2 bg-transparent hover:bg-[#E10600] border border-zinc-800 hover:border-[#E10600] text-white text-[10px] font-display font-black tracking-widest uppercase cursor-pointer transition-all duration-300"
              >
                BOOK LESSON
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
