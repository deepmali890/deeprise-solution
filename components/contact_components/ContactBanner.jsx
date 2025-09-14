"use client"
import React from 'react'
import { SpotlightNew } from '../ui/SpotlightNew'

const ContactBanner = () => {
  return (
    <div>
      <div className="h-[32rem] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-center px-6 sm:px-10">
        <SpotlightNew />

        <div className="p-4 max-w-4xl mx-auto relative z-10 w-full">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-snug">
            Let’s Build Something <br className="hidden sm:block" /> Extraordinary Together
          </h1>

          {/* Subheading */}
          <p className="mt-4 font-normal text-sm sm:text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
            Have a project idea or need expert guidance? Our team is ready to
            collaborate, innovate, and craft solutions tailored for your success.
          </p>

          {/* CTA Button */}
          <div className="mt-6 flex justify-center">
            <div
              onClick={() => {
                window.location.href = '/contact'
              }}
              className="px-6 py-3 rounded-xl text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
