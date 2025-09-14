import AboutUsCompany from "@/components/AboutUsCompany";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import TeamSection from "@/components/TeamSection";
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
          src="/dreamnest2.mp4"   // replace with your video path
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
            <div className="w-full py-6 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
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
      </div>

      <AboutUsCompany />

      <FeatureSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Page;
