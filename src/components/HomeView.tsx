import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Flame, 
  Shield, 
  Award, 
  ChevronDown, 
  Zap, 
  Apple, 
  Users, 
  Target, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Activity,
  UserCheck,
  TrendingUp,
  Cpu,
  Clock,
  Briefcase
} from 'lucide-react';
import GymInside1 from '../assets/images/gym_inside_1_1780606181422.png';
import GymHeroBg from '../assets/images/gym_hero_bg_1780651454830.png';
import { statsData, galleryData, transformationsData, testimonialsData, faqData, benefitsData } from '../data/gymData';

interface HomeViewProps {
  onJoinClick: () => void;
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

// Button Spring Hover Micro-animations
const playButtonHover = {
  scale: 1.04,
  y: -2,
  boxShadow: "0px 8px 30px rgba(225, 6, 0, 0.65)",
  transition: { type: "spring", stiffness: 400, damping: 11 }
};

const darkButtonHover = {
  scale: 1.02,
  y: -1,
  borderColor: "rgba(225, 6, 0, 0.45)",
  transition: { type: "spring", stiffness: 400, damping: 14 }
};

export default function HomeView({ onJoinClick }: HomeViewProps) {
  // Gallery category selection filter
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  
  // Transformation comparative selector
  const [activeTransformationIdx, setActiveTransformationIdx] = useState(0);

  // FAQ Accordion expanded state management
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  // Dynamic state tracking scroll for professional parallax animation
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter gallery items
  const filteredGallery = activeGalleryTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeGalleryTab);

  const toggleFaq = (id: string) => {
    if (expandedFaqId === id) {
      setExpandedFaqId(null);
    } else {
      setExpandedFaqId(id);
    }
  };

  const handleNextTransformation = () => {
    setActiveTransformationIdx((prev) => (prev + 1) % transformationsData.length);
  };

  const handlePrevTransformation = () => {
    setActiveTransformationIdx((prev) => (prev - 1 + transformationsData.length) % transformationsData.length);
  };

  return (
    <div id="home-view" className="relative bg-[#0B0B0B] text-white overflow-hidden">
      
      {/* 1. REDEFINED CINEMATIC HERO SECTION */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Dynamic Background Layout with High-Fidelity Parallax Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.02, opacity: 0.82 }}
            style={{ y: scrollY * 0.4, backgroundImage: `url(${GymHeroBg})` }}
            transition={{ 
              scale: { duration: 2.2, ease: "easeOut" },
              opacity: { duration: 1.4, ease: "easeOut" }
            }}
            className="w-full h-full bg-cover bg-center filter saturate-[1.15] brightness-[65%] contrast-[1.10] select-none"
          />
          {/* Layered vignette overlays for athletic contrast */}
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          
          {/* Cyberpunk Grid Mesh Overlay background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,6,0,0.12),rgba(0,0,0,0))]" />
          
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#E10600]/5 blur-[200px] pointer-events-none" />
        </div>

        {/* Hero Core Content Screen */}
        <div className="relative z-10 max-w-6xl mx-auto w-full text-left pt-28 pb-20 sm:pb-24">
          <div className="space-y-10 max-w-5xl">
            
