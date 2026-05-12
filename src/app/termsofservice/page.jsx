 "use client";
import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="text-sm font-mono uppercase tracking-widest text-gray-500">
            Agreement Version: {lastUpdated}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by <strong>OXIOM SEO</strong>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">2. Services Provided</h2>
            <p>
              OXIOM SEO offers digital marketing services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400 font-light">
              <li>Search Engine Optimization (SEO) & Technical Audits</li>
              <li>Pay-Per-Click (PPC) Management</li>
              <li>Content Marketing & Strategy</li>
              <li>Social Media Advertising</li>
            </ul>
          </section>

          <section className="bg-white/[0.03] p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">3. Performance Disclaimer</h2>
            <p>
              While we use industry-leading strategies, <strong>OXIOM SEO</strong> does not guarantee specific rankings or instant revenue growth. Search engine algorithms change frequently, and results may vary based on market competition and business niche.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">4. Payment & Billing</h2>
            <p>
              Clients agree to pay all fees specified in their service agreement. Failure to make timely payments may result in the temporary suspension of services. All fees are non-refundable unless stated otherwise in a specific contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">5. Client Responsibilities</h2>
            <p>
              To achieve optimal results, clients must provide necessary access (Google Search Console, Analytics, Website Admin) and approve strategies in a timely manner. OXIOM SEO is not responsible for delays caused by the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">6. Intellectual Property</h2>
            <p>
              Unless otherwise agreed, all custom strategies, reports, and campaign data created for the client remain the intellectual property of the client upon full payment. OXIOM SEO retains the right to use anonymized data for case studies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">7. Termination</h2>
            <p>
              Either party may terminate the service agreement with a written notice [e.g., 30 days]. Upon termination, OXIOM SEO will hand over all paid-for deliverables and cease all automated marketing activities.
            </p>
          </section>

          {/* Legal Footer */}
          <footer className="pt-10 border-t border-white/10 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Legal Jurisdiction</p>
                <p className="text-white font-medium">Compliance: International Digital Laws</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Contact Support</p>
                <a href="hello.sadekurrahman@gmail.com" className="text-blue-500 font-mono font-bold hover:text-white transition-colors">
                  hello.sadekurrahman@gmail.com
                </a>
              </div>
            </div>
          </footer>

        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;