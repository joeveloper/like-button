/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#37169C",
          black: "#000000",
          secondary: {
            100: "#E2E2D5",
            200: "#888883",
          },
        },
      },
    },
    plugins: [],
  };
  