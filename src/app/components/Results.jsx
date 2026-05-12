"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const milestones = [
  {
    id: 1,
    title: "Massive Organic Growth",
    stats: "7.4M Impressions",
    description: "Scaled a brand from zero to 7.4 million views using advanced technical SEO.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQEvdAUyGcbKtA/feedshare-shrink_800/B56Z4NSlG7HEAg-/0/1778339435485?e=1779926400&v=beta&t=RDhNb5HPfCNwTswnyWTGoOfkuvT_im7cG2tk82lC-Hw",
  },
  {
    id: 2,
    title: "1M Milestone Impressions",
    stats: "1.02M Impressions",
    description: "Strategic keyword targeting leads to 1M organic clicks.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQEScYkiuC2TqQ/feedshare-shrink_800/B56Z3NDWwAGoAc-/0/1777261702360?e=1779926400&v=beta&t=K2v6-ZRvn7OWI1upw5jw-bHJYRO14ihlxzHjZOYEUMc",
  },
  {
    id: 3,
    title: "E-commerce Dominance",
    stats: "Traffic Spike",
    description: "Consistent upward traffic trend for e-commerce platforms.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHzI61c5PVqkg/feedshare-shrink_800/B56ZuRk615HAAg-/0/1767673934060?e=1779926400&v=beta&t=fD7zKFeXrjEWg9pIW65glGpxK0L6u3X8CUIXsKY3GTU",
  },
  {
    id: 4,
    title: "Global Visibility",
    stats: "High Impact",
    description: "Comprehensive marketing for global markets.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQEW3tB8ghWDxQ/feedshare-shrink_800/B56ZUXb__9HQAk-/0/1739854972932?e=1779926400&v=beta&t=Ly0Crb-lQ2_2IOcSHK153vswmdAEs-Ia_WxY-HY47h4",
  }
];

export default function Results() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Updated Header with Sub-text */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            Case Studies
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6"
          >
            Our <span className="text-blue-600">Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We don’t just promise growth; we engineer it. Explore how we’ve scaled brands to millions of impressions and beyond.
          </motion.p>
        </div>

      
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {milestones.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] overflow-hidden"
            >
              <div className="p-8">
                <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-xs mb-4">
                  {item.stats}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="relative rounded-2xl overflow-hidden border border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
        <div className="mt-20 text-center">
          <Link href='/contact' className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">
            Scale My Brand Now
          </Link>
        </div>
      </div>
    </section>
  );
}