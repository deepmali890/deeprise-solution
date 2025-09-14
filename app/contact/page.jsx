import ContactBanner from '@/components/contact_components/ContactBanner'
import ContactForm from '@/components/contact_components/ContactForm'
import ContactSection from '@/components/ContactSection'
import FaqSection from '@/components/FaqSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <FaqSection/>
      <ContactSection/>
    </div>
  )
}

export default page
