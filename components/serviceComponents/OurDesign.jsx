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
                                src="/dreamnest1.png"
                                alt="DreamNest UI Design 1"
                            />
                        </div>
                        <img
                            className="sm:ml-0 ml-auto rounded-xl object-cover"
                            src="/dreamnest2.png"
                            alt="DreamNest UI Design 2"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-gray-200 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    UI/UX Design Crafted for DreamNest
                                </h2>
                                <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Our DreamNest real estate platform combines modern aesthetics with intuitive design. Every element, from property listings to interactive dashboards, is carefully designed to provide a seamless experience for buyers, sellers, and agents alike.
                                </p>
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
