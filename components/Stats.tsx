import Image from "next/image";

const StatsSection = () => {
    return (
        <section className="py-40 px-6 md:px-16 bg-white text-center  xl:container mx-auto">
            <div className=" flex flex-col md:flex-row md:justify-between lg:justify-around xl:justify-evenly md:space-y-0 justify-center  sm::items-center space-y-10 ">

                {/* First Stat - 4.5k Couples */}
                <div className="flex flex-col items-center justify-center  2xl:w-[350px] xl:w-[300px] lg:w-[250px] md:w-[190px]">
                    <Image src="/hearts.png" alt="Love Hearts" width={300} height={300} className="w-40 h-auto" />
                    <h3 className="text-3xl font-bold mb-2 -mt-5">4.5k</h3>
                    <p className="text-gray-500 text-sm pb-5 ">
                        Couples make effective use of Love Pulse and stay connected
                    </p>
                </div>

                {/* Middle Stat - 5-Star Review */}
                <div className="relative mx-auto  md:mt-4 mt-20 bg-[#F25639] text-white rounded-t-[4rem] p-6 flex flex-col justify-center items-center shadow-lg 2xl:w-[380px] xl:w-[340px] lg:w-[250px] md:w-[190px] w-[450px] xl:py-18 md:py-0 py-18">
                    <div className="absolute xl:-top-14 lg:-top-8 md:-top-4 -top-10  flex">
                        <Image src="/couple-1.png" alt="User 1" width={100} height={100} className="rounded-full border-3 border-white 2xl:h-25 xl:h-23 lg:h-18 md:h-14 h-20 w-auto" />
                        <Image src="/couple-2+.png" alt="User 2" width={100} height={100} className="rounded-full border-3 border-white 2xl:h-25 xl:h-23 lg:h-18 md:h-14 h-20 w-auto -ml-4" />
                        <Image src="/couple-1+.png" alt="User 3" width={100} height={100} className="rounded-full border-3 border-white 2xl:h-25 xl:h-23 lg:h-18 md:h-14 h-20 w-auto -ml-4" />
                        <Image src="/couple-2.png" alt="User 3" width={100} height={100} className="rounded-full border-3 border-white 2xl:h-25 xl:h-23 lg:h-18  md:h-14 h-20 w-auto -ml-5  " />
                    </div>
                  <div className="relative w-screen">
                      <p className=" 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-[18px] text-3xl leading-relaxed font-[100] relative z-10">
                          <div className="">We Have More <br/> Than 1000  <span className="font-bold">5-star</span> <br/> Review</div>
                      </p>
                      <div className="absolute inset-0 bg-white/40 backdrop-blur-lg h-100 md:mt-58 mt-56"></div>

                  </div>
                </div>

                {/* Third Stat - Hugging Couple */}
                <div className="relative flex flex-col items-center justify-center md:mt-4 mt-20">
                    <div className="bg-[#FFEACA]  rounded-t-[9rem] 2xl:w-[340px] xl:w-[300px] lg:w-[250px] md:w-[190px]  w-[350px] mx-auto px-5">
                        <Image src="/couples.png" alt="Couple Hugging" width={240} height={240} className="rounded-lg -mt-18 mx-auto" />
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="relative">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-lg h-100 -mt-16"></div>
                <div className="mt-12 grid md:grid-cols-3 grid-cols-2 items-center  justify-evenly gap-8 relative z-10">
                    {/* Active Users */}
                    <div className="text-center flex items-center ">
                        <div className="">
                            <Image src="/icons/active_user.png" alt="Customer Icon" width={150} height={150} />
                        </div>
                        <div className="text-left ">
                            <h3 className="text-4xl font-bold mb-2">15k+</h3>
                            <p className="text-gray-500 text-xs">Active users</p>
                        </div>
                    </div>
                    {/* Total Downloads */}
                    <div className="text-center flex items-center">
                        <div className="">
                            <Image src="/icons/total_download.png" alt="Customer Icon" width={150} height={150} />
                        </div>
                        <div className="text-left ">
                            <h3 className="text-4xl font-bold mb-2">30k</h3>
                            <p className="text-gray-500 text-xs">Total Downloads</p>
                        </div>
                    </div>

                    {/* Customers */}
                    <div className="text-center flex items-center">
                        <div className="">
                            <Image src="/icons/customer.png" alt="Customer Icon" width={150} height={150} />
                        </div>
                        <div className="text-left ">
                            <h3 className="text-4xl font-bold mb-2">10k</h3>
                            <p className="text-gray-500 text-xs">Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
