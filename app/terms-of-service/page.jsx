import React from 'react'

const page = () => {
    return (
        <section className="bg-black text-gray-300 min-h-screen px-4 sm:px-8 md:px-16 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
                    Terms of Service
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-center">
                    Welcome to Deeprise! By accessing our website and services, you agree to comply with our terms of service. Please read them carefully.
                </p>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Services
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            Deeprise provides professional services including Web Development, App Development, UI/UX Design, SEO, Maintenance & Support, and Cloud Integration. All services are delivered as per the agreed scope and specifications.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Usage Guidelines
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            By using our services, you agree not to misuse them or engage in activities that may harm the website, data, or other users. Deeprise reserves the right to suspend or terminate access in case of violations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Payment & Refunds
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            Payments for services are as per the agreed terms. Refunds, if applicable, will be processed as per our refund policy. Any additional services or revisions may incur extra charges.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Limitation of Liability
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            Deeprise is not responsible for indirect or consequential damages arising from the use of our services. Our liability is limited to the fees paid for the specific service.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                            Contact
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            For any questions regarding our Terms of Service, reach out to us via the contact form on our website.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
