import { HiMiniArrowDown } from "react-icons/hi2";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative left-0 h-dvh w-full overflow-hidden bg-gradient text-center text-white">
      <Navbar />
      <div className="relative z-20 flex h-[calc(100vh_-_81.4px)] w-full flex-col justify-center px-5">
        <h1 className="mb-4 text-4xl font-bold">
          Hi, I&apos;m Rido, I&apos;m a Frontend Developer
        </h1>
        <p className="text-lg">
          I specialize in building <em>user-friendly, responsive</em> websites
          that bring ideas to life. Let&apos;s collaborate to create something
          amazing.
        </p>
        <div className="mt-5 flex items-center justify-center">
          <button className="flex w-fit items-center gap-2 rounded-3xl border-none bg-white px-5 py-2 text-black">
            Download CV
            <HiMiniArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
