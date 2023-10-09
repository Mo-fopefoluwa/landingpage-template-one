import React from "react";
import { toast } from "react-toastify";

const MenuCards = () => {
  const addToOrder = () => {
    toast.success("Added To Order");
  };

  return (
    <div className="grid justify-center px-[2rem] place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="relative h-[280px] w-[80%]  sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image2.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Pancakes and Maple Syrup</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%]  sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image0.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Plain Toast & Butter or Jam</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image1.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Hushbrowns AKA Potatoes Pancakes</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image3.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Sausage and Egg sandwich</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image2.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Hot Oatmeal or Porridge</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image0.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Bagel with Cream Cheese</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image1.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Toasted English Muffin</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image3.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-6 rounded-t-[20%]">
          <p className="font-bold ">Pancakes and Maple Syrup</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image2.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Hot Oatmeal or Porridge</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image0.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Bagel with Cream Cheese</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image1.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-8 rounded-t-[20%]">
          <p className="font-bold ">Toasted English Muffin</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
      <div className="relative h-[280px] w-[80%] sm:w-[100%] rounded-[8%] shadow-md shadow-slate-400 overflow-hidden">
        <img
          className="relative hover:scale-105 h-full w-full object-fit"
          src="image3.jpeg"
          alt=""
        />

        <p className="text-[#11ff74] absolute top-4 right-4 bg-white px-4 rounded-xl font-bold text-[.8rem]">
          $70
        </p>

        <div className="absolute translate-y-12 hover:translate-y-0 transition-all ease-in-out delay-75 bottom-0 bg-white w-full py-4 px-6 rounded-t-[20%]">
          <p className="font-bold ">Pancakes and Maple Syrup</p>
          <span className="flex flex-row justify-between pt-2 items-center">
            <p className="text-[#11ff74] capitalize font-semibold">breakfast</p>
            <button
              onClick={addToOrder}
              className="bg-[#11ff74] font-bold text-center text-white rounded-full px-[.6rem] py-[.2rem]"
            >
              {" "}
              +{" "}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
