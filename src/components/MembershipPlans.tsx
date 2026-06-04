/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, Shield, Award, Sparkles } from 'lucide-react';
import { pricingPlans } from '../data/gymData';
import { PricingPlan } from '../types';

interface MembershipPlansProps {
  onPlanSelect: (planName: string) => void;
}

export default function MembershipPlans({ onPlanSelect }: MembershipPlansProps) {
  return (
    <section 
      id="membership" 
      className="py-24 bg-[#121212] relative overflow-hidden"
    >
      {/* Dynamic Glowing backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#FF1E1E]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="membership-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-4 bg-white/5 border-l-2 border-[#FF1E1E] mb-6"
          >
            <span className="font-space font-bold text-[10px] tracking-[0.3em] text-[#FF1E1E] uppercase">
              RESERVED ACCESS
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            MEMBERSHIP <span className="text-trace-white">PLANS</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Secure your allocation. Invest in an elite environment curated with supreme equipment, professional training support, and biosecure locker rooms.
          </p>
        </div>

        {/* Pricing Cards Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="pricing-matrix">
          {pricingPlans.map((plan, idx) => {
            return (
              <motion.div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`rounded-none p-8 flex flex-col justify-between relative transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-t-0 border-r-0 border-b-0 border-l-4 h-full overflow-hidden ${
                  plan.isPopular
                    ? 'bg-[#1a1a1a] border-[#FF1E1E] scale-102 lg:scale-105 z-10'
                    : 'bg-[#121212] border-l-[#B8B8B8] hover:border-l-[#FF1E1E] hover:bg-[#1a1a1a]'
                }`}
              >
                {/* Popular Highlight ribbon */}
                {plan.isPopular && (
                  <div className="absolute top-4 right-4" id={`plan-${plan.id}-badge`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-space font-extrabold tracking-widest text-[#FF1E1E] bg-[#FF1E1E]/12 border border-[#FF1E1E]/40 uppercase rounded-full animate-pulse">
                      <Star className="w-3 h-3 fill-[#FF1E1E] text-[#FF1E1E]" /> {plan.badge}
                    </span>
                  </div>
                )}

                {/* Card Top Block */}
                <div className="space-y-6 text-left">
                  <div className="space-y-1">
                    <span className="font-space text-[10px] font-extrabold text-zinc-500 tracking-widest uppercase block">
                      PACKAGE CODE: 00{idx + 1}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white uppercase italic tracking-wider">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 font-medium">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing metrics */}
                  <div className="py-6 border-t border-b border-zinc-900 flex items-baseline gap-2">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                      <span className="text-xs text-zinc-400 font-normal mr-1">Rs.</span>
                      {plan.price}
                    </span>
                    <span className="font-space text-xs text-zinc-500 font-semibold tracking-wider uppercase">
                      / {plan.billingPeriod}
                    </span>
                  </div>

                  {/* Feature lists */}
                  <div className="space-y-4">
                    <span className="font-space text-[10px] text-zinc-500 font-bold uppercase tracking-widest block">
                      INCLUDED IN THIS PLAN:
                    </span>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className={`p-0.5 rounded-full mt-0.5 shrink-0 flex items-center justify-center ${
                            plan.isPopular ? 'bg-[#FF1E1E]/15 text-[#FF1E1E]' : 'bg-zinc-900 text-zinc-400'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="font-sans text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action button bottom */}
                <div className="pt-8 mt-8 border-t border-zinc-900/60">
                  <button
                    id={`buy-plan-${plan.id}`}
                    onClick={() => onPlanSelect(plan.name)}
                    className={`w-full py-4 text-xs font-display font-black tracking-widest uppercase rounded-sm cursor-pointer transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-[#FF1E1E] hover:bg-white text-white hover:text-black shadow-[0_4px_20px_rgba(255,30,30,0.3)] hover:shadow-xl'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                  
                  <span className="block text-center font-sans text-[9px] text-zinc-600 uppercase font-medium mt-3 tracking-widest">
                    No hidden taxes. Real values strictly honored.
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Family package prompter */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-lg bg-[#0B0B0B] border border-zinc-900 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
          id="corporate-memberships"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-zinc-900/60 flex items-center justify-center border border-zinc-800">
              <Sparkles className="w-5 h-5 text-[#FF1E1E]" />
            </div>
            <div>
              <span className="font-display font-extrabold text-white text-sm uppercase tracking-wider block">Looking for Corporate or Couples Package?</span>
              <span className="font-sans text-xs text-zinc-500 block">We arrange bespoke executive programs for local businesses, bank staff, and coupled sessions.</span>
            </div>
          </div>
          <button
            onClick={() => onPlanSelect("Corporate Package Inquiry")}
            className="px-6 py-3 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white hover:text-[#FF1E1E] hover:border-[#FF1E1E]/50 font-display text-[10px] font-black tracking-widest uppercase transition-colors cursor-pointer shrink-0"
          >
            CORPORATE INQUIRY
          </button>
        </motion.div>

      </div>
    </section>
  );
}
