"use client";

import { useEffect, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginUser } from "@/redux/slices/auth.slice";
import { RxCross2 } from "react-icons/rx";


const Login = ({ onClose, onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });




  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, user } = useSelector((state) => state.auth);

  const handleChange = (e) => { setCredentials({ ...credentials, [e.target.name]: e.target.value }) }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
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
      <div className="flex w-full relative max-w-4xl rounded-lg overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-3 left-3">
          <RxCross2 className="text-black text-2xl cursor-pointer hover:text-gray-500" />
        </button>

        {/* Left Panel - Login Form */}
        <div className="w-full md:w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">
            Login to Your Account
          </h2>

          {/* Google Sign-In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-2.5 mb-4 rounded-md border-2 border-black text-black font-semibold hover:bg-gray-100 transition-colors"
          >
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-400" />
            <span className="mx-4 text-gray-500 font-semibold text-sm">OR</span>
            <hr className="flex-grow border-gray-400" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full pl-10 pr-3 py-2 rounded-md border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
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
                  className="w-full pl-10 pr-10 py-2 rounded-md border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
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
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-black text-sm hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-md cursor-pointer bg-black text-white font-semibold hover:bg-black/90 transition-colors"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
            {/* {error && <p className="text-red-500">{error}</p>} */}
          </form>

          <p className="mt-6 text-gray-600 text-center text-sm">
            Don't have an account?{" "}
            <span onClick={onSwitch} className="text-black cursor-pointer hover:underline font-medium">
              Register here
            </span>
          </p>
        </div>

        {/* Right Panel - Image and Text */}
        <div
          className="hidden md:flex md:w-1/2 relative items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-gray-200">
              Log in to access your dashboard, personalized content, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
