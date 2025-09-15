import React from 'react'

const PricingBenefitsSection = () => {
    return (
        <div class="max-w-7xl bg-transparent mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

            <h2 class="text-center text-gray-400 text-2xl md:text-3xl mb-12 font-bold lg:text-5xl"> 
               Upgrade Your Plan, Unlock More Value 
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div class="bg-white/5 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start text-left">

                    <h3 class="text-2xl font-bold mb-3">Creative Web Design</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Stunning, user-focused designs that make your brand stand out and deliver unforgettable digital experiences.
                    </p>
                </div>

                <div class="bg-gradient-to-br from-black to-gray-600 p-8 rounded-xl shadow-lg border border-gray-500 flex flex-col items-start text-left">

                    <h3 class="text-2xl font-bold mb-3 text-white">Full-Stack Development</h3>
                    <p class="text-white text-opacity-80 leading-relaxed">
                        From front-end to back-end, we craft scalable, secure, and high-performance applications tailored for your business.
                    </p>
                </div>

                <div class="bg-white/5 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start text-left">

                    <h3 class="text-2xl font-bold mb-3">Ongoing Support</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Reliable maintenance, updates, and technical support to keep your digital presence running smoothly 24/7.
                    </p>
                </div>

                <div class="lg:col-start-1 lg:col-end-3 bg-white/5 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start text-left">

                    <h3 class="text-2xl font-bold mb-3">Custom Integrations</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Seamless API and third-party integrations that connect your tools and streamline workflows for maximum efficiency.
                    </p>
                </div>

                <div class="bg-white/5 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-start text-left">

                    <h3 class="text-2xl font-bold mb-3">Performance Optimization</h3>
                    <p class="text-gray-400 leading-relaxed">
                        Speed, SEO, and UX enhancements that boost engagement, improve rankings, and keep users coming back.
                    </p>
                </div>

            </div>
        </div>

    )
}

export default PricingBenefitsSection
