import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/about/TeamSection";
import ContactSection from "@/components/common/ContactSection";
import FaqSection from "@/components/common/FaqSection";
import FeatureSection from "@/components/home/FeatureSection";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Page = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-screen object-cover"
          src="/video/dreamnest2.mp4"   // replace with your video path
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Content on top, aligned to bottom */}
        <div className="relative z-10 w-full h-full flex flex-col justify-end pb-16 px-4 md:pb-24 max-w-8xl mx-auto">

          {/* Hero Subtext */}
          <div className="text-center">
            <p className="mx-auto max-w-3xl text-base font-normal text-neutral-300">
              <span className='from-neutral-50 to-neutral-400 w-fit px-3 block mx-auto my-3 py-1 rounded-sm'>
                <PointerHighlight
                  rectangleClassName="bg-white/20 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                  pointerClassName="text-blue-500"
                >#1 Web & App Development Agency</PointerHighlight>
              </span>
            </p>

            {/* Services Grid */}
            <div className="w-full py-6 px-4 sm:px-6 md:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
                <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl min-w-[220px]">
                  <IoIosCheckmarkCircleOutline className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                  <span className="whitespace-nowrap">Web Application Development</span>
                </div>
                <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl min-w-[200px]">
                  <IoIosCheckmarkCircleOutline className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                  <span className="whitespace-nowrap">Mobile App Development</span>
                </div>
                <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl min-w-[200px]">
                  <IoIosCheckmarkCircleOutline className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                  <span className="whitespace-nowrap">SEO & Digital Optimization</span>
                </div>
                <div className="flex items-center gap-3 text-white text-base sm:text-lg md:text-xl min-w-[180px]">
                  <IoIosCheckmarkCircleOutline className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                  <span className="whitespace-nowrap">UI/UX Design</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <AboutSection />
      <FeatureSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Page;
