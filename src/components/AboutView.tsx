import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye } from 'lucide-react';
import GymInside2 from '../assets/images/gym_inside_2_1780606203636.png';

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

export default function AboutView() {
  return (
    <div id="about-canvas" className="py-12 sm:py-20 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            OUR PHYSICAL IDENTITY
          </motion.span>
        </div>
        <div className="overflow-hidden p-0.5">
          <motion.h2 
            variants={itemVariants} 
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase italic block"
          >
            THE <span className="text-[#E10600]">STORY</span> OF BODY ZONE
          </motion.h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        {/* Story Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider">
            RESTRUCTURING PATTOKI'S WEAK ROUTINES
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
            Founded in 2018, Body Zone Gym & Fitness Center Pattoki pioneered international-grade fitness 
            standards in the region. We recognized a desperate need for premium strength alignment, 
            certified personal sports educators, and robust physical safety. 
          </p>
          <p className="font-sans text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
            We built an incredible training floor packed with high-end, biomechanically correct imported 
            strength equipment. Since our opening, our dedicated master coaches have coached 
            members with absolute science and professional nutrition plans, helping thousands sculpt strong 
            symmetrical builds.
          </p>
        </motion.div>

        {/* Story Image */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-4 lg:mt-0"
        >
          <div className="absolute inset-0 bg-[#E10600]/10 blur-2xl rounded-full" />
          <img 
            src={GymInside2} 
            alt="Body Zone Professional Interior" 
            className="relative z-10 w-full h-[300px] object-cover border border-zinc-900 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Mission & Vision split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900 pt-16">
        {/* Mission card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-[#121212]/50 border border-zinc-900 hover:border-[#E10600]/15 transition-all duration-300 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#E10600]/5 rounded-full blur-xl pointer-events-none" />
          <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/25 flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-[#E10600]" />
          </div>
          <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-3">
            OUR MISSION
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
            To provide elite facilities, world-class imported strength lines, and safe, science-backed 
            nutrition guides that enable members to maximize muscle fiber recruitment and smash athletic thresholds.
          </p>
        </motion.div>

        {/* Vision card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-[#121212]/50 border border-zinc-900 hover:border-[#E10600]/15 transition-all duration-300 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#E10600]/5 rounded-full blur-xl pointer-events-none" />
          <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/25 flex items-center justify-center mb-6">
            <Eye className="w-6 h-6 text-[#E10600]" />
          </div>
          <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-3">
            OUR VISION
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#B0B0B0] leading-relaxed">
            To remain the ultimate symbol of physical culture in Pakistan, fostering custom-guided training architectures 
            where biomechanically custom fitness is accessible to every single local member.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
