"use client";
import Image from "next/image";

const dummyImage = "/landitem2.png";

const products = [
  {
    name: "REDMI 10 POWER (8/128) GB, POWER...",
    discount: "44% OFF",
    stock: 1,
    quality: "Super Mint",
    city: "MALDA",
    price: "₹ 7799",
    mrp: "₹ 13999",
  },
  {
    name: "OPPO A78 5G (8/128) GB, GLOWING BLACK",
    discount: "59% OFF",
    stock: 70,
    quality: "Mint",
    city: "BARRACKPORE",
    price: "₹ 8999",
    mrp: "₹ 21999",
  },
  {
    name: "LAVA BLAZE X (6/128) GB, STARLIGHT...",
    discount: "40% OFF",
    stock: 2,
    quality: "Mint",
    city: "DAKSHIN BARASAT",
    price: "₹ 10799",
    mrp: "₹ 17999",
  },
  {
    name: "POCO C31 (3/32) GB, ROYAL BLUE",
    discount: "64% OFF",
    stock: 1,
    quality: "Mint",
    city: "NABADWIP",
    price: "₹ 3999",
    mrp: "₹ 10999",
  },
  {
    name: "APPLE IPHONE 11 PRO (256) GB,...",
    discount: "78% OFF",
    stock: 1,
    quality: "Mint",
    city: "DATTAPUKUR",
    price: "₹ 24499",
    mrp: "₹ 113900",
  },
  {
    name: "IQOO Z9X 5G (4/128) GB, TORNADO GREEN",
    discount: "46% OFF",
    stock: 2,
    quality: "Super Mint",
    city: "BARRACKPORE",
    price: "₹ 9699",
    mrp: "₹ 17999",
  },
  {
    name: "POCO M3 (6/64) GB, POWER BLACK",
    discount: "55% OFF",
    stock: 1,
    quality: "Mint",
    city: "NABADWIP",
    price: "₹ 5799",
    mrp: "₹ 12999",
  },
  {
    name: "CMF PHONE 1 5G (6/128) GB, BLACK",
    discount: "47% OFF",
    stock: 7,
    quality: "Super Mint",
    city: "BARASAT",
    price: "₹ 9999",
    mrp: "₹ 18999",
  },
  {
    name: "VIVO Y33T (8/128) GB, MIRROR BLACK IND",
    discount: "76% OFF",
    stock: 1,
    quality: "Good",
    city: "HABRA",
    price: "₹ 5499",
    mrp: "₹ 22990",
  },
];

const TrendingProducts = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl italic font-semibold">
            <span className="text-red-600 font-bold">Trending</span>{" "}
            <span className="text-gray-700">Product</span>
          </h2>
          <button className="text-red-600 border border-red-600 px-4 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-red-100 transition">
            View More →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((item, i) => (
            <div
              key={i}
              className="flex border border-gray-200 rounded-xl p-3 shadow-sm w-full hover:shadow-md transition relative bg-white"
            >
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded font-bold z-10">
                {item.discount}
              </span>

              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={dummyImage}
                  alt={item.name}
                  fill
                  className="object-contain rounded-md"
                />
              </div>

              <div className="ml-4 flex flex-col justify-between w-full text-sm">
                <h3 className="font-semibold text-gray-800 line-clamp-2">
                  {item.name}
                </h3>

                <div className="mt-1 space-y-1">
                  {item.stock <= 2 ? (
                    <p className="text-orange-700 font-semibold text-xs">
                      left {item.stock}
                    </p>
                  ) : (
                    <p className="bg-yellow-400 text-black font-semibold px-2 py-0.5 w-fit rounded text-xs">
                      Sold {item.stock}
                    </p>
                  )}

                  <p className="text-xs">
                    <span className="font-medium">Quilty :</span> {item.quality}
                  </p>
                  <p className="bg-red-600 text-white w-fit px-2 py-0.5 rounded font-medium text-xs">
                    {item.city}
                  </p>

                  {/* Price */}
                  <p className="text-base font-bold text-black">
                    {item.price}{" "}
                    <span className="text-gray-400 line-through text-sm font-normal ml-1">
                      {item.mrp}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
