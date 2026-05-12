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
        
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/60" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/30" />
        </div>
      </div>

      {/* Main Content */}
      <Success />
      
      {/* Bottom Spacer to prevent footer overlapping */}
      <div className="pb-20" />
    </main>
  );
}