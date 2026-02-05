import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      color: '#1f2937',
    }}>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}