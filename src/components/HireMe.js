import React from "react";
import { CircularText, CircularText2 } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-2 flex justify-center items-center overflow-hidden md:right-0 md:left-auto md:-top-1 md:bottom-auto md:absolute sm:right-0">
      <div className="w-48 md:w-24 sm:w-16 h-auto flex items-center justify-center relative">
        <CircularText2 className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 sm:w-8 sm:h-8 md:text-[10px] sm:text-[6px]"
          href="mailto:nakib15-3358@diu.edu.bd"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
