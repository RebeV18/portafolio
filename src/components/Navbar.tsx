"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 y border-b border-blue-700">
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
                className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-extralight transition-colors"
              >
                Inicio
              </a>
              <a
                href="#proyectos"
                className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-extralight transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#habilidades"
                className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-extralight transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#contacto"
                className="hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-extralight transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
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
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/95">
            <a
              href="#inicio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-extralight transition-colors"
            >
              Inicio
            </a>
            <a
              href="#proyectos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-extralight transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#habilidades"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-extralight transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-extralight transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
