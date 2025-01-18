/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        A: ["S", "AS"],
        inter: ["Inter", "AS"],
      }
    },
  },
  plugins: [],
}