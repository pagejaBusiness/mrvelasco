"use client";

import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const closingTimerRef = useRef(null);

  const navItems = [
    { name: "INÍCIO", href: "#home" },
    { name: "SOBRE", href: "#about" },
    { name: "GALERIA", href: "#gallery" },
    { name: "CURSOS", href: "#courses" },
    { name: "CONTATO", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    const navbarHeight = document.querySelector("nav").offsetHeight; 
    if (section) {
      const top = section.offsetTop - navbarHeight; 
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id.replace("#", ""));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isClosing ? "hidden" : "unset";
  }, [isMenuOpen, isClosing]);

  useEffect(() => {
    return () => {
      if (closingTimerRef.current) clearTimeout(closingTimerRef.current);
    };
  }, []);

  const closeMenu = () => {
    if (isClosing) return;
    setIsClosing(true);

    setIsMenuOpen(false);

    closingTimerRef.current = setTimeout(() => {
      setIsClosing(false);
      closingTimerRef.current = null;
    }, 420);
  };

  const toggleMenu = () => {
    if (isClosing) return;
    if (isMenuOpen) closeMenu();
    else setIsMenuOpen(true);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && (isMenuOpen || isClosing)) closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen, isClosing]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-barbershopDark/95 backdrop-blur-md shadow-lg"
            : "bg-barbershopDark/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/pageja/image/upload/v1760137714/L_douglas_-_BASICO_ufbcuv2_ngmqgi.svg"
                alt="Logo Mauro Barros"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-6 py-2.5 font-medium text-sm tracking-wide transition-all duration-300 rounded-md ${
                      isActive
                        ? "text-barbershopAccent"
                        : "text-barbershopLight/80 hover:text-barbershopAccent hover:bg-[rgba(3,144,60,0.15)]"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Botão Hamburguer / X */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-barbershopLight transition-colors duration-200 hover:text-barbershopAccent"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-transform duration-200 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-opacity duration-150 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current rounded-full transition-transform duration-200 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ease-out ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      >
        {/* Fundo escurecido */}
        <div className="absolute inset-0 bg-barbershopDark/70 backdrop-blur-md transition-opacity duration-500 ease-out"></div>

        {/* Sidebar deslizante */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-barbershopDark/100 backdrop-blur-xl shadow-2xl transform transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
                    closeMenu();
                  }}
                  className={`relative text-left py-4 px-5 font-semibold text-lg tracking-wide transition-all duration-300 rounded-lg group ${
                    isActive
                      ? "text-barbershopAccent bg-barbershopDark/80"
                      : "text-barbershopLight/90 hover:text-barbershopAccent hover:bg-barbershopDark/70"
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
