import Image from "next/image";
import localFont from "next/font/local";
import { tai } from "../fonts";
import { techStack } from "../utils/techStack";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const About = () => {
  return (
    <div className="pt-12 mt-16 min-h-screen">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center xl:items-start xl:flex-row justify-between gap-16 xl:h-[800px]">
        <div className="relative w-full max-w-[800px] h-[600px] xl:max-w-[600px] xl:h-full rounded-lg flex-shrink-0">
          <Image
            src="/about.jpg"
            fill
            alt="about picture"
            className="absolute rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-12 h-full">
          <div className="flex flex-col gap-8 text-orange-500">
            <h2 className={`${myFont.className} text-6xl`}>About</h2>
            <p className={`${tai.className} text-lg text-orange-200`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Delectus, itaque! Aliquam, facere accusamus porro eligendi
              laboriosam natus, nostrum veritatis assumenda at laudantium
              expedita perspiciatis aliquid reprehenderit aspernatur suscipit
              quo, libero repellat quibusdam ratione omnis possimus?
            </p>
            <p className={`${tai.className} text-lg text-orange-200`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
              nesciunt ut dolores, quis facilis modi laborum recusandae illum
              eaque?
            </p>
            <p className={`${tai.className} text-lg text-orange-200`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae reiciendis, animi earum corrupti voluptate
              reprehenderit magnam dolores assumenda, rem quis iure vero. Quo
              modi id fuga repudiandae culpa, rerum maiores possimus commodi
              nostrum tenetur? Quis natus quos vero quas voluptatibus!
            </p>
          </div>
          <div className="bg-black p-4 border-double border-2 border-orange-500 rounded-lg group hover:bg-orange-500 transition-all">
            <h2
              className={`${myFont.className} text-orange-500 text-3xl 2xl:text-5xl group-hover:text-black transition-all`}
            >
              My Tech Stack & skills
            </h2>
            <div className="flex gap-4 flex-wrap mt-10">
              {techStack.map((tech) => {
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-orange-500 p-2 rounded-lg text-black group-hover:bg-black group-hover:text-orange-500 transition-all"
                  >
                    <div className="text-3xl xl:text-2xl 2xl:text-4xl">
                      {tech.icon}
                    </div>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
