import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdCall } from "react-icons/md";

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
                <div className="flex flex-col md:flex-row justify-between items-center text-sm py-4">
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline">About Us</a>
                        <span>•</span>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <span>•</span>
                        <a href="#" className="hover:underline">Terms of Use</a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center space-x-4 flex-wrap gap-4 mt-4 md:mt-0">
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
                </div>

                {/* Bottom Section */}
                <div className="text-center text-sm text-gray-600 mt-4">
                    &copy; Lovepulse 2025
                </div>
            </div>
        </footer>
    );
};

