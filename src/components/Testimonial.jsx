import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 8 },
      },
      "(min-width: 680px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <div className="pt-[4rem] px-[2rem] md:px-[4rem] lg:px-[6rem]">
      <h2 className="text-center font-bold text-[1.8rem]">
        what our customer says
      </h2>
      <div ref={sliderRef} className="keen-slider px-8 py-12">
        <div className="keen-slider__slide number-slider1 w-[20%] rounded-md px-8 py-6 bg-white shadow-md shadow-slate-400">
          <div className="flex flex-row gap-8">
            <img
              src="image1.jpeg"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span>
              <p className="font-bold">John Doe</p>
              <p className="text-[#616161] pt-2">our customer</p>
            </span>
          </div>
          <p className=" font-semibold pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            autem libero atque, unde optio maxime cupiditate voluptatum
            asperiores quo sint ab nesciunt ex. Commodi asperiores ut nulla
            deleniti ducimus aut?
          </p>
        </div>
        <div className="keen-slider__slide number-slider2 w-[20%] rounded-md px-8 py-6 bg-white shadow-md shadow-slate-400">
          <div className="flex flex-row gap-8">
            <img
              src="image1.jpeg"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span>
              <p className="font-bold">John Doe</p>
              <p className="text-[#616161] pt-2">our customer</p>
            </span>
          </div>
          <p className=" font-semibold pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            autem libero atque, unde optio maxime cupiditate voluptatum
            asperiores quo sint ab nesciunt ex. Commodi asperiores ut nulla
            deleniti ducimus aut?
          </p>
        </div>
        <div className="keen-slider__slide number-slider3 w-[20%] rounded-md px-8 py-6 bg-white shadow-md shadow-slate-400">
          <div className="flex flex-row gap-8">
            <img
              src="image1.jpeg"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span>
              <p className="font-bold">John Doe</p>
              <p className="text-[#616161] pt-2">our customer</p>
            </span>
          </div>
          <p className=" font-semibold pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            autem libero atque, unde optio maxime cupiditate voluptatum
            asperiores quo sint ab nesciunt ex. Commodi asperiores ut nulla
            deleniti ducimus aut?
          </p>
        </div>
        <div className="keen-slider__slide number-slider4 w-[20%] rounded-md px-8 py-6 bg-white shadow-md shadow-slate-400">
          <div className="flex flex-row gap-8">
            <img
              src="image1.jpeg"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span>
              <p className="font-bold">John Doe</p>
              <p className="text-[#616161] pt-2">our customer</p>
            </span>
          </div>
          <p className=" font-semibold pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            autem libero atque, unde optio maxime cupiditate voluptatum
            asperiores quo sint ab nesciunt ex. Commodi asperiores ut nulla
            deleniti ducimus aut?
          </p>
        </div>
        <div className="keen-slider__slide number-slider5 w-[20%] rounded-md px-8 py-6 bg-white shadow-md shadow-slate-400">
          <div className="flex flex-row gap-8">
            <img
              src="image1.jpeg"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span>
              <p className="font-bold">John Doe</p>
              <p className="text-[#616161] pt-2">our customer</p>
            </span>
          </div>
          <p className=" font-semibold pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            autem libero atque, unde optio maxime cupiditate voluptatum
            asperiores quo sint ab nesciunt ex. Commodi asperiores ut nulla
            deleniti ducimus aut?
          </p>
        </div>
        <div className="keen-slider__slide number-slider6 w-[20%] rounded-md px-8 py-6 bg-white shadow-md shadow-slate-400">
          <div className="flex flex-row gap-8">
            <img
              src="image1.jpeg"
              className="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <span>
              <p className="font-bold">John Doe</p>
              <p className="text-[#616161] pt-2">our customer</p>
            </span>
          </div>
          <p className=" font-semibold pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            autem libero atque, unde optio maxime cupiditate voluptatum
            asperiores quo sint ab nesciunt ex. Commodi asperiores ut nulla
            deleniti ducimus aut?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
