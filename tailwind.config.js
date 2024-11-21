/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito:[
          "Nunito", "serif"
        ]
      },
      colors:{
        mainRed:"#FD7463"
        
      }
    },
  },
  plugins: [],
}

