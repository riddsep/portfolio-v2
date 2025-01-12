import ProjectItem from "./ProjectItem";
import TechnologyIcons from "./TechnologyIcons";

function ProjectList() {
  return (
    <div className="bg-dust text-white">
      <TechnologyIcons />
      <div className="px-5 pb-20 sm:px-10 lg:mx-auto lg:max-w-6xl xl:px-0">
        <h1
          className="highlight mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:mb-10 lg:text-6xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <span className="relative">Featured Case Studies</span>
        </h1>

        <p
          className="mb-20 w-full sm:text-xl md:max-w-[600px] md:text-xl lg:mb-24 lg:text-2xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Learn how I’ve applied design and development principles to solve
          problems and deliver solutions.
        </p>
        <ProjectItem />
      </div>
    </div>
  );
}

export default ProjectList;
