import React from "react";
import { GiChefToque, GiPriceTag } from "react-icons/gi";

const Why = () => {
  return (
    <div className="py-[4rem] px-12 md:px-8">
      <h2 className="text-center capitalize text-[1.4rem] md:text-[1.8rem] font-bold">
        why choose us?
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center pt-16">
        <div className="md:w-[25%] text-center">
          <p className="flex justify-center">
            <GiChefToque color="#11ff74" size={60} />
          </p>
          <h4 className="font-semibold pt-4 capitalize text-[1.2rem]">
            fresh food
          </h4>
          <p className="pt-4 text-[.8rem] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est
            error voluptatibus perferendis. Laboriosam dolores iure excepturi!
          </p>
        </div>
        <div className="md:w-[25%] text-center">
          <p className="flex justify-center">
            <GiChefToque color="#11ff74" size={60} />
          </p>
          <h4 className="font-semibold pt-4 capitalize text-[1.2rem]">
            fresh food
          </h4>
          <p className="pt-4 text-[.8rem] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est
            error voluptatibus perferendis. Laboriosam dolores iure excepturi!
          </p>
        </div>
        <div className="md:w-[25%] text-center">
          <p className="flex justify-center">
            <GiPriceTag color="#11ff74" size={60} />
          </p>
          <h4 className="font-semibold pt-4 capitalize text-[1.2rem]">
            best offer
          </h4>
          <p className="pt-4 text-[.8rem] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est
            error voluptatibus perferendis. Laboriosam dolores iure excepturi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
