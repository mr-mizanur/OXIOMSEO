import Team from "../components/Team";


export default function TeamPage() {
  return (
    <main className="pt-32 bg-[#0a0a0a] min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-white mb-4">Our Creative <span className="text-blue-500">Minds</span></h2>
        <p className="text-gray-500">The people making SEO magic happen every day.</p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/60" />
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-blue-600/30" />
        </div>
       <Team />
    </main>
  );
}