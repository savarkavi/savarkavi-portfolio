import HeroCards from "./HeroCards";
import Navbar from "./Navbar";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const Hero = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar />
      <div className="p-8 flex flex-col gap-16">
        <p
          className={`${myFont.className} text-orange-500 text-5xl lg:text-7xl xl:text-9xl max-w-[1600px]`}
        >
          A FullStack Developer,
          <br /> Based in New Delhi, India
        </p>
        <HeroCards />
      </div>
    </div>
  );
};

export default Hero;
