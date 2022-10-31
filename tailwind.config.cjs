/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray_100: "#e1e1e6",
        gray_300: "#c4c4cc",
        gray_400: "#8d8d99",
        gray_600: "#323238",
        gray_700: "#29292e",
        gray_800: "#202024",
        gray_900: "#121214",
        green_500: "#00875f",
      },
    },
  },
  plugins: [],
};
