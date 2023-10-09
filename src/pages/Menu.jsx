import React from "react";
import MenuCards from "../components/MenuCards";

const Menu = () => {
  return (
    <div className="px-[2rem] md:px-[6rem] lg:px-[8rem] py-[4rem]">
      <div className="flex flex-col md:flex-row gap-10 md:justify-between items-center">
        <div className="">
          <h2 className="font-bold text-[1.2rem] md:text-[1.8rem] capitalize">
            our menu
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-4 pt-8 ">
            <button className="bg-[#11ff74] capitalize text-white font-semibold transition-all ease-in-out delay-100 px-4 md:px-8 py-2 rounded-md">
              breakfast
            </button>
            <button className="hover:bg-[#11ff74] bg-gray-200 capitalize text-gray-600 hover:text-white font-semibold transition-all ease-in-out delay-100 px-4 md:px-8 py-2 rounded-md">
              lunch
            </button>
            <button className="hover:bg-[#11ff74] bg-gray-200 capitalize text-gray-600 hover:text-white font-semibold transition-all ease-in-out delay-100 px-4 md:px-8 py-2 rounded-md">
              dinner
            </button>
            <button className="hover:bg-[#11ff74] bg-gray-200 capitalize text-gray-600 hover:text-white font-semibold transition-all ease-in-out delay-100 px-4 md:px-8 py-2 rounded-md">
              drinks
            </button>
          </div>
        </div>
      </div>

      <div className="pt-[4rem]">
        <MenuCards />
      </div>
    </div>
  );
};

export default Menu;
