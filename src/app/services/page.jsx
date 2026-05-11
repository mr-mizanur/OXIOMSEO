import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <main className="pt-32 bg-[#0a0a0a] min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Premium <span className="text-blue-500">SEO</span> Solutions
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
          "Strategies that don't just increase traffic, but grow your revenue."
        </p>
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto leading-relaxed">
          We provide a full suite of search engine optimization services designed to 
          outperform your competitors and dominate your industry's search landscape.
        </p>
      </div>

   
      <Services />

      <div className="pb-20" />
    </main>
  );
}