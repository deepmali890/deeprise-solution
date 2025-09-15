import React from 'react'

const page = () => {
    return (
        <section className="bg-black text-gray-300 min-h-screen px-4 sm:px-8 md:px-16 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
                    Security at Deeprise
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-center">
                    At Deeprise, we prioritize the security of your data and projects. We use industry-standard measures to safeguard your information.
                </p>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Data Protection
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            All project data and personal information are stored securely with encryption and access controls to prevent unauthorized access.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Secure Communication
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            We ensure all communications, including emails and file transfers, are protected using secure channels and protocols.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Compliance & Best Practices
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            Deeprise follows industry best practices and complies with relevant standards to maintain the highest security level for our clients.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Continuous Monitoring
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            We continuously monitor our systems for potential threats and vulnerabilities to proactively protect your projects and data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
