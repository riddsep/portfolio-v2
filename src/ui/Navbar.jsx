import { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiArrowUpRight, HiMiniBars4 } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex items-center justify-between p-5 font-inter text-white">
      <img src="/logo.svg" alt="logoipsum" className="w-16" />
      <div className="relative">
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          {isOpen ? <HiX size={35} /> : <HiMiniBars4 size={35} />}
        </button>
        <ul
          className={`${isOpen ? "-translate-x-0" : "-translate-x-full"} absolute right-0 z-30 -mr-5 flex h-screen w-screen flex-col items-center gap-5 bg-white/65 py-5 backdrop-blur-md backdrop:blur-xl`}
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
