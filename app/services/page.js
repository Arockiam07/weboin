import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Contact from '../components/Contact';

export const metadata = {
  title: 'Our Services | Weboin',
  description: 'Discover the wide range of design and development services we offer.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Decorative top background elements */}
      <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-blue-50/80 via-purple-50/30 to-white -z-10 pointer-events-none" />
      
      <div className="pt-20">
        <Services />
      </div>
      
      {/* Dynamic CTA Breakout Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-30 -ml-20 -mb-20"></div>
          
          <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Need a custom approach?
          </h2>
          <p className="relative z-10 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We understand that every business is unique. Beyond our core services, our engineering teams are ready to craft bespoke solutions to overcome your most complex technical challenges.
          </p>
          <a href="#contact" className="relative z-10 inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 font-bold rounded-full hover:scale-105 hover:bg-gray-50 transition-all duration-300 shadow-xl">
            Discuss Your Specific Needs
          </a>
        </div>
      </div>

      <Contact />
    </main>
  );
}
