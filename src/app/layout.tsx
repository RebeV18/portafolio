import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal - Desarrollador Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className} bg-blue-900 bg-blend-multiply text-white`}
      >
        <div className="min-h-screen text-white">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 bg-blend-multiply border-b border-blue-700"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddxlvh0go/image/upload/v1759201670/IMG_4194_qhxmre.jpg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <a href="#inicio" className="flex items-center">
                    <Image
                      src="https://res.cloudinary.com/ddxlvh0go/image/upload/v1759196408/Recurso_38_gnjm7m.png"
                      alt="LandingRV.cl"
                      width={120}
                      height={40}
                      className="h-8 w-auto md:h-10 hover:opacity-80 transition-opacity"
                      priority
                    />
                  </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#inicio"
                      className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Inicio
                    </a>
                    <a
                      href="#sobre-mi"
                      className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Sobre Mí
                    </a>
                    <a
                      href="#proyectos"
                      className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Proyectos
                    </a>
                    <a
                      href="#habilidades"
                      className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Habilidades
                    </a>
                    <a
                      href="#contacto"
                      className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Contacto
                    </a>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Abrir menú principal</span>
                    {/* Menu icon */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile menu */}
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/95">
                  <a
                    href="#inicio"
                    className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Inicio
                  </a>
                  <a
                    href="#sobre-mi"
                    className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Sobre Mí
                  </a>
                  <a
                    href="#proyectos"
                    className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#habilidades"
                    className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Habilidades
                  </a>
                  <a
                    href="#contacto"
                    className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-blue-700 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-gray-200">
                    © 2025 Portafolio bajo la marca LandingRV.cl de Rebeca
                    Vargas. Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
