import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, Ruler, Sparkles, Trophy, Dumbbell, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function BmiCalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  
  // Weights (Kg internally, convert on fly to Lbs for slider)
  const [weightKg, setWeightKg] = useState<number>(75);
  // Heights (Cm internally, convert on fly to Inches for slider)
  const [heightCm, setHeightCm] = useState<number>(175);

  // Convert inputs
  const weightLbs = Math.round(weightKg * 2.20462);
  const heightInches = Math.round(heightCm * 0.393701);
  const feet = Math.floor(heightInches / 12);
  const inches = heightInches % 12;

  // Real-time BMI
  const bmi = weightKg / ((heightCm / 100) ** 2);
  const roundedBmi = parseFloat(bmi.toFixed(1));

  // Determine feedback categories
  let statusColor = "text-[#38BDF8]"; // Underweight Cyan
  let statusBg = "bg-[#38BDF8]/10";
  let statusBorder = "border-[#38BDF8]/20";
  let statusLabel = "Underweight";
  let strokeColor = "#38BDF8";
  let statusAdvice = "We suggest focusing on calibrated caloric surplus diets (hyper-nutrition) paired with progressive compound hypertrophy lifting.";
  let statusProg = "Hypertrophy & Elite Strength Division";

  if (roundedBmi >= 18.5 && roundedBmi < 25.0) {
    statusColor = "text-[#10B981]"; // Normal Emerald
    statusBg = "bg-[#10B981]/10";
    statusBorder = "border-[#10B981]/20";
    statusLabel = "Normal Weight";
    strokeColor = "#10B981";
    statusAdvice = "Excellent physical symmetry bounds! We suggest steady progressive loads and athletic functional conditioning.";
    statusProg = "Pro 1-on-1 Personal Coaching or Combat Conditioning";
  } else if (roundedBmi >= 25.0 && roundedBmi < 30.0) {
    statusColor = "text-[#F59E0B]"; // Overweight Amber
    statusBg = "bg-[#F59E0B]/10";
    statusBorder = "border-[#F59E0B]/20";
    statusLabel = "Overweight";
    strokeColor = "#F59E0B";
    statusAdvice = "We advise high-octane interval conditioning, metabolic fat-loss diets, and explosive cardiac compound routines.";
    statusProg = "High Octane Conditioning or Sunrise Power Lifting";
  } else if (roundedBmi >= 30.0) {
    statusColor = "text-[#E10600]"; // Obese Red
    statusBg = "bg-[#E10600]/10";
    statusBorder = "border-[#E10600]/20";
    statusLabel = "Obese";
    strokeColor = "#E10600";
    statusAdvice = "Safe, progress-led cardio circuits, guided joint-friendly kinetic movements, and highly strict macronutrient charts are recommended.";
    statusProg = "Guided Core Stability & Conditioning Circuit";
  }

  // Calculate needle rotation angle based on BMI. Range: 15 to 40 (180 degrees total)
  const minBmi = 15;
  const maxBmi = 40;
  const clampedBmi = Math.max(minBmi, Math.min(maxBmi, roundedBmi));
  const percentFraction = (clampedBmi - minBmi) / (maxBmi - minBmi);
  const needleRotation = -90 + (percentFraction * 180); // maps from -90deg to +90deg

  const handleWeightSliderChange = (val: number) => {
    if (unit === 'metric') {
      setWeightKg(val);
    } else {
      // Input is in lbs, convert to kg
      setWeightKg(Math.round((val / 2.20462) * 10) / 10);
    }
  };

  const handleHeightSliderChange = (val: number) => {
    if (unit === 'metric') {
      setHeightCm(val);
    } else {
      // Input is in inches, convert to cm
      setHeightCm(Math.round((val / 0.393701) * 10) / 10);
    }
  };

  const handleReset = () => {
    setWeightKg(75);
    setHeightCm(175);
    setUnit('metric');
  };

  return (
    <section 
      id="bmi-calculator" 
      className="py-12 sm:py-20 lg:py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#E10600]/5 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#E10600]/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Staggered Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden mb-2">
            <motion.span 
              variants={itemVariants}
              className="font-space font-black text-xs text-[#E10600] tracking-[0.3em] uppercase block"
            >
              METRIC ANALYSIS LABS
            </motion.span>
          </div>

          <div className="overflow-hidden p-0.5">
            <motion.h2 
              variants={itemVariants}
              className="font-display font-black text-3xl sm:text-5xl text-white uppercase italic tracking-tight leading-none block"
            >
              BIOMETRIC <span className="text-[#E10600]">BMI ACCORD</span>
            </motion.h2>
          </div>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 max-w-xl mx-auto leading-relaxed"
          >
            Drag the interactive biometric sliders to update your body mass classification index, metabolic ranges, and athletic targets in real-time.
          </motion.p>
        </motion.div>

        {/* BMI Calculator dynamic dashboard layout */}
        <motion.div 
          id="bmi-dashboard" 
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-5xl mx-auto rounded-none bg-[#121212]/90 border border-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.85)] grid grid-cols-1 lg:grid-cols-12 items-stretch"
        >
          
          {/* Controls Split Panel (7 columns) */}
          <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between text-left border-b lg:border-b-0 lg:border-r border-zinc-900" id="bmi-input-split">
            
            <div className="space-y-8">
              {/* Top controls: tab selector */}
              <div className="flex justify-between items-center pb-4 border-b border-zinc-900">
                <h3 className="font-display font-black text-base text-white uppercase tracking-wider flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#E10600] animate-pulse" /> TARGET CONTROLS
                </h3>
                
                {/* Unit Switch Toggle button */}
                <div className="flex gap-1 bg-zinc-950 p-1 border border-zinc-900">
                  <button
                    onClick={() => setUnit('metric')}
                    className={`px-3 py-1.5 text-[10px] font-space font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                      unit === 'metric'
                        ? 'bg-[#E10600] text-white'
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    METRIC (KG / CM)
                  </button>
                  <button
                    onClick={() => setUnit('imperial')}
                    className={`px-3 py-1.5 text-[10px] font-space font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                      unit === 'imperial'
                        ? 'bg-[#E10600] text-white'
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    IMPERIAL (LBS / FT IN)
                  </button>
                </div>
              </div>

              {/* Slider 1: Weight */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-space text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#E10600]" />
                    {unit === 'metric' ? 'BODY WEIGHT' : 'BODY MASS'}
                  </span>
                  
                  {/* Real-time value display with red accent */}
                  <span className="font-display font-black text-2xl text-white italic tracking-tight">
                    {unit === 'metric' ? (
                      <>
                        <span className="text-[#E10600] font-black">{Math.round(weightKg)}</span>
                        <span className="text-zinc-500 text-xs uppercase font-space tracking-wider ml-1">kg</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[#E10600] font-black">{weightLbs}</span>
                        <span className="text-zinc-500 text-xs uppercase font-space tracking-wider ml-1">lbs</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min={unit === 'metric' ? 30 : 66}
                    max={unit === 'metric' ? 180 : 400}
                    step={1}
                    value={unit === 'metric' ? Math.round(weightKg) : weightLbs}
                    onChange={(e) => handleWeightSliderChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-zinc-950 appearance-none rounded-none cursor-ew-resize accent-[#E10600] focus:outline-none border border-zinc-900"
                  />
                  <div className="flex justify-between text-[10px] font-space text-zinc-650 mt-1">
                    <span>{unit === 'metric' ? '30 kg' : '66 lbs'}</span>
                    <span>{unit === 'metric' ? '180 kg' : '400 lbs'}</span>
                  </div>
                </div>
              </div>

              {/* Slider 2: Height */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-space text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-[#E10600]" />
                    STATURE HEIGHT
                  </span>
                  
                  {/* Real-time value display */}
                  <span className="font-display font-black text-2xl text-white italic tracking-tight">
                    {unit === 'metric' ? (
                      <>
                        <span className="text-[#E10600] font-black">{Math.round(heightCm)}</span>
                        <span className="text-zinc-500 text-xs uppercase font-space tracking-wider ml-1">cm</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[#E10600] font-black">{feet}'{inches}"</span>
                        <span className="text-zinc-500 text-xs uppercase font-space tracking-wider ml-1">tall</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min={unit === 'metric' ? 100 : 39}
                    max={unit === 'metric' ? 220 : 86}
                    step={1}
                    value={unit === 'metric' ? Math.round(heightCm) : heightInches}
                    onChange={(e) => handleHeightSliderChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-zinc-950 appearance-none rounded-none cursor-ew-resize accent-[#E10600] focus:outline-none border border-zinc-900"
                  />
                  <div className="flex justify-between text-[10px] font-space text-zinc-650 mt-1">
                    <span>{unit === 'metric' ? '100 cm' : "3' 3\""}</span>
                    <span>{unit === 'metric' ? '220 cm' : "7' 2\""}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Action Panel Bottom */}
            <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-space text-zinc-500 uppercase font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Real-time Calculation Activated
              </div>
              
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 font-space text-[10px] font-black tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>DEFAULT SELECTIONS</span>
              </button>
            </div>
          </div>

          {/* Biometric Gauge Output Panel (5 columns) */}
          <div className="p-6 sm:p-10 lg:col-span-5 bg-gradient-to-b from-[#161616] via-[#0E0E0E] to-[#0A0A0A] flex flex-col justify-between items-center text-center relative" id="bmi-output-split">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#E10600]/5 blur-3xl pointer-events-none" />
            
            {/* Real-time Indicator Header */}
            <div className="w-full text-left sm:text-center">
              <span className="font-space text-[9px] text-[#E10600] font-black tracking-widest uppercase block mb-1">
                SYSTEM DIAGNOSTIC OUTCOME
              </span>
              <h4 className="font-display font-black text-xl text-white uppercase italic tracking-wider">
                BIOLOGIC GAUGE
              </h4>
            </div>

            {/* SLEEK GAUGE GRAPHICS CONTAINER */}
            <div className="my-8 w-full max-w-[280px] relative">
              <svg viewBox="0 0 200 120" className="w-full overflow-visible">
                <defs>
                  {/* Gauge Ring Color block Gradients */}
                  <linearGradient id="bmi-gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" />   {/* Underweight */}
                    <stop offset="35%" stopColor="#10B981" />  {/* Normal */}
                    <stop offset="70%" stopColor="#F59E0B" />  {/* Overweight */}
                    <stop offset="100%" stopColor="#E10600" /> {/* Obese */}
                  </linearGradient>
                </defs>

                {/* Substantially sized Track shadow ring */}
                <path
                  d="M 20 110 A 80 80 0 0 1 180 110"
                  fill="none"
                  stroke="#1B1B1B"
                  strokeWidth="16"
                  strokeLinecap="round"
                />

                {/* Main Color Gradient Ring Track */}
                <path
                  d="M 20 110 A 80 80 0 0 1 180 110"
                  fill="none"
                  stroke="url(#bmi-gauge-grad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  className="opacity-95"
                />

                {/* Threshold Category ticks */}
                {/* 18.5 Tick */}
                <circle cx="53.5" cy="51.5" r="2" fill="#000" />
                {/* 25 Tick */}
                <circle cx="100" cy="30" r="2" fill="#000" />
                {/* 30 Tick */}
                <circle cx="146.5" cy="51.5" r="2" fill="#000" />

                {/* Biometric Needle pointing system */}
                <g transform={`rotate(${needleRotation}, 100, 110)`} className="transition-transform duration-500 ease-out">
                  <polygon points="96,110 100,18 104,110" fill={strokeColor} />
                  <circle cx="100" cy="110" r="10" fill={strokeColor} />
                  <circle cx="100" cy="110" r="5" fill="#0B0B0B" />
                </g>
              </svg>

              {/* Float category markers beneath SVG ring */}
              <div className="absolute -bottom-1 left-0 right-0 flex justify-between px-2 font-space text-[8px] text-zinc-650 uppercase font-black tracking-widest">
                <span className="text-[#38BDF8]">15 / UNDER</span>
                <span className="text-[#10B981]">22 / NORM</span>
                <span className="text-[#E10600]">35 / OBESE</span>
              </div>
            </div>

            {/* Real-time calculated status feedback box */}
            <div className="w-full space-y-4">
              <div className="space-y-1">
                <span className="font-space text-[8px] text-zinc-500 font-extrabold uppercase tracking-widest block">
                  REAL-TIME BMI SCORE
                </span>
                
                {/* Huge glow numbers */}
                <div className="inline-flex items-center gap-2">
                  <span className="font-display font-black text-5xl text-white italic tracking-tighter text-glow-red">
                    {roundedBmi}
                  </span>
                  
                  {/* Mini-badge */}
                  <span className={`px-2.5 py-1 text-[9px] font-space font-black tracking-wider uppercase border ${statusBg} ${statusColor} ${statusBorder}`}>
                    {statusLabel}
                  </span>
                </div>
              </div>

              {/* Nutrition & Athletic Coach recommendations */}
              <div className="p-4 bg-zinc-950 border border-zinc-900/90 text-left space-y-3.5">
                <div className="space-y-1">
                  <span className="font-space text-[7.5px] text-zinc-500 font-black tracking-widest uppercase block">
                    BIOMECHANICAL EVALUATION:
                  </span>
                  <p className="font-sans text-[11px] text-zinc-300 leading-relaxed">
                    {statusAdvice}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-zinc-900 flex items-start gap-2.5">
                  <Dumbbell className={`w-4 h-4 ${statusColor} shrink-0`} />
                  <div>
                    <span className="font-space text-[7.5px] text-zinc-500 font-black tracking-widest uppercase block">
                      TARGET TRAINING COURSE:
                    </span>
                    <span className="font-display text-white text-[11px] font-extrabold uppercase tracking-wide block mt-0.5 italic">
                      {statusProg}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
