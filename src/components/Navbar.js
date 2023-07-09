import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  GithubIcon2,
  InsagramIcon,
  LinkedInIcon2,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, classNames = "" }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href} className={`${classNames} relative group`}>
      {title}
      <span
        className={`h-[1px] bg-dark inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          isActive ? "w-full" : "w-0"
        } dark:bg-light `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, classNames = "", toogle }) => {
  const router = useRouter();
  const handleClick = () => {
    toogle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${classNames} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] bg-light inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useThemeSwitcher(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 flex justify-between items-center dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="hidden lg:flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-red-400 dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-red-400 dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-red-400 dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="space-x-4">
          <CustomLink href="/" title={"Home"} classNames="mx-4" />
          <CustomLink href="/about" title={"About"} />
          <CustomLink href="/projects" title={"Projects"} />
        </nav>

        <nav className="flex justify-center items-center flex-wrap gap-x-3">
          <motion.a
            href="https://www.facebook.com/nakib.tahmid.7/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/rollo4life/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <InsagramIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nakib-tahmid-ullah-404396244/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <LinkedInIcon2 />
          </motion.a>
          <motion.a
            href="https://github.com/NakibDiu"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <GithubIcon2 />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark  text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {/* mobile */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center mt-2">
            <CustomMobileLink
              href="/"
              title={"Home"}
              classNames="mx-4"
              toogle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={"About"}
              toogle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              toogle={handleClick}
            />
          </nav>

          <nav className="flex justify-center items-center flex-wrap gap-x-2">
            <motion.a
              href="https://www.facebook.com/nakib.tahmid.7/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/rollo4life/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
            >
              <InsagramIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nakib-tahmid-ullah-404396244/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
            >
              <LinkedInIcon2 />
            </motion.a>
            <motion.a
              href="https://github.com/NakibDiu"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
            >
              <GithubIcon2 />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark  text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] sm:left-[40%] top-2 translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
