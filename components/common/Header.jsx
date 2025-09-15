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

const navItems = [
    {
        name: "About Us",
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
        name: "Pricing Plan",
        link: "/pricing-plan",
    },
];

const Header = () => {



    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full ">
            <Navbar >
                {/* Desktop Navigation */}
                <NavBody className="">
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4 ">

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
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
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
    );
};

export default Header;
