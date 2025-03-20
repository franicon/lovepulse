"use client";

import { useState, useEffect, useRef } from "react";

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState("Introduction");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const sections = [
        "Introduction",
        "What Information do we collect",
        "How do we use your Information",
        "Sharing of your Information",
        "Your choices",
        "Data security",
        "Data Deletion",
        "Data Retention",
        "Changes to this Policy",
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1, // Trigger when 60% of the section is visible
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = sectionRefs.current[section];
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-red-600 text-white text-center py-12 text-2xl font-bold">
                Privacy Policy
            </header>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-6 p-4">
                {/* Sidebar Navigation */}
                <aside className="md:w-1/4 bg-white p-6 rounded-md sticky top-16 h-fit">
                    <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
                    <p className="text-sm text-primary">
                        Description text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    </p>
                    <ul className="mt-4 space-y-2">
                        {sections.map((section) => (
                            <li
                                key={section}
                                className={`cursor-pointer pl-2 text-sm py-2 transition-all duration-300 ${
                                    activeSection === section
                                        ? "border-l-4 border-red-500 font-semibold text-primary"
                                        : "text-[#534F4F] border-b border-[#D1CECE] italic"
                                }`}
                                onClick={() =>
                                    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                            >
                                {section}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="md:w-3/4 bg-white p-8 rounded-md">
                    <h1 className="text-2xl font-bold text-[#022150] mb-4">Privacy Policy</h1>

                    {sections.map((section, index) => (
                        <section
                            key={index}
                            id={section}
                            ref={(el) => (sectionRefs.current[section] = el)}
                            className="mb-8"
                        >
                            <h2 className="text-xl font-semibold">{section}</h2>
                            {
                                section && section === 'Introduction' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Welcome to UtilityHub ("we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your
                                        personal information. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you use our
                                        website and mobile application (collectively referred to as the "Platform"). By using the Platform, you consent to the practices
                                        described in this Privacy Policy. Please take a moment to review this policy carefully.
                                    </p>
                                )
                            }

                            {
                                section && section === 'What Information do we collect' && (
                                    <ul className="list-disc  mt-2 text-gray-700 leading-relaxed">
                                        <li>
                                            <strong>We Collect Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and payment card details when you register for an account, make transactions, or contact our customer support.
                                        </li>
                                        <li>
                                            <strong>Transaction Information:</strong>
                                            We collect transaction details related to your utility payments, including payment history, service providers, and payment amounts.
                                        </li>
                                        <li>
                                            <strong>Usage Information:</strong> We may collect information about how you use the Platform, including your interactions with the website and mobile app, IP address, device information, and browser type.
                                        </li>
                                        <li>
                                            <strong>Location Information:</strong>  With your consent, we may collect information about your location when you use our mobile app to provide location-based services.
                                        </li>
                                    </ul>
                                )
                            }
                        </section>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
