"use client";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import localFont from "next/font/local";
import { tai } from "../fonts";
import Link from "next/link";
import { motion } from "framer-motion";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const Navbar = () => {
  return (
    <div className="w-full p-8 flex flex-col gap-8 lg:flex-row items-center justify-between">
      <h1
        className={`${myFont.className} text-orange-500 text-4xl lg:text-2xl w-full text-center lg:text-left`}
      >
        Sushant Sharma
      </h1>
      <div className="flex items-center justify-between lg:justify-end lg:gap-16 w-full">
        <ul
          className={`flex items-center text-xl gap-6 text-orange-500 ${tai.className}`}
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="#">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="#">Works</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="#">Contact</Link>
          </motion.div>
        </ul>
        <div className="flex items-center gap-6 text-orange-500 text-xl">
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <FaSquareXTwitter />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <FaGithub />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
