import Image from "next/image";
import localFont from "next/font/local";
import { tai } from "../fonts";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const About = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-12 mt-16 flex justify-between gap-24">
      <div className="relative w-[600px] h-[800px] rounded-lg flex-shrink-0">
        <Image
          src="/about.jpg"
          fill
          alt="about picture"
          className="absolute rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 text-orange-500">
        <h2 className={`${myFont.className} text-6xl`}>About</h2>
        <p className={`${tai.className} text-lg text-orange-200`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          itaque! Aliquam, facere accusamus porro eligendi laboriosam natus,
          nostrum veritatis assumenda at laudantium expedita perspiciatis
          aliquid reprehenderit aspernatur suscipit quo, libero repellat
          quibusdam ratione omnis possimus?
        </p>
        <p className={`${tai.className} text-lg text-orange-200`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
          nesciunt ut dolores, quis facilis modi laborum recusandae illum eaque?
        </p>
        <p className={`${tai.className} text-lg text-orange-200`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          reiciendis, animi earum corrupti voluptate reprehenderit magnam
          dolores assumenda, rem quis iure vero. Quo modi id fuga repudiandae
          culpa, rerum maiores possimus commodi nostrum tenetur? Quis natus quos
          vero quas voluptatibus!
        </p>
        <p className={`${tai.className} text-lg text-orange-200`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatibus vitae soluta? Ipsum, neque! Cum itaque quisquam
          aspernatur incidunt exercitationem!
        </p>
      </div>
    </div>
  );
};

export default About;
