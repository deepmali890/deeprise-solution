import React from 'react'
import { WobbleCard } from './ui/wobble-card'

const FeatureSection = () => {
    return (
        <>
            <h1 className="bg-opacity-50 bg-gradient-to-b py-4 from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl mb-8">
              Shaping the Future <br /> Through Innovation & Code
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-2">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left  text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Founded on Innovation & Excellence
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            At DeepRise Solution, we began with a passion for technology and a clear vision: to craft innovative, high-performance web and mobile solutions that empower businesses worldwide.
                        </p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Commitment to Quality & Growth
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        We are dedicated to continuous improvement, ensuring that every product we build meets the highest standards of quality, performance, and innovation.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Years of Expertise in Web & App Development
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            Our team has honed skills in modern web and mobile development, delivering scalable and reliable digital products that help businesses thrive in a competitive digital landscape.
                        </p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-10 md:-right-[20%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </>
    )
}

export default FeatureSection
