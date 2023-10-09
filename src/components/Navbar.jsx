import React from "react";
import { Menu } from "@headlessui/react";
import { LuMenuSquare } from "react-icons/lu";
import Nav from "./Nav";
import { MdRestaurantMenu } from "react-icons/md";

const navs = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "menu",
    link: "/menu",
  },
  {
    name: "about",
    link: "/about",
  },
];

const Navbar = () => {
  return (
    <div className="relative flex flex-row justify-between items-center px-8 md:px-[6rem] py-6">
      <p className="font-bold text-[1.4rem] md:text-[2rem] text-orange-300">
        F<span className="text-[#11ff74]">OO</span>D
      </p>
      <nav className="hidden md:flex gap-[3rem]">
        {navs.map((nav) => {
          return (
            <a
              className="uppercase font-semibold hover:text-teal-500"
              href={nav.link}
            >
              {nav.name}
            </a>
          );
        })}
      </nav>

      <Menu as="div" className="relative md:hidden inline-block text-center">
        <Menu.Button className="w-full">
          <LuMenuSquare size={35} />
        </Menu.Button>

        <Nav />
      </Menu>
    </div>
  );
};

export default Navbar;
