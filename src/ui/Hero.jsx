import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="h-dvh w-full bg-gradient text-white">
      <Navbar />
      <div className="flex h-[calc(100vh_-_81.4px)] w-full flex-col justify-center px-5">
        <h1 className="mb-4 text-4xl font-bold">
          Hi, I&apos;m Rido, I&apos;m a Frontend Developer
        </h1>
        <p className="text-lg">
          I specialize in building <em>user-friendly, responsive</em> websites
          that bring ideas to life. Let&apos;s collaborate to create something
          amazing.
        </p>
        <button className="mt-5 flex w-fit items-center gap-2 rounded-3xl bg-white px-5 py-1 text-black">
          Let&apos;s Talk
          <HiOutlineArrowUpRight />
        </button>
      </div>
    </div>
  );
}

export default Hero;
