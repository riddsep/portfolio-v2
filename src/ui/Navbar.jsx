import { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiArrowUpRight, HiMiniBars4 } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="fixed left-0 right-0 z-30 mx-auto flex items-center justify-end text-white sm:px-10 md:w-fit md:justify-center md:gap-5 md:rounded-full md:bg-[rgba(255,255,255,0.15)] md:py-2 md:backdrop-blur-3xl lg:max-w-6xl"
      data-aos="fade-down"
      data-aos-delay="50"
    >
      <div>
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="relative z-40 m-2 rounded-lg bg-[#17CF97] p-3 md:hidden"
        >
          {isOpen ? <HiX size={35} /> : <HiMiniBars4 size={35} />}
        </button>
        <ul
          className={`${isOpen ? "-translate-x-0" : "-translate-x-full"} absolute right-0 top-0 z-30 flex h-dvh w-screen flex-col items-center gap-5 bg-white/65 pt-28 backdrop-blur-md backdrop:blur-xl md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-transparent md:pt-0 md:backdrop-blur-none md:backdrop:blur-none`}
        >
          <li className="nav-item">Home</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
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
