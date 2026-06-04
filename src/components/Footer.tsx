/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import LogoImg from '../assets/images/gym_logo_1780606156071.png';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="luxury-footer" 
      className="bg-[#0B0B0B] border-t border-zinc-900/80 pt-16 pb-8 text-left relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF1E1E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-900/60">
          
          {/* Logo Brand info (4 columns) */}
          <div className="md:col-span-4 space-y-6" id="footer-logo-block">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onLinkClick('home')}>
              <div className="relative flex items-center h-12 w-12 bg-zinc-950 p-1 border border-zinc-900 rounded-none overflow-hidden group-hover:border-[#E10600]/45 transition-all duration-300">
                <img
                  src={LogoImg}
                  alt="Body Zone Logo"
                  className="w-full h-full object-contain filter brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tighter text-white block">
                  BODY <span className="text-[#E10600]">ZONE</span>
                </span>
                <span className="font-space text-[8px] tracking-[0.2em] text-zinc-500 block mt-0.5">
                  PATTOKI • EST. 2018
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-zinc-400 font-medium leading-relaxed max-w-sm">
              Body Zone Gym is the ultimate statement of physical culture in Pattoki. We combine state-of-the-art imported hardware and custom certified coaching.
            </p>

            {/* Social channels bar */}
            <div className="flex items-center gap-2">
              <a 
                href="https://facebook.com/bodyzone_pattoki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-900 hover:border-[#FF1E1E] hover:text-[#FF1E1E] text-zinc-500 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/bodyzone_pattoki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-900 hover:border-[#FF1E1E] hover:text-[#FF1E1E] text-zinc-500 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/bodyzone_pattoki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-900 hover:border-[#FF1E1E] hover:text-[#FF1E1E] text-zinc-500 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="YouTube Link"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Section (3 columns) */}
          <div className="md:col-span-3 space-y-4" id="footer-navigation-links">
            <h4 className="font-space text-[10px] text-white font-black uppercase tracking-widest leading-none">
              FACILITY NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <button 
                  onClick={() => onLinkClick('home')} 
                  className="text-zinc-400 hover:text-[#E10600] transition-colors cursor-pointer"
                >
                  Primary Arena (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLinkClick('about')} 
                  className="text-zinc-400 hover:text-[#E10600] transition-colors cursor-pointer"
                >
                  Story of Body Zone (About)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLinkClick('membership')} 
                  className="text-zinc-400 hover:text-[#E10600] transition-colors cursor-pointer"
                >
                  Bespoke Membership Plans
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLinkClick('programs')} 
                  className="text-zinc-400 hover:text-[#E10600] transition-colors cursor-pointer"
                >
                  Elite Divisions (Programs)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLinkClick('trainers')} 
                  className="text-zinc-400 hover:text-[#E10600] transition-colors cursor-pointer"
                >
                  Professional Coaches
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLinkClick('schedule')} 
                  className="text-zinc-400 hover:text-[#E10600] transition-colors cursor-pointer"
                >
                  Class Schedules Timetable
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onLinkClick('contact')} 
                  className="text-zinc-400 hover:text-[#E10600] transition-colors cursor-pointer"
                >
                  Contact & Location Map
                </button>
              </li>
            </ul>
          </div>

          {/* Core Areas (3 columns) */}
          <div className="md:col-span-2 space-y-4" id="footer-coaching-divisions">
            <h4 className="font-space text-[10px] text-white font-black uppercase tracking-widest leading-none">
              DIVISIONS
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-zinc-400">
              <li className="hover:text-white transition-colors">Hypertrophy Strength</li>
              <li className="hover:text-white transition-colors">Cardio Assault HIIT</li>
              <li className="hover:text-white transition-colors">Combat & MMA Deck</li>
              <li className="hover:text-white transition-colors">1-on-1 Personal Consulting</li>
              <li className="hover:text-white transition-colors">Core Active Stability</li>
            </ul>
          </div>

          {/* Quick Contact Block (3 columns) */}
          <div className="md:col-span-3 space-y-4" id="footer-quick-coord">
            <h4 className="font-space text-[10px] text-white font-black uppercase tracking-widest leading-none">
              COORDINATES
            </h4>
            <ul className="space-y-3 font-sans text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E10600] shrink-0" />
                <span>Main Allama Iqbal Road, Center Market Sector, Pattoki, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E10600] shrink-0" />
                <span>+92-300-888-ZONE</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E10600] shrink-0" />
                <span>support@bodyzonepattoki.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing details and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-650" id="footer-legal">
          <p>© {currentYear} Body Zone Gym Pattoki. All Rights Reserved. Built to elite performance standards.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> BIOSECURITY STANDARD CERTIFIED
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
