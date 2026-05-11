"use client";
import { motion } from "framer-motion";
import { Zap, BarChart3, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Technical SEO", desc: "Deep site audits to fix indexing issues.", icon: <Zap /> },
    { title: "Content Strategy", desc: "AI-powered keyword research.", icon: <BarChart3 /> },
    { title: "Authority Building", desc: "High-quality backlink strategies.", icon: <ShieldCheck /> },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24" id="services">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}