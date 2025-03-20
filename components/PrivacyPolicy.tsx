"use client";

import { useState } from "react";

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState("Introduction");

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

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-red-600 text-white text-center py-12 text-2xl font-bold">
                Privacy Policy
            </header>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-6 p-4">
                {/* Sidebar Navigation */}
                <aside className="md:w-1/4 bg-white p-6  rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
                    <p className="text-sm text-primary">
                        Description text: "Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                    </p>
                    <ul className="mt-4 space-y-2">
                        {sections.map((section, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer  pl-2 text-sm py-2 ${
                                    activeSection === section
                                        ? "border-l-2 border-red-500 font-semibold text-primary"
                                        : "text-[#534F4F] border-b-1 border-[#D1CECE] italic"
                                }`}
                                onClick={() => setActiveSection(section)}
                            >
                                {section}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="md:w-3/4 bg-white p-8  rounded-md ">
                    <h1 className="text-2xl font-bold text-[#022150] mb-4">Privacy Policy</h1>

                    <section>
                        <h2 className="text-xl font-semibold">Introduction</h2>
                        <p className="text-gray-700 mt-2">
                            Welcome to UnityHub ("we," "us," or "our"). We are committed to
                            protecting your privacy and ensuring the security of your personal
                            information. This Privacy Policy explains how we collect, use,
                            disclose, and protect your personal data when you use our website
                            and mobile application (collectively referred to as the
                            "Platform"). By using the Platform, you consent to the practices
                            described in this Privacy Policy.
                        </p>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">What information do we collect?</h2>
                        <ul className="list-disc  mt-2 text-gray-700">
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
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes: </p>
                        <ul className="list-disc  mt-2 text-gray-700">
                            <li><b>To Provide Services:</b> We use your information to process utility payments, provide customer support, and fulfill your requests for services. </li>
                            <li><b>To Improve Our Services:</b> We analyze user data to enhance the functionality and performance of the Platform, develop new features, and improve user experience. </li>
                            <li><b>To Communicate with You:</b> We may send you transaction confirmations, updates, and important service-related information. We may also send promotional and marketing materials with your consent. </li>
                            <li><b>To Protect Our Platform:</b> We use information to monitor and prevent fraud, security threats, and abuse of our services. </li>
                        </ul>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">Sharing of your Information</h2>
                        <p>We may share your personal information with the following parties: </p>
                        <ul className="list-disc  mt-2 text-gray-700">
                            <li>
                               <b> Service Providers: </b> We may share your data with trusted service providers who assist us in providing our services, including payment processors, data analytics providers, and customer support services.
                            </li>
                            <li>
                                <b>Legal and Compliance:</b> We may disclose your information to comply with legal obligations, respond to lawful requests, protect our rights, privacy, safety, or property, or enforce our Terms and Conditions.
                            </li>
                            <li>
                                <b>Business Transfers:</b> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
                            </li>
                        </ul>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">Your Choices</h2>
                        <p>You have certain choices regarding the use of your personal information: </p>
                        <ul className="list-disc  mt-2 text-gray-700">
                            <li><b>Access and Correction: </b> You can access and update your personal information through your account settings. </li>
                            <li><b>Marketing Communications:</b> You can opt out of receiving promotional emails by following the unsubscribe instructions in the email or by contacting us. </li>
                        </ul>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">Data Security</h2>
                        <p className="text-gray-700 mt-2">
                            We take data security seriously and implement security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is entirely secure. While we strive to protect your data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">Data Deletion</h2>
                        <p className="text-gray-700 mt-2">
                            You have the right to request the deletion of your data from our app/platform at any time. To do so, please follow these steps:
                        </p>
                        <ol className="list-disc list-inside mt-2 text-gray-700">
                            <li> log in to the app </li>
                            <li>Goto Security tab </li>
                            <li>Select Delete account </li>
                            <li>Enter a reason for deletion </li>
                            <li>Confirm deletion.</li>
                        </ol>
                        <p>All data is wiped clean from our database </p>
                    </section>
                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">Data Retention</h2>
                        <p className="text-gray-700 mt-2">
                            We will retain your data only for as long as necessary to fulfill the purposes outlined in this Policy unless a longer retention period is required by law.
                        </p>
                    </section>
                    <section className="mt-6">
                        <h2 className="text-xl font-semibold">Changes to this Policy</h2>
                        <p className="text-gray-700 mt-2">
                            Changes to this Privacy Policy We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting a revised version on our website or through other appropriate communication channels.                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
