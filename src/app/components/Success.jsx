"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target } from "lucide-react";

export default function Success() {
  const cases = [
    {
      company: "TechFlow Inc.",
      result: "+145% Traffic",
      duration: "6 Months",
      icon: <Users className="text-blue-500" />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      company: "EcoStore",
      result: "Top 3 Ranking",
      duration: "4 Months",
      icon: <Target className="text-cyan-500" />,
      color: "from-cyan-500/20 to-transparent"
    },
    {
      company: "SaaSify",
      result: "10x Lead Gen",
      duration: "8 Months",
      icon: <TrendingUp className="text-blue-400" />,
      color: "from-blue-400/20 to-transparent"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24" id="success">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Real Results for <span className="text-blue-500">Real Businesses</span>
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We don't just talk about rankings; we deliver measurable growth that impacts your bottom line.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-[2rem] bg-gradient-to-b ${item.color} border border-white/5 overflow-hidden group`}
          >
            {/* Animated Graph Line Mockup */}
            <div className="absolute bottom-0 left-0 w-full h-24 opacity-20 group-hover:opacity-40 transition-opacity">
               <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    d="M0,80 Q25,70 40,40 T70,30 T100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-500"
                  />
               </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#0f0f0f] rounded-xl flex items-center justify-center mb-6 border border-white/10">
                {item.icon}
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1">{item.company}</h3>
              <p className="text-3xl font-bold mb-4 text-white">{item.result}</p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Achieved in {item.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}