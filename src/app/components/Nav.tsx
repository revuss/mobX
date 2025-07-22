import { NAV_TITLE } from "../ui/app.constants";

const Nav = () => {
  return (
    <div className="bg-[#ec1c2a] flex justify-center items-center py-2 px-4 text-white text-sm w-full">
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-screen-xl w-full">
        {/* <div className="flex flex-col items-center z-10">
          <div className="bg-white text-black font-extrabold px-4 py-1 text-lg shadow-md z-10">
            {NAV_TITLE}
          </div>
          <div
            className="w-full max-w-full h-[9px] bg-yellow-400 -mt-[2px] z-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0% 100%, 0% 170%)",
            }}
          />
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-yellow-400"
            style={{
              clipPath: "polygon(5% 100%, 100% 100%, 100% 0, 0% 0)",
            }}
          />
        </div> */}
        <div className="flex flex-col items-center z-10">
          {/* White Box */}
          <div className="bg-white text-black font-extrabold px-4 py-1 text-lg shadow-md z-10">
            {NAV_TITLE}
          </div>

          <div className="relative w-full max-w-full h-[9px] -mt-[2px]">
            <div
              className="absolute left-0 top-0 h-full w-1/2 bg-yellow-400"
              style={{
                clipPath: "polygon(0 0, 100% 0, 10% 100%, 0% 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 h-full w-1/2 bg-yellow-400"
              style={{
                clipPath: "polygon(5% 10%, 100% 100%, 100% 0, 100% 0)",
              }}
            />
          </div>
        </div>

        <span className="hidden sm:inline">Visit MobiXpress Store</span>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1 rounded-full">
          Click Now
        </button>
        <span className="text-xs">T&amp;C apply</span>
      </div>
    </div>
  );
};

export default Nav;
