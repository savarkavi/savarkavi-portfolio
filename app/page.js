import localFont from "next/font/local";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";

const myFont = localFont({
  src: "./blackrocketdemo-2okgk.otf",
});

export default function Home() {
  return (
    <div className="bg-orange-500 p-1">
      <div className="bg-hero-pattern min-h-screen rounded-xl">
        <Hero />
        <About />
        <Works />
      </div>
    </div>
  );
}
