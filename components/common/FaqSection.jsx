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
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4 sm:gap-6 lg:gap-8 py-2 sm:py-8 md:py-10 lg:py-12">

                {/* Left Section */}
                <div className="text-center lg:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug">
                        Answers to Your Questions, Simplified
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 mt-2 sm:mt-3">
                        Find quick solutions to common questions about our services.
                    </p>

                    <Link href="/services">
                        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 mx-auto lg:mx-0 w-fit py-1.5 sm:py-2 md:py-2.5 px-3 sm:px-4 md:px-5 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 border border-white text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-black rounded">
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
                        {[
                            {
                                title: "What do I need to provide for Figma to website conversion?",
                                content: "Simply share your Figma, PSD, XD, AI, Sketch, PNG, or JPG design files along with any specific requirements or preferences. From there, I’ll take care of everything to convert your design into a fully responsive, pixel-perfect website."
                            },
                            {
                                title: "Can you customize or revamp my existing website?",
                                content: "Absolutely! I can customize, redesign, or optimize your current website to improve its design, performance, and functionality — making it more modern, responsive, and user-friendly."
                            },
                            {
                                title: "What if I need revisions or changes after the delivery?",
                                content: "I offer unlimited revisions (based on package) until you’re 100% satisfied. Even after delivery, I provide 30 days of free support to make necessary updates or fixes."
                            },
                            {
                                title: "Can you integrate third-party services like payment gateways or social media?",
                                content: "Yes! I can integrate third-party APIs, including: Payment gateways (PayPal, Stripe, etc.), Social media integrations, and Custom API connections."
                            },
                            {
                                title: "Do you offer SEO services for better search engine visibility?",
                                content: "While my primary focus is website development, I follow SEO-friendly coding practices to help your website rank better. If you need advanced SEO services, I can guide you or collaborate with a specialist."
                            },
                            {
                                title: "Will my website be scalable as my business grows?",
                                content: "Definitely! I build websites with scalability in mind, so as your business grows, your website can easily handle increased traffic, new features, and database expansion without performance issues."
                            },
                        ].map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index + 1}`}
                                className="border rounded-xl border-gray-500 my-2 p-2 sm:p-3 md:p-4"
                            >
                                <AccordionTrigger className="text-white cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FaqSection
