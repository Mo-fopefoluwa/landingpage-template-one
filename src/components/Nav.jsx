import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const Nav = () => {
  return (
    <div className="fixed top-20 left-0 w-[100%] h-[100vh] text-center">
      <Transition
        as={Fragment}
        enter="transition ease-in-out duration-100"
        enterFrom="translate-y opacity-0 scale-0"
        enterTo="translate-y opacity-100 scale-100"
        leave="transition ease-in-out duration-100"
        leaveFrom="translate-y opacity-100 scale-100"
        leaveTo="translate opacity-0 scale-0"
      >
        <Menu.Items className="absolute left-0 mt-2 w-full h-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-4 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#11ff74] text-white" : ""
                  } group w-full items-center font-bold  rounded-md px-2 py-2`}
                >
                  Home
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-4 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#11ff74] text-white" : ""
                  } group w-full items-center font-bold  rounded-md px-2 py-2`}
                >
                  Menu
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-4">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#11ff74] text-white" : ""
                  } group w-full items-center font-bold  rounded-md px-2 py-2 `}
                >
                  About
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </div>
  );
};

export default Nav;
