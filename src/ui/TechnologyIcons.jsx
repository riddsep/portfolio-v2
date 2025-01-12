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
    <div className="relative z-10 mx-auto px-5 py-16 before:absolute before:-left-10 before:top-2 before:-z-10 before:content-[url('/tools.png')] md:max-w-xl md:pb-20 lg:max-w-5xl">
      <h1 className="mb-10 text-center text-2xl md:text-3xl">
        Technologies I Use
      </h1>

      <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-white">
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
