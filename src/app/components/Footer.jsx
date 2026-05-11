"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            OXIOM SEO
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering modern businesses with data-driven SEO strategies to dominate search results globally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Technical SEO</li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Content Marketing</li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Link Building</li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Keyword Research</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-blue-500" />
              hello@oxiomseo.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-blue-500" />
              +1 (555) 000-1234
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-500" />
              Silicon Valley, CA
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-4">Get the latest SEO insights.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all"
            />
            <button className="absolute right-2 top-1.5 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all">
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs text-center md:text-left">
          © {currentYear} Oxiom SEO Agency. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-gray-600">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}