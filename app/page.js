import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export const metadata = {
  title: 'Weboin ',
  description: 'A premium digital agency crafting intuitive UI/UX, scalable web applications, and strategic branding.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
