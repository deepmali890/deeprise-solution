"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import { LuHeadset } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
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
import { useDispatch } from "react-redux";
import useAuth from "@/hooks/useAuth";
import { logouedOutUser } from "@/redux/slices/auth.slice";
import Login from "../auth/Login";
import { useRouter } from "next/navigation";
import OfferButton from "./OfferButton";
import { CiLogout } from "react-icons/ci";

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
  const [isOfferPopupOpen, setIsOfferPopupOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null);

  const userMenuRef = useRef(null);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const router = useRouter();


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

  const handleContactNow = () => {
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`, "_blank");
    setIsOfferPopupOpen(false);
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/deepmali590/30min", "_blank");
    setIsOfferPopupOpen(false);
  };

  return (
    <>
      <Navbar>
        {/* Desktop */}
        <NavBody className="hidden xl:flex items-center justify-between">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 relative">
            {user && (
              <>

                <Link href="/offer">
                  <div >
                    <OfferButton />
                  </div>
                </Link>

                <Link href="https://calendly.com/deepmali590/30min" target="_blank">
                  <NavbarButton variant="primary" className="flex gap-2 items-center">
                    <SlEarphonesAlt /> Book a Call
                  </NavbarButton>
                </Link>
              </>

            )}

            {user ? (
              <div className="relative" ref={userMenuRef}>
                <img
                  src={user?.user?.profilePicture || "https://avatar.iran.liara.run/public"}
                  className="w-8 h-8 cursor-pointer rounded-full object-cover"
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
                      className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 font-semibold cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthModal("login")}
                className="px-5 py-2 rounded-xl bg-white text-black font-bold shadow-md hover:shadow-lg transition-all"
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
            <div className="flex items-center gap-3 relative">

              {
                user && (
                  <>
                    <Link href="/offer">
                      <BiSolidOffer
                        className="text-[25px] text-white cursor-pointer"

                      />
                    </Link>
                    <LuHeadset
                      onClick={() => setIsOfferPopupOpen(true)}
                      className="text-xl text-white cursor-pointer hover:text-gray-300"
                    />
                  </>
                )}

              {/* Mobile user avatar like desktop */}
              {user ? (
                user.user?.profilePicture ? (
                  <img
                    src={user.user?.profilePicture || "https://avatar.iran.liara.run/public"}
                    alt={user.user.fullName || "User Avatar"}
                    className="w-7 h-7 rounded-full border object-cover"
                    onClick={() => router.push('/profile')}
                  />
                ) : (
                  <div onClick={() => router.push('/profile')} className="w-7 h-7 rounded-full border flex items-center justify-center bg-gray-700 text-white font-medium">
                    {user.user.fullName?.slice(0, 2).toUpperCase() || "NA"}
                  </div>
                )
              ) : (
                <span
                  onClick={() => setAuthModal("login")}
                  className="px-3 py-1 rounded-md bg-white text-black font-bold shadow-md hover:shadow-lg transition-all"
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
            {user ? (
              <div className="px-2 py-2 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
                {user.user.profilePicture ? (
                  <img
                    src={user.user.profilePicture}
                    alt={user.user.fullName || "User Avatar"}
                    className="w-7 h-7 rounded-full border object-cover"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full border flex items-center justify-center bg-gray-700 text-white font-medium">
                    {user.user.fullName?.slice(0, 2).toUpperCase() || "NA"}
                  </div>
                )}

                <div>
                  <p className="font-bold text-black dark:text-white">
                    {user.user.fullName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {user.user.email}
                  </p>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setAuthModal("login")}
                className="px-3 py-2 w-full text-center bg-white dark:bg-neutral-900 text-black dark:text-white font-bold rounded-md cursor-pointer transition-all"
              >
                Sign In
              </span>
            )}

            <div className="mt-4 flex flex-col gap-2 w-full">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black dark:text-white block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {item.name}
                </a>
              ))}

              <div
                onClick={() => {
                  handleLogout();           // logout action
                  setIsMobileMenuOpen(false); // nav close
                }}
                className="text-black py-2 px-4 border-t-1 flex justify-between items-center">Sign Out <CiLogout /></div>
            </div>
          </MobileNavMenu>

        </MobileNav>

      </Navbar>

      {/* Mobile Offer Popup */}
      {/* Mobile Offer Popup */}
      {isOfferPopupOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-sm relative">
            <button
              onClick={() => setIsOfferPopupOpen(false)}
              className="absolute top-1 right-3"
            >
              <RxCross2 className="text-black text-2xl cursor-pointer" />
            </button>

            {/* Headline */}
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
              Special Offer Just for You!
            </h2>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <button
                onClick={handleContactNow}
                className="w-full py-3 rounded-md bg-black text-white font-semibold hover:bg-gray-800 transition"
              >
                Contact Now
              </button>
              <button
                onClick={handleBookCall}
                className="w-full py-3 rounded-md bg-black text-white font-semibold hover:bg-gray-800 transition"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Auth Modal */}
      {authModal === "login" && (
        <Login onClose={() => setAuthModal(null)} />
      )}
    </>
  );
};

export default Header;
