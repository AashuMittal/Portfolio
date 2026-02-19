/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0b0e14",      // Background from image
        cardBg: "#151921",      // Card/Button background
        accentGreen: "#34d399", // Emerald green accent
      },
    },
  },
  plugins: [],
}