import Image from "next/image";

interface Project {
  id: number;
  title: string;
  pic: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Proyecto E-commerce",
      pic: "https://res.cloudinary.com/ddxlvh0go/image/upload/v1759360034/P1_nahzkd.png",
      description:
        "Proyecto E-commerce desarrollado con React y Tailwind CSS, integrado con una API REST propia del proyecto backend. Enfocado en diseño responsivo, renderizado dinámico de productos y una experiencia de usuario optimizada.",
      technologies: [
        "React",
        "TailwindCSS",
        "Firebase SDK",
        "Axios",
        "Context",
      ],
      demoUrl: "https://luisgerardoaquino.netlify.app",
      codeUrl: "https://github.com/RebeV18/proyecto7",
    },
    {
      id: 2,
      title: "Proyecto Backend - API REST",
      pic: "https://res.cloudinary.com/ddxlvh0go/image/upload/v1759360034/P2_qzgwoi.png",
      description:
        "Aplicación backend que administra la autenticación y autorización de los usuarios. Se utiliza Firebase para la persistencia de datos y MercadoPago para la gestión de pagos.",
      technologies: [
        "Node.js",
        "Express",
        "Firebase",
        "MercadoPago",
        "JWT",
        "Swagger",
      ],
      demoUrl: "https://proyecto6-sgv2.onrender.com",
      codeUrl: "https://github.com/RebeV18/proyecto6",
    },
    {
      id: 3,
      title: "Landing Page",
      pic: "https://res.cloudinary.com/ddxlvh0go/image/upload/v1759360034/P3_v6htbn.png",
      description:
        "Landing Page desarrollada con HTML y CSS, diseñada con enfoque responsivo. Incluye enlaces a redes sociales del artista y un formulario de suscripción por correo electrónico para construir una futura base de seguidores.",
      technologies: ["HTML", "CSS", "JavaScript", "Prototipado"],
      demoUrl: "https://proyecto3-3i0e.onrender.com",
      codeUrl: "https://github.com/RebeV18/Proyecto3",
    },
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Algunos de mis Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={project.pic}
                  alt={"Imagen del Proyecto"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-white mb-4 flex-grow text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900/50 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-3 py-1 hover:bg-slate-900/50 hover:rounded-xl font-medium"
                    >
                      Ver Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:bg-slate-900/50 px-3 py-1 hover:rounded-xl font-medium"
                    >
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
