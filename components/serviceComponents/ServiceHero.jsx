"use client"
import React from 'react';
import { BiSolidHandDown } from "react-icons/bi";



const ServiceHero = () => {
    return (
        <section
            className="pt-20 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                {/* Top badge */}
                <div className="border border-white p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
                    <span className="font-inter text-xs font-medium text-gray-200 ml-3">
                        Explore our Web & App Solutions
                    </span>
                    <button className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600">
                        <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                                stroke="white"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Title */}
                <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-300 mb-5 md:text-5xl leading-[50px]">
                    Building the Future with{' '}
                    <span className="text-white">Web & App Development</span>
                </h1>

                {/* Description */}
                <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
                    We create responsive websites, mobile apps, and stunning UI/UX designs that help your business grow online.
                </p>

                {/* CTA Button */}
                <div
                    onClick={() => {
                        window.scrollTo({
                            top: 1000,
                            behavior: 'smooth'
                        });
                    }}
                    className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-black cursor-pointer border-[1px] border-white shadow-xs hover:bg-white hover:text-black transition-all duration-500"
                >
                    Explore Our Services
                </div>

                {/* Dashboard Image */}
                <div className="flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop"
                        alt="Web development dashboard"
                        className="rounded-t-3xl h-auto object-cover"
                    />
                </div>
            </div>
        </section>);
};

export default ServiceHero;
