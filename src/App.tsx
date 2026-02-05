import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#022c22',
      color: '#ecfdf5',
    }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
