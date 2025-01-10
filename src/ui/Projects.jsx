import { HiArrowUpRight } from "react-icons/hi2";
import TechnologyIcons from "./TechnologyIcons";

function Projects() {
  return (
    <div className="bg-gradient2 pb-6 text-white">
      <div className="mx-auto px-5 pt-24 md:max-w-xl lg:max-w-5xl">
        <h1 className="mb-10 text-center text-2xl md:text-3xl">
          Technologies I Use
        </h1>
        <TechnologyIcons />
      </div>
      <div className="mt-28 px-5 sm:px-10 lg:mx-auto lg:max-w-6xl xl:px-0">
        <h1 className="highlight mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:mb-10 lg:text-6xl">
          <span className="relative"> Featured Case Studies</span>
        </h1>
        <p className="mb-40 w-full sm:text-xl md:max-w-[600px] md:text-xl lg:text-2xl">
          Learn how I’ve applied design and development principles to solve
          problems and deliver solutions.
        </p>

        <div className="mx-auto flex flex-col overflow-hidden rounded-2xl bg-[#17CF97]/30 shadow-2xl backdrop-blur-md backdrop:blur-xl md:flex-row lg:max-w-[900px]">
          <div className="flex shrink-0 flex-col gap-4 p-5 sm:max-w-[400px]">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span>BANKIST</span>
              &bull;
              <span>2024</span>
            </p>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Banking Simplicity at Your Fingertips.
            </h1>
            <p className="sm:text-xl">
              Effortless money management, anytime, anywhere.
            </p>
            <button className="flex w-fit items-center gap-2 rounded-xl border-2 border-white bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-80">
              Explore the Case Study
              <HiArrowUpRight strokeWidth={1.2} />
            </button>
          </div>
          <img
            src="MacBook.png"
            className="ml-auto w-full max-w-[500px] pl-5 md:pl-0 md:pt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
