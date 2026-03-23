import HeroSection from '@/sections/home/HeroSection';
import DifferentialsSection from '@/sections/home/DifferentialsSection';
import TreatmentsSection from '@/sections/home/TreatmentsSection';
import AboutPreviewSection from '@/sections/home/AboutPreviewSection';
import ProcessSection from '@/sections/home/ProcessSection';
import FaqSection from '@/sections/home/FaqSection';
import FinalCtaSection from '@/sections/home/FinalCtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DifferentialsSection />
      <TreatmentsSection />
      <AboutPreviewSection />
      <ProcessSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
