/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  StaticStat, 
  Benefit, 
  Program, 
  ClassSession, 
  PricingPlan, 
  Trainer, 
  TransformationStory, 
  Testimonial, 
  FAQItem, 
  GalleryItem 
} from '../types';

export const statsData: StaticStat[] = [
  { value: "10,000+", label: "Sq. Ft. Elite Facility" },
  { value: "15+", label: "Certified Elite Coaches" },
  { value: "2,500+", label: "Transformed Lives" },
  { value: "50+", label: "Importer Premium Machines" },
  { value: "24/7", label: "Premium Support & Security" },
];

export const benefitsData: Benefit[] = [
  {
    id: "benefit-1",
    title: "World-Class Imported Strength Line",
    description: "Train on top-tier, biomechanically optimized imported strength lines and plate-loaded hammer machines design for optimal fiber recruitment.",
    iconName: "Flame"
  },
  {
    id: "benefit-2",
    title: "Pattoki's Elite Certified Trainers",
    description: "Work with certified sports nutritionists, powerlifting champions, and bodybuilding mentors dedicated to drafting your specific protocol.",
    iconName: "Award"
  },
  {
    id: "benefit-3",
    title: "Cinematic Aesthetics & lighting",
    description: "Elevated environment featuring motivating energetic contrast graphics, premium sound acoustics, and precise dynamic shadow lighting.",
    iconName: "Zap"
  },
  {
    id: "benefit-4",
    title: "Luxury Locker Rooms & Showers",
    description: "Refresh post-workout in high-end lockable cabinets, premium vanity stations, clean high-pressure showers, and dynamic steam suites.",
    iconName: "ShieldCheck"
  },
  {
    id: "benefit-5",
    title: "Customized Dietary & Supplement Plans",
    description: "Receive precision scientific macronutrient profiles, complete caloric targets, and safe supplementation charts to fast-track your visual goals.",
    iconName: "Apple"
  },
  {
    id: "benefit-6",
    title: "Advanced Cardio & Combat Arena",
    description: "Spacious treadmills, interactive stairmasters, spinning bikes, and a high-impact heavy bag arena optimized for high-octane performance.",
    iconName: "TrendingUp"
  }
];

export const programsData: Program[] = [
  {
    id: "prog-strength",
    title: "Hypertrophy & Elite Strength",
    tagline: "Unleash Pure Athletic Power",
    description: "A meticulously tailored program focusing on progression of compound lifts, volume specialization, and mechanical tension to sculpt maximum muscle volume.",
    intensity: "Elite",
    duration: "45-60 min/Session",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200",
    benefits: [
      "Accelerated muscular hypertrophy",
      "Progressive overload scheduling",
      "Neuromuscular power enhancement",
      "Injury prevention & joint stability coaching"
    ]
  },
  {
    id: "prog-conditioning",
    title: "High Octane Conditioning",
    tagline: "Shred and Define Your Physique",
    description: "A calorie-obliterating structure combining functional movements, high-intensity intervals (HIIT), and state-of-the-art oxygen threshold conditioning.",
    intensity: "High",
    duration: "45 min/Session",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200",
    benefits: [
      "Elevated metabolic rate for 24-48 hours",
      "Optimized cardiovascular endurance",
      "Stubborn body fat reduction",
      "Increased explosive stamina"
    ]
  },
  {
    id: "prog-personal",
    title: "Pro 1-on-1 Personal Training",
    tagline: "Private Elite Performance Consulting",
    description: "The crown-jewel of Body Zone Gym. Get a completely dedicated master coach monitoring every set, modifying mechanics in real-time, and structuring nutrition.",
    intensity: "Pro",
    duration: "60 min/Session",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200",
    benefits: [
      "Custom workouts aligned to your exact anatomy",
      "Daily biometric tracking & menu adjustments",
      "Absolute execution form safety",
      "High psychological motivation and accountability"
    ]
  },
  {
    id: "prog-combat",
    title: "Combat Conditioning & Boxing",
    tagline: "Mental Resiliency & Core Agility",
    description: "Build exceptional stamina and solid functional reflexes. Learn authentic boxing techniques, high-speed footwork drills, and heavy-bag conditioning routines.",
    intensity: "High",
    duration: "50 min/Session",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200",
    benefits: [
      "Unbelievable core power generation",
      "Laser hand-eye reaction mechanics",
      "Stress-relief through heavy bag drills",
      "Elite functional athletic mobility"
    ]
  },
  {
    id: "prog-bodyweight",
    title: "Core Stability & Kinetic Flow",
    tagline: "Agile, Balanced, Unstoppable",
    description: "Restore structural symmetry, optimize joint range-of-motion, and develop a bulletproof core through advanced mobility and functional flexibility.",
    intensity: "Moderate",
    duration: "50-60 min/Session",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
    benefits: [
      "Corrects modern structural postures",
      "Exceptional deep core abdominal tension",
      "Active recovery and flexibility releases",
      "Perfect physical and mental coordination"
    ]
  }
];

