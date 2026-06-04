import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Flame, Medal } from 'lucide-react';
import { pricingPlans } from '../data/gymData';

interface MembershipViewProps {
  onJoinPlan: (planName: string) => void;
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

export default function MembershipView({ onJoinPlan }: MembershipViewProps) {
  return (
    <div id="membership-canvas" className="py-12 sm:py-20 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            CHOOSE YOUR MEMBERSHIP
          </motion.span>
        </div>
        <div className="overflow-hidden p-0.5">
          <motion.h2 
            variants={itemVariants} 
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase italic block"
          >
            INVEST IN <span className="text-[#E10600]">YOUR BUILDING</span>
          </motion.h2>
        </div>
        <motion.p 
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm text-[#B0B0B0] max-w-xl mx-auto mt-3 leading-relaxed"
        >
          No hidden fees or locked memberships. Select the tier that matches your physical ambition.
        </motion.p>
      </motion.div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
        {pricingPlans.map((plan, idx) => {
          const isStandard = plan.id === 'plan-gold';
          const Icon = plan.id === 'plan-bronze' ? Flame : plan.id === 'plan-gold' ? Medal : ShieldCheck;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              className={`relative flex flex-col p-8 bg-[#121212]/90 border ${
                isStandard 
                  ? 'border-[#E10600] shadow-[0_4px_30px_rgba(225,6,0,0.15)] bg-gradient-to-b from-zinc-950/80 via-[#121212] to-zinc-950/40' 
                  : 'border-zinc-900'
              } hover:border-[#E10600]/30 hover:scale-[1.02] transition-all duration-300 relative text-left`}
            >
              {isStandard && (
                <div className="absolute top-4 right-4 bg-[#E10600] text-white text-[9px] font-space font-black tracking-widest uppercase px-3.5 py-1">
                  POPULAR (VIP)
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <div className="w-10 h-10 bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#E10600]" />
                </div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">{plan.name}</h3>
                <p className="font-sans text-xs text-[#B0B0B0] mt-1 leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Rating/Price Block */}
              <div className="flex items-baseline gap-1 mb-8 border-b border-zinc-900 pb-6">
                <span className="font-display font-black text-3xl sm:text-4xl text-white">PKR {plan.price}</span>
                <span className="font-sans text-[#B0B0B0] text-xs font-semibold uppercase">/ {plan.billingPeriod}</span>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-4 flex-grow mb-8 font-sans">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 text-xs leading-relaxed text-[#B0B0B0]">
                    <Check className="w-4 h-4 text-[#E10600] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Join Button */}
              <div className="pt-2">
                <button
                  onClick={() => onJoinPlan(plan.name)}
                  className={`w-full text-center py-3.5 font-display text-xs font-black tracking-widest uppercase cursor-pointer border ${
                    isStandard
                      ? 'bg-[#E10600] hover:bg-[#ff1e1e] border-[#E10600] text-white shadow-[0_4px_20px_rgba(225,6,0,0.3)]'
                      : 'bg-transparent border-zinc-800 hover:border-[#E10600]/50 hover:bg-[#121212] text-white'
                  } transition-all duration-300`}
                >
                  JOIN NOW
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Simple comparison label */}
      <div className="bg-[#121212]/35 border border-zinc-900/60 p-6 text-center max-w-3xl mx-auto font-sans">
        <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-2">COMPARE ALL ACCESSIBILITY</h4>
        <p className="text-[#B0B0B0] text-xs leading-relaxed">
          All our members receive full keyless biometric cabinet slots, access to fresh ambient climate-controlled spaces, 
          imported plate safety mats, verified security cameras, and expert trainer-on-duty support on our main strength lines at all hours.
        </p>
      </div>
    </div>
  );
}
