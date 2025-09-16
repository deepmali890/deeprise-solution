"use client"
import React, { useState } from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const plans = [
    {
        name: "Starter Website",
        price: "₹9,712",
        features: [
            "1 Page Responsive Website",
            "Functional website",
            "Mobile-Friendly Design",
            "Opt-in form",
            "Speed optimization",
            "Hosting setup",
            "Basic SEO Setup"
        ]
    },
    {
        name: "Business Website",
        price: "₹31,449",
        tag: "Most Popular",
        features: [
            "5 Page Custom Website",
            "Functional website",
            "Content upload",
            "E-commerce functionality",
            "5 products",
            "Opt-in form",
            "Speed optimization",
            "Hosting setup",
            "Content Management System",
            "SEO Optimization",
            "Social Media Integration",
            "3 Months Free Maintenance"
        ]
    },
    {
        name: "E-Commerce Solution",
        price: "₹64,747",
        features: [
            "10 pages",
            "Functional website",
            "Full E-commerce Functionality",
            "Content upload",
            "E-commerce functionality",
            "14 products",
            "Payment Integration",
            "Opt-in form",
            "Autoresponder integration",
            "Speed optimization",
            "Hosting setup",
            "Payment Gateway Integration",
            "Product Management System",
            "Advanced Analytics Dashboard",
            "6 Months Free Maintenance"
        ]
    }
];

const PricingSection = () => {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (index) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <>
            <h1 className="bg-opacity-50 bg-gradient-to-b py-4 from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl mb-12">
                Flexible Pricing Plans, <br /> Tailored to You
            </h1>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 px-4 md:px-12 ">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`bg-gray-800/50 backdrop-blur-sm border ${plan.tag ? "border-2 border-gray-400" : "border-gray-700"
                            } rounded-xl overflow-hidden group hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10 flex flex-col`}
                    >
                        {plan.tag && (
                            <div className="absolute -top-1 rounded-br-md rounded-bl-md left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-500 to-black text-white px-4 py-1 text-sm font-bold shadow-lg">
                                {plan.tag}
                            </div>
                        )}

                        <div className="p-8 flex flex-col flex-1">
                            {/* Name & Price */}
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl text-gray-400 font-bold">{plan.price}</span>
                                <span className="text-gray-400 ml-2">/one-time</span>
                            </div>

                            {/* Features with Read More */}
                            <div
                                className={`mb-6 overflow-hidden transition-all duration-300 ${expanded[index] ? "max-h-[500px]" : "max-h-[180px]"
                                    }`}
                            >
                                <ul className="space-y-4 text-gray-300">
                                    {plan.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <IoIosCheckmarkCircle className="w-5 h-5 text-green-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {plan.features.length > 6 && (
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="text-sm text-gray-300 hover:text-white cursor-pointer underline transition self-start mb-6"
                                >
                                    {expanded[index] ? "Show Less" : "Read More"}
                                </button>
                            )}

                            {/* Button */}
                            <button className="group mt-auto relative w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-500 to-black rounded-lg overflow-hidden transition-all duration-300">
                                <span className="relative z-10 flex items-center cursor-pointer">
                                    Get Started
                                    <svg
                                        className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PricingSection;
