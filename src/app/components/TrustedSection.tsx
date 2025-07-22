import Image from "next/image";

const priceRanges = [
  "₹ 0 & ₹ 7999",
  "₹ 8000 & ₹ 14999",
  "₹ 15000 & ₹ 29999",
  "₹ 30000 & ₹ 49999",
  "₹ 50000 & ₹ 79999",
  "₹ 80000 & ₹ 150000",
];

const TrustedSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
      <div className="lg:col-span-1">
        <h2 className="text-3xl font-bold leading-tight mb-4">
          MobiXpress – Trusted Source <br />
          for Premium Pre-Owned Mobiles.
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          MobiXpress, known as smartphone expert and leading industry from last
          5 years, focused on delivering quality products at most affordable
          prices along with continued customer support services. We ensure best
          quality products passed from 50 strict quality checks. We aims to
          contribute towards greener environment and reduce the e-waste. Join
          our community and get the most reliable and affordable products ever.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src="/unbox.webp"
          alt="MobiXpress Box"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-4">
        {priceRanges.map((range, index) => (
          <button
            key={index}
            className="border border-gray-300 rounded-md px-6 py-3 text-left hover:bg-gray-100 transition"
          >
            <span className="font-medium">Between</span>{" "}
            <span className="font-semibold text-black">{range}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
