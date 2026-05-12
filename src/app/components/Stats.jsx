"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Success Rate", value: "99%", color: "text-blue-500" },
    { label: "Leads Generated", value: "7.4M+", color: "text-cyan-400" },
    { label: "ROI Increase", value: "40x", color: "text-blue-500" },
  ];

  return (
    <div className="relative w-full px-4 -mt-16 z-20 py-7"> 
    
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
      >
        <div className="bg-[#0a0a0a]/90 px-6 py-8 md:px-12 md:py-10 rounded-[15px] flex flex-col md:flex-row items-center justify-around gap-8">
          {stats.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <p className={`${item.color} text-3xl md:text-4xl font-black mb-1`}>{item.value}</p>
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">{item.label}</p>
              </div>
              
              {index !== stats.length - 1 && (
                <div className="hidden md:block w-[1px] h-12 bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </div>
     </motion.div>
    </div>
  );
}