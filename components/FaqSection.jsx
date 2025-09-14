import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import Link from 'next/link'

const FaqSection = () => {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-20">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-10 py-10">

                    {/* Left Section */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-3 leading-snug">
                            Answers to Your Questions, Simplified
                        </h2>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                            Find quick solutions to common questions about our services.
                        </p>

                        <Link href="/services">
                            <div className="mt-8 sm:mt-10 mx-auto lg:mx-0 w-fit py-2 px-4 flex items-center gap-2 border border-white text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:gap-4 rounded">
                                View More
                                <FaRegArrowAltCircleRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </div>

                    {/* Right Section (Accordion) */}
                    <div>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1" className="border rounded-2xl border-gray-500 my-2 p-4">
                                <AccordionTrigger className="text-white cursor-pointer text-lg sm:text-xl">
                                    What do I need to provide for Figma to website conversion?
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-300">
                                    <p>
                                        Simply share your Figma, PSD, XD, AI, Sketch, PNG, or JPG design files along with any specific requirements or preferences. From there, I’ll take care of everything to convert your design into a fully responsive, pixel-perfect website.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border rounded-2xl border-gray-500 my-2 p-4">
                                <AccordionTrigger className="text-white cursor-pointer text-lg sm:text-xl">
                                    Can you customize or revamp my existing website?
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-300">
                                    <p>
                                        Absolutely! I can customize, redesign, or optimize your current website to improve its design, performance, and functionality — making it more modern, responsive, and user-friendly.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border rounded-2xl border-gray-500 my-2 p-4">
                                <AccordionTrigger className="text-white cursor-pointer text-lg sm:text-xl">
                                    What if I need revisions or changes after the delivery?
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-300">
                                    <p>
                                        I offer unlimited revisions (based on package) until you’re 100% satisfied. Even after delivery, I provide 30 days of free support to make necessary updates or fixes.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border rounded-2xl border-gray-500 my-2 p-4">
                                <AccordionTrigger className="text-white cursor-pointer text-lg sm:text-xl">
                                    Can you integrate third-party services like payment gateways or social media?
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-300">
                                    <p>
                                        Yes! I can integrate third-party APIs, including: Payment gateways (PayPal, Stripe, etc.), Social media integrations, and Custom API connections.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border rounded-2xl border-gray-500 my-2 p-4">
                                <AccordionTrigger className="text-white cursor-pointer text-lg sm:text-xl">
                                    Do you offer SEO services for better search engine visibility?
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-300">
                                    <p>
                                        While my primary focus is website development, I follow SEO-friendly coding practices to help your website rank better. If you need advanced SEO services, I can guide you or collaborate with a specialist.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6" className="border rounded-2xl border-gray-500 my-2 p-4">
                                <AccordionTrigger className="text-white cursor-pointer text-lg sm:text-xl">
                                    Will my website be scalable as my business grows?
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-300">
                                    <p>
                                        Definitely! I build websites with scalability in mind, so as your business grows, your website can easily handle increased traffic, new features, and database expansion without performance issues.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqSection
