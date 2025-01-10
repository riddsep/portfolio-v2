import TechnologyIcons from "./TechnologyIcons";

function Projects() {
  return (
    <div className="bg-gradient2 text-white">
      <div className="mx-auto px-5 pt-24 md:max-w-xl lg:max-w-5xl">
        <h1 className="mb-10 text-center text-2xl md:text-3xl">
          Technologies I Use
        </h1>
        <TechnologyIcons />
      </div>
      <div className="mt-28 px-5 sm:px-10">
        <h1 className="highlight mb-4 text-3xl font-semibold md:text-5xl">
          <span className="relative"> Featured Case Studies</span>
        </h1>
        <p className="font-inter font-light md:w-3/4 md:text-xl">
          Learn how I’ve applied design and development principles to solve
          problems and deliver solutions.
        </p>
      </div>
    </div>
  );
}

export default Projects;
