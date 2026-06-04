import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Menu, X, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import LogoImg from '../assets/images/gym_logo_1780606156071.png';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'membership', label: 'Memberships' },
    { id: 'programs', label: 'Programs' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'bmi', label: 'BMI' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="luxury-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#E10600]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <div 
              id="brand-logo"
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="relative flex items-center h-12 w-12 bg-zinc-950 p-1 border border-zinc-900 rounded-none overflow-hidden group-hover:border-[#E10600]/45 transition-all duration-300">
                <img
                  src={LogoImg}
                  alt="Body Zone Logo"
                  className="w-full h-full object-contain filter brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <span className="font-display font-black text-xl tracking-tighter text-white block leading-none">
                  BODY <span className="text-[#E10600]">ZONE</span>
                </span>
                <span className="font-space font-bold text-[8px] tracking-[0.25em] text-[#B8B8B8] uppercase block mt-1">
                  PATTOKI • EST. 2018
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white bg-[#E10600]/10 border border-[#E10600]/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Premium CTA & Hamburger */}
            <div className="flex items-center gap-4">
              <button
                id="header-cta"
                onClick={() => handleNavClick('membership')}
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-sm bg-gradient-to-r from-[#E10600] to-[#B31010] hover:from-[#ff1e1e] hover:to-[#C31010] text-white font-display text-xs font-extrabold tracking-widest uppercase transition-all duration-300 cursor-pointer group shadow-[0_4px_15px_rgba(225,6,0,0.35)] hover:shadow-[0_4px_25px_rgba(225,6,0,0.5)] border border-[#E10600]/10"
              >
                <span>JOIN CLUB</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-[#121212] transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col h-full justify-between pt-24 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-2 mt-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`py-3 px-5 text-left font-display text-lg font-black tracking-wider uppercase border-l-2 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-[#E10600]/15 border-[#E10600]'
                        : 'text-zinc-550 border-transparent hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-6 mt-8">
                <div className="p-4 rounded-none bg-[#121212] border border-[#E10600]/15 flex items-center gap-3 text-left">
                  <ShieldCheck className="w-5 h-5 text-[#E10600] shrink-0" />
                  <div>
                    <span className="font-display font-extrabold text-xs text-white block uppercase">Pattoki's Verified Gym</span>
                    <span className="font-sans text-[10px] text-zinc-500 block">Biosecure Certified Locker Equipment</span>
                  </div>
                </div>

                <button
                  id="mobile-header-cta"
                  onClick={() => handleNavClick('membership')}
                  className="w-full text-center py-4 rounded-none bg-[#E10600] text-white font-display text-xs font-black tracking-widest uppercase shadow-lg shadow-[#E10600]/15 cursor-pointer leading-none"
                >
                  JOIN THE CLUB DIRECTLY
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
