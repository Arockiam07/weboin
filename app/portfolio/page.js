import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

export const metadata = {
  title: 'Portfolio | Weboin',
  description: 'Explore our latest design and development projects.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <Portfolio />
      </div>
    </main>
  );
}
