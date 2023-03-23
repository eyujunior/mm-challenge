/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#004C47",
      },
    },
  },
  plugins: [],
};
