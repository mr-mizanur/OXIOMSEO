import Team from "../components/Team";


export default function TeamPage() {
  return (
    <main className="pt-32 bg-[#0a0a0a] min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-white mb-4">Our Creative <span className="text-blue-500">Minds</span></h2>
        <p className="text-gray-500">The people making SEO magic happen every day.</p>
      </div>
       <Team />
    </main>
  );
}