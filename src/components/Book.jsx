import React from "react";

const Book = () => {
  return (
    <div className="py-[4rem] px-8 md:px-[4rem] lg:px-[6rem]">
      <p className="uppercase text-[.8rem] md:text-4">let's talk </p>
      <span className="flex flex-row justify-between py-4 border-b-[1px] pb-10 border-[#11ff74]">
        <h2 className="font-bold text-[1rem] sm:text-[1.2rem] md:text-[1.6rem]">
          Want to Reserve a table?
        </h2>
        <button className="bg-[#11ff74] px-4 md:px-6 text-white text-[.7rem] md:text-[.8rem] font-semibold rounded-bl-full rounded-r-full">
          Contact us Now
        </button>
      </span>
      <p className="pt-4 w-[70%] md:w-[45%] text-[.8rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        dignissimos, sit distinctio architecto perferendis consectetur quaerat
      </p>
    </div>
  );
};

export default Book;
