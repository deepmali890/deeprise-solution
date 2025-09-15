import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
    return (
        <section>
            <div className="grid max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:gap-8 xl:gap-0 lg:grid-cols-12 mx-auto">

                {/* Left Content */}
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div className="w-full text-center lg:text-left">

                        {/* Hero Heading with gradient */}
                        <h1 className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-snug sm:leading-snug md:leading-tight lg:leading-tight xl:leading-tight mb-4 sm:mb-5 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                            Let’s Build Your Digital Future with Deeprise
                        </h1>

                        {/* Hero Paragraph */}
                        <p className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-gray-300 font-light text-sm sm:text-base md:text-base lg:text-lg xl:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6 sm:mb-7 md:mb-8">
                            From sleek websites to scalable applications, our team delivers modern solutions tailored for your business.  
                            Fast, reliable, and built to grow with you.
                        </p>

                        {/* Button */}
                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-base md:text-lg font-medium text-white rounded-lg bg-black border border-white hover:bg-white hover:text-black focus:ring-4 focus:ring-gray-300 transition-all duration-300"
                            >
                                Get Started
                                <svg
                                    className="w-5 h-5 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="mt-12 lg:mt-0 lg:col-span-5 lg:flex justify-center">
                    <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                        alt="Contact Deeprise"
                        className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
