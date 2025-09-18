"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ForgetPassword = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    // Yaha aap apna send OTP logic add kar sakte ho
    setTimeout(() => {
      setLoading(false);
      alert(`OTP sent to ${email}`);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="flex w-full relative max-w-4xl rounded-lg overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-3 left-3">
          <RxCross2 className="text-black text-2xl cursor-pointer hover:text-gray-500" />
        </button>

        {/* Left Panel - Forget Password Form */}
        <div className="w-full md:w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">
            Forgot Password
          </h2>

          <form onSubmit={handleSendOTP} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-2 rounded-md border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
            </div>

            {/* Send OTP Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md 
             bg-black text-white font-semibold hover:bg-black/90 
             transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Sending OTP...</span>
                </>
              ) : (
                "Send OTP"
              )}
            </button>
          </form>
        </div>

        {/* Right Panel - Image and Text */}
        <div
          className="hidden md:flex md:w-1/2 relative items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Recover Your Account</h2>
            <p className="text-gray-200">
              Enter your registered email to receive a One Time Password (OTP) and reset your password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
