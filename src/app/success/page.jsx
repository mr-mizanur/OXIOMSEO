import Success from "../components/Success";

export default function SuccessPage() {
  return (
    <main className="pt-32 bg-[#0a0a0a] min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Real Growth, <span className="text-blue-500">Real Results</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We don't just talk about SEO; we deliver it. Explore our success stories 
          and see how we helped brands dominate the digital landscape.
        </p>
        
        {/* Optional: Separator line */}
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full opacity-50" />
      </div>

      {/* Main Content */}
      <Success />
      
      {/* Bottom Spacer to prevent footer overlapping */}
      <div className="pb-20" />
    </main>
  );
}