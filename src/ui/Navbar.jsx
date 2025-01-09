import { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiArrowUpRight, HiMiniBars4 } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto flex items-center justify-between px-5 py-5 font-inter text-white sm:px-10 md:mb-5 md:w-fit md:justify-center md:gap-5 md:rounded-full md:bg-[rgba(255,255,255,0.15)] md:px-10 md:py-2 md:backdrop-blur-3xl lg:max-w-6xl">
      <img src="/logo.svg" alt="logoipsum" className="w-12" />
      <div className="">
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="relative z-40 md:hidden"
        >
          {isOpen ? <HiX size={35} /> : <HiMiniBars4 size={35} />}
        </button>
        <ul
          className={`${isOpen ? "-translate-x-0" : "-translate-x-full"} absolute right-0 top-0 z-30 flex h-dvh w-screen flex-col items-center gap-5 bg-white/65 pt-28 backdrop-blur-md backdrop:blur-xl md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:pt-0 md:backdrop-blur-none md:backdrop:blur-none`}
        >
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item">Projects</li>
          <li className="flex cursor-pointer items-center gap-2 rounded-3xl border-2 border-white px-5 py-1 hover:bg-white hover:text-[#082832]">
            <span>Hire me</span>
            <HiArrowUpRight />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
