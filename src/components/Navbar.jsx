"use client";

import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "INÍCIO", href: "#home" },
    { name: "SOBRE", href: "#about" },
    { name: "GALERIA", href: "#gallery" },
    { name: "CURSOS", href: "#courses" },
    { name: "CONTATO", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id.replace("#", ""));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicializa ativo ao carregar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-barbershopDark/95 backdrop-blur-md shadow-lg"
            : "bg-barbershopDark/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/pageja/image/upload/v1760123630/L_douglas_-_BASICO_ufbcuv.png"
                alt="Logo Mauro Barros"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-6 py-2.5 font-medium text-sm tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-barbershopAccent"
                        : "text-barbershopLight/80 hover:text-barbershopAccent hover:bg-barbershopDark/70"
                    } rounded-md`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-barbershopLight transition-colors duration-300 hover:text-barbershopAccent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-barbershopDark/95 backdrop-blur-lg"></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-barbershopDark/100 backdrop-blur-xl shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6 gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`relative text-left py-4 px-5 font-semibold text-lg tracking-wide transition-all duration-300 rounded-lg group ${
                    isActive
                      ? "text-barbershopAccent bg-barbershopDark/70"
                      : "text-barbershopLight/90 hover:text-barbershopAccent hover:bg-barbershopDark/60"
                  }`}
                >
                  <span className="relative z-10 block pl-3">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
