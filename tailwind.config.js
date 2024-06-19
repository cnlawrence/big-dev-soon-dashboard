/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD74B",
        orange: "#FF9E2B",
        "light-red": "#FDD5DA",
        "dark-red": "#FF5E75",
        "light-green": "#B8E9D4",
        "dark-green": "#2CC483",
        blue: "#696FFB",
      },
      fontFamily: {
        roboto: ["Roboto", "Roboto Bold", "sans-serif"],
        sans: ["Roboto", "Roboto Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
