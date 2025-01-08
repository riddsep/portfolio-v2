import { useState } from "react";
import { HiArrowUpRight, HiMiniBars4 } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex justify-between p-5 font-inter text-white">
      <img src="logo.svg" alt="logoipsum" className="w-20" />
      <div className="relative">
        <button>
          <HiMiniBars4
            size={35}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </button>
        <ul
          className={`${isOpen ? "-translate-x-0" : "-translate-x-full"} absolute right-0 -mr-5 flex h-[calc(100vh-61.4px)] w-screen flex-col items-center gap-5 bg-black/85 py-5 backdrop:blur-xl`}
        >
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item">Projects</li>
          <li className="flex cursor-pointer items-center gap-2 rounded-3xl border border-white px-5 py-1 hover:bg-white hover:text-black">
            <span>Hire me</span>
            <HiArrowUpRight />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
