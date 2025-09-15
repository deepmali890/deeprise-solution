import ContactSection from "@/components/common/ContactSection";
import FaqSection from "@/components/common/FaqSection";
import FeatureSection from "@/components/home/FeatureSection";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/common/PricingSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { HomeBenefitsSection } from "@/components/home/HomeBenefitsSection";
import ServicesOverview from "@/components/common/ServicesOverview";

export default function Home() {
  return (
    <>
    <div className="bg-black text-white">
      <HeroSection />
      <FeatureSection />
      <HomeBenefitsSection />
      <ServicesOverview />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      
    </div>
    </>
  );
}
