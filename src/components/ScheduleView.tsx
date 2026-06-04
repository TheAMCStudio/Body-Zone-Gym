import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, User } from 'lucide-react';
import { scheduleData } from '../data/gymData';

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

export default function ScheduleView() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState('Monday');

  const filteredClasses = scheduleData.filter((session) => session.day === selectedDay);

  return (
    <div id="schedule-canvas" className="py-12 sm:py-20 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            WEEKLY AGENDA TIMETABLE
          </motion.span>
        </div>
        <div className="overflow-hidden p-0.5">
          <motion.h2 
            variants={itemVariants} 
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase italic block"
          >
            CLASS <span className="text-[#E10600]">SCHEDULE</span>
          </motion.h2>
        </div>
        <motion.p 
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm text-[#B0B0B0] max-w-xl mx-auto mt-3 leading-relaxed"
        >
          Plan your training week. Select a day to view scheduled specialized classes, coaching areas, and mentors.
        </motion.p>
      </motion.div>

      {/* Weekday Switch Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-zinc-900">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 sm:px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              selectedDay === day
                ? 'text-white bg-[#E10600] border-b-2 border-white'
                : 'text-zinc-500 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            {day.substring(0, 3)}
          </button>
        ))}
      </div>

      {/* Class Sessions Timetable Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
              className="p-6 bg-[#121212]/90 border border-zinc-900 flex flex-col justify-between hover:border-[#E10600]/30 transition-all text-left"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-space text-[9px] font-black tracking-widest bg-zinc-950 text-zinc-500 px-2.5 py-1 uppercase">
                    {item.category}
                  </span>
                  <span className="font-space text-[10px] text-[#E10600] font-bold uppercase tracking-wider">
                    {item.room}
                  </span>
                </div>

                <h4 className="font-display font-black text-lg text-white uppercase italic tracking-tight">
                  {item.className}
                </h4>
              </div>

              {/* Time Slot & Trainer indicators */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-zinc-900/40 text-[11px] font-sans text-zinc-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <User className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>{item.trainer.split(' ').slice(-1)[0]}</span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 py-12 text-center text-zinc-500 font-sans text-sm">
            Rest Day. The main gym floor remains open for free dumbbells work.
          </div>
        )}
      </div>
    </div>
  );
}
