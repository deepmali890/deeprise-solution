import ContactSection from '@/components/common/ContactSection'
import FaqSection from '@/components/common/FaqSection'
import PriceBanner from '@/components/pricing/PriceBanner'
import PricingSection from '@/components/common/PricingSection'
import React from 'react'
import PricingBenefitsSection from '@/components/pricing/PricingBenefitsSection'

const page = () => {
  return (
    <>
      <PriceBanner />
      <PricingBenefitsSection />
      <div className=' my-20'>
        <PricingSection />
      </div>
      <FaqSection />
      <ContactSection />

    </>
  )
}

export default page
