"use client";
import Image from "next/image";

const dummyImage = "/landitem2.png"; // Replace with your image paths

const deals = [
  {
    name: "APPLE AIRPODS PRO 2ND GENERATION, WHITE",
    discount: "56% OFF",
    sold: 28,
    quality: "Super Mint",
    city: "BARRACKPORE",
    price: "₹ 10999",
    mrp: "₹ 24900",
    image: dummyImage,
  },
  {
    name: "VIVO T2 PRO 5G (8/256) GB, NEW MOON BLACK",
    discount: "45% OFF",
    sold: 21,
    quality: "Super Mint",
    city: "BARASAT",
    price: "₹ 15499",
    mrp: "₹ 27999",
    image: dummyImage,
  },
  {
    name: "MI 2 IN 1 USB CABLE",
    discount: "0% OFF",
    sold: 64,
    quality: "Sealed Pack",
    city: "BRACK-1",
    price: "₹ 179",
    mrp: "",
    image: dummyImage,
  },
];

const DealOfTheDay = () => {
  return (
    <section className="bg-[#f9f9f9] w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold italic">
              <span className="text-red-600 font-bold italic">Deal</span>{" "}
              <span className="text-gray-800">Of The Day</span>
            </h2>
            <button className="mt-4 text-red-600 border border-red-500 px-5 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-red-100 transition">
              View More →
            </button>
            <div className="mt-4 flex items-center gap-4">
              <button className="w-9 h-9 border border-gray-500 text-gray-700 rounded-full text-lg flex items-center justify-center hover:bg-gray-200 transition">
                ←
              </button>
              <button className="w-9 h-9 border border-gray-500 text-gray-700 rounded-full text-lg flex items-center justify-center hover:bg-gray-200 transition">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm relative w-[260px]"
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain rounded-md"
                  />
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded font-bold shadow">
                    {item.discount}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-black">
                  <h3 className="font-semibold leading-snug text-[15px]">
                    {item.name}
                  </h3>
                  <p className="bg-yellow-400 text-black text-xs font-semibold w-fit px-2 py-0.5 rounded">
                    Sold {item.sold}
                  </p>
                  <p className="text-xs">
                    <span className="font-semibold">Quilty :</span>{" "}
                    {item.quality}
                  </p>
                  <p className="text-xs bg-red-600 text-white w-fit px-2 py-0.5 rounded font-medium">
                    {item.city}
                  </p>
                  <p className="text-base font-bold mt-1">
                    {item.price}{" "}
                    {item.mrp && (
                      <span className="text-gray-400 line-through text-sm font-normal ml-1">
                        {item.mrp}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
