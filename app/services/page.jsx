import ContactSection from '@/components/ContactSection'
import FaqSection from '@/components/FaqSection'
import AllService from '@/components/serviceComponents/AllService'
import OurDesign from '@/components/serviceComponents/OurDesign'
import ServiceHero from '@/components/serviceComponents/ServiceHero'
import ServiceStates from '@/components/serviceComponents/ServiceStates'
import React from 'react'

const page = () => {
    return (
        <div>
            <ServiceHero />
            <AllService />
            <OurDesign />
            <ServiceStates />
            <FaqSection />
            <ContactSection />
        </div>
    )
}

export default page
