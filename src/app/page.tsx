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
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <div className="font-sans">
        <Navbar />
        
        <main id="main-content" role="main">
          <Hero />
          <TechMarquee />
          
          <article>
            <Services />
            <ROICalculator />
            <HowItWorks />
            <WhyChooseUs />
            <CTASection />
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
