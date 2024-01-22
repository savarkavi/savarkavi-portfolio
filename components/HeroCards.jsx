"use client";

import { FaRegFileCode, FaReact, FaServer } from "react-icons/fa";
import { tai } from "../fonts";
import { motion } from "framer-motion";

const HeroCards = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row justify-between">
      <div className="border-double border-8 border-orange-500 rounded-lg p-4 flex flex-col items-center justify-center gap-6 w-full xl:w-[400px] h-[500px] bg-black group hover:bg-orange-500 transition-all">
        <h2
          className={`text-orange-500 text-4xl text-center ${tai.className} group-hover:text-black transition-all`}
        >
          The Language
        </h2>
        <div className="w-full border-y-2 border-dotted border-orange-500 py-8 flex justify-center group-hover:border-black transition-all">
          <FaRegFileCode className="text-[180px] text-orange-500 group-hover:text-black transition-all" />
        </div>
        <p
          className={`${tai.className} text-orange-500 group-hover:text-black transition-all`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          suscipit odio, tempore cumque sapiente rerum dolores totam vitae
          perferendis veniam?
        </p>
      </div>

      <div className="border-double border-8 border-orange-500 rounded-lg p-4 flex flex-col items-center justify-center gap-6 w-full xl:w-[400px] h-[500px] bg-black group hover:bg-orange-500 transition-all">
        <h2
          className={`text-orange-500 text-4xl text-center ${tai.className} group-hover:text-black transition-all`}
        >
          The Frontend
        </h2>
        <div className="w-full border-y-2 border-dotted border-orange-500 py-8 flex justify-center group-hover:border-black transition-all">
          <FaReact className="text-[180px] text-orange-500 group-hover:text-black transition-all" />
        </div>
        <p
          className={`${tai.className} text-orange-500 group-hover:text-black transition-all`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          suscipit odio, tempore cumque sapiente rerum dolores totam vitae
          perferendis veniam?
        </p>
      </div>

      <div className="border-double border-8 border-orange-500 rounded-lg p-4 flex flex-col items-center justify-center gap-6 w-full xl:w-[400px] h-[500px] bg-black group hover:bg-orange-500 transition-all">
        <h2
          className={`text-orange-500 text-4xl text-center ${tai.className} group-hover:text-black transition-all`}
        >
          The Backend
        </h2>
        <div className="w-full border-y-2 border-dotted border-orange-500 py-8 flex justify-center group-hover:border-black transition-all">
          <FaServer className="text-[180px] text-orange-500 group-hover:text-black transition-all" />
        </div>
        <p
          className={`${tai.className} text-orange-500 group-hover:text-black transition-all`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          suscipit odio, tempore cumque sapiente rerum dolores totam vitae
          perferendis veniam?
        </p>
      </div>
    </div>
  );
};

export default HeroCards;
