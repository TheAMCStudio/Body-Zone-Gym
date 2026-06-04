import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';

interface ContactViewProps {
  preselectedPlan?: string;
  onClearPlan?: () => void;
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

export default function ContactView({ preselectedPlan = '', onClearPlan }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: preselectedPlan,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, plan: preselectedPlan }));
    }
  }, [preselectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    // Auto clear after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', plan: '', message: '' });
      if (onClearPlan) onClearPlan();
    }, 4000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Asalam-o-Alaikum! My name is ${formData.name || 'Guest'}. I am interested in joining Body Zone Gym & Fitness Center Pattoki. ${
        formData.phone ? `My phone is ${formData.phone}.` : ''
      } ${formData.plan ? `Interested Plan / Course: ${formData.plan}.` : ''}`
    );
    // Direct WhatsApp linkage
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  return (
    <div id="contact-canvas" className="py-12 sm:py-20 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            GET IN TOUCH WITH US
          </motion.span>
        </div>
        <div className="overflow-hidden p-0.5">
          <motion.h2 
            variants={itemVariants} 
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase italic block"
          >
            SECURE YOUR <span className="text-[#E10600]">SPOT</span>
          </motion.h2>
        </div>
        <motion.p 
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm text-[#B0B0B0] max-w-xl mx-auto mt-3 leading-relaxed"
        >
          Submit our lead consultation draft or talk to us directly over live WhatsApp chat to request tour approvals.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left mb-16">
        {/* Contact Info Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2">CLUB INFRASTRUCTURE</h3>
            <p className="font-sans text-xs text-[#B0B0B0] leading-relaxed">
              Drop by anytime during working hours. Our guest relation agents are always on deck to guide you through.
            </p>
          </div>

          <div className="space-y-4 font-sans text-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#E10600]" />
              </div>
              <div>
                <span className="text-zinc-500 uppercase font-black block tracking-wider">Mailing Address</span>
                <span className="text-white font-medium block mt-1">
                  Main Allama Iqbal Road, Center Market Sector, Pattoki, Pakistan
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#E10600]" />
              </div>
              <div>
                <span className="text-zinc-500 uppercase font-black block tracking-wider">Voice & WhatsApp Support</span>
                <span className="text-white font-medium block mt-1">+92-300-888-ZONE</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#E10600]" />
              </div>
              <div>
                <span className="text-zinc-500 uppercase font-black block tracking-wider">Electronic Mail</span>
                <span className="text-white font-medium block mt-1">support@bodyzonepattoki.com</span>
              </div>
            </div>
          </div>

          {/* Dedicated WhatsApp Quick Button */}
          <div className="pt-4">
            <button
              onClick={handleWhatsAppDirect}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer shadow-[0_4px_20px_rgba(37,211,102,0.25)]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>CHAT ON WHATSAPP NOW</span>
            </button>
          </div>
        </motion.div>

        {/* Lead Form Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-7 bg-[#121212]/90 border border-zinc-900 p-8 relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E10600]/5 blur-3xl rounded-full pointer-events-none" />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
            >
              <CheckCircle className="w-16 h-16 text-[#25D366] animate-bounce" />
              <div className="space-y-1">
                <h4 className="font-display font-black text-xl text-white uppercase italic">TRANSFORMATION REQUEST SIGNED!</h4>
                <p className="font-sans text-xs text-[#B0B0B0]">
                  Our physical relations team will connect with you under 2 working hours. Get ready.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label htmlFor="f-name" className="block text-[10px] uppercase font-space font-black tracking-wider text-zinc-500">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="f-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Chaudhary Bilal"
                    className="w-full bg-zinc-950/70 border border-zinc-800 text-white text-xs px-4 py-3 focus:outline-none focus:border-[#E10600] transition-colors"
                  />
                </div>

                {/* Telephone input */}
                <div className="space-y-1.5">
                  <label htmlFor="f-phone" className="block text-[10px] uppercase font-space font-black tracking-wider text-zinc-500">
                    MOBILE NO
                  </label>
                  <input
                    type="tel"
                    id="f-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0300-1234567"
                    className="w-full bg-zinc-950/70 border border-zinc-800 text-white text-xs px-4 py-3 focus:outline-none focus:border-[#E10600] transition-colors"
                  />
                </div>
              </div>

              {/* Course select */}
              <div className="space-y-1.5">
                <label htmlFor="f-plan" className="block text-[10px] uppercase font-space font-black tracking-wider text-zinc-500">
                  CHOOSE PLAN OR PROGRAM
                </label>
                <select
                  id="f-plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950/70 border border-zinc-800 text-white text-xs px-4 py-3 focus:outline-none focus:border-[#E10600] transition-colors appearance-none"
                >
                  <option value="">General Gym Tour Access</option>
                  <option value="Classic Membership">Classic Membership (Basic)</option>
                  <option value="VIP Performance">VIP Performance Membership (Standard)</option>
                  <option value="Royal Executive Pro">Royal Executive Pro Membership (Premium)</option>
                  <option value="Hypertrophy & Elite Strength">Hypertrophy & Elite Strength Course</option>
                  <option value="High Octane Conditioning">High Octane Conditioning Course</option>
                  <option value="Pro 1-on-1 Personal Training">Pro 1-on-1 Personal Training</option>
                  <option value="Combat Conditioning & Boxing">Combat Conditioning & Boxing</option>
                  <option value="Core Stability & Kinetic Flow">Core Stability & Kinetic Flow</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="f-message" className="block text-[10px] uppercase font-space font-black tracking-wider text-zinc-500">
                  ADDITIONAL DRAFT NOTE
                </label>
                <textarea
                  id="f-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="I want to sign up for next Monday tour under Head Directors..."
                  className="w-full bg-zinc-950/70 border border-zinc-800 text-white text-xs px-4 py-3 focus:outline-none focus:border-[#E10600] transition-colors resize-none"
                />
              </div>

              {/* Submit btn */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#E10600] hover:bg-[#ff1e1e] text-white font-display text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer shadow-[0_4px_25px_rgba(225,6,0,0.2)]"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT LEAD DRAFT</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Google Maps embed section of Pattoki */}
      <div className="border border-zinc-900 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-10 bg-[#121212]/90 border border-[#E10600]/25 px-3 py-1.5 text-[8.5px] font-space font-black tracking-wider text-[#E10600] uppercase">
          BODY ZONE REGIONAL ARENA LOCATOR Map
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13658.05837683935!2d73.8443905!3d31.0253456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918070d6b6330eb%3A0xe9634e9e03d4d3cc!2sPattoki%2C%20Kasur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1780606000000!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.8)' }}
          allowFullScreen={false}
          loading="lazy"
          title="Body Zone Location Map"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
