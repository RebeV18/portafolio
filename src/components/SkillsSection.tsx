import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
}

interface TechCategory {
  title: string;
  technologies: Technology[];
}

export default function SkillsSection() {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      technologies: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "NestJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
    },
    {
      title: "Metodologías y Manejo de Versiones",
      technologies: [
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "SCRUM",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
        },
        {
          name: "Kanban",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
        },
        {
          name: "Discord",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg",
        },
      ],
    },
    {
      title: "Otros",
      technologies: [
        {
          name: "Visual Basic",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
        {
          name: "MS Office",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoffice.svg",
        },
         {
          name: "Trilingue",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googletranslate.svg",
        },
         {
          name: "Minuciosa",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/checkmarx.svg",
        },
        {
          name: "After Effects",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
        },
        {
          name: "Premiere",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
        },
      ],
    },
  ];

  const TechCard = ({ tech }: { tech: Technology }) => (
    <div className="flex flex-row items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
      <Image src={tech.icon} alt={tech.name} width={24} height={24} />
      <span className="text-white text-sm font-medium">{tech.name}</span>
    </div>
  );

  return (
    <section id="habilidades" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
          Tecnologías
        </h2>

        {techCategories.map((category, index) => (
          <div
            key={category.title}
            className={index < techCategories.length - 1 ? "mb-12" : ""}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.technologies.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
