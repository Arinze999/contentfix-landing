import Faqs from '@/components/home-layout/faq/Faqs';
import Hero from '@/components/home-layout/hero/Hero';
import Pricing from '@/components/home-layout/pricing/Pricing';
import Shortcut from '@/components/home-layout/shortcut/Shortcut';
import Testimonials from '@/components/home-layout/testimonial/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <Shortcut />
      <Testimonials />
      <Pricing />
      <Faqs />
    </div>
  );
}
