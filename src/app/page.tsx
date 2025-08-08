import Hero from '@/components/home-layout/Hero';
import Shortcut from '@/components/home-layout/Shortcut';
import Testimonials from '@/components/home-layout/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <Shortcut />
      <Testimonials />
    </div>
  );
}
