import React from "react";
import { fadeIn, staggerChildren, zoomIn } from "../utils/motion";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Hotdesserts = () => {
  const addToOrder = () => {
    toast.success("Added to order");
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className="px-12 py-[4rem]"
    >
      <motion.h3
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-[1.2rem] font-bold uppercase pl-[5rem]"
      >
        hot desserts
      </motion.h3>
      <div className=" pt-[5rem] flex flex-row flex-wrap gap-16 md:gap-8 justify-center">
        <div className="relative py-4 hover:scale-105 cursor-pointer ease-in-out delay-100 flex flex-row gap-6 items-center  rounded-sm w-[80%] md:w-[30%] lg:w-[20%] bg-gray-100 shadow-md shadow-slate-400">
          <motion.img
            variants={zoomIn(0.4, 1)}
            className=" w-[35%] pl-2 mt-[-3rem]"
            src="image3.png"
            alt=""
          />
          <div>
            <p className="capitalize font-semibold">chicken fry</p>
            <p className="text-[#11ff74] font-bold">$5</p>
            <button
              onClick={addToOrder}
              className="absolute bottom-0 right-0 bg-[#11ff74] rounded-tl-full rounded-tr-md px-[.6rem] text-white font-bold"
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
        <div className="relative py-4 hover:scale-105 cursor-pointer ease-in-out delay-100 flex flex-row gap-6 items-center  rounded-sm w-[80%] md:w-[30%] lg:w-[20%] bg-gray-100 shadow-md shadow-slate-400">
          <motion.img
            variants={zoomIn(0.6, 1)}
            className="w-[35%]  pl-2 mt-[-3rem]"
            src="image.png"
            alt=""
          />
          <div>
            <p className="capitalize font-semibold">egg masala</p>
            <p className="text-[#11ff74] font-bold">$5</p>
            <button
              onClick={addToOrder}
              className="absolute bottom-0 right-0 bg-[#11ff74]  rounded-tl-full rounded-tr-md px-[.6rem] text-white font-bold"
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
        <div className="relative py-4 hover:scale-105 cursor-pointer ease-in-out delay-100 flex flex-row gap-6 items-center  rounded-sm w-[80%] md:w-[30%] lg:w-[20%] bg-gray-100 shadow-md shadow-slate-400">
          <motion.img
            variants={zoomIn(0.8, 1)}
            className="w-[35%] pl-2 mt-[-3rem]"
            src="image.png"
            alt=""
          />
          <div>
            <p className="capitalize font-semibold">pinto posolo</p>
            <p className="text-[#11ff74] font-bold">$5</p>
            <button
              onClick={addToOrder}
              className="absolute bottom-0 right-0 bg-[#11ff74]  rounded-tl-full rounded-tr-md px-[.6rem] text-white font-bold"
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
        <div className="relative py-4 hover:scale-105 cursor-pointer ease-in-out delay-100 flex flex-row gap-6 items-center  rounded-sm w-[80%] md:w-[30%] lg:w-[20%] bg-gray-100 shadow-md shadow-slate-400">
          <motion.img
            variants={zoomIn(1.0, 1)}
            className="w-[35%]  pl-2 mt-[-3rem]"
            src="image3.png"
            alt=""
          />
          <div>
            <p className="capitalize font-semibold">chicken fry</p>
            <p className="text-[#11ff74] font-bold">$5</p>
            <button
              onClick={addToOrder}
              className="absolute bottom-0 right-0 bg-[#11ff74]  rounded-tl-full rounded-tr-md px-[.6rem] text-white font-bold"
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hotdesserts;
