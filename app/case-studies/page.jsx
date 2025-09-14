import { CaseStudyHero } from '@/components/case-studies-components/CaseStudyHero'
import ProjectTimeline from '@/components/case-studies-components/ProjectTimeline'
import ContactSection from '@/components/ContactSection'
import FaqSection from '@/components/FaqSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <CaseStudyHero />
            <ProjectTimeline />
            <FaqSection />
            <ContactSection />
        </div>
    )
}

export default page
