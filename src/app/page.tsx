import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Services from '@/components/Services';
import ROICalculator from '@/components/ROICalculator';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <ROICalculator />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  );
}
