"use client";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const Works = () => {
  return (
    <div>
      <h2 className={`${myFont.className} text-6xl`}>Works</h2>
    </div>
  );
};

export default Works;
