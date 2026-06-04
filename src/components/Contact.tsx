/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';

interface ContactProps {
  selectedPlan: string;
  onClearPlan: () => void;
}

export default function Contact({ selectedPlan, onClearPlan }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [planType, setPlanType] = useState('Classic Membership');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync state if a user selected a pricing plan or class booking earlier
  useEffect(() => {
    if (selectedPlan) {
      setPlanType(selectedPlan);
    }
  }, [selectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setIsSuccess(true);
      // Mock submit logs
      console.log("Inquiry received:", { name, phone, email, planType, message });
    }
  };

  const handleCloseSuccess = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClearPlan();
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#121212] relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#FF1E1E]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Panel */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="contact-header">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-4 bg-white/5 border-l-2 border-[#FF1E1E] mb-6"
          >
            <span className="font-space font-bold text-[10px] tracking-[0.3em] text-[#FF1E1E] uppercase">
              RESERVE MEMBERSHIP NOW
            </span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white uppercase italic leading-none">
            CONTACT <span className="text-trace-white">HEAD DECK</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-500 font-normal max-w-xl mx-auto">
            Book physical assessment hours. Submit your biometric coordinates below, and our VIP relations executive will follow up within 2 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left Block (5 columns) with Address Metrics */}
          <div className="lg:col-span-5 space-y-8 text-left" id="contact-details-panel">
            <div className="space-y-4">
              <span className="font-space text-[10px] text-[#FF1E1E] font-black tracking-widest uppercase block animate-pulse">
                BODY ZONE GYM CO-FOUNDER SUITE
              </span>
              <h3 className="font-display font-black text-white text-2.5xl leading-tight uppercase italic">
                EXPLORE PATTOKI'S <br />
                ELITE CLUBHOUSE
              </h3>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                Reach us directly for customized program quotes. Join today and start reaping progressive strength volume and optimal macros.
              </p>
            </div>

            {/* Structured Info Widgets */}
            <div className="space-y-4" id="address-block">
              {/* Loc Map pin */}
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-900 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF1E1E]" />
                </div>
                <div>
                  <span className="font-display font-bold text-xs text-white uppercase block">Facility Location</span>
                  <p className="font-sans text-xs text-zinc-400 font-medium mt-1 leading-relaxed">
                    Multan Road, Near Bypass Grid Station, Pattoki, Punjab - Pakistan.
                  </p>
                </div>
              </div>

              {/* Call numbers */}
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-900 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#FF1E1E]" />
                </div>
                <div>
                  <span className="font-display font-bold text-xs text-white uppercase block">24/7 Hotline Support</span>
                  <p className="font-sans text-xs text-zinc-400 font-medium mt-1">
                    +92 (300) 456-7890 <br />
                    +92 (345) 123-4567
                  </p>
                </div>
              </div>

              {/* Mail channels */}
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-900 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#FF1E1E]" />
                </div>
                <div>
                  <span className="font-display font-bold text-xs text-white uppercase block">VIP Relations Email</span>
                  <p className="font-sans text-xs text-zinc-400 font-medium mt-1">
                    support@bodyzonepattoki.com <br />
                    inquiries@bodyzonepattoki.com
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Times strip */}
            <div className="p-4 rounded-lg bg-zinc-950 border border-[#FF1E1E]/10 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#FF1E1E] shrink-0" />
              <div className="font-space">
                <span className="text-[9px] text-[#FF1E1E] font-black uppercase tracking-widest block font-bold">Facility Operating Hours</span>
                <span className="text-[11px] text-zinc-400 block font-semibold mt-0.5">Mon - Sat: 06:00 AM - 11:00 PM • Sun: 10:00 AM - 05:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 columns) - Interactive Form */}
          <div className="lg:col-span-7 bg-[#0B0B0B] p-8 sm:p-10 rounded-xl border border-zinc-900 shadow-[0_30px_60px_rgba(0,0,0,0.8)]" id="contact-form-panel">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-2">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">
                  MEMBERSHIP APPLICATION FORM
                </h3>
                <span className="font-sans text-xs text-zinc-500 block">
                  Fill in your active phone, to coordinate secure membership ID creation.
                </span>
              </div>

              {/* Full name input */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="font-space text-[10px] text-zinc-400 uppercase tracking-widest font-black block">
                  CANDIDATE FULL NAME *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Chaudhary Ali Butt"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF1E1E] transition-all font-sans font-medium"
                />
              </div>

              {/* Grid block phone/email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Active phone */}
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="font-space text-[10px] text-zinc-400 uppercase tracking-widest font-black block">
                    PHONE LINE (WHATSAPP RECOMMENDED) *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="e.g. 03001234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF1E1E] transition-all font-sans font-medium"
                  />
                </div>

                {/* Email (Optional) */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="font-space text-[10px] text-zinc-400 uppercase tracking-widest font-black block">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="e.g. candidate@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF1E1E] transition-all font-sans font-medium"
                  />
                </div>

              </div>

              {/* Selected Plan selector */}
              <div className="space-y-2">
                <label htmlFor="contact-plan-type" className="font-space text-[10px] text-zinc-400 uppercase tracking-widest font-black block">
                  DESIRED ALLOCATION PLAN
                </label>
                <select
                  id="contact-plan-type"
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF1E1E] transition-all font-sans font-medium"
                >
                  <option value="Classic Membership">Classic Membership (Rs. 4,000 / Month)</option>
                  <option value="VIP Performance">VIP Performance Partner (Rs. 10,000 / 3 Months)</option>
                  <option value="Royal Executive Pro">Royal Executive Pro (Rs. 24,000 / Yearly)</option>
                  <option value="Pro 1-on-1 Personal Training">Pro 1-on-1 Personal Training Consultation</option>
                  <option value="Corporate Package Inquiry">Corporate/Partner Specialization Package</option>
                  <option value="General Tour Request">General Club Tour Request</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="font-space text-[10px] text-zinc-400 uppercase tracking-widest font-black block">
                  ADDITIONAL COMMENTS OR REJECT HEALTH CONDITIONS
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about yourself or specify hours you want to visit..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-900 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF1E1E] transition-all font-sans font-medium resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-contact-form"
                className="w-full py-4 rounded-sm bg-gradient-to-r from-[#FF1E1E] to-[#B31010] hover:from-[#FF2E2E] hover:to-[#C31010] text-white font-display text-xs font-black tracking-widest uppercase transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2 group border border-[#FF1E1E]/20"
              >
                <span>TRANSMIT MEMBERSHIP RESERVATION</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </button>

            </form>
          </div>

        </div>

        {/* Real-looking Premium Styled Google maps mock-up overlay */}
        <div className="mt-16 rounded-xl overflow-hidden border border-zinc-900 shadow-[0_20px_45px_rgba(0,0,0,0.85)]" id="map-mock-container">
          <div className="h-96 w-full relative bg-[#121212]/95 flex items-center justify-center">
            
            {/* Elegant dark grid to mimic high tech map representation */}
            <div className="absolute inset-0 opacity-15" style={{ 
              backgroundImage: 'radial-gradient(#FF1E1E 1px, transparent 1px)', 
              backgroundSize: '24px 24px' 
            }} />

            {/* Satellite map styling representation */}
            <div className="relative text-center p-8 max-w-md z-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FF1E1E]/15 border border-[#FF1E1E]/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,30,30,0.25)] relative group">
                <MapPin className="w-8 h-8 text-[#FF1E1E]" />
                <span className="absolute inset-0 rounded-full bg-[#FF1E1E] animate-ping opacity-25" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-black text-white text-lg uppercase tracking-wider">
                  BODY ZONE GYM & FITNESS CENTER PATTOKI
                </h4>
                <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-bold">
                  COORDINATES: 31.0253° N, 73.8504° E • PATTOKI BYPASS
                </p>
                <p className="font-sans text-xs text-zinc-400 font-medium px-4">
                  Centrally reached with absolute secure car parking slots, security barricades, and standard backup power generators.
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Body+Zone+Gym+Pattoki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 bg-zinc-950 hover:bg-[#FF1E1E] text-zinc-400 hover:text-white rounded border border-zinc-900 hover:border-[#FF1E1E] text-[10px] font-space font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md"
              >
                Launch Google Maps Navigation <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Simulated Satellite coordinates sidebar */}
            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-zinc-650 tracking-wider uppercase text-left space-y-0.5 hidden sm:block">
              <p>DEVICE: ACTIVE CAMERA REVIEWS</p>
              <p>PING STATE: 12MS LIVE</p>
              <p>GRID: METRIC OVERLAY OK</p>
            </div>
            
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-zinc-650 tracking-wider uppercase text-right space-y-0.5 hidden sm:block">
              <p>GPS SATELLITE: GPS_PAK_MID_721</p>
              <p>LOC REGION: PATTOKI DISTRICT</p>
            </div>

          </div>
        </div>

      </div>

      {/* Success Modal overlay (AnimatePresence React) */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md p-8 rounded-xl bg-[#0B0B0B] border border-[#FF1E1E]/40 text-center space-y-6 shadow-[0_30px_70px_rgba(255,30,30,0.15)]"
              id="success-modal"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                <CheckCircle2 className="w-9 h-9 text-emerald-500" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-white uppercase italic tracking-wide">
                  APPLICATION RECIEVED!
                </h3>
                <p className="font-sans text-xs text-zinc-400 font-medium max-w-xs mx-auto leading-relaxed">
                  Salaam, <strong className="text-white">{name}</strong>. Your physical coordinates under <span className="text-[#FF1E1E] font-extrabold">{planType}</span> are locked.
                </p>
                <p className="font-sans text-[11px] text-zinc-500 leading-normal font-medium pt-2">
                  Our VIP relations officer will transmit a direct call to the phone line: <strong>{phone}</strong> inside 2 hours to confirm assessment availability.
                </p>
              </div>

              <button
                type="button"
                id="close-success-modal"
                onClick={handleCloseSuccess}
                className="w-full py-4.5 bg-gradient-to-r from-[#FF1E1E] to-[#B31010] hover:from-[#FF2E2E] hover:to-[#C31010] text-white font-display text-xs font-black tracking-widest uppercase transition-colors rounded-sm cursor-pointer"
              >
                CONCLUDE & RETURN
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
