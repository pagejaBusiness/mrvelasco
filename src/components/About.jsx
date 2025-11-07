"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[#03903c] text-sm font-semibold tracking-wider uppercase"
              >
                Sobre Douglas Velasco
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[#f5f5f5] text-4xl lg:text-5xl font-bold leading-tight"
              >
                Excelência em Barbearia e Formação Profissional
              </motion.h3>
            </div>

            <div className="h-1 w-20 bg-[#03903c]"></div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-4 text-[#f5f5f5]/80 text-lg leading-relaxed"
            >
              <p>
                Com técnica precisa e paixão pela arte de barbear, Douglas
                Velasco eleva o cuidado masculino a um padrão de elegância e
                autenticidade.
              </p>

              <p>
                Referência em cortes, barba e estética capilar, alia
                experiência, sensibilidade e excelência em cada detalhe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-8 pt-4"
            >
              <div className="space-y-1">
                <div className="text-[#03903c] text-3xl font-bold">8+</div>
                <div className="text-[#f5f5f5]/60 text-sm">
                  Anos de Experiência
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[#03903c] text-3xl font-bold">
                  Incontáveis
                </div>
                <div className="text-[#f5f5f5]/60 text-sm">
                  Clientes Transformados
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Efeito de borda neon */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff70]/20 to-transparent rounded-lg"></div>

              <div className="w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src="https://res.cloudinary.com/pageja/image/upload/v1762484503/About_v6ak0z.jpg"
                  alt="Douglas Velasco - Barbeiro profissional"
                  className="w-full h-full object-cover object-center rounded-lg transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Detalhes decorativos */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#03903c] rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#00ff70] rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
