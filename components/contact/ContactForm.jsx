"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setResult("Sending....");

    const fullName = `${e.target.first_name.value} ${e.target.last_name.value}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ef7741e0-8b26-4ccc-8b98-749280618d62",
          name: fullName,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
        }),
      });

      const resultData = await response.json();
      if (resultData.success) {
        setResult("Form submitted successfully ✅");
        e.target.reset();
      } else {
        setResult(resultData.message || "Submission failed ❌");
      }
    } catch (err) {
      console.error("Web3Forms submit error:", err);
      setResult("Error submitting form ❌");
    }
  }

  return (
    <section className="bg-black">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-white">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            Chat to our friendly team
          </h1>
          <p className="mt-3 text-gray-400">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Email */}
            <div>
              <span className="inline-block p-3 text-white rounded-full bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-white">Email</h2>
              <p className="mt-2 text-sm text-gray-400">Our friendly team is here to help.</p>
              <p className="mt-2 text-sm text-white">deeprise.in@gmail.com</p>
            </div>
            {/* Live Chat */}
            <div>
              <span className="inline-block p-3 text-white rounded-full bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-white">Live chat</h2>
              <p className="mt-2 text-sm text-gray-400">Our friendly team is here to help.</p>
              <p className="mt-2 text-sm text-white">Start new chat</p>
            </div>
            {/* Office */}
            <div>
              <span className="inline-block p-3 text-white rounded-full bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-white">Office</h2>
              <p className="mt-2 text-sm text-gray-400">
                Visit our office to learn more about our products and services.
              </p>
              <p className="mt-2 text-sm text-white">
                Kantaliya, Pali, Rajasthan, India
              </p>
            </div>
            {/* Phone */}
            <div>
              <span className="inline-block p-3 text-white rounded-full bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-white">Phone</h2>
              <p className="mt-2 text-sm text-gray-400">Mon-Sat from 8am to 8pm.</p>
              <p className="mt-2 text-sm text-white">+91-9636249430</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-4 py-6 rounded-lg bg-white/5 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-200">First Name</label>
                  <input
                    required
                    name="first_name"
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-300 border border-gray-700 rounded-lg outline-none"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-200">Last Name</label>
                  <input
                    required
                    name="last_name"
                    type="text"
                    placeholder="Doe"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-300 border border-gray-700 rounded-lg outline-none"
                  />
                </div>
              </div>
              <div className="-mx-2 md:items-center md:flex my-3">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-200">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-300 border border-gray-700 rounded-lg outline-none"
                  />
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-200">Phone</label>
                  <input
                    required
                    name="phone"
                    type="text"
                    placeholder="+12-125-825"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-300 border border-gray-700 rounded-lg outline-none"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-200">Message</label>
                <textarea
                  required
                  name="message"
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-300 border border-gray-700 rounded-lg md:h-56 outline-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white cursor-pointer hover:text-black capitalize transition-colors duration-300 transform bg-black border-[1px] border-white rounded-lg hover:bg-white focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Send message
              </button>
              <span className="text-sm text-gray-400 mt-2 block">{result}</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
