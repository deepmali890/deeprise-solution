import ContactBanner from '@/components/contact/ContactBanner'
import ContactForm from '@/components/contact/ContactForm'
import ContactSection from '@/components/common/ContactSection'
import FaqSection from '@/components/common/FaqSection'
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
