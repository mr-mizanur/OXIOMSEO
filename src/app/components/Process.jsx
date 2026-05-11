"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      desc: "We perform a deep dive into your website architecture and competitor landscape to find gaps."
    },
    {
      number: "02",
      title: "Strategy Planning",
      desc: "Custom keyword research and content mapping designed to target high-intent customers."
    },
    {
      number: "03",
      title: "Technical SEO",
      desc: "Optimizing site speed, mobile-friendliness, and fixing crawl errors for peak performance."
    },
    {
      number: "04",
      title: "On-Page Optimization",
      desc: "Refining meta tags, headers, and internal linking to align with Google's latest algorithms."
    },
    {
      number: "05",
      title: "Authority Building",
      desc: "Acquiring high-quality, niche-relevant backlinks to boost your domain authority."
    },
    {
      number: "06",
      title: "Monitoring & ROI",
      desc: "Continuous tracking and performance reporting to ensure maximum return on investment."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Strategic <br /> 
            <span className="text-blue-500 font-black">SEO Roadmap</span>
          </motion.h2>
          <p className="text-gray-400">
            A fully transparent, data-driven execution plan designed to dominate search engine results.
          </p>
        </div>
        <div className="hidden md:block text-8xl font-black text-white/5 select-none">
          WORKFLOW
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-blue-500/50 transition-all overflow-hidden"
          >
            {/* Hover Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-3xl group-hover:bg-blue-600/20 transition-all" />
            
            <div className="text-4xl font-black text-blue-500/20 mb-6 group-hover:text-blue-500 transition-colors">
              {step.number}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}