            {/* Title headers with Overflow Hidden Slide-Up Animations */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              <div className="overflow-hidden">
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#E10600]/10 border border-[#E10600]/30 mr-2 mb-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-ping" />
                  <span className="font-space font-black text-[9px] sm:text-xs text-white tracking-[0.35em] uppercase">
                    THE PRESTIGE FITNESS SANCTUARY OF PATTOKI
                  </span>
                </motion.div>
              </div>

              {/* Majestic Massive Typography */}
              <div className="overflow-hidden p-1.5">
                <motion.h1 
                  variants={itemVariants}
                  className="font-display font-black text-5xl sm:text-8xl lg:text-9xl tracking-[0.01em] text-white uppercase italic leading-[0.9]"
                >
                  ENGINEER <br />
                  <span className="text-[#E10600] not-italic text-glow-red relative">
                    YOUR FORM
                    <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-24 h-1 sm:h-2 bg-[#E10600]" />
                  </span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Sub-headline Text */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="font-sans text-base sm:text-2xl text-[#D8D8D8] font-light leading-relaxed max-w-3xl border-l-[4px] border-[#E10600] pl-6"
            >
              Body Zone Gym Pattoki houses professional-grade biometric machinery lines, elite certified physical trainers, 
              custom sports nutrition charts, and structural training divisions built to sculpture unstoppable physiques.
            </motion.p>

            {/* Dynamic Buttons Area with Spring Physics */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col sm:flex-row flex-wrap gap-5 pt-4"
            >
              <motion.button
                onClick={onJoinClick}
                whileHover={playButtonHover}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3.5 px-9 py-6 bg-[#E10600] text-white font-display text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer group border border-transparent shadow-[0_4px_30px_rgba(225,6,0,0.35)]"
              >
                <span>INITIATE ACCESS LEADS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 text-white" />
              </motion.button>

              <motion.a
                href="#benefits-showroom"
                whileHover={darkButtonHover}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3.5 px-9 py-6 bg-transparent hover:bg-zinc-900/50 text-zinc-300 hover:text-white font-display text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer border border-zinc-800"
              >
                <span>EXPLORE SANCTUARY</span>
                <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Mouse Anchor Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8, y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => {
            document.getElementById('metric-highlighters')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="font-space text-[9px] font-black tracking-[0.25em] uppercase text-zinc-550">SCROLL TO ANALYZE</span>
          <ChevronDown className="w-4 h-4 text-[#E10600]" />
        </motion.div>
      </section>


      {/* 2. INSTANT STATS & METRICS DISCOVERY DECK */}
      <section id="metric-highlighters" className="border-y border-zinc-900 bg-[#0E0E0E] relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            {statsData.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-left space-y-1.5 group border-l border-zinc-950 pl-4 sm:pl-6"
              >
                <div className="font-display font-black text-4xl sm:text-6xl text-white group-hover:text-[#E10600] transition-colors duration-300 italic tracking-tighter">
                  {stat.value}
                </div>
                <div className="font-space text-[10px] sm:text-xs text-zinc-400 tracking-[0.15em] uppercase font-bold pr-2 leading-snug">
                  {stat.label}
                </div>
                <div className="w-6 h-0.5 bg-[#E10600]/40 group-hover:w-16 transition-all duration-300 mt-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. NEW HIGH-FIDELITY SECTION: THE DYNAMIC PATH (4-STEP ATHLETIC PROTOCOL) */}
      <section className="py-24 sm:py-32 bg-[#090909] border-b border-zinc-900 relative">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E10600]/3 blur-[180px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="text-left mb-16 max-w-3xl"
          >
            <motion.span variants={fadeInUpVariants} className="font-space font-black text-[#E10600] text-xs tracking-widest uppercase block">
              THE REPLICABLE TRANSFORMATION BLUEPRINT
            </motion.span>
            <motion.h2 variants={fadeInUpVariants} className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase italic tracking-tight mt-3">
              THE BODY ZONE <span className="text-[#E10600] not-italic">METHOD</span>
            </motion.h2>
            <motion.p variants={fadeInUpVariants} className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">
              We reject randomized fitness fads. Every elite athlete and local lifter undergoes a structured, progress-led biological loop.
            </motion.p>
          </motion.div>

          {/* Interactive responsive timeline connection */}
          <div className="relative border-l-2 border-zinc-900 pl-6 sm:pl-10 space-y-16">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative group text-left"
            >
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-6 h-6 sm:w-10 sm:h-10 rounded-none bg-[#0B0B0B] border-2 border-[#E10600] flex items-center justify-center font-display font-black text-xs sm:text-sm text-glow-red group-hover:bg-[#E10600] transition-colors duration-350">
                1
              </div>
              <div className="space-y-2">
                <span className="font-space text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest">
                  DAY 01 / STRUCTURAL BASELINES
                </span>
                <h4 className="font-display font-black text-xl text-white uppercase italic group-hover:text-[#E10600] transition-colors">
                  BIOMETRIC PROFILE SCANNING
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  We use precise biometric screening methods to calculate muscle distribution ratios, metabolic starting points, and structural range limitations.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group text-left"
            >
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-6 h-6 sm:w-10 sm:h-10 rounded-none bg-[#0B0B0B] border-2 border-[#E10600] flex items-center justify-center font-display font-black text-xs sm:text-sm text-glow-red group-hover:bg-[#E10600] transition-colors duration-350">
                2
              </div>
              <div className="space-y-2">
                <span className="font-space text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest">
                  DAY 03 / CALORIC ASSIGNMENT
                </span>
                <h4 className="font-display font-black text-xl text-white uppercase italic group-hover:text-[#E10600] transition-colors">
                  MACRONUTRIENT & DIETARY SYNCHRONIZATION
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  Working directly with our head coaches to craft specialized dietary maps aligning exactly with physical muscle tissue building or metabolic shred targets.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group text-left"
            >
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-6 h-6 sm:w-10 sm:h-10 rounded-none bg-[#0B0B0B] border-2 border-[#E10600] flex items-center justify-center font-display font-black text-xs sm:text-sm text-glow-red group-hover:bg-[#E10600] transition-colors duration-350">
                3
              </div>
              <div className="space-y-2">
                <span className="font-space text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest">
                  WEEKLY / OVERLOAD DRILLS
                </span>
                <h4 className="font-display font-black text-xl text-white uppercase italic group-hover:text-[#E10600] transition-colors">
                  PLATE-LOADED STRENGTH PROGRESSION
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  Training sessions utilizing elite imported biomechanical systems. We monitor your mechanical tempo, tracking weight loads to generate consistent hypertrophy stimulus.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative group text-left"
            >
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-6 h-6 sm:w-10 sm:h-10 rounded-none bg-[#0B0B0B] border-2 border-[#E10600] flex items-center justify-center font-display font-black text-xs sm:text-sm text-glow-red group-hover:bg-[#E10600] transition-colors duration-350">
                4
              </div>
              <div className="space-y-2">
                <span className="font-space text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest">
                  MONTHLY / RETUNE METRICS
                </span>
                <h4 className="font-display font-black text-xl text-white uppercase italic group-hover:text-[#E10600] transition-colors">
                  REVISITING SYSTEM SPECIFICATIONS
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#A0A0A0] max-w-2xl leading-relaxed">
                  A monthly biometric review comparing muscle accumulation metrics against body composition percentages to adapt workouts and push past plateaus.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* 4. "THE BIOMECHANICAL EDGE" CORE ADVANTAGES (SCROLL TRIGGER ANIMATED) */}
      <section id="benefits-showroom" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#E10600]/3 blur-[140px] pointer-events-none" />

        {/* Section Heading with staggered reveal viewport triggers */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="text-left mb-16 max-w-3xl"
        >
          <motion.span variants={fadeInUpVariants} className="font-space font-black text-[#E10600] text-xs tracking-widest uppercase block">
            WHY BODY ZONE PATTOKI REIGNS SUPREME
          </motion.span>
          <motion.h2 variants={fadeInUpVariants} className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase italic tracking-tight mt-3">
            BIOMECHANICAL <span className="text-[#E10600] not-italic">PERFORMANCE</span> DESIGN
          </motion.h2>
          <motion.p variants={fadeInUpVariants} className="font-sans text-xs sm:text-sm text-[#B0B0B0] mt-3 leading-relaxed">
            Our gym floor has been engineered for maximum physical progression. 
            We replace useless gimmicks with pure scientific biomechanics designed to stimulate exact target fibers smoothly.
          </motion.p>
        </motion.div>

        {/* Grid of 6 Core advantages with scroll reveal staggered triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, idx) => (
            <motion.div 
              key={benefit.id}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
              className="p-8 bg-[#121212]/75 border border-zinc-900 hover:border-[#E10600]/30 transition-all duration-300 flex flex-col justify-between group rounded-none"
            >
              <div>
                <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {idx === 0 && <Flame className="w-5 h-5 text-[#E10600]" />}
                  {idx === 1 && <Award className="w-5 h-5 text-[#E10600]" />}
                  {idx === 2 && <Zap className="w-5 h-5 text-[#E10600]" />}
                  {idx === 3 && <Shield className="w-5 h-5 text-[#E10600]" />}
                  {idx === 4 && <Apple className="w-5 h-5 text-[#E10600]" />}
                  {idx === 5 && <TrendingUp className="w-5 h-5 text-[#E10600]" />}
                </div>
                <h4 className="font-display font-black text-white text-base tracking-wider uppercase italic group-hover:text-[#E10600] transition-colors">
                  {benefit.title}
                </h4>
                <p className="font-sans text-xs text-[#A0A0A0] mt-3 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-950/60 flex items-center gap-2 text-[9px] font-space font-black tracking-widest text-zinc-650 uppercase group-hover:text-white transition-colors">
                <span>VERIFIED SYSTEM SPEC</span>
                <CheckCircle className="w-3.5 h-3.5 text-[#E10600]/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 5. NEW HIGH-FIDELITY SECTION: DYNAMIC FACILITY RULES & PILLARS */}
      <section className="py-24 bg-[#0E0E0E] border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Callout block (5 cols) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainerVariants}
              className="lg:col-span-5 text-left space-y-6"
            >
              <motion.span variants={fadeInUpVariants} className="font-space font-black text-[#E10600] text-xs tracking-widest uppercase block">
                FACILITY OPERATIONAL CODES
              </motion.span>
              <motion.h2 variants={fadeInUpVariants} className="font-display font-black text-3xl sm:text-5xl text-white uppercase italic tracking-tight leading-none">
                THE PRESTIGE <br />
                <span className="text-[#E10600] not-italic">LIFESTYLE MATRIX</span>
              </motion.h2>
              <motion.p variants={fadeInUpVariants} className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Body Zone stands alone in Pattoki not only because of heavier weights but because we enforce strict sanitary, support, and community standards.
              </motion.p>

              <motion.div variants={fadeInUpVariants} className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-1 px-2 bg-zinc-900 text-glow-red font-space text-[10px] font-black border border-zinc-850">01</div>
                  <div>
                    <h5 className="font-display text-white text-sm uppercase italic font-bold">Biosecure Sanitization</h5>
                    <p className="font-sans text-xs text-zinc-500">Every machine, frame, and grip is sanitized three times daily by specialized cleaners.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-1 px-2 bg-zinc-900 text-glow-red font-space text-[10px] font-black border border-zinc-850">02</div>
                  <div>
                    <h5 className="font-display text-white text-sm uppercase italic font-bold">Locker Security Integrations</h5>
                    <p className="font-sans text-xs text-zinc-500">Custom mechanical key locks combined with continuous security cameras keep belongings secure.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Layout specifications display grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-6 bg-[#121212] border border-zinc-900 relative space-y-3"
              >
                <Cpu className="w-6 h-6 text-[#E10600]" />
                <h6 className="font-display font-black text-sm text-white uppercase italic">Biometrics Engine</h6>
                <p className="font-sans text-xs text-zinc-500">Continuous measurement of fat indices and bone mass targets to fine-tune athletic course setups.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-6 bg-[#121212] border border-zinc-900 relative space-y-3"
              >
                <Clock className="w-6 h-6 text-[#E10600]" />
                <h6 className="font-display font-black text-sm text-white uppercase italic">Continuous Access</h6>
                <p className="font-sans text-xs text-zinc-500">Flexible timings starting at 6:00 AM up to 11:00 PM for peak executives and early sunrise pushs.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-6 bg-[#121212] border border-zinc-900 relative space-y-3"
              >
                <Award className="w-6 h-6 text-[#E10600]" />
                <h6 className="font-display font-black text-sm text-white uppercase italic">Competition Platforms</h6>
                <p className="font-sans text-xs text-zinc-500">Dedicated Olympic platforms, competition bench configurations, and drop-safe rubber floors.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-6 bg-[#121212] border border-zinc-900 relative space-y-3"
              >
                <CheckCircle className="w-6 h-6 text-[#E10600]" />
                <h6 className="font-display font-black text-sm text-white uppercase italic">Expert Diet Supervision</h6>
                <p className="font-sans text-xs text-zinc-500">Access to clean supplement certifications and custom nutrition maps matching your metabolic baseline.</p>
              </motion.div>

            </div>

          </div>

        </div>
      </section>


      {/* 6. DYNAMIC INTERACTIVE GALLERY SECTION (BENTO GRID WITH TABS) */}
      <section id="gallery-showcase" className="py-24 bg-[#090909] border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div className="text-left">
              <motion.span variants={fadeInUpVariants} className="font-space font-black text-[#E10600] text-xs tracking-widest uppercase block">
                DIGITAL TOUR OF OUR ARENA
              </motion.span>
              <motion.h2 variants={fadeInUpVariants} className="font-display font-black text-3xl sm:text-5xl text-white uppercase italic tracking-tight mt-2">
                THE <span className="text-[#E10600] not-italic">REAL SHOWROOM</span> FLOOR
              </motion.h2>
            </div>

            {/* Filter Tabs on homepage - configured inline, scrollable on very narrow screens without dropping cardio below */}
            <motion.div variants={fadeInUpVariants} className="flex flex-row md:flex-wrap items-center overflow-x-auto whitespace-nowrap scrollbar-none gap-2 max-w-full pb-2 md:pb-0">
              {['all', 'facilities', 'weights', 'cardio'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveGalleryTab(tab)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-none cursor-pointer shrink-0 ${
                    activeGalleryTab === tab
                      ? 'text-white bg-[#E10600] scale-102 border-b-2 border-white font-black'
                      : 'text-zinc-300 bg-zinc-950/80 border border-zinc-950 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {tab === 'all' ? 'All Areas' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Bento layout structure with slide-up micro-animations */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-80 bg-zinc-950 overflow-hidden border border-zinc-900 text-left rounded-none"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale brightness-[85%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Luxury dynamic gradient display */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <span className="font-space text-[9px] font-black tracking-widest bg-[#E10600] text-white px-2 py-0.5 uppercase block w-fit">
                      {item.category}
                    </span>
                    <h4 className="font-display font-black text-white text-lg tracking-wider uppercase italic">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-zinc-400 max-w-xs leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>


      {/* 7. DYNAMIC INTERACTIVE TRANSFORMATION REVOLUTION COMPARE (SCROLL TRIGGER ANIMATED) */}
      <section className="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-[#E10600]/3 blur-[200px] pointer-events-none" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUpVariants} className="font-space font-black text-[#E10600] text-xs tracking-widest uppercase block mb-3">
            EVIDENCE-BASED TRANSFORMATION LOGS
          </motion.span>
          <motion.h2 variants={fadeInUpVariants} className="font-display font-black text-3xl sm:text-5xl text-white uppercase italic tracking-tight">
            BIOLOGIC <span className="text-[#E10600] not-italic">RECOMPOSITION</span>
          </motion.h2>
          <motion.p variants={fadeInUpVariants} className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-3">
            Real clients who trusted our meticulous strength overload structure in Pattoki.
          </motion.p>
        </motion.div>

        {/* Dynamic Comparison Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#121212]/95 border border-zinc-900 p-6 sm:p-10 relative rounded-none"
        >
          
          {/* Back/Next selector triggers */}
          <div className="absolute top-5 right-5 flex gap-2">
            <button 
              onClick={handlePrevTransformation}
              className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center hover:border-[#E10600] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Transformation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNextTransformation}
              className="w-10 h-10 bg-zinc-950 border border-zinc-800 flex items-center justify-center hover:border-[#E10600] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next Transformation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTransformationIdx}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
            >
              <div className="md:col-span-5 space-y-5">
                <span className="font-space text-[10px] font-black tracking-widest bg-zinc-950 text-zinc-500 px-3 py-1 border border-zinc-850 uppercase inline-block">
                  {transformationsData[activeTransformationIdx].achievement}
                </span>
                
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase italic">
                  {transformationsData[activeTransformationIdx].name}
                </h3>

                <div className="grid grid-cols-2 gap-4 font-sans text-xs">
                  <div className="p-3 bg-zinc-950 border border-zinc-900/80 text-left">
                    <span className="text-zinc-500 uppercase block font-bold text-[9px] tracking-wider font-space">TIMEFRAME</span>
                    <span className="text-[#E10600] font-black text-sm block mt-0.5">
                      {transformationsData[activeTransformationIdx].timeframe}
                    </span>
                  </div>
                  <div className="p-3 bg-zinc-950 border border-zinc-900/80 text-left">
                    <span className="text-zinc-500 uppercase block font-bold text-[9px] tracking-wider font-space">CLIENT AGE</span>
                    <span className="text-white font-black text-sm block mt-0.5">
                      {transformationsData[activeTransformationIdx].age} Years Old
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-sans text-xs text-zinc-300">
                      Initial Mass: <strong className="text-white font-bold">{transformationsData[activeTransformationIdx].initialWeight}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-sans text-xs text-zinc-300">
                      Final Mass: <strong className="text-white font-bold">{transformationsData[activeTransformationIdx].finalWeight}</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-zinc-800">
                    <Activity className="w-4 h-4 text-[#E10600] shrink-0 mt-0.5" />
                    <span className="font-sans text-xs italic text-zinc-400">
                      "{transformationsData[activeTransformationIdx].results}"
                    </span>
                  </div>
                </div>

                {/* Micro CTA link to join */}
                <div className="pt-4">
                  <button 
                    onClick={onJoinClick}
                    className="inline-flex items-center gap-2 font-display text-[10px] sm:text-xs font-black tracking-widest text-white hover:text-[#E10600] transition-colors uppercase group cursor-pointer"
                  >
                    <span>DRAFT YOUR OWN TRANSFORMATION</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Before / After comparisons panel */}
              <div className="md:col-span-7 grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden border border-zinc-900 bg-zinc-950">
                  <img 
                    src={transformationsData[activeTransformationIdx].beforeImg} 
                    alt="Before State"
                    className="w-full h-80 object-cover grayscale object-top select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-zinc-950/95 border border-zinc-805 px-3 py-1 font-space text-[9px] font-black text-zinc-550 tracking-wider">
                    BEFORE SETUP
                  </div>
                </div>
                <div className="relative group overflow-hidden border border-zinc-900 bg-zinc-950">
                  <img 
                    src={transformationsData[activeTransformationIdx].afterImg} 
                    alt="After State"
                    className="w-full h-80 object-cover object-top filter contrast-110 brightness-105 select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#E10600] px-3 py-1 font-space text-[9px] font-black text-white tracking-wider shadow-lg">
                    AFTER SYSTEM
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>


      {/* 8. REAL CLUB SUITE TESTIMONIALS (ANIMATIVE POPUPS) */}
      <section className="py-24 bg-[#090909] border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUpVariants} className="font-space font-black text-[#E10600] text-xs tracking-widest uppercase block mb-3">
              EXECUTIVE USER STATEMENTS
            </motion.span>
            <motion.h2 variants={fadeInUpVariants} className="font-display font-black text-3xl sm:text-5xl text-white uppercase italic tracking-tight">
              PATTOKI'S <span className="text-[#E10600] not-italic">VERIFIED VOICE</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {testimonialsData.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#121212]/55 border border-zinc-900/80 p-8 flex flex-col justify-between hover:border-[#E10600]/25 transition-all text-left rounded-none"
              >
                <div className="space-y-6">
                  {/* Professional Stars indicator */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E10600] text-[#E10600]" />
                    ))}
                  </div>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-8 pt-4 border-t border-zinc-90 w-full border-zinc-900/60">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 bg-zinc-950 shrink-0">
                    <img 
                      src={test.avatar} 
                      alt={test.name} 
                      className="w-full h-full object-cover scale-102 select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="font-display font-black text-sm text-white uppercase italic">
                      {test.name}
                    </h5>
                    <span className="font-space text-[9px] text-zinc-500 uppercase block tracking-wider mt-0.5">
                      {test.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 9. DYNAMIC FAQ ACCORDION */}
      <section className="py-24 sm:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUpVariants} className="font-space font-black text-[#E10600] text-xs tracking-widest uppercase block mb-3">
            GOT ANY BURNING INQUIRIES?
          </motion.span>
          <motion.h2 variants={fadeInUpVariants} className="font-display font-black text-3xl sm:text-5xl text-white uppercase italic tracking-tight">
            ACCORDION <span className="text-[#E10600] not-italic">FAQ FINDER</span>
          </motion.h2>
          <motion.p variants={fadeInUpVariants} className="font-sans text-xs sm:text-sm text-[#B0B0B0] max-w-xl mx-auto mt-3">
            Quick responses built dynamically on setups, scheduling, equipment access, and coaching divisions.
          </motion.p>
        </motion.div>

        {/* Collapsible FAQ containers */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
                className="bg-[#121212]/80 border border-zinc-900 hover:border-[#E10600]/30 transition-all duration-300 rounded-none"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-space text-[10px] font-black text-zinc-500 bg-zinc-950 px-2 py-1 uppercase shrink-0 border border-zinc-900">
                      0{idx + 1}
                    </span>
                    <span className="font-display font-black text-sm sm:text-base text-white hover:text-[#E10600] transition-colors uppercase italic tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className={`w-4 h-4 ${isExpanded ? 'text-[#E10600]' : 'text-zinc-500'}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-xs text-[#A0A0A0] leading-relaxed border-t border-zinc-950/65">
                        <p className="max-w-2xl text-zinc-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
