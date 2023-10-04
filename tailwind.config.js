/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        babypink: "#ffe8dd",
        crimson: "#f33127",
        darkblack: "#0d0e10",
      },
      fontFamily: {
        mont: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
