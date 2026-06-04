/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'programs' | 'schedule' | 'membership' | 'trainers' | 'gallery' | 'contact';

export interface StaticStat {
  value: string;
  label: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  intensity: 'High' | 'Elite' | 'Moderate' | 'Pro';
  duration: string;
  image: string;
  benefits: string[];
}

export interface ClassSession {
  id: string;
  className: string;
  time: string; // e.g. "06:00 AM - 07:00 AM"
  trainer: string;
  room: string;
  category: 'Strength' | 'Cardio' | 'MMA' | 'Core';
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  billingPeriod: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  specialties: string[];
  bio: string;
  instagram: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  timeframe: string;
  initialWeight: string;
  finalWeight: string;
  results: string;
  achievement: string;
  beforeImg: string;
  afterImg: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  category: 'facilities' | 'weights' | 'cardio' | 'group-fitness';
  title: string;
  description: string;
  image: string;
}
