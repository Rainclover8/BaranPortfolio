/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom1: "#003C43",
        custom2: "#135D66",
        custom3: "#77B0AA",
        custom4: "#E3FEF7",
        dark: "#222831",
        dark1: "#31363F",
        dark2: "#76ABAE",
        dark3: "#EEEEEE",
      },
    },
    fontFamily: {
      "Titan-One": ["'Titan One'",'sans-serif'],
      "Pacifico": ["'Pacifico'","'cursive'"],
      "Nunito": ["'Nunito'","'cursive'"],
      "Jersey": ["'Jersey 15'","'cursive'"],
      "Jacquard": ["'Jacquard 24'","'cursive'"],
      "Coder": ["'Jersey 10'","'cursive'"],
      "SpaceMono":["'Space Mono'", "'cursive'"]
    },
  },
  plugins: [],
};
