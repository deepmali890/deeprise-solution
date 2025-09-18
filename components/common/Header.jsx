"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import { LuHeadset } from "react-icons/lu";
import { FaRegCalendarAlt, FaUserCircle } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
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
import OfferButton from "./OfferButton";
import { useDispatch } from "react-redux";
import useAuth from "@/hooks/useAuth";
import { logouedOutUser } from "@/redux/slices/auth.slice";
import Login from "../auth/Login";
import Signup from "../auth/Signup";



const number = "919636249430";
const message = "Hello DeepRise, I am interested in your services";

const navItems = [
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Case Studies", link: "/case-studies" },
  { name: "Contact Us", link: "/contact" },
  { name: "Packages", link: "/pricing-plan" },
];

const userMenuItems = [
  { name: "Profile", link: "/profile" },
  { name: "Edit Profile", link: "/edit-profile" },
  { name: "Refer a Friend", link: "/refer" },
  { name: "Help & Support", link: "/help" },
  { name: "Your Packages", link: "/packages" },
  { name: "Meetings", link: "/meetings" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); // null | "login" | "signup"

  const userMenuRef = useRef(null);

  const { user } = useAuth(); // 👈 login check
  const dispatch = useDispatch();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logouedOutUser());
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <Navbar>
        {/* Desktop */}
        <NavBody className="hidden xl:flex items-center justify-between">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 relative">
            {user ? (
              <Link href="/offer">
                <OfferButton />
              </Link>
            ) : (
              ""
            )}

            <Link
              href="https://calendly.com/deepmali590/30min"
              target="_blank"
            >
              <NavbarButton
                variant="primary"
                className="flex gap-2 items-center"
              >
                <SlEarphonesAlt /> Book a Call
              </NavbarButton>
            </Link>

            {/* User Auth Section */}
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <img
                  src="https://avatar.iran.liara.run/public"
                  className="w-10 h-10 text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                />

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-xl overflow-hidden z-50 animate-fadeIn">
                    {userMenuItems.map((item, idx) => (
                      <Link key={idx} href={item.link}>
                        <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-800 font-medium border-b last:border-b-0">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 font-semibold"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthModal("login")}
                className="px-5 py-2 rounded-xl cursor-pointer font-bold bg-white text-black shadow-md border border-gray-200 
              hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Sign In
              </button>
            )}
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <NavbarLogo className="mx-auto" />
            <div className="flex items-center gap-3">
              <Link href="/offer">
                <BiSolidOffer className="text-[25px] text-white" />
              </Link>
              <LuHeadset
                onClick={() => setIsOpen(true)}
                className="text-xl text-white cursor-pointer hover:text-gray-300"
              />
              {user ? (
                <FaUserCircle
                  className="text-xl text-white cursor-pointer hover:text-gray-300"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                />
              ) : (
                <span
                  onClick={() => setAuthModal("login")}
                  className="text-white font-medium cursor-pointer"
                >
                  Sign In
                </span>
              )}
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black block py-2 px-4 w-full"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <NavbarButton variant="primary" className="w-full">
                <Link
                  href="https://calendly.com/deepmali590/30min"
                  target="_blank"
                >
                  Book a Call
                </Link>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Auth Modal */}
      {authModal === "login" && (
        <Login
          onClose={() => setAuthModal(null)}
          onSwitch={() => setAuthModal("signup")}
        />
      )}

      {authModal === "signup" && (
        <Signup
          onClose={() => setAuthModal(null)}
          onSwitch={() => setAuthModal("login")}
        />
      )}
    </>
  );
};

export default Header;
