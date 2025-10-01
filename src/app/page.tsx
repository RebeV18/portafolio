import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section id="inicio" className="min-h-screen flex items-center justify-center text-center px-4 relative">
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

      <ProjectsSection />

      <SkillsSection />

      {/* Contact */}
      <section id="contacto" className="py-10 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contacto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
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
            </div>
            {/* Social Links */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex space-x-16">
                <a
                  href="https://github.com/RebeV18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.523 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rv-chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-10 w-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575c-.85 0-1.54-.69-1.54-1.54s.69-1.54 1.54-1.54 1.54.69 1.54 1.54-.69 1.54-1.54 1.54zm1.336 9.763H3.667v-8.59h2.674v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
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
