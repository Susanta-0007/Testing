/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#5888FD",
        "darkBlue": "#0D53FC",
        "white": "#ffffff",
        "gray": "#7C7C7C",
      },
      screens:{
        "mobile":"500px",
        "tablet":"820px",
      }
    },
  },
  plugins: [],
}