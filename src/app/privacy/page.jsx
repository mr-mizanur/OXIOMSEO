"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const lastUpdated = "May 12, 2026";

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 italic uppercase tracking-tighter">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-sm font-mono uppercase tracking-widest text-gray-500">
            Last Updated: {lastUpdated}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">1. Introduction</h2>
            <p>
              Welcome to <strong>OXIOM SEO</strong>. We value your privacy and are committed to protecting your personal data. This policy outlines how we handle information when you visit our website or engage with our digital marketing services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Identity Data:</strong> Name, business name, and job title.</li>
              <li><strong>Contact Data:</strong> Email address, phone number, and social media handles.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, time zone settings, and operating system.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and marketing services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">3. How We Use Your Data</h2>
            <p className="mb-4">We use your information to provide and improve our services, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Executing SEO strategies and digital marketing campaigns.</li>
              <li>Responding to inquiries via contact forms.</li>
              <li>Analyzing website traffic via Google Analytics and Meta Pixel.</li>
              <li>Sending periodic newsletters or service updates (with your consent).</li>
            </ul>
          </section>

          <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">4. Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your experience. These are small files stored on your device that help us understand user behavior. You can disable cookies in your browser settings, though some features of our site may stop functioning.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">5. Third-Party Disclosure</h2>
            <p>
              We do <strong>not</strong> sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">6. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, please remember that no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data held by OXIOM SEO. If you wish to exercise these rights, please contact us at the email provided below.
            </p>
          </section>

          {/* Contact Box */}
          <footer className="pt-10 border-t border-white/10 mt-20">
            <div className="bg-blue-600/10 border border-blue-600/20 p-8 rounded-[2rem]">
              <h3 className="text-white font-bold mb-2">Questions regarding this policy?</h3>
              <p className="text-sm text-gray-400 mb-4">Reach out to our compliance team:</p>
              <a 
                href="mailto:hello.sadekurrahman@gmail.com" 
                className="text-blue-500 font-mono font-bold hover:underline"
              >
                hello.sadekurrahman@gmail.com
              </a>
            </div>
          </footer>

        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;