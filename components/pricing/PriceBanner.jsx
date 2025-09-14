import React from 'react'
import { WavyBackground } from '../ui/wavy-background'

const PriceBanner = () => {
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40 px-10">
        {/* Heading */}
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Simple, Transparent Pricing
        </p>

        {/* Subheading */}
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Choose a plan that fits your needs. No hidden fees, no surprises — just growth-ready solutions.
        </p>
      </WavyBackground>
    </>
  )
}

export default PriceBanner
