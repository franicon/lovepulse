import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import {Button} from "@/components/Button";

export const Navbar = () => {
    return (
        <div className="border-b border-b-gray-300 transition-all ease-in-out">
            <nav className="flex items-center mx-4 justify-between relative py-4 container xl:mx-auto ">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={100} height={100}/>
                </Link>
                <div className="flex items-center gap-4">
                    <ul className="hidden h-full gap-8 lg:flex">{NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="text-sm cursor-pointer transition-all ease-in-out hover:font-semibold hover:text-primary">{link.label}</Link>
                    ))}</ul>
                    <div className="hidden lg:flex">
                        <Button
                            type="button"
                            title="Try For Free"
                            variant="bg-primary text-[#F5F5F5] px-3 py-3 text-xs rounded-md cursor-pointer hover:bg-primary/90 transition-all ease-in-out shadow"/>
                    </div>
                </div>
            </nav>
        </div>

    );
};