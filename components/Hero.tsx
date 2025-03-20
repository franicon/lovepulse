'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative xl:container xl:mx-auto px-1 flex flex-col items-center justify-center text-center xl:py-20 py-25 mt-12  xl:mt-18 sm:px-6 lg:px-8 bg-white">
            {/* Floating Emojis Left */}
            <div className="absolute left-1 bottom-[1rem]  md:bottom-[4rem] lg:bottom-[4rem] lg:left-20 ">
                <Image src="/left-icon.png" alt="Couple 1" width={200} height={200} className="hidden lg:block object-contain bg-white shadow-lg rounded-lg px-4 py-2 " quality={100} priority  />
                <Image src="/left-icon.png" alt="Couple 1" width={150} height={150} className="block lg:hidden object-contain bg-white shadow-lg rounded-lg px-4 py-2 " quality={100} priority  />
            </div>

            <div className="absolute left-8 -top-[1rem] flex lg:space-x-[-45px] space-x-[-25px]">
                <Image src="/couple-1.png" alt="Couple 1" width={100} height={100} className="xl:h-35 xl:w-35 lg:w-25 lg:h-25 md:w-20 md:h-20 h-15 w-15 mt-5"/>
                <Image src="/couple-1+.png" alt="Couple 2" width={100} height={100} className="xl:h-35 xl:w-35 lg:w-25 lg:h-25 md:w-20 md:h-20 h-15 w-15 mb-5"/>
            </div>

            {/* Hero Text */}
            <h1 className="2xl:text-6xl xl:text-5xl lg:text-5xl md:text-[2.5rem] sm:text2xl text-[1.5rem] leading-tight">
                <span className="font-[800]">Helping you stay</span> <i className="font-[Sacramento] font-bold"> Connected </i> <span className="font-black">with</span>
                <br /> <span className="font-black">Love Pulse</span>
            </h1>
            <p className="mt-4 text-black sm:text-[14px] text-[12px] max-w-md mb-2">
                Daily conversation starters and expert advice for all romantic couples
            </p>

            {/* App Store Buttons */}
            <div className="mt-4 flex gap-6">
                {/*<Image src="/apple.png" alt="Apple Store" width={200} height={200} className="object-contain" quality={100} priority />*/}
                {/*<Image src="/google.png" alt="Apple Store" width={200} height={200} className="object-contain" quality={100} priority />*/}
                <button className="flex items-center border-[#9C9C9C]  border sm:px-5 px-2  py-2 gap-1  rounded-lg shadow-md hover:shadow-lg">
                    <Image src="/apple.png" alt="Google Store" width={35} height={35} />
                    <div className="flex flex-col text-left">
                        <p className="sm:text-xs text-[11px]">Download From</p>
                        <p>  <strong className="sm:text-lg  text-sm   font-black">Apple Store</strong></p>
                    </div>                </button>
                <button className="flex items-center  border-[#9C9C9C]   border sm:px-5 px-2  py-2  gap-1 rounded-lg shadow-md hover:shadow-lg">
                    <Image src="/google-play.png" alt="Google Store" width={35} height={35} />
                   <div className="flex flex-col text-left">
                       <p className="sm:text-xs text-[11px]">Download From</p>
                       <p>  <strong className="sm:text-lg text-sm font-black">Google Store</strong></p>
                   </div>
                </button>
            </div>

            <div className="absolute right-6 md:bottom-6 -bottom-2 flex lg:space-x-[-40px] space-x-[-25px]">
                <Image src="/couple-2.png" alt="Couple 3" width={100} height={100} className="rounded-full xl:h-35 xl:w-35 lg:w-25 lg:h-25 md:w-20 md:h-20 h-15 w-15 mt-5" />
                <Image src="/couple-2+.png" alt="Couple 4" width={100} height={100} className="rounded-full xl:h-35 xl:w-35 lg:w-25 lg:h-25 md:w-20 md:h-20 h-15 w-15 mb-5"/>
            </div>

            <div className="absolute top-1 -right-2 xxl:-mr-2">
                <Image src="/left-icon.png" alt="Couple 1" width={190} height={190} className="object-contain bg-white shadow-lg rounded-lg px-4 py-2 "
                       quality={100}
                       priority  />
            </div>
        </section>
    );
}
