import Image from "next/image";

export const Cta = () => {
    return (
        <div className=" py-16 px-6 md:px-12 lg:px-24 container mx-auto mt-16">
            <div className="grid md:grid-cols-2 gap-10  mx-auto items-center">
                {/* Therapist Cards */}
                <div className="grid grid-cols-2 gap-12 relative">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 transform translate-y-8 ">
                        <Image src="/t-1.png" alt="Therapist 1" width={500} height={350} className="rounded-md mb-4 w-full" />
                        <h3 className="text-lg font-bold">WILSON IDRIS</h3>
                        <p className="text-sm text-gray-600">Relationship Therapist</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 transform -translate-y-6">
                        <Image src="/t-2.png" alt="Therapist 1" width={500} height={350} className="rounded-md mb-4 w-full" />
                        <h3 className="text-lg font-bold">WILSON IDRIS</h3>
                        <p className="text-sm text-gray-600">Relationship Therapist</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 transform translate-x-8 ">
                        <Image src="/t-3.png" alt="Therapist 1" width={500} height={350} className="rounded-md mb-4 w-full" />
                        <h3 className="text-lg font-bold">WILSON IDRIS</h3>
                        <p className="text-sm text-gray-600">Relationship Therapist</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 transform -translate-y-12 translate-x-6">
                        <Image src="/t-4.png" alt="Therapist 1" width={500} height={350} className="rounded-md mb-4 w-full" />
                        <h3 className="text-lg font-bold">WILSON IDRIS</h3>
                        <p className="text-sm text-gray-600">Relationship Therapist</p>
                    </div>
                </div>

                {/* Sign-up Section */}
                <div className="text-left self-start">
                    <h2 className="text-5xl font-[800] text-gray-900 leading-tight mb-18">
                        Sign up as a therapist with <span className="text-black">LOVEPULSE</span>
                    </h2>
                    <p className="text-gray-600 mt-4">
                        {"Making Work-Life Better,"} is our brand promise at LOVEPULSE. It embodies who we are,
                        our beliefs, and our values. Every day, we strive to improve the work lives of our clients,
                        their workers, and our own LOVEPULSE teams.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Our values are a set of principles that govern our actions. These principles are fundamental
                        to LOVEPULSE culture and way of thinking. Everyone in our organization embodies them.
                    </p>
                    <button className="mt-6 bg-[#F25639] text-white px-6 py-3 rounded-md shadow-md">
                        Get Started
                    </button>
                </div>
            </div>
        </div>

    );
};