import { BenifitsSection } from "@/components/BenifitsSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
    <div className="bg-black text-white">
      <HeroSection />
      <FeatureSection />
      <BenifitsSection />
      <ServiceSection />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      
    </div>
    </>
  );
}
