import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    id: 1,
    name: "Bankist",
    year: "2024",
    title: "Banking Simplicity at Your Fingertips",
    description:
      "Effortless money management, anytime, anywhere. Control your expenses, set your budget, and see your money in a glance.",
    image: "/bankist.png",
    tech: ["/html.svg", "/css.svg", "/js.svg"],
    live: "https://riddsep.github.io/bankist/",
  },
  {
    id: 2,
    name: "Angkasa Digital",
    year: "2025",
    title: "Elevate Your Brand with Stunning Websites",
    description:
      "A digital platform that empowers businesses with professional website design, boosting brand awareness and online presence.",
    image: "/angkasa.png",
    tech: ["/react.svg", "/tailwind.svg", "/vite.svg", "/js.svg"],
    live: "https://angkasa-digital.vercel.app/",
  },
  {
    id: 3,
    name: "Fast Food",
    year: "2025",
    title: "Delicious Meals Delivered Fast",
    description:
      "A modern platform for food enthusiasts, connecting users with the best restaurants and delivering meals at lightning speed.",
    image: "/fastfood.png",
    tech: ["/react.svg", "/tailwind.svg", "/vite.svg", "/js.svg", "/redux.svg"],
    live: "https://fast-foodies.vercel.app/",
  },
  {
    id: 4,
    name: "World Wise",
    year: "2024",
    title: "Explore the World, Track Your Journeys",
    description:
      "An intuitive location tracking app that helps users log visited places, plan trips, and relive memories with detailed maps.",
    image: "/worldwise.png",
    tech: ["/react.svg", "/css.svg", "/vite.svg", "/js.svg"],
    live: "https://world-wises.vercel.app/",
  },
  {
    id: 5,
    name: "Chill Movies",
    year: "2024",
    title: "Your Personal Movie Recommendation Platform",
    description:
      "Discover movies tailored to your taste, create watchlists, and explore trending films in one sleek application.",
    image: "/chillmovies.png",
    tech: ["/react.svg", "/tailwind.svg", "/vite.svg", "/js.svg", "redux.svg"],
    live: "https://chill-movieapp.vercel.app/",
  },
];

function ProjectItem() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="mx-auto flex flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.15)] shadow-2xl backdrop-blur-xl md:flex-row lg:max-w-[900px]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="flex shrink-0 flex-col gap-4 p-6 sm:max-w-[400px]">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span>{project.name}</span>
              &bull;
              <span>{project.year}</span>
            </p>
            <h1 className="text-2xl font-bold sm:text-3xl">{project.title}</h1>
            <p className="sm:text-xl">{project.description}</p>
            <a
              href={project.live}
              className="flex w-fit items-center gap-2 rounded-xl border-2 border-white bg-white px-5 py-2 text-sm font-semibold text-black hover:opacity-80"
            >
              Explore the Case Study
              <HiArrowUpRight strokeWidth={1.2} />
            </a>
            <div className="flex items-center">
              {project.tech?.map((tech, index) => (
                <img
                  key={index}
                  className="w-10 cursor-pointer sm:w-14"
                  src={tech}
                  alt={tech}
                />
              ))}
            </div>
          </div>
          <img
            src={project.image}
            className="ml-auto w-full max-w-[500px] pl-5 md:pl-0 md:pt-5"
            alt={project.name}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectItem;
