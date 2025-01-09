import { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiArrowUpRight, HiMiniBars4 } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between p-5 font-inter text-white">
      <img src="/logo.svg" alt="logoipsum" className="w-16" />
      <div>
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="relative z-40"
        >
          {isOpen ? <HiX size={35} /> : <HiMiniBars4 size={35} />}
        </button>
        <ul
          className={`${isOpen ? "-translate-x-0" : "-translate-x-full"} absolute right-0 top-0 z-30 flex h-dvh w-screen flex-col items-center gap-5 overflow-hidden bg-white/65 backdrop-blur-md backdrop:blur-xl`}
        >
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item">Projects</li>
          <li className="flex cursor-pointer items-center gap-2 rounded-3xl border border-white px-5 py-1 hover:bg-white hover:text-black">
            <span>Hire me</span>
            <HiArrowUpRight />
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
