import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="min-h-screen flex items-center justify-center text-center px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              LandingRV.cl
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            La precisión Full Stack que aterriza tus proyectos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#proyectos"
              className="bg-white text-blue-800 hover:bg-transparent hover:text-white border border-transparent hover:border-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Ver mis proyectos
            </a>
            <a
              href="#contacto"
              className="border border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Contactarme
            </a>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mis Proyectos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Imagen del Proyecto {project}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Proyecto {project}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Descripción breve del proyecto y las tecnologías utilizadas.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded text-sm">
                      React
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded text-sm">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Ver Demo
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
                    >
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="habilidades" className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Tecnologías
          </h2>

          {/* Frontend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Frontend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
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
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <span className="text-white text-sm font-medium text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Backend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
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
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <span className="text-white text-sm font-medium text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Herramientas & Otros
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
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
                  name: "SCRUM / Kanban",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
                },
                {
                  name: "Visual Basic",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
                },
                {
                  name: "Discord",
                  icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <span className="text-white text-sm font-medium text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contacto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">¡Hablemos!</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>rebev18.cl@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.635 4.4a20.601 20.601 0 0 0-3.019 12.121.083.083 0 0 0 .032.058 19.89 19.89 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.057 20.478 20.478 0 0 0-2.954-12.058.068.068 0 0 0-.042-.031zM8.02 14.435c-.98 0-1.78-.9-1.78-2.005 0-1.106.78-2.005 1.78-2.005 1.008 0 1.796.908 1.78 2.005 0 1.105-.78 2.005-1.78 2.005zm7.975 0c-.98 0-1.78-.9-1.78-2.005 0-1.106.78-2.005 1.78-2.005 1.008 0 1.796.908 1.78 2.005 0 1.105-.772 2.005-1.78 2.005z" />
                  </svg>
                  <span>@rebevargas.cl</span>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
