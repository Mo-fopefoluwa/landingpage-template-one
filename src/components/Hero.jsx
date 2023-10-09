import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col pt-16 md:flex-row gap-4 justify-center items-center px-8">
      <div className="w-[80%] md:w-[35%] lg:w-[25%] ">
        <h1 className="font-bold text-[1.6rem] sm:text-[1.8rem] md:text-[2.2rem] md:leading-[2.2rem]">
          We deliver best <br />
          <span className="text-[#11ff74]">Organic food.</span>
        </h1>
        <p className="pt-[.8rem] leading-6 text-[.6rem] md:text-[.9rem]">
          Lorem ipsum is a dummy word. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <button className="bg-[#11ff74] mt-[2rem] uppercase font-bold text-[.8rem] px-6 py-2 rounded-sm">
          explore our menu
        </button>
      </div>
      <div className="w-[80%] md:w-[45%] lg-[35%] ">
        <motion.img
          animate={{
            scale: [0.8, 0.7, 0.6, 0.6, 0.8],
            rotate: [0, 120, 270, 270, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 10,
          }}
          className="w-full"
          src="image3.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
