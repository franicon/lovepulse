"use client";

import { useState, useRef } from "react";

const Terms = () => {
    const [activeSection, setActiveSection] = useState("Introduction");

    const sections = [
        "Introduction",
        "User Eligibility",
        "Account Registration",
        "Payment Method",
        "Utility Payment",
        "Fees and Charge",
        "Security and Privacy",
        "Refunds and Cancellations",
        "Terminations",
        "Limitation of Liability",
        "Changes to terms and Platforms",
    ];

    const handleSectionClick = (section) => {
        setActiveSection(section);
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-red-600 text-white text-center py-12 text-2xl font-bold">
                Terms of Use
            </header>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-6 p-4">
                {/* Sidebar Navigation */}
                <aside className="md:w-1/4 bg-white p-6 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Navigation</h2>
                    <p className="text-sm text-gray-500">
                        Click a section to scroll.
                    </p>
                    <ul className="mt-4 space-y-2">
                        {sections.map((section, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer pl-2 text-sm py-2 ${
                                    activeSection === section
                                        ? "border-l-2 border-red-500 font-semibold text-primary"
                                        : "text-[#534F4F] border-b border-[#D1CECE] italic"
                                }`}
                                onClick={() => handleSectionClick(section)}
                            >
                                {section}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="md:w-3/4 bg-white p-8 rounded-md">
                    <h1 className="text-2xl font-bold text-[#022150] mb-4">Privacy Policy</h1>

                    {/* Sections with ID for scrolling */}
                    <section id="Introduction">
                        <h2 className="text-xl font-semibold">Introduction</h2>
                        <p className="text-gray-700 mt-2">
                            These Terms and Conditions ("Terms") govern your use of the UtilityHub website and mobile application (collectively referred to as the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms.
                            If you do not agree to these Terms, please do not use the Platform.
                        </p>
                    </section>

                    <section id="User Eligibility" className="mt-6">
                        <h2 className="text-xl font-semibold">User Eligibility</h2>
                        <p className="text-gray-700 mt-2">
                            Content for user eligibility...
                        </p>
                    </section>

                    <section id="Account Registration" className="mt-6">
                        <h2 className="text-xl font-semibold">Account Registration</h2>
                        <p className="text-gray-700 mt-2">
                            Content for account registration...
                        </p>
                    </section>

                    <section id="Payment Method" className="mt-6">
                        <h2 className="text-xl font-semibold">Payment Method</h2>
                        <p className="text-gray-700 mt-2">
                            Content for payment method...
                        </p>
                    </section>

                    <section id="Utility Payment" className="mt-6">
                        <h2 className="text-xl font-semibold">Utility Payment</h2>
                        <p className="text-gray-700 mt-2">
                            Content for utility payment...
                        </p>
                    </section>

                    <section id="Fees and Charge" className="mt-6">
                        <h2 className="text-xl font-semibold">Fees and Charge</h2>
                        <p className="text-gray-700 mt-2">
                            Content for fees and charge...
                        </p>
                    </section>

                    <section id="Security and Privacy" className="mt-6">
                        <h2 className="text-xl font-semibold">Security and Privacy</h2>
                        <p className="text-gray-700 mt-2">
                            Content for security and privacy...
                        </p>
                    </section>

                    <section id="Refunds and Cancellations" className="mt-6">
                        <h2 className="text-xl font-semibold">Refunds and Cancellations</h2>
                        <p className="text-gray-700 mt-2">
                            Content for refunds and cancellations...
                        </p>
                    </section>

                    <section id="Terminations" className="mt-6">
                        <h2 className="text-xl font-semibold">Terminations</h2>
                        <p className="text-gray-700 mt-2">
                            Content for terminations...
                        </p>
                    </section>

                    <section id="Limitation of Liability" className="mt-6">
                        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
                        <p className="text-gray-700 mt-2">
                            Content for limitation of liability...
                        </p>
                    </section>

                    <section id="Changes to terms and Platforms" className="mt-6">
                        <h2 className="text-xl font-semibold">Changes to terms and Platforms</h2>
                        <p className="text-gray-700 mt-2">
                            Content for changes to terms and platforms...
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Terms;
