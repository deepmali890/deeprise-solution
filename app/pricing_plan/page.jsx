import ContactSection from '@/components/ContactSection'
import FaqSection from '@/components/FaqSection'
import BenefitsSectionPrice from '@/components/pricing/BenefitsSectionPrice'
import PriceBanner from '@/components/pricing/PriceBanner'
import PricingSection from '@/components/PricingSection'
import React from 'react'

const page = () => {
  return (
    <>
      <PriceBanner />
      <BenefitsSectionPrice />
      <div className=' my-20'>
        <PricingSection />
      </div>
      <FaqSection />
      <ContactSection />

    </>
  )
}

export default page
