import { FC } from "react";
import Image from "next/image";

const FooterBottom: FC = () => {
  return (
    <div className="bg-[#333] text-white px-6 md:px-16 py-3 flex flex-col md:flex-row items-center justify-between text-sm">
      <div className="mb-2 md:mb-0">
        <span className="text-gray-300">
          <span className="text-red-600 font-semibold">MobiXpress</span> © 2025
          All Right Reserved.
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-300">We Accept :</span>
        <Image src="/rupay.jfif" alt="RuPay" width={40} height={24} />
        <Image src="/visa.webp" alt="Visa" width={40} height={24} />
        <Image src="/mastercard.webp" alt="MasterCard" width={40} height={24} />
      </div>
    </div>
  );
};

export default FooterBottom;
