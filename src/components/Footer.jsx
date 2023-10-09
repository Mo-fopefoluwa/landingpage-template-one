import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row flex-wrap gap-12 justify-between items-left text-left px-8 py-12 md:px-12 lg-px-16">
      <div className="flex flex-col gap-8 ">
        <p className="font-bold text-[1.4rem] md:text-[2rem] text-orange-300">
          F<span className="text-[#11ff74]">OO</span>D
        </p>
        <ul className="flex flex-row gap-4 font-bold text-[.8rem]">
          <li className="text-orange-400">fa</li>
          <li className="text-green-400">In</li>
          <li className="text-green-400">Tw</li>
          <li className="text-orange-400">dri</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 capitalize">
        <p className="font-bold text-[1.2rem]">services</p>
        <ul className="flex flex-col gap-2 text-[.8rem] ">
          <li>membership</li>
          <li>products</li>
          <li>stories</li>
          <li>manuals</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 capitalize ">
        <p className="font-bold text-[1.2rem]">company</p>
        <ul className="flex flex-col gap-2 text-[.8rem]">
          <li>quality</li>
          <li>help</li>
          <li>share</li>
          <li>careers</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 capitalize ">
        <p className="font-bold text-[1.2rem]">our menus</p>
        <ul className="flex flex-col gap-2 text-[.8rem]">
          <li>breakfast</li>
          <li>lunch</li>
          <li>dinner</li>
          <li>drinks</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <p className="font-bold text-[1.2rem] capitalize">contact us</p>
        <div className="flex flex-col gap-8">
          <span className="flex flex-row gap-4 ">
            <p className="font-bold">p</p>
            <ul className="text-[.8rem]">
              <li>+234 8123456789</li>
              <li>+234 8123456789</li>
            </ul>
          </span>
          <span className="flex flex-row gap-4 ">
            <p className="font-bold">m</p>
            <ul className="text-[.8rem]">
              <li>info@admin.com</li>
              <li>youremail@gmail.com</li>
            </ul>
          </span>
          <span className="flex flex-row gap-4 ">
            <p className="font-bold">l</p>
            <p className="text-[.8rem]">122, street town, Lagos</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
