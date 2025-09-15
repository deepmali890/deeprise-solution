import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

const TestimonialSection = () => {
    return (
        <>
            <div className='py-30 px-4 md:px-10'>
                <h1 className="bg-opacity-50 bg-gradient-to-b py-4 from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl ">
                   Trusted by Clients, <br /> Proven by Results.
                </h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 py-10 px-6">
                    {/* Left Section - Image with Text Overlay */}
                    <div
                        className="relative flex items-end justify-start rounded-2xl overflow-hidden shadow-lg h-64 sm:h-auto md:h-80 xl:h-auto"
                        style={{
                            backgroundImage: `url('/images/team/Dilip.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Text Overlay */}
                        <div className="relative p-4 text-white z-10">
                            <h2 className="text-lg sm:text-xl font-semibold">Dilip Mali</h2>
                            <span className="mt-2 inline-block px-3 py-1 border border-white rounded-md text-xs sm:text-sm">
                                Business Owner
                            </span>
                        </div>
                    </div>

                    {/* Right Section - Moving Cards */}
                    <div className="h-[22rem] sm:h-[24rem] lg:h-[26rem] xl:h-[28rem] rounded-md flex flex-col 
                antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center 
                relative overflow-hidden shadow-md">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSection

const testimonials = [
    {
        quote:
            "Deeprise built a complete e-commerce store for my business. The website is fast, mobile responsive, and has a modern design. The checkout process works smoothly, and they delivered the project on time with fair pricing.",
        name: "Aarav Sharma",
        title: "Founder, TrendCart"
    },
    {
        quote:
            "I needed a travel booking website, and Deeprise did an excellent job. They integrated a booking calendar, secure payment gateway, and made it fully mobile-friendly. Great support and really good value for money.",
        name: "Priya Mehta",
        title: "Owner, TravelMate"
    },
    {
        quote:
            "Deeprise designed my personal portfolio website. The layout is clean, professional, and attractive. They also implemented basic SEO, which helped my site start ranking on Google. Super happy with the results!",
        name: "Rohit Verma",
        title: "Freelance Photographer"
    },
    {
        quote:
            "For our startup, Deeprise created a SaaS product landing page. The design is modern, the loading speed is excellent, and they even delivered before the deadline. They still provide quick support whenever we need it.",
        name: "Simran Kaur",
        title: "Co-Founder, SaaSly"
    },
    {
        quote:
            "I hired Deeprise to create an online ordering system for my restaurant. The menu management and payment integration work perfectly, and customers find it super easy to use. The pricing and delivery timeline were just right.",
        name: "Aditya Rao",
        title: "Owner, SpiceHub"
    }
];


