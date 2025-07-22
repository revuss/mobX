"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-stretch gap-6">
        <div className="w-full md:w-2/3 h-[350px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/hero.jpg"
            alt="Monsoon Sale"
            width={1000}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/3 h-[350px] border-2 border-red-500 rounded-xl shadow-lg relative flex flex-col items-center justify-center p-4">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-sm px-4 py-1 rounded-full font-semibold">
            LAST SOLD PRODUCT
          </div>

          <div className="mt-12 flex flex-col items-center justify-center text-center space-y-2">
            <Image
              src="/landitem.png"
              alt="Last sold item"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="font-semibold text-md text-gray-800">
              APPLE IPHONE 16 PRO MAX
            </h3>
            <p className="text-sm text-gray-500">KARIMPUR</p>
            <div className="bg-red-500 text-white font-bold px-4 py-1 rounded-full">
              ₹ 99999
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
