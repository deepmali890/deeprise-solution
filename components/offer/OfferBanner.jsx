"use client";

import React from 'react';
import { ShootingStars } from '../ui/shooting-stars';
import { StarsBackground } from '../ui/stars-background';

const OfferBanner = () => {
  return (
    <div className="relative w-full"> {/* Header gap */}
      
      <div className="h-auto md:h-[40rem] w-full pt-24 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl shadow-lg overflow-hidden rounded-md bg-gradient-to-r  from-red-900/10 via-red-800 to-black/70">

          <main className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-12 lg:p-16">

            {/* Text Section */}
            <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start space-y-4 sm:space-y-6 md:space-y-8">
              
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-yellow-300">DeepRise Special Offer</h2>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide">
                Offer Coming Soon
              </h1>

              <p className="text-xl sm:text-2xl md:text-2xl text-yellow-400 font-semibold">
                Get <span className="text-white">20% Off</span> on all our services!
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl text-stone-300">
                Launching on <span className="font-semibold text-yellow-400">22 Sep 2025</span>
              </p>

              <div className="w-36 sm:w-48 py-4">
                <img 
                  src="https://placehold.co/200x40/000000/EADDCD?text=---+DeepRise+---" 
                  alt="Divider" 
                  className="w-full h-auto" 
                />
              </div>

              <p className="text-base sm:text-lg md:text-xl text-stone-200">
                Get ready for our exclusive Web, App, SEO & UI/UX packages
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black font-semibold py-3 px-6 sm:px-8 shadow-md cursor-not-allowed" disabled>
                  View Packages
                </button>
                <button className="text-white border-white border-[1px] hover:bg-black hover:text-white font-semibold py-3 px-6 sm:px-8 shadow-md cursor-not-allowed" disabled>
                  Contact Now
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="images/offer/durgama.png" 
                alt="DeepRise Offer Illustration" 
                className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" 
              />
            </div>

          </main>
        </div>
      </div>

      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground />

    </div>
  );
}

export default OfferBanner;
