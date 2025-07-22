import { Headset } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t pt-10 pb-6 px-6 md:px-16 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/logo.png"
              alt="Mobixpress Logo"
              width={200}
              height={100}
            />
          </div>
          <p className="text-sm leading-6">
            Mobixpress is the largest mobile store in West Bengal, offering a
            wide range of smartphones at competitive prices. The store ensures
            customer satisfaction by providing warranty options, device
            authenticity checks, and affordable pricing.
          </p>
          <p className="mt-2 text-sm leading-6">
            Mobixpress also offers great exchange deals, allowing customers to
            upgrade their devices conveniently. With a strong reputation for
            reliability and excellent customer service, it has become a trusted
            destination for buyers looking for quality smartphones in West
            Bengal.
          </p>

          <div className="mt-6 flex items-center space-x-3">
            <div className="bg-gray-100 rounded-full p-2">
              <Headset />{" "}
            </div>
            <div>
              <p className="text-sm font-semibold">Have any question?</p>
              <p className="text-sm text-pink-600">8017999888</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center space-x-2">
              <FaWhatsapp className="w-4 h-4" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">QUICK LINK</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Careers",
              "Refund & Return Policy",
              "Privacy Policy",
              "Contact Us",
              "Terms & Condition",
              "Shipping Policy",
              "Condition Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">LOCATE US</h3>
          <div className="flex items-start space-x-3 text-sm">
            <div className="text-red-600 mt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0C6.134 0 3 3.134 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.121-2.5-2.5S8.62 4.5 10 4.5 12.5 5.621 12.5 7 11.38 9.5 10 9.5z" />
              </svg>
            </div>
            <p>
              M-1/81, H ROAD , ANADAPURI, ANANDADEEP APARTMENT, ANANDPURI,
              BARRACKPORE, NORTH TWENTY FOUR PARGANAS, WEST BENGAL, 700122
            </p>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-2">FOLLOW US</h3>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="bg-red-100 p-2 rounded-full text-red-600 hover:text-white hover:bg-red-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-red-100 p-2 rounded-full text-red-600 hover:text-white hover:bg-red-600"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-red-100 p-2 rounded-full text-red-600 hover:text-white hover:bg-red-600"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-4">V 2.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
