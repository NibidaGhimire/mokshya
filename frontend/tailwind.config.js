/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bg: "#000c24",
      white:"#fffeee"
    },
  },
  plugins: [require("daisyui")],
};

