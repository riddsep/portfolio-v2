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
    <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-white">
      {technologies.map((tech, index) => (
        <img
          key={index}
          className="w-20 cursor-pointer grayscale hover:grayscale-0"
          src={tech.src}
          alt={tech.alt}
        />
      ))}
    </div>
  );
}

export default TechnologyIcons;
