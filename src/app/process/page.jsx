import Process from "../components/Process";

export default function ProcessPage() {
  return (
    <main className="pt-32 bg-[#0a0a0a] min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Our <span className="text-blue-500">Roadmap</span> to Success
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Transparency is our core value. Here is a clear, step-by-step breakdown 
          of how we take your website from zero to hero.
        </p>
        
       
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/60" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/30" />
        </div>
      </div>

    
      <Process />

   
      <div className="pb-20" />
    </main>
  );
}