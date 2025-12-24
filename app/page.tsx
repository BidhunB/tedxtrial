import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-[#eb0028] selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Content Spacer to demonstrate transparency/fixed navbar */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="h-[20vh]"></div>
        <h2 className="text-3xl font-bold text-white mb-6">Upcoming Talks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 h-64"></div>
           <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 h-64"></div>
           <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 h-64"></div>
        </div>
      </section>
    </main>
  );
}