export const scheduleData: ClassSession[] = [
  // Monday
  { id: "s-1", className: "Sunrise Power Lifting", time: "06:00 AM - 07:00 AM", trainer: "Coach Hamza Butt", room: "Strength Floor", category: "Strength", day: "Monday" },
  { id: "s-2", className: "Metabolic HIIT Shred", time: "08:30 AM - 09:30 AM", trainer: "Sheraz Ali", room: "Cond. Studio", category: "Cardio", day: "Monday" },
  { id: "s-3", className: "Combat Mechanics 101", time: "05:00 PM - 06:15 PM", trainer: "Zeeshan Akram", room: "Combat Deck", category: "MMA", day: "Monday" },
  { id: "s-4", className: "Hypertrophy Specialization", time: "07:00 PM - 08:30 PM", trainer: "Coach Hamza Butt", room: "Hammer Strength Zone", category: "Strength", day: "Monday" },

  // Tuesday
  { id: "s-5", className: "Functional Kinetic Flow", time: "07:15 AM - 08:15 AM", trainer: "Ayesha Malik", room: "Flex Studio", category: "Core", day: "Tuesday" },
  { id: "s-6", className: "Cardio Assault Conditioning", time: "09:00 AM - 10:00 AM", trainer: "Sheraz Ali", room: "Cond. Studio", category: "Cardio", day: "Tuesday" },
  { id: "s-7", className: "Powerlifting Compound Mastery", time: "06:00 PM - 07:30 PM", trainer: "Sufyan Gujjar", room: "Olympic Platform", category: "Strength", day: "Tuesday" },
  { id: "s-8", className: "Fat-Torch HIIT Circuit", time: "08:00 PM - 09:00 PM", trainer: "Ayesha Malik", room: "Cond. Studio", category: "Cardio", day: "Tuesday" },

  // Wednesday
  { id: "s-9", className: "Sunrise Power Lifting", time: "06:00 AM - 07:00 AM", trainer: "Coach Hamza Butt", room: "Strength Floor", category: "Strength", day: "Wednesday" },
  { id: "s-10", className: "Combat Mechanics 101", time: "05:00 PM - 06:15 PM", trainer: "Zeeshan Akram", room: "Combat Deck", category: "MMA", day: "Wednesday" },
  { id: "s-11", className: "Hypertrophy Specialization", time: "07:00 PM - 08:30 PM", trainer: "Coach Hamza Butt", room: "Hammer Strength Zone", category: "Strength", day: "Wednesday" },

  // Thursday
  { id: "s-12", className: "Functional Kinetic Flow", time: "07:15 AM - 08:15 AM", trainer: "Ayesha Malik", room: "Flex Studio", category: "Core", day: "Thursday" },
  { id: "s-13", className: "Powerlifting Compound Mastery", time: "06:00 PM - 07:30 PM", trainer: "Sufyan Gujjar", room: "Olympic Platform", category: "Strength", day: "Thursday" },
  { id: "s-14", className: "Cardio Assault Conditioning", time: "08:00 PM - 09:00 PM", trainer: "Sheraz Ali", room: "Cond. Studio", category: "Cardio", day: "Thursday" },

  // Friday
  { id: "s-15", className: "Metabolic HIIT Shred", time: "08:30 AM - 09:30 AM", trainer: "Sheraz Ali", room: "Cond. Studio", category: "Cardio", day: "Friday" },
  { id: "s-16", className: "Combat Mechanics 101", time: "05:00 PM - 06:15 PM", trainer: "Zeeshan Akram", room: "Combat Deck", category: "MMA", day: "Friday" },
  { id: "s-17", className: "Hypertrophy Specialization", time: "07:00 PM - 08:30 PM", trainer: "Coach Hamza Butt", room: "Hammer Strength Zone", category: "Strength", day: "Friday" },

  // Saturday
  { id: "s-18", className: "Powerlifting Compound Mastery", time: "10:00 AM - 11:30 AM", trainer: "Sufyan Gujjar", room: "Olympic Platform", category: "Strength", day: "Saturday" },
  { id: "s-19", className: "Weekend Brutal Circuit", time: "04:00 PM - 05:15 PM", trainer: "Sheraz Ali", room: "Cond. Studio", category: "Cardio", day: "Saturday" },
  { id: "s-20", className: "Recovery & Active Mobility", time: "06:00 PM - 07:00 PM", trainer: "Ayesha Malik", room: "Flex Studio", category: "Core", day: "Saturday" },

  // Sunday
  { id: "s-21", className: "Sunday Heavy Duty Chest/Back", time: "11:00 AM - 12:30 PM", trainer: "Coach Hamza Butt", room: "Strength Floor", category: "Strength", day: "Sunday" },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-bronze",
    name: "Classic Membership",
    tagline: "Essential Access to Elite Equipment",
    price: "4,000",
    billingPeriod: "Month",
    isPopular: false,
    features: [
      "Full access to strength & cardio facilities",
      "Welcome fitness evaluation & biometric scan",
      "Locker room, dry cabinet, and shower access",
      "Complimentary high-speed WiFi",
      "Free premium filtered alkaline water station",
      "Safe and guided parking lot"
    ],
    ctaText: "Begin Classic Access"
  },
  {
    id: "plan-gold",
    name: "VIP Performance",
    tagline: "Pattoki's Premium Fitness Standard",
    price: "10,000",
    billingPeriod: "3 Months",
    isPopular: true,
    badge: "Most Demanded",
    features: [
      "EVERYTHING listed in Classic Elite Tier",
      "3 Complimentary 1-on-1 private coach evaluations",
      "Custom monthly macro & dietary supplement guide",
      "Full access to weekend team-level MMA classes",
      "Premium guest passes (2 per quarter year)",
      "Exclusive 10% discount on Body Zone apparel & bar"
    ],
    ctaText: "Secure VIP Performance"
  },
  {
    id: "plan-platinum",
    name: "Royal Executive Pro",
    tagline: "The Absolute Pinnacle of Body Zone",
    price: "24,000",
    billingPeriod: "Yearly",
    isPopular: false,
    features: [
      "Unrestricted 365 days of executive access",
      "Dedicated personal master coach (12 private lessons)",
      "Infinite biweekly body scanning & metric reporting",
      "Tailor-made customized premium hydration shaker bottle",
      "Exclusive VIP storage locker with custom lock system",
      "Family guest pass rights (6 times per year)",
      "Full medical grade posture & injury resistance review"
    ],
    ctaText: "Unlock Royal Executive"
  }
];

