import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

export function HomeBenefitsSection() {
    const features = [
        {
            title: "Custom Web Solutions",
            description:
                "We build websites and apps tailored to your business needs, optimized for performance and scalability.",
            icon: <IconTerminal2 />,
        },
        {
            title: "User-Friendly Design",
            description:
                "Beautiful, responsive, and easy-to-navigate interfaces that keep your visitors engaged.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Transparent Pricing",
            description:
                "Affordable packages with no hidden fees. Pay for what you need, nothing more.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Reliable Hosting & Uptime",
            description:
                "Your website stays live and fast with our trusted hosting solutions and 99.9% uptime guarantee.",
            icon: <IconCloud />,
        },
        {
            title: "Seamless Integrations",
            description:
                "Connect your site with payment gateways, CRMs, and marketing tools for smooth business operations.",
            icon: <IconRouteAltLeft />,
        },
        {
            title: "24/7 Support",
            description:
                "Our team is always available to help you with technical or business questions anytime.",
            icon: <IconHelp />,
        },
        {
            title: "Satisfaction Guarantee",
            description:
                "We work until you’re happy. Your success is our priority, backed by a satisfaction guarantee.",
            icon: <IconAdjustmentsBolt />,
        },
        {
            title: "Business Growth Focus",
            description:
                "Every solution we build is designed to help your business grow and reach more customers online.",
            icon: <IconHeart />,
        },
    ];

    return (
        <>
            <div>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 
               text-center font-bold py-4 mt-10 
               text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Why Deeprise is the Best Choice
                </h1>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 relative z-10 py-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </>
    );
}

const Feature = ({ title, description, icon, index }) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-900 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-900 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-800">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-200 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
