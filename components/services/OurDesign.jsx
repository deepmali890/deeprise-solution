import React from 'react';

const OurDesign = () => {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">

                    {/* Images */}
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img
                                className="rounded-xl object-cover"
                                src="/images/home/dreamnest1.png"
                                alt="DreamNest UI Design 1"
                            />
                        </div>
                        <img
                            className="sm:ml-0 ml-auto rounded-xl object-cover"
                            src="/images/case-studies/dreamnest2.png"
                            alt="DreamNest UI Design 2"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
                                    <h2 className="text-gray-200 font-manrope font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-snug sm:leading-snug md:leading-normal lg:leading-relaxed text-center lg:text-left mb-4 sm:mb-5 md:mb-6">
                                        UI/UX Design Crafted for DreamNest
                                    </h2>
                                    <p className="text-gray-300 font-normal text-sm sm:text-base md:text-base lg:text-lg xl:text-lg leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-center lg:text-left max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                                        Our DreamNest real estate platform combines modern aesthetics with intuitive design. Every element, from property listings to interactive dashboards, is carefully designed to provide a seamless experience for buyers, sellers, and agents alike.
                                    </p>
                                </div>

                            </div>

                            {/* Stats */}
                            <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
                                <div className="flex flex-col justify-center items-center lg:items-start">
                                    <h3 className="text-white text-4xl font-bold font-manrope leading-normal">10+</h3>
                                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">Pages Designed</h6>
                                </div>
                                <div className="flex flex-col justify-center items-center lg:items-start">
                                    <h3 className="text-white text-4xl font-bold font-manrope leading-normal">500+</h3>
                                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">Satisfied Users</h6>
                                </div>
                                <div className="flex flex-col justify-center items-center lg:items-start">
                                    <h3 className="text-white text-4xl font-bold font-manrope leading-normal">95%</h3>
                                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">UX Satisfaction Rate</h6>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurDesign;
