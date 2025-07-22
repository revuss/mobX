import { FaFire } from "react-icons/fa";

const NavMenu = [
  "Home",
  "MobiXpress Store",
  "My Order",
  "Exchange",
  "Accessories",
  "Hot Deals",
];

const MenuNav = () => {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="max-w-3xl">
        <div className="flex w-full justify-center space-x-7 items-center">
          {NavMenu.map((item, index) => {
            return (
              <div
                key={index}
                className={`text-sm font-semibold flex items-center space-x-2 ${
                  item === "Hot Deals" ? " text-primary" : ""
                }`}
              >
                {item === "Hot Deals" && <FaFire className="mr-1" />} {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
