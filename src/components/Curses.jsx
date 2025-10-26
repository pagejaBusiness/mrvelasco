"use client";

import { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Curses() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({
    advanced: 0,
    basic: 0,
  });

  const courses = {
    advanced: {
      title: "Curso Avançado de Corte",
      subtitle: "Aprimore suas Habilidades",
      description:
        "Perfeito para barbeiros experientes que desejam dominar técnicas avançadas.",
      images: [
        "https://res.cloudinary.com/pageja/image/upload/v1760575513/about_douglas_rv75f7.png",
        "https://res.cloudinary.com/pageja/image/upload/v1760404378/IMG_1829_dypurr.jpg",
        "https://res.cloudinary.com/pageja/image/upload/v1760137714/L_douglas_-_BASICO_ufbcuv2_ngmqgi.svg",
      ],
      fullDescription:
        "Leve suas habilidades de barbearia para o próximo nível com o nosso Curso Avançado de Corte. Este programa cobre técnicas de fade avançadas, cortes de precisão, tendências modernas e estratégias de crescimento. Aprenda com especialistas do setor com mais de 15 anos de experiência. Inclui prática presencial, certificado e acesso vitalício à comunidade exclusiva.",
      highlights: [
        "Técnicas avançadas de fade e degradê",
        "Trabalho de tesoura com precisão",
        "Tendências modernas de estilo",
        "Estratégias de negócio e marketing",
        "Certificado ao concluir o curso",
      ],
    },
    basic: {
      title: "Curso Básico de Corte",
      subtitle: "Comece Sua Jornada",
      description:
        "Ideal para iniciantes que desejam aprender os fundamentos da barbearia.",
      images: [
        "https://res.cloudinary.com/pageja/image/upload/v1760137665/L_douglas_-_BASICO_ufbcuv_ko3zqv.svg",
        "https://res.cloudinary.com/pageja/image/upload/v1760134049/Close-up_de_um_barbe_kiv335.png",
        "https://res.cloudinary.com/pageja/image/upload/v1760123630/L_douglas_-_BASICO_ufbcuv.png",
      ],
      fullDescription:
        "Inicie sua carreira na barbearia com o nosso Curso Básico de Corte. Aprenda técnicas essenciais de corte, manuseio de ferramentas, atendimento ao cliente e protocolos de segurança. Nosso método passo a passo garante que você construa uma base sólida, mesmo sem experiência prévia.",
      highlights: [
        "Técnicas fundamentais de corte",
        "Identificação e manutenção de ferramentas",
        "Atendimento e consulta ao cliente",
        "Protocolos de segurança e higiene",
        "Currículo acessível para iniciantes",
      ],
    },
  };

  const nextImage = useCallback((courseType) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [courseType]: (prev[courseType] + 1) % courses[courseType].images.length,
    }));
  }, []);

  const prevImage = useCallback((courseType) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [courseType]:
        prev[courseType] === 0
          ? courses[courseType].images.length - 1
          : prev[courseType] - 1,
    }));
  }, []);

  const setImageIndex = useCallback((courseType, index) => {
    setCurrentImageIndex((prev) => ({ ...prev, [courseType]: index }));
  }, []);

  const CourseCard = memo(
    ({
      courseType,
      course,
      currentIndex,
      onNext,
      onPrev,
      onSetIndex,
      onOpenModal,
    }) => (
      <div className="bg-barbershopLight rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-64 md:h-80 bg-barbershopDark overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={`${courseType}-${currentIndex}`}
              src={course.images[currentIndex] || "/placeholder.svg"}
              alt={`${course.title} - Imagem ${currentIndex + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>

          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-barbershopDark/80 hover:bg-barbershopGreen text-white p-3 rounded-full transition-colors duration-200 z-10"
            aria-label="Imagem anterior"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-barbershopDark/80 hover:bg-barbershopGreen text-white p-3 rounded-full transition-colors duration-200 z-10"
            aria-label="Próxima imagem"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {course.images.map((_, index) => (
              <button
                key={index}
                onClick={() => onSetIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-barbershopAccent w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-2">
            <span className="text-barbershopGreen text-sm font-semibold uppercase tracking-wider">
              {course.subtitle}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-barbershopDark mb-3">
            {course.title}
          </h2>
          <p className="text-gray-600 font-body mb-6 leading-relaxed">
            {course.description}
          </p>
          <button
            onClick={onOpenModal}
            className="w-full bg-barbershopGreen hover:bg-barbershopAccent text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    )
  );

  const Modal = ({ courseType, course }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
      onClick={() => setActiveModal(null)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-barbershopLight rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-barbershopDark text-white p-6 rounded-t-xl">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-barbershopAccent text-sm font-semibold uppercase tracking-wider">
                {course.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mt-1">
                {course.title}
              </h3>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="text-white hover:text-barbershopAccent transition-colors p-1"
              aria-label="Fechar modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-gray-700 font-body leading-relaxed mb-6">
            {course.fullDescription}
          </p>

          <h4 className="text-xl font-heading font-bold text-barbershopDark mb-4">
            O que você vai aprender
          </h4>
          <ul className="space-y-3 mb-6">
            {course.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-barbershopGreen flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 font-body">{highlight}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setActiveModal(null)}
            className="w-full bg-barbershopGreen hover:bg-barbershopAccent text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Fechar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-barbershopDark py-12 px-4 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Nossos <span className="text-barbershopAccent">Cursos</span>
          </h1>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Escolha o curso perfeito para o seu nível de habilidade e objetivos
            profissionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <CourseCard
            key="advanced"
            courseType="advanced"
            course={courses.advanced}
            currentIndex={currentImageIndex.advanced}
            onNext={() => nextImage("advanced")}
            onPrev={() => prevImage("advanced")}
            onSetIndex={(index) => setImageIndex("advanced", index)}
            onOpenModal={() => setActiveModal("advanced")}
          />
          <CourseCard
            key="basic"
            courseType="basic"
            course={courses.basic}
            currentIndex={currentImageIndex.basic}
            onNext={() => nextImage("basic")}
            onPrev={() => prevImage("basic")}
            onSetIndex={(index) => setImageIndex("basic", index)}
            onOpenModal={() => setActiveModal("basic")}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeModal && (
          <Modal
            key={activeModal}
            courseType={activeModal}
            course={courses[activeModal]}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Curses;
