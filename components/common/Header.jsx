"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { LuHeadset } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import OfferButton from "./OfferButton";
import { IoCallSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BiSolidOffer } from "react-icons/bi";

const number = "919636249430";
const message = "Hello DeepRise, I am interested in your services";


const navItems = [
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Services",
        link: "/services",
    },
    {
        name: "Case Studies",
        link: "/case-studies",
    },
    {
        name: "Contact Us",
        link: "/contact",
    },
    {
        name: "Packages",
        link: "/pricing-plan",
    },
];

const Header = () => {



    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative w-full ">
                <Navbar >
                    {/* Desktop Navigation */}
                    <NavBody className="">
                        <NavbarLogo />
                        <NavItems items={navItems} />
                        <div className="flex items-center gap-4 ">
                            <Link href={"/offer"}>
                                <OfferButton />
                            </Link>


                            <Link href="https://calendly.com/deepmali590/30min"
                                target="_blank"
                            >
                                <NavbarButton variant="primary" className="flex gap-2 items-center ">
                                    <SlEarphonesAlt /> Book a call</NavbarButton>
                            </Link>

                        </div>
                    </NavBody>

                    {/* Mobile Navigation */}
                    <MobileNav>
                        <MobileNavHeader>
                            <NavbarLogo />
                            <div className="flex items-center gap-3">
                                <Link href={"/offer"}>
                                <BiSolidOffer className="text-[25px] offer" />
                                </Link>
                                {/* Headset Icon */}
                                <LuHeadset onClick={() => setIsOpen(true)} className="text-xl text-white  cursor-pointer hover:text-gray-300" />

                                {/* Mobile Toggle */}
                                <MobileNavToggle
                                    isOpen={isMobileMenuOpen}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                />
                            </div>
                        </MobileNavHeader>

                        <MobileNavMenu
                            isOpen={isMobileMenuOpen}
                            onClose={() => setIsMobileMenuOpen(false)}
                        >
                            {navItems.map((item, idx) => (
                                <a
                                    key={`mobile-link-${idx}`}
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="relative text-black"
                                >
                                    <span className="block">{item.name}</span>
                                </a>
                            ))}
                            <div className="flex w-full flex-col gap-4">
                            
                                <NavbarButton
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    variant="primary"
                                    className="w-full"
                                >
                                    <Link href="https://calendly.com/deepmali590/30min"
                                        target="_blank"
                                    >
                                        Book a call
                                    </Link>
                                </NavbarButton>
                            </div>
                        </MobileNavMenu>
                    </MobileNav>

                </Navbar>


                {/* Navbar */}
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
                    {/* Popup Box */}
                    <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative animate-fadeIn">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                        >
                            <RxCross2 />
                        </button>

                        {/* Heading */}
                        <h2 className="text-xl font-bold text-center text-gray-800">
                            Let’s Connect
                        </h2>
                        <p className="text-center text-gray-600 mt-2">
                            Choose an option below to get started with us.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <a
                                href={`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="w-full sm:w-auto px-5 py-2 bg-black flex items-center gap-3 text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition duration-300">
                                    <IoCallSharp /> Contact Now
                                </button>
                            </a>

                            <Link href="https://calendly.com/deepmali590/30min" target="_blank">
                                <button className="w-full sm:w-auto px-5 py-2 bg-white-600 flex items-center gap-3 text-black border-[1px] border-black font-semibold rounded-lg shadow hover:bg-white hover:border-black hover:text-black transition duration-300">
                                    <FaRegCalendarAlt /> Schedule Meeting
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default Header;
