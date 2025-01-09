/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bg: "#000c24",
      white:"#fffeee",
      primarygreen:"#77f0a4"
    },
  },
  plugins: [require("daisyui")],
};

