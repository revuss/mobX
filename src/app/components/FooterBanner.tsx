"use client";
import Image from "next/image";
import {
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaHeadset,
  FaStore,
} from "react-icons/fa";

const FooterBanner = () => {
  return (
    <section className="w-full px-4 py-10 my-5">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Banner Image */}
        <div className="w-full rounded-2xl overflow-hidden">
          <Image
            src="/footer.jpg"
            alt="Book your dream phone"
            width={1600}
            height={400}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Feature Info Icons */}
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {/* 1 */}
          <div className="flex items-center gap-3">
            <div className="text-yellow-500 text-4xl">
              <FaShieldAlt />
            </div>
            <div>
              <p className="font-semibold text-black">Secured Payment</p>
              <p className="text-gray-500 text-sm">We do not explore</p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex items-center gap-3">
            <div className="text-pink-500 text-4xl">
              <FaMoneyCheckAlt />
            </div>
            <div>
              <p className="font-semibold text-black">
                Refund On 5 Working Days
              </p>
              <p className="text-gray-500 text-sm">Money back guarantee</p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex items-center gap-3">
            <div className="text-blue-500 text-4xl">
              <FaHeadset />
            </div>
            <div>
              <p className="font-semibold text-black">24/7 Support On Demand</p>
              <p className="text-gray-500 text-sm">Contact us 24 hours a day</p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex items-center gap-3">
            <div className="text-orange-500 text-4xl">
              <FaStore />
            </div>
            <div>
              <p className="font-semibold text-black">
                Store Pick Up Available
              </p>
              <p className="text-gray-500 text-sm">Orders from all item</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
