import React from 'react';

const ServiceStates = () => {
    return (
        <div className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="hidden lg:block absolute left-0 top-5 w-full h-0.5 bg-gray-700"></div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-x-8">

                        {/* Step 1 */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold text-lg">
                                    1
                                </div>
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">
                                Understanding Your Needs
                            </h3>
                            <p className="mt-2 text-gray-400">
                                We listen carefully to understand your goals, challenges, and vision, ensuring a tailored approach for your success.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold text-lg">
                                    2
                                </div>
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">
                                Strategic Planning
                            </h3>
                            <p className="mt-2 text-gray-400">
                                Our experts craft innovative strategies and solutions, combining creativity with practical insights for measurable impact.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold text-lg">
                                    3
                                </div>
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">
                                Implementation Excellence
                            </h3>
                            <p className="mt-2 text-gray-400">
                                We bring plans to life with precision, ensuring seamless execution and delivering top-notch results for every project.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold text-lg">
                                    4
                                </div>
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">
                                Growth & Continuous Support
                            </h3>
                            <p className="mt-2 text-gray-400">
                                Post-launch, we monitor, optimize, and support your projects, ensuring continuous growth and long-term success.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceStates;
