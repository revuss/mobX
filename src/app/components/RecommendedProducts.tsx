import Image from "next/image";

const recommendedProducts = [
  {
    id: 1,
    image: "/landitem.png",
    discount: "64% OFF",
    name: "POCO C31 (3/32) GB, ROYAL BLUE",
    offAmount: 7000,
    left: 1,
    quality: "Mint",
    location: "NABADWIP",
    price: 3999,
    originalPrice: 10999,
  },
  {
    id: 2,
    image: "/landitem.png",
    discount: "78% OFF",
    name: "APPLE IPHONE 11 PRO (256) GB, MIDNIGHT...",
    offAmount: 89401,
    left: 1,
    quality: "Mint",
    location: "DATTAPUKUR",
    price: 24499,
    originalPrice: 113900,
  },
  {
    id: 3,
    image: "/landitem.png",
    discount: "46% OFF",
    name: "IQOO Z9X 5G (4/128) GB, TORNADO GREEN",
    offAmount: 8300,
    left: 2,
    quality: "Super Mint",
    location: "BARRACKPORE",
    price: 9699,
    originalPrice: 17999,
  },
];

const RecommendedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold italic">
          <span className="text-red-600">Recommended</span>{" "}
          <span className="text-gray-900">Product</span>
        </h2>
        <button className="text-red-600 border border-red-600 rounded-full px-4 py-1 hover:bg-red-600 hover:text-white transition">
          View More →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="relative border border-gray-300 rounded-md p-4 bg-white hover:shadow-md transition"
          >
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}
            </span>

            <div className="flex gap-4 mb-3">
              <div className="w-32 h-36 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col justify-start">
                <h3 className="text-sm font-bold text-gray-800 leading-snug">
                  {product.name}
                </h3>
                <span className="mt-1 bg-yellow-700 text-white text-xs font-semibold px-2 py-0.5 rounded w-fit">
                  ₹{product.offAmount.toLocaleString("en-IN")} Off
                </span>
                <div className="text-sm text-gray-800">
                  <span className="font-medium">Qulity :</span>{" "}
                  {product.quality}
                </div>
                <div className="mt-1">
                  <span className="inline-block text-xs bg-red-600 text-white font-medium px-2 py-0.5 rounded">
                    {product.location}
                  </span>
                </div>

                <div className="mt-2 text-xl font-bold text-black">
                  ₹ {product.price.toLocaleString("en-IN")}
                  <span className="ml-2 text-gray-500 text-sm line-through">
                    ₹ {product.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
