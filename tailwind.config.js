/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Montserrat",
      },
      colors: {
        utama: "#286497",
        kedua: "#000618",
        ketiga: "#00C3FD",
      },
    },
  },
  plugins: [],
};