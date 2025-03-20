import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {MdLocationOn, MdCall, MdMail} from "react-icons/md";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className=" text-black py-8 mt-30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4">
                    {/* Logo & Tagline */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <span className="text-red-500 text-2xl font-bold">L</span>
                            <span className="ml-2 text-lg font-semibold">❤️VE PULSE</span>
                        </div>
                        <p className="text-sm mt-2 max-w-md">
                            To inspire powerful conversations and collaborations among members
                            worldwide so together we can change the world with creativity.
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <FaXTwitter className="text-xl cursor-pointer hover:text-gray-600" />
                        <FaInstagram className="text-xl cursor-pointer hover:text-gray-600" />
                        <FaLinkedin className="text-xl cursor-pointer hover:text-gray-600" />
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col md:flex-row justify-between  text-sm py-4">
                    <div className="flex space-x-4 self-center mb-5">
                        <Link href="/" className="hover:underline">About Us</Link>
                        <span>•</span>
                        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        <span>•</span>
                        <Link href="/terms-of-use" className="hover:underline">Terms of Use</Link>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:flex items-center space-x-4 mt-4 md:mt-0 hidden">
                        <MdLocationOn className="text-lg" />
                        <span>New York, NY</span>
                        <span>|</span>
                        <a href="mailto:info@lovepulse.com" className="hover:underline">
                            info@lovepulse.com
                        </a>
                        <span>|</span>
                        <MdCall className="text-lg" />
                        <span>+1 (732) 860-8696</span>
                    </div>
                    <div className="flex lg:hidden flex-col  space-y-8 mt-4 md:mt-0">
                       <div className="flex gap-2">
                           <MdLocationOn className="text-lg" />
                           <span>New York, NY</span>
                       </div>
                        <div className="flex gap-2">
                            <MdMail className="text-lg" />
                            <a href="mailto:info@lovepulse.com" className="hover:underline">
                                info@lovepulse.com
                            </a>
                        </div>
                       <div className="flex gap-2">
                           <MdCall className="text-lg" />
                           <span>+1 (732) 860-8696</span>
                       </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-sm text-gray-600 mt-4">
                    &copy; Lovepulse 2025
                </div>
            </div>
        </footer>
    );
};

