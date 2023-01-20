/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        herculanum: ["Herculanum", "sans-serif"],
      },

      backgroundImage: {
        "avatar-bg": "url('../src/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
