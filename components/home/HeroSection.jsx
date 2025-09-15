import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { cn } from '@/lib/utils'
import Button from '../common/Button'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PointerHighlight } from '../ui/pointer-highlight';



const HeroSection = () => {
    return (
        <>
            <div className="relative flex min-h-screen  w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                        "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
                    )}
                />

                <Spotlight
                    className="-top-40 left-0 md:-top-20 md:left-60"
                    fill="white"
                />

                <div className="relative z-10 mx-auto w-full max-w-8xl p-4 pt-20 md:pt-0">
                    {/* Hero Heading */}
                    <h1 className="bg-opacity-50 bg-gradient-to-b py-4 from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent">
                        DeepRise Solution <br /> Empowering Your Digital Future
                    </h1>

                    {/* Hero Subtext */}
                    <p className="mx-auto mt-4 max-w-3xl text-center text-base font-normal text-neutral-300">
                        <span className='from-neutral-50 to-neutral-400 w-fit px-3 block  mx-auto my-3 py-1 rounded-sm'>
                            <PointerHighlight
                                rectangleClassName="bg-white/20  dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                                pointerClassName="text-blue-500"
                            >#1 Web & App Development Agency</PointerHighlight>
                        </span>
                        We create modern web and mobile apps that elevate your digital presence with smart design and cutting-edge tech.

                        <div class="my-8">
                            <Button />
                        </div>
                    </p>
                    <div className="w-full py-6 md:flex md:justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 md:justify-items-center">
                            <div className="flex items-center gap-2 text-white text-lg">
                                <IoIosCheckmarkCircleOutline className="w-6 h-6" />
                                <span>Web Application Development</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-lg">
                                <IoIosCheckmarkCircleOutline className="w-6 h-6" />
                                <span>Mobile App Development</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-lg">
                                <IoIosCheckmarkCircleOutline className="w-6 h-6" />
                                <span>SEO & Digital Optimization</span>
                            </div>
                            <div className="flex items-center gap-2 text-white text-lg">
                                <IoIosCheckmarkCircleOutline className="w-6 h-6" />
                                <span>UI/UX Design</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroSection
