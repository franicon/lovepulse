import Image from "next/image";

export default function OurValues() {
    return (
        <section className="py-16 px-4 md:px-12 lg:px-24 relative">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Our Values</h2>
                <p className="text-gray-600 max-w-7xl mx-auto mt-3">
                    {"Making Work-Life Better,"} is our brand promise at LOVEPULSE. It embodies who we are, our beliefs, and our values.
                    Every day and with all we do, we strive to improve the work lives of our clients, their workers, and our own LOVEPULSE teams.
                    Our values are a set of principles that govern our actions. These principles are fundamental to LOVEPULSE culture and way of thinking.
                    Everyone in our organization embodies them.
                </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute left-0 xl:-top-52 -top-40">
                <Image src="/value-hero.svg" alt="Decorative Element" width={360} height={360} className="xl:h-[480px] h-[320px] w-auto" />
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-2  gap-12  place-items-center mx-auto max-w-7xl text-center">
                {/* Card 1 */}
                <div className="bg-[#F25639] text-white p-6 rounded-xl shadow-lg py-12">
                    <h3 className="text-lg font-bold mb-2">Our Clients come first.</h3>
                    <p className="text-sm px-8">
                        We put our clients first in all we do. We provide solutions that are easy to use, with proper orientation,
                        free migration of your existing data, and most of all, a powerful solution for the human resource management system.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#8C3221] text-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-bold mb-2">Ambition is shared at LOVEPULSE</h3>
                    <p className="text-sm px-8">
                        We win, learn, and grow as a team. We are accountable and empowered, both individually and collectively.
                        Work is becoming more meaningful for everyone, everywhere.Our people platform (LOVEPULSE) assists businesses in taking care of their dedicated personnel.
                    </p>
                </div>
            </div>
        </section>
    );
}
