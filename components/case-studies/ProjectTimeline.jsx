import React from 'react';
import { FaLightbulb } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";

const ProjectTimeline = () => {
  const steps = [
    {
      id: "01",
      title: "Challenge",
      desc: "FashionHub had an outdated e-commerce website with a high bounce rate and low conversion rate. Their goal was to create a modern, mobile-responsive platform that offered a seamless shopping experience while integrating advanced features like personalized recommendations and an easy checkout process.",
      icon: <FaLightbulb />,
      img: "https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg",
    },
    {
      id: "02",
      title: "Solution",
      desc: "We redesigned their platform with a modern UI/UX, seamless navigation, and mobile-first approach. Integrated features like personalized recommendations and smooth checkout flow to enhance user engagement.",
      icon: <FaGear />,
      img: "https://images.pexels.com/photos/7652135/pexels-photo-7652135.jpeg",
    },
    {
      id: "03",
      title: "Result",
      desc: "FashionHub saw a 45% increase in user retention and 60% growth in conversions. Customers praised the smooth experience and modern design.",
      icon: <FaChartLine />,
      img: "https://images.pexels.com/photos/7688174/pexels-photo-7688174.jpeg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-20">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src={step.img}
                alt={step.title}
                className={`w-80 h-60 object-cover rounded-lg shadow-xl transform transition-transform duration-300 ${
                  index % 2 === 0 ? 'rotate-3' : '-rotate-3'
                }`}
              />
              {/* ID Number with responsive positioning */}
              <span
                className={`
                  absolute font-extrabold text-white opacity-80
                  text-4xl sm:text-5xl md:text-6xl
                  ${index % 2 === 0 
                    ? 'left-2 sm:left-2 md:left-4 lg:-left-6 bottom-2 xl:-left-0 sm:bottom-4' 
                    : 'right-2 sm:right-2 md:right-4 lg:-right-6 xl:-right-0 bottom-2 sm:bottom-4'}
                `}
              >
                {step.id}
              </span>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-pink-600 text-white p-3 rounded-lg shadow-lg">
                  {step.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{step.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
