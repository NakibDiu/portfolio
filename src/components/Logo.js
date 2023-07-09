import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center mt-3">
      <MotionLink
        href="/"
        className="bg-dark text-light flex justify-center rounded-full items-center text-2xl sm:text-lg font-bold w-16 sm:w-12 sm:h-12 h-16 border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        NT
      </MotionLink>
    </div>
  );
};

export default Logo;