export const trainersData: Trainer[] = [
  {
    id: "t-hamza",
    name: "Coach Hamza Butt",
    role: "Head Coach & Classic Bodybuilding Pioneer",
    experience: "10+ Years Professional Mentorship",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600",
    specialties: ["Powerlifting Progression", "Advanced Hypertrophy Nutrition", "Contest Prep Coaching"],
    bio: "Hamza is the engineering powerhouse behind the design program mechanics at Body Zone Gym. He has trained national level athletes and successfully transformed 1,000+ local clients.",
    instagram: "https://instagram.com/bodyzone_butt"
  },
  {
    id: "t-ayesha",
    name: "Trainer Ayesha Malik",
    role: "Advanced HIIT & Female Fitness Expert",
    experience: "6+ Years Specialized Training",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600",
    specialties: ["Postural Corrective Alignment", "High-Torque Cardio Circuits", "Female Physiques Architecture"],
    bio: "Ayesha combines sports science insights with grueling interval workouts to construct functional stamina and sculpt exceptional athletic symmetry.",
    instagram: "https://instagram.com/bodyzone_ayesha"
  },
  {
    id: "t-sufyan",
    name: "Sufyan Gujjar",
    role: "Senior Strength Coach",
    experience: "8+ Years Elite Powerlifting",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600",
    specialties: ["Heavy Compound Progressive Load", "Knee/Joint Rehabilitation", "Grip Strength Mechanics"],
    bio: "Sufyan specializes in core barbell physics, guiding athletes on clean squats, optimal deadlifts, and bench efficiency safely and aggressively.",
    instagram: "https://instagram.com/bodyzone_sufyan"
  },
  {
    id: "t-sheraz",
    name: "Sheraz Ali",
    role: "High Mobility & Conditioning Specialist",
    experience: "5+ Years Performance Cardio",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600",
    specialties: ["Metabolic Threshold Workouts", "Agility Ladder Coordination", "Fat loss Science Protocol"],
    bio: "Sheraz is renowned for high energetic sessions that push heart rates cleanly. He transforms high stamina potentials into actual functional output.",
    instagram: "https://instagram.com/bodyzone_sheraz"
  }
];

