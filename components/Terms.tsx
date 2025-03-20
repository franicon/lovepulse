"use client";

import { useState, useEffect, useRef } from "react";

const Terns = () => {
    const [activeSection, setActiveSection] = useState("Introduction");
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    const sections = [
        "Introduction",
        "User Eligibility",
        "Payment Method",
        "Utility Payment",
        "Fees and Charges",
        "Security and Privacy",
        "Refunds and Cancellations",
        "Terminations",
        "Limitation of Liability",
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
                Terms of Use
            </header>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-6 p-4">
                {/* Sidebar Navigation */}
                <aside className="md:w-1/4 bg-white p-6 rounded-md sticky top-16 h-fit">
                    <h2 className="text-lg font-semibold mb-2"> Terms of Use</h2>
                    <p className="text-sm text-gray-500">
                        Description text. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                    <h1 className="text-2xl font-bold text-[#022150] mb-4">Terms of Use
                    </h1>

                    {sections.map((section, index) => (
                        <section
                            key={index}
                            id={section}
                            ref={(el) => {
                                if (el) sectionRefs.current[section] = el;
                            }}                            className="mb-8"
                        >
                            <h2 className="text-xl font-semibold">{section}</h2>
                            {
                                section && section === 'Introduction' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        These Terms and Conditions ("Terms") govern your use of the UtilityHub website and mobile application
                                        (collectively referred to as the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms.
                                        If you do not agree to these Terms, please do not use the Platform.
                                    </p>
                                )
                            }

                            {
                                section && section === 'User Eligibility' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        You must be at least 18 years old to use our services. By using the Platform, you confirm that you are of legal age.
                                    </p>
                                )
                            }

                            {
                                section && section === 'Account Registration' && (
                                    <>
                                        <p> We use the information we collect for the following purposes:</p>
                                        <ul className="list-disc  mt-2 text-gray-700 leading-relaxed">
                                            <li>
                                                <strong>To Provide Services:</strong> We use your information to process utility payments, provide customer support, and fulfill your requests for services.
                                            </li>
                                            <li>
                                                <strong> To Improve Our Services:</strong> We analyze user data to enhance the functionality and performance of the Platform, develop new features, and improve user experience.
                                            </li>
                                        </ul>
                                    </>

                                )
                            }
                            {
                                section && section === 'Payment Method' && (
                                    <>
                                        <p className="text-gray-700 mt-2 leading-relaxed">
                                            UtilityHub accepts various payment methods, including debit/credit cards, mobile money, and bank transfers. The availability of payment methods may vary depending on the service you are using.                                        </p>
                                    </>

                                )
                            }

                            {
                                section && section === 'Utility Payment' && (
                                    <>
                                        <p> You have certain choices regarding the use of your personal information: </p>
                                        <ul className="list-disc  mt-2 text-gray-700 leading-relaxed">
                                            <li>
                                                <strong> Access and Correction:</strong> You can access and update your personal information through your account settings.
                                            </li>
                                            <li>
                                                <strong> Marketing Communications:</strong> You can opt out of receiving promotional emails by following the unsubscribe instructions in the email or by contacting us.
                                            </li>
                                        </ul>
                                    </>

                                )
                            }
                            {
                                section && section === 'Fees and Charges' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        UtilityHub may charge service fees for certain transactions. Any applicable fees will be clearly displayed before you complete a transaction.
                                    </p>
                                )
                            }

                            {
                                section && section === 'Security and Privacy' && (
                                    <>
                                        <p className="text-gray-700 mt-2 leading-relaxed">
                                            UtilityHub takes data security and user privacy seriously. We employ industry-standard security measures to protect your personal information.
                                            Please review our Privacy Policy for more information on how we handle your data.
                                        </p>
                                    </>

                                )
                            }
                            {
                                section && section === 'Refunds and Cancellations' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        We will retain your data only for as long as necessary to fulfill the purposes outlined in this Policy unless a longer retention period is required by law.
                                    </p>
                                )
                            }
                            {
                                section && section === 'Terminations' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Changes to this Privacy Policy We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons.
                                        We will notify you of any material changes by posting a revised version on our website or through other appropriate communication channels.
                                    </p>
                                )
                            }

                            {
                                section && section === 'Limitation of Liability' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        UtilityHub is not liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits or revenues, whether incurred directly or indirectly, arising out of your use of the Platform or any transactions made through it.
                                    </p>
                                )
                            }
                            {
                                section && section === 'Changes to Terms and Platform' && (
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        UtilityHub reserves the right to modify or update these Terms at any time. You are responsible for regularly reviewing these Terms. Continued use of the Platform after changes have been made constitutes acceptance of the updated Terms
                                    </p>
                                )
                            }
                        </section>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default Terns;
