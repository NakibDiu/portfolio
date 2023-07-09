import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t-2 border-solid border-dark w-full text-lg font-medium dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex lg:flex-col items-center justify-between lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>{" "}
          By Nakib
        </div>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
