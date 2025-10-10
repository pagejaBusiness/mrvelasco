import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Herosection() {
  const fullText =
    "Mais do que um corte, uma experiência. Estilo, atitude e personalidade em cada detalhe.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center z-1"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/pageja/image/upload/v1760134049/Close-up_de_um_barbe_kiv335.png')",
          filter: "blur(5px)",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-5 z-2 px-2 sm:px-6 md:px-12">
        <div className="flex flex-col items-center w-full max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl mb-2">
            <motion.img
              className="w-44 md:w-64 lg:w-80 max-w-full mx-auto"
              src="https://res.cloudinary.com/pageja/image/upload/v1760137714/L_douglas_-_BASICO_ufbcuv2_ngmqgi.svg"
              alt=""
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </h1>
          <h2
            className="text-white text-3xl md:text-5xl font-extrabold text-center tracking-wide drop-shadow-xl mb-4"
            style={{
              fontFamily: "Great Vibes, cursive",
              textShadow: "0 4px 32px #000, 0 2px 8px #000",
            }}
          >
            Douglas Velasco - Barbeiro Profissional
          </h2>
          <motion.p
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-4 text-center px-2 sm:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
