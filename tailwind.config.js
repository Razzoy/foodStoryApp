/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito: [ "Nunito", "serif"],
        Bodoni: ["Bodoni", "serif"]
      },
        colors: {
          customGreen: "#b2cf99",
          mainRed:"#FD7463"
          }
        }
      },
  plugins: [],
}

