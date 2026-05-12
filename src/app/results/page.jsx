"use client"; // এই লাইনটি অবশ্যই সবার উপরে থাকতে হবে

import React, { useEffect, useState } from "react";
import Results from "../components/Results";
import { motion } from "framer-motion";

export default function ResultsPage() {
  // Hydration এরর এড়ানোর জন্য মাউন্ট চেক (Turbopack এর জন্য সেফ)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <main className="bg-[#0a0a0a] min-h-screen" />;

  return (
    <main className="pt-32 bg-[#0a0a0a] min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] mb-4 block"
        >
          Proven Track Record
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-8xl font-black text-white mb-8 uppercase italic tracking-tighter"
        >
          Real Data. <span className="text-blue-600">Real Growth.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
        >
          We don't believe in vanity metrics or empty promises. We believe in 
          <strong> Google Search Console</strong> live data. Below are documented 
          milestones where we transformed stagnant sites into multi-million impression assets.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-600 mt-8 text-sm uppercase tracking-widest font-bold border-l-2 border-blue-600 inline-block pl-4"
        >
          Witness the impact of data-driven performance marketing.
        </motion.p>
      </div>

       <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/60" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/30" />
        </div>

      <Results />

      <div className="pb-20" />
    </main>
  );
}