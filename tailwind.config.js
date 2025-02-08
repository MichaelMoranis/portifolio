/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      regular: ["Poppins", "sans serif"]
      },
      screens: {
        'sm-custom': '528px', // Criando um breakpoint chamado "sm-custom"
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

