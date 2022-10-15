/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // content: ["./src/index.html"],
  theme: {
    extend: {
      // breakpoints for different screens
      screens: {
        sm: "10px",
        // for mobile devices
        // => @media (min-width: 10px) { ... }

        md: "600px",
        // => @media (min-width: 960px) { ... }

        lg: "1024px",
        // => @media (min-width: 1440px) { ... }

        xlg: "1201px",
        // => @media (min-width: 1201px) { ... }
      },

      colors: {
        crimson: "#DC143C",
      },
    },
  },
  plugins: [],
};
