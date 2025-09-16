"use client";

import React, { useState, useEffect } from "react";

const OfferTiming = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-09-22T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeArray = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className=" to-black rounded-xl p-6 sm:p-8 md:p-12 text-center shadow-xl w-full max-w-4xl mx-auto ">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
        DeepRise Offer Countdown
      </h2>
      <p className="text-white mb-8">Hurry! Offer valid till 20 Sep 2025</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center items-center text-center">
        {timeArray.map((time, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {time.value < 10 ? `0${time.value}` : time.value}
            </span>
            <span className="block mt-1 text-sm sm:text-base text-gray-300">{time.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferTiming;
