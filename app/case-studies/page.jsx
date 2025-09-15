import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero'
import ProjectTimeline from '@/components/case-studies/ProjectTimeline'
import ContactSection from '@/components/common/ContactSection'
import FaqSection from '@/components/common/FaqSection'
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
