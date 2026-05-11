"use client";
import React from "react";
import { motion } from "framer-motion";
// একদম সেইফ আইকন যা সব ভার্সনে পাওয়া যায়
import { Share2, Users, Layout } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & SEO Strategist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Sarah Jenkins",
      role: "Technical SEO Expert",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "David Chen",
      role: "Content Marketing Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Emma Wilson",
      role: "Link Building Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24" id="team">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Meet The <span className="text-blue-500 font-black">Experts</span>
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          The masters behind your organic growth. Professional experts dedicated to your success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f0f0f] border border-white/5 group-hover:border-blue-500/50 transition-all duration-500">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay with Universal Icons */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10">
                <div className="flex gap-4">
                  {/* Share/Social Icon */}
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-blue-600 rounded-2xl flex items-center justify-center transition-all cursor-pointer">
                    <Share2 size={20} />
                  </div>
                  {/* Network/Linkedin Replacement */}
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-blue-600 rounded-2xl flex items-center justify-center transition-all cursor-pointer">
                    <Users size={20} />
                  </div>
                  {/* Website/Portfolio Replacement */}
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-blue-600 rounded-2xl flex items-center justify-center transition-all cursor-pointer">
                    <Layout size={20} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors uppercase">
                {member.name}
              </h3>
              <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-[0.2em] font-bold">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}