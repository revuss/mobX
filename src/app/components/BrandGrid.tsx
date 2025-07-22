"use client";
import Image from "next/image";

const brands = [
  {
    name: "ACCESSORIES",
    image: "/landitem.png",
    price: "₹ 179",
  },
  {
    name: "ASUS",
    image: "/landitem.png",
    price: "₹ 29999",
  },
  {
    name: "HONOR",
    image: "/landitem.png",
    price: "₹ 16299",
  },
  {
    name: "IQOO",
    image: "/landitem.png",
    price: "₹ 7999",
  },
  {
    name: "APPLE",
    image: "/landitem.png",
    price: "₹ 1699",
  },
  {
    name: "GOOGLE",
    image: "/landitem.png",
    price: "₹ 18299",
  },
  {
    name: "INFINIX",
    image: "/landitem.png",
    price: "₹ 4599",
  },
  {
    name: "LAVA",
    image: "/landitem.png",
    price: "₹ 3499",
  },
];

const BrandGrid = () => {
  return (
    <div className="py-10 px-4 flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-7xl">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#fff1f1] to-white shadow-l-md shadow-t-md shadow-b-md rounded-xl flex items-center px-4 py-3 space-x-4"
          >
            <div className="flex-shrink-0">
              <Image
                src={brand.image}
                alt={brand.name}
                width={60}
                height={60}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                {brand.name}
              </span>
              <span className="text-xs mt-1 inline-block bg-red-600 text-white px-2 py-1 rounded-full w-fit font-medium">
                {brand.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;
