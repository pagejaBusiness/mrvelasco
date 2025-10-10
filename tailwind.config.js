/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        barbershopGreen: "#03903c", // verde principal da foto
        barbershopDark: "#0a0a0a", // quase preto, para fundo
        barbershopLight: "#f5f5f5", // branco suave para contraste
        barbershopAccent: "#00ff70", // verde neon da iluminação (opcional para destaques)
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"], // exemplo de fonte para títulos
        body: ["Roboto", "sans-serif"], // fonte para textos
      },
    },
  },
  plugins: [],
};
