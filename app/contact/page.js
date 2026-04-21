import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

export const metadata = {
  title: 'Contact Us | Weboin',
  description: 'Get in touch with us for your next project.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
    </main>
  );
}
