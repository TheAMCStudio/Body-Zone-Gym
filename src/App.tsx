import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import MembershipView from './components/MembershipView';
import ProgramsView from './components/ProgramsView';
import TrainersView from './components/TrainersView';
import ScheduleView from './components/ScheduleView';
import ContactView from './components/ContactView';
import BmiCalculator from './components/BmiCalculator';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState('');

  // Sync state with location hash for dynamic deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about') {
        setCurrentPage('about');
      } else if (hash === '#/membership') {
        setCurrentPage('membership');
      } else if (hash === '#/programs') {
        setCurrentPage('programs');
      } else if (hash === '#/trainers') {
        setCurrentPage('trainers');
      } else if (hash === '#/schedule') {
        setCurrentPage('schedule');
      } else if (hash === '#/contact') {
        setCurrentPage('contact');
      } else if (hash === '#/bmi') {
        setCurrentPage('bmi');
      } else {
        setCurrentPage('home');
      }
      // Guarantee scrolling to coordinates top on page swap
      window.scrollTo({ top: 0 });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    if (pageId === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${pageId}`;
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutView />;
      case 'membership':
        return (
          <MembershipView 
            onJoinPlan={(planName) => {
              setSelectedPlan(planName);
              handleNavigate('contact');
            }} 
          />
        );
      case 'programs':
        return (
          <ProgramsView 
            onSelectProgram={(programName) => {
              setSelectedPlan(`Inquiry: ${programName}`);
              handleNavigate('contact');
            }} 
          />
        );
      case 'trainers':
        return (
          <TrainersView 
            onBookTrainer={(trainerName) => {
              setSelectedPlan(`Personal Training: ${trainerName}`);
              handleNavigate('contact');
            }} 
          />
        );
      case 'schedule':
        return <ScheduleView />;
      case 'bmi':
        return <BmiCalculator />;
      case 'contact':
        return (
          <ContactView 
            preselectedPlan={selectedPlan} 
            onClearPlan={() => setSelectedPlan('')} 
          />
        );
      case 'home':
      default:
        return (
          <HomeView 
            onJoinClick={() => handleNavigate('membership')} 
          />
        );
    }
  };

  return (
    <div id="full-app-root" className="bg-[#0B0B0B] text-white font-sans antialiased selection:bg-[#E10600] selection:text-white flex flex-col min-h-screen">
      
      {/* 1. Transparent Blur Fixed Navigation HUD */}
      <Navigation 
        activeSection={currentPage} 
        onNavigate={handleNavigate} 
      />

      {/* 2. Primary Page-Level Body Content (Animated Swap) */}
      <main id="primary-content-viewport" className="flex-grow pt-24 sm:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Luxury Standard Brand Footer */}
      <Footer onLinkClick={handleNavigate} />

      {/* 4. WhatsApp / Floating Back-To-Top support hooks */}
      <FloatingActions />

      {/* Visual background atmospheric elements */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] bg-repeat custom-noise" />
    </div>
  );
}
