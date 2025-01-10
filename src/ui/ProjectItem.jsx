import { HiArrowUpRight } from "react-icons/hi2";

function ProjectItem() {
  return (
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
  );
}

export default ProjectItem;
