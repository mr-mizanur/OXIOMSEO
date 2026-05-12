"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Sadekur Rahman",
    role: "Founder & Lead Strategist",
    image: " data:image/jpeg;base64,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",
    isFounder: true,
    bio: "With over 10 years of experience in technical SEO, Sadekur has helped 500+ brands scale their organic traffic. He is a pioneer in data-driven search marketing and automation.",
  },
  { id: 2, name: "Ariful Islam", role: "SEO Analyst", isFounder: false },
  { id: 3, name: "Tania Akter", role: "Content Lead", isFounder: false },
  { id: 4, name: "Kamrul Hasan", role: "Link Expert", isFounder: false },
  { id: 5, name: "Mehedi Hasan", role: "Technical Specialist", isFounder: false },
  { id: 6, name: "Sumaiya Jahan", role: "Data Scientist", isFounder: false },
  { id: 7, name: "Rakib Ahmed", role: "UI Designer", isFounder: false },
  { id: 8, name: "Fahim Shahriar", role: "Web Dev", isFounder: false },
  { id: 9, name: "Nusrat Sharmin", role: "Success Manager", isFounder: false },
  { id: 10, name: "Zubayer Bin Riaz", role: "SEO Intern", isFounder: false },
];

export default function Team() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="space-y-16">
        
        
        {teamMembers.filter(m => m.isFounder).map((founder) => (
          <motion.div 
            key={founder.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-transparent p-8 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col md:flex-row gap-10 items-center shadow-2xl"
          >
           
            <img 
              src={founder.image} 
              alt={founder.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />

        
            <div className="flex-1 text-center md:text-left">
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                The Visionary
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 italic uppercase">
                {founder.name}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl border-l-2 border-blue-500 pl-6">
                {founder.bio}
              </p>
              
            
              <div className="flex justify-center md:justify-start gap-8 font-bold text-xs tracking-widest uppercase">
                <a href="https://www.linkedin.com/in/mr-sadekur/" className="text-gray-500 hover:text-white transition-colors"><FaLinkedin /></a>
                <a href="https://sadekurrahman.com/" className="text-gray-500 hover:text-white transition-colors"><FaGoogle /></a>
                
              </div>
            </div>
          </motion.div>
        ))}

        {/* Separator */}
        <div className="flex items-center gap-4 py-4">
          <div className="h-px flex-1 bg-white/5"></div>
          <span className="text-gray-700 text-[10px] font-black uppercase tracking-[0.5em]">The Core Team</span>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        {/* Employees Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {teamMembers.filter(m => !m.isFounder).map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-[1.5rem] text-center group transition-all"
            >
              <div className="text-blue-500 font-mono text-[10px] mb-2 opacity-50 group-hover:opacity-100 transition-opacity italic">
                MEM-ID: {member.id.toString().padStart(2, '0')}
              </div>
              <h4 className="text-white font-bold text-sm mb-1">{member.name}</h4>
              <div className="w-8 h-[1px] bg-blue-600 mx-auto my-2 group-hover:w-16 transition-all"></div>
              <p className="text-gray-600 text-[9px] uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}