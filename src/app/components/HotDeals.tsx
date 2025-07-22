// components/HotDeals.tsx
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/landitem.png",
    discount: "56% OFF",
    name: "IQOO NEO 7 5G (8/128) GB, FROST BLUE",
    left: 1,
    quality: "Super Mint",
    location: "BIRATI",
    price: 15299,
    originalPrice: 34999,
  },
  {
    id: 2,
    image: "/landitem.png",
    discount: "53% OFF",
    name: "OPPO F27 5G (8/256) GB, EMERALD GREEN",
    left: 1,
    quality: "Super Mint",
    location: "MECHEDA",
    price: 13499,
    originalPrice: 28999,
  },
  {
    id: 3,
    image: "/landitem.png",
    discount: "36% OFF",
    name: "ONEPLUS NORD CE 4 LITE 5G (8/128) GB, MEGA BLUE",
    left: 1,
    quality: "Super Mint",
    location: "BIRATI",
    price: 13499,
    originalPrice: 20999,
  },
  {
    id: 4,
    image: "/landitem.png",
    discount: "36% OFF",
    name: "REALME 14 PRO PLUS 5G (8/256) GB, BIKANER PURPLE...",
    left: 1,
    quality: "Super Mint",
    location: "REJNAGAR",
    price: 22999,
    originalPrice: 35999,
  },
];

const HotDeals = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">
          <span className="text-red-600 italic font-bold">Hot</span>{" "}
          <span className="italic text-gray-800">Deal</span>
        </h2>
        <button className="text-red-600 border border-red-600 rounded-full px-4 py-1 hover:bg-red-600 hover:text-white transition-all">
          View More →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-md border border-gray-200 shadow-sm p-4"
          >
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}
            </span>
            <div className="flex justify-center items-center h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <div className="text-sm mb-1 px-2 py-0.5 bg-yellow-600 w-fit font-semibold">
              left {product.left}
            </div>
            <div className="text-sm text-gray-700">
              <span className="font-medium">Qulity :</span>{" "}
              <span>{product.quality}</span>
            </div>
            <div className="text-xs mt-1 bg-red-600 text-white inline-block px-2 py-0.5 rounded">
              {product.location}
            </div>
            <div className="mt-2 text-lg font-bold text-black">
              ₹ {product.price.toLocaleString("en-IN")}
              <span className="line-through text-gray-400 text-sm ml-2">
                ₹ {product.originalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
