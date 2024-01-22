"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { tai } from "../fonts";
const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Works = () => {
  return (
    <div className="max-w-[1600px] mx-auto min-h-screen p-8">
      <h2 className={`${myFont.className} text-6xl text-orange-500 mb-8`}>
        Works
      </h2>
      <div className="grid xl:grid-cols-3 items-center justify-between gap-16">
        <div className="card-1 p-4 border-double border-8 border-orange-500 bg-black rounded-xl flex flex-col justify-between gap-10 h-full">
          <div className="flex justify-between text-orange-200">
            <h2 className={`${tai.className} text-orange-200 text-4xl`}>
              Blogs App
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-green-500 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Live</span>
              </div>
              <Link
                href="https://github.com/savarkavi/artico-mern-app/tree/main"
                target="_blank"
              >
                <FaGithub />
              </Link>
              <FaExternalLinkAlt />
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-xl">
            <Image
              src="/blogs.png"
              alt="blogs img"
              fill
              className="rounded-xl object-contain border border-orange-500"
            />
          </div>
          <p className={`${tai.className} text-orange-200`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
            vero magni odit exercitationem suscipit dignissimos vitae modi
            quibusdam rem id harum vel amet iste, natus quisquam illum
            voluptatibus iusto. Illum beatae quasi repellat molestias voluptas
            minima tempora voluptate dolores sequi, esse error. Autem, hic unde
            dolore officia consequuntur blanditiis.
          </p>
        </div>

        <div className="card-2 p-4 border-double border-8 border-orange-500 bg-black rounded-xl flex flex-col justify-between gap-10 h-full">
          <div className="flex justify-between text-orange-200">
            <h2 className={`${tai.className} text-orange-200 text-4xl`}>
              Jasper App
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-green-500 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Live</span>
              </div>
              <Link href="https://github.com/savarkavi/jasper" target="_blank">
                <FaGithub />
              </Link>
              <FaExternalLinkAlt />
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-xl">
            <Image
              src="/jasper.png"
              alt="jasper img"
              fill
              className="rounded-xl object-contain border border-orange-500"
            />
          </div>
          <p className={`${tai.className} text-orange-200`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
            vero magni odit exercitationem suscipit dignissimos vitae modi
            quibusdam rem id harum vel amet iste, natus quisquam illum
            voluptatibus iusto. Illum beatae quasi repellat molestias voluptas
            minima tempora voluptate dolores sequi, esse error. Autem, hic unde
            dolore officia consequuntur blanditiis.
          </p>
        </div>

        <div className="card-2 p-4 border-double border-8 border-orange-500 bg-black rounded-xl flex flex-col justify-between gap-10 h-full">
          <div className="flex justify-between text-orange-200">
            <h2 className={`${tai.className} text-orange-200 text-4xl`}>
              Photography portfolio
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center text-green-500 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Live</span>
              </div>
              <Link href="https://github.com/savarkavi/manish" target="_blank">
                <FaGithub />
              </Link>
              <FaExternalLinkAlt />
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-xl">
            <Image
              src="/manish.png"
              alt="jasper img"
              fill
              className="rounded-xl object-contain border border-orange-500"
            />
          </div>
          <p className={`${tai.className} text-orange-200`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eos
            vero magni odit exercitationem suscipit dignissimos vitae modi
            quibusdam rem id harum vel amet iste, natus quisquam illum
            voluptatibus iusto. Illum beatae quasi repellat molestias voluptas
            minima tempora voluptate dolores sequi, esse error. Autem, hic unde
            dolore officia consequuntur blanditiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
