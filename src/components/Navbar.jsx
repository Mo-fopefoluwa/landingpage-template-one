import React from "react";
import { Menu } from "@headlessui/react";
import { LuMenuSquare } from "react-icons/lu";
import Nav from "./Nav";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

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
    link: "/",
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
            <Link
              to={nav.link}
              className="uppercase font-semibold hover:text-teal-500"
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>

      <Menu as="div" className="relative md:hidden inline-block text-center">
        {({ open }) => (
          <>
            <Menu.Button className="w-full">
              {open ? (
                <MdRestaurantMenu size={35} />
              ) : (
                <LuMenuSquare size={35} />
              )}
            </Menu.Button>
            {open && <Nav />}
          </>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
