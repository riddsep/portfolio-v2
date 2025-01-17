// src/components/TechnologyIcons.jsx

const technologies = [
  { src: "/vite.svg", alt: "Vite" },
  { src: "/js.svg", alt: "JavaScript" },
  { src: "/tailwind.svg", alt: "Tailwind" },
  { src: "/react.svg", alt: "React" },
  { src: "/redux.svg", alt: "Redux" },
  { src: "/reactquery.svg", alt: "React Query" },
  { src: "/supabase.svg", alt: "Supabase" },
  { src: "/figma.svg", alt: "Figma" },
  { src: "/git.svg", alt: "Git" },
  { src: "/github.svg", alt: "GitHub" },
];

function TechnologyIcons() {
  return (
    <div className="mx-auto px-5 py-16 md:max-w-xl md:pb-20 lg:max-w-5xl">
      <h1
        className="mb-10 text-center text-2xl md:text-3xl"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Technologies I Use
      </h1>

      <div
        className="flex flex-wrap justify-center gap-4 text-xl font-bold text-white"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        {technologies.map((tech, index) => (
          <img
            key={index}
            className="w-16 grayscale md:w-20"
            src={tech.src}
            alt={tech.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default TechnologyIcons;
