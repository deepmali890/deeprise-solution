"use client";

import { registerUser } from "@/redux/slices/auth.slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";


const Signup = ({ onClose, onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });


  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.auth);

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
  };

  useEffect(() => {
    if (user && !loading && !error) {
      onClose()
    }

  }, [user, loading, error, onClose])

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="flex w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl">



        {/* Left Panel - Form */}
        <div className="w-full  relative md:w-1/2 p-4 bg-white">
          <button onClick={onClose} className="absolute top-3 left-3 cursor-pointer">
            <RxCross2 className="text-black hover:text-gray-500 text-2xl" />
          </button>
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Register Now</h2>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-2.5 mb-4 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
          >
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500 font-semibold text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-black">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-3 py-2 rounded-md border-2 border-black  text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              {error?.field === "fullName" && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>

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
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-2 rounded-md border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              {error?.field === "email" && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-3 pr-10 py-2 rounded-md border-2 border-black text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
                />

                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-black" />
                  ) : (
                    <FaEye className="text-black" />
                  )}
                </div>
                {error?.field === "password" && <p className="text-red-500 text-sm">{error.message}</p>}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                onChange={handleChange}
                className="h-4 w-4 text-black cursor-pointer bg-gray-700  rounded focus:ring-black"
                required
              />
              <label htmlFor="acceptTerms" className="text-black text-sm">
                I accept the{" "}
                <a href="#" className="text-gray-400 hover:underline">
                  Terms and Conditions
                </a>
              </label>

            </div>

            {/* Submit Button */}
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
                  <span>Signing up...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>


          <p className="mt-6 text-gray-400 text-center text-sm">
            Already have an account?{" "}
            <span onClick={onSwitch} className="text-black cursor-pointer hover:underline font-medium">
              Login here
            </span>
          </p>
          {error?.field === "general" && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>

        {/* Right Panel - Image and Text */}
        <div
          className="hidden md:flex md:w-1/2 relative items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1672280727826-44018d85e422?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-200">
              Create an account to unlock exclusive features and content.
              Our registration process is simple, secure, and takes only a minute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
