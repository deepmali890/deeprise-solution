import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

const allServices = [
    {
        title: "Modern Web Development",
        description:
            "We create responsive, scalable, and high-performance websites that help businesses thrive online. From concept to launch, every project is built with precision and innovation.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="App demo"
                />
            </div>
        ),
    },
    {
        title: "Mobile App Solutions",
        description:
            "Our team designs and develops feature-rich mobile apps for Android and iOS. We focus on seamless interactions, optimal performance, and a user-friendly experience.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="App demo"
                />
            </div>
        ),
    },
    {
        title: "UI/UX Design Excellence",
        description:
            "We craft intuitive and visually stunning designs that elevate user experience. Every interface is designed to be engaging, accessible, and aligned with your brand identity.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1613487270668-2b4df6406cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="App demo"
                />
            </div>
        ),
    },
    {
        title: "SEO & Digital Growth",
        description:
            "Increase your online visibility and reach with our SEO and digital optimization strategies. We implement best practices to help your business grow organically and effectively.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1613487270668-2b4df6406cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="App demo"
                />
            </div>
        ),
    },
    {
        title: "Maintenance & Support",
        description:
            "We provide continuous maintenance and support for your web and mobile solutions, ensuring everything runs smoothly and efficiently.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1581091870622-3c29d4268b46?q=80&w=687&auto=format&fit=crop"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Maintenance"
                />
            </div>
        ),
    },
    {
        title: "Performance Optimization",
        description:
            "We optimize your website and apps for speed, reliability, and user experience, boosting performance across all devices and platforms.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1612831660933-2b8f0cba21c1?q=80&w=687&auto=format&fit=crop"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Performance"
                />
            </div>
        ),
    },
    {
        title: "Cloud Integration", // my suggested extra service
        description:
            "We integrate your applications with cloud platforms for scalable, secure, and efficient solutions that grow with your business.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1531497865142-2f3f6db33e2b?q=80&w=687&auto=format&fit=crop"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Cloud Integration"
                />
            </div>
        ),
    },
];

const ServicesOverview = () => {
    return (
        <div className="py-16">
            <div className="w-full ">
                <h1 className="bg-opacity-50 bg-gradient-to-b py-4 from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
                    Our Expertise
                </h1>
                {/* Only pass first 4 services to StickyScroll */}
                <StickyScroll content={allServices.slice(0, 4)} />
            </div>

            <Link href="/services">
                <div className="text-center mt-10 w-fit mx-auto py-2 px-4 flex items-center gap-2 border border-white text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:gap-4 rounded">
                    Read More
                    <FaRegArrowAltCircleRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </Link>
        </div>
    );
};

export default ServicesOverview;
