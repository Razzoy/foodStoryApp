/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito: [ "Nunito", "serif"]},
        fontFamily:{
          Bodoni: ["Bodoni", "serif"]
        },
        colors: {
          customGreen: "#b2cf99",
        }
    },
  },
  plugins: [],
}

