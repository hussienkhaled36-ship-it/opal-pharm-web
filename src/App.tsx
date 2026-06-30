import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Process from '@/sections/Process';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
