import React from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Nav = () => {
  return (
    <div className="fixed top-20 left-0 w-[100%] h-[100vh] text-center">
      <Transition
        as={Fragment}
        enter="transition ease-in-out duration-200"
        enterFrom="translate-y opacity-0 scale-0"
        enterTo="translate-y opacity-100 scale-100"
        leave="transition ease-in-out duration-200"
        leaveFrom="translate-y opacity-100 scale-100"
        leaveTo="translate opacity-0 scale-0"
      >
        <Menu.Items className="absolute left-0 mt-2 w-full h-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-4 w-[100%] ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/"}
                  className={`${
                    active ? "bg-[#11ff74] text-white" : ""
                  } group w-full items-center font-bold  rounded-md px-16 py-2`}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-4 w-[100%] ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/menu"}
                  className={`${
                    active ? "bg-[#11ff74] text-white" : ""
                  } group w-[100%] items-center font-bold  rounded-md px-16 py-2`}
                >
                  Menu
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-4 w-[100%] ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/"}
                  className={`${
                    active ? "bg-[#11ff74] text-white" : ""
                  } group w-full items-center font-bold  rounded-md px-16 py-2 `}
                >
                  About
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </div>
  );
};

export default Nav;
