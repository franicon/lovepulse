"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react"; // Icons for open/close

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-b-gray-300 transition-all ease-in-out mx-5">
            <nav className="flex items-center mx-4 justify-between relative py-4 container mx-auto">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={80} height={80} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-4">
                    <ul className="flex gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                href={link.href}
                                key={link.key}
                                className="text-sm cursor-pointer transition-all ease-in-out hover:font-semibold hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                    <Button
                        type="button"
                        title="Try For Free"
                        variant="bg-primary text-[#F5F5F5] px-3 py-3 text-xs rounded-md cursor-pointer hover:bg-primary/90 transition-all ease-in-out shadow"
                    />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden z-50 "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={40} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 w-screen h-screen bg-white shadow-lg transform z-40 px-5 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:hidden`}
                >
                    <ul className="flex flex-col p-5 space-y-4 pt-50">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link
                                    href={link.href}
                                    className="block text-gray-700 lg:text-sm hover:text-primary transition-all text-2xl text-center"
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="p-5">
                        <Button
                            type="button"
                            title="Try For Free"
                            variant="bg-primary text-white w-full py-4 rounded-md"
                        />
                    </div>
                </div>
            </nav>

            {/* Overlay (when menu is open) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-5 h-screen lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};
