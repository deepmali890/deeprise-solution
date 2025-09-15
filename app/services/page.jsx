import ContactSection from '@/components/common/ContactSection'
import FaqSection from '@/components/common/FaqSection'
import AllServices from '@/components/services/AllServices'
import OurDesign from '@/components/services/OurDesign'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceStates from '@/components/services/ServiceStates'
import React from 'react'

const page = () => {
    return (
        <div>
            <ServiceHero />
            <AllServices />
            <OurDesign />
            <ServiceStates />
            <FaqSection />
            <ContactSection />
        </div>
    )
}

export default page
