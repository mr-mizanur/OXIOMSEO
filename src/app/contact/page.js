"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "82145aaf-b1f3-4fcc-8834-5a0a3701c5b1"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const loadingToast = toast.loading("Sending your message...");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.update(loadingToast, { 
          render: "Message sent successfully! 🚀", 
          type: "success", 
          isLoading: false, 
          autoClose: 5000 
        });
        event.target.reset(); // ফরম রিসেট হবে
      } else {
        toast.update(loadingToast, { 
          render: "Something went wrong. Please try again.", 
          type: "error", 
          isLoading: false, 
          autoClose: 5000 
        });
      }
    } catch (error) {
      toast.update(loadingToast, { 
        render: "Network error. Please check your connection.", 
        type: "error", 
        isLoading: false, 
        autoClose: 5000 
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-4">
      <ToastContainer theme="dark" />
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Let's Scale Together
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to dominate the search results? Drop us a message and our SEO experts will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm mb-4">Our team is here to help you.</p>
              <p className="text-blue-400 font-medium">support@oxiomseo.com</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm mb-4">Mon-Fri from 9am to 6pm.</p>
              <p className="text-cyan-400 font-medium">+1 (555) 000-1234</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-400 text-sm mb-4">Come say hello at our office.</p>
              <p className="text-blue-500 font-medium">123 SEO Tower, Silicon Valley, CA</p>
            </div>
          </motion.div>

          {/* Contact Form with Web3Forms */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-blue-500" />
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input name="name" required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input name="email" required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Website URL</label>
                <input name="website" type="url" placeholder="https://yourwebsite.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all text-white" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">How can we help?</label>
                <textarea name="message" required rows="4" placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all resize-none text-white"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-500/20">
                Send Proposal <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}