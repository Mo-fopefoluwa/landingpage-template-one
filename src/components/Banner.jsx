import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 justify-center items-center px-10 py-[6rem]">
      <div className="w-[80%] md:w-[40%] lg:w-[30%] ">
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
            repeatDelay: 8,
          }}
          className="w-full"
          src="image2.png"
          alt=""
        />
      </div>
      <div className="w-[80%] md:w-[45%] lg:w-[35%]">
        <h2 className="font-bold leading-6 md:leading-10 text-[1.2rem] sm:text-[1.4rem] md:text-[2rem]">
          Fresh, Healthy, Organic, Delicious Fruits
        </h2>
        <p className="py-6 text-[.6rem] md:text-[.9rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          doloribus autem omnis voluptates dicta aliquam laborum maxime!
          Deleniti esse amet quaerat nulla.
        </p>
        <button className="bg-[#11ff74] px-4 md:px-6 py-2 md:py-4 rounded-sm font-semibold uppercase text-[.8rem]">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Banner;
