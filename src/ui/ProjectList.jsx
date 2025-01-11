import ProjectItem from "./ProjectItem";
import TechnologyIcons from "./TechnologyIcons";

function ProjectList() {
  return (
    <div className="bg-dust pb-24 text-white">
      <TechnologyIcons />
      <div className="mt-28 px-5 sm:px-10 lg:mx-auto lg:max-w-6xl xl:px-0">
        <h1 className="highlight mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:mb-10 lg:text-6xl">
          <span className="relative"> Featured Case Studies</span>
        </h1>

        <p className="mb-20 w-full sm:text-xl md:max-w-[600px] md:text-xl lg:mb-40 lg:text-2xl">
          Learn how I’ve applied design and development principles to solve
          problems and deliver solutions.
        </p>
        <ProjectItem />
      </div>
    </div>
  );
}

export default ProjectList;