export const transformationsData: TransformationStory[] = [
  {
    id: "tr-1",
    name: "Chaudhary Faisal",
    age: 29,
    timeframe: "180 Days",
    initialWeight: "96 kg",
    finalWeight: "78 kg",
    results: "-18kg Stout Fat Reduced & Core Muscle Definition Revealed",
    achievement: "Body Recomposition Champion",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
  },
  {
    id: "tr-2",
    name: "M. Umair Butt",
    age: 24,
    timeframe: "120 Days",
    initialWeight: "64 kg",
    finalWeight: "74 kg",
    results: "+10kg Pure Skeletal Lean Mass & Shoulder Width Widened",
    achievement: "Bulk progression specialization",
    beforeImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=400"
  },
  {
    id: "tr-3",
    name: "Usman Raza",
    age: 33,
    timeframe: "90 Days",
    initialWeight: "88 kg",
    finalWeight: "77 kg",
    results: "Rehabilitated lower-back pain & dropped waist from 38\" to 32\"",
    achievement: "Injury Recovery & Fitness",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Malik Shahzad",
    role: "Local Executive Member",
    quote: "Body Zone isn't just a gym; it is an incredible performance statement in Pattoki. The level of imported heavy machines here easily competes with elite wellness clubs of Lahore and Islamabad. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: "test-2",
    name: "Zainab Bibi",
    role: "High-Intensity Athlete",
    quote: "As a female workout enthusiast, finding an executive space with highly accommodating expert trainers was my primary goal. Trainer Ayesha keeps the sessions highly professional, clean, and extremely challenging.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  },
  {
    id: "test-3",
    name: "Rashid Mahmood",
    role: "Strength & Powerlifter",
    quote: "Coach Hamza Butt is a genius when it comes to power progression calculations. My deadlift form and max load has improved by 40kg safely in just four months! Incredible vibe.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "f-1",
    question: "What are the timings of Body Zone Gym Pattoki?",
    answer: "We are open Monday through Saturday from 06:00 AM to 11:00 PM, and Sunday from 10:00 AM to 05:00 PM. High-end personal coaching is accessible through early reservations.",
    category: "General"
  },
  {
    id: "f-2",
    question: "Do you have imported brand equipment?",
    answer: "Yes, 100%. We take supreme pride in hosting state-of-the-art imported strength line systems, hammer machines, plate-loaded specialized benches, and biomechanically safe linear leg-press sets designed for premium safety.",
    category: "Equipment"
  },
  {
    id: "f-3",
    question: "Is there a dedicated workout space or hours for ladies?",
    answer: "Absolutely. We pride ourselves on executing an extremely secure, comfortable environment. We offer specialized scheduling and personal trainers for females under certified guidance.",
    category: "General"
  },
  {
    id: "f-4",
    question: "Do you provide dietary/diet charts and protein consultation?",
    answer: "Yes. Every registration can avail an initial premium body fat metric check. We then build custom caloric charts, complete protein requirements, and guide on safe certifications of premium supplements.",
    category: "Nutrition"
  },
  {
    id: "f-5",
    question: "Is there any registration fee?",
    answer: "We offer a nominal one-time registration fee which includes premium membership smart card creation, physical structural consultation, and a private training evaluation.",
    category: "Membership"
  },
  {
    id: "f-6",
    question: "Where is Body Zone Gym located in Pattoki?",
    answer: "We are located in a highly premium, centrally-reached sector of Pattoki with ample dedicated secure security parking for cars and bikes. View our interactive location map in the Contact section below.",
    category: "General"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    category: "facilities",
    title: "Primary Strength Floor",
    description: "Premium hammer strength imported plates line under dynamic dark lights.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800"
  },
  {
    id: "g-2",
    category: "weights",
    title: "Pro Dumbbell Station",
    description: "Solid high-grade chrome and poly-rubber hex dumbbells ranging up to extreme lift loads.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800"
  },
  {
    id: "g-3",
    category: "cardio",
    title: "Elite Cardio Row",
    description: "High-spec modern treadmills with integrated calorie/heart sensors and interactive visual screens.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800"
  },
  {
    id: "g-4",
    category: "group-fitness",
    title: "Combat Rings & Punching Bags",
    description: "Impact absorption heavy bags area tailored for high-tempo box-shred routines.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800"
  },
  {
    id: "g-5",
    category: "facilities",
    title: "Luxury Locker Area",
    description: "High-security locks, clean dry vanity counters, and fully air-conditioned spaces.",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800"
  },
  {
    id: "g-6",
    category: "weights",
    title: "Olympic Deadlift Platform",
    description: "Anti-bounce heavy vulcanized rubber flooring with competition grade barbells.",
    image: "https://images.unsplash.com/photo-1623874514711-4f3b25814266?q=80&w=800"
  }
];
