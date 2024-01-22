import localFont from "next/font/local";
import Image from "next/image";

const myFont = localFont({
  src: "../blackrocketdemo-2okgk.otf",
});

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-8">
      <div className="flex flex-col items-center w-full max-w-[800px]">
        <div className="flex items-end gap-8">
          <h2
            className={`${myFont.className} text-5xl sm:text-6xl text-orange-500 mb-8`}
          >
            Contact
          </h2>
          <div className="relative">
            <Image src="/contact.gif" alt="contact" width={150} height={150} />
          </div>
        </div>
        <form className="flex flex-col gap-8 w-full">
          <input
            placeholder="Your name"
            className="p-4 outline-none rounded-lg w-full"
          />
          <input
            placeholder="Your Email"
            className="p-4 outline-none rounded-lg w-full"
          />
          <textarea
            placeholder="Your message"
            className="p-4 h-[250px] outline-none rounded-lg w-full"
          />
          <button className="px-2 py-4 bg-orange-500 rounded-xl hover:bg-orange-200 hover:text-orange-500 transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
