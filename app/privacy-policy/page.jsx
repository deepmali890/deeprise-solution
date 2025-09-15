import React from 'react'

const page = () => {
  return (
 <section className="bg-black text-gray-300 min-h-screen px-4 sm:px-8 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-center">
          At Deeprise, your privacy is important. We are committed to protecting the information you share while using our services.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
              Information Collection
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              We collect only necessary information such as contact details and project requirements. We do not share your personal information with third parties without consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
              Cookies & Analytics
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Deeprise uses cookies to improve website experience and gather anonymous usage data. You can disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
              Data Security
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              We implement best practices and security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
              Your Rights
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              You can request access, correction, or deletion of your personal information. Contact us for any privacy-related inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
