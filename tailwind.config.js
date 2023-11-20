/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Spartan: "League Spartan",
    },
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xs: "500px",
      // => @media (min-width: 500px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        orange: "#FFC289",
        darkgray: "#1F1D1D",
        red: "#D62A2A",
        freshgreen: "#69D84F",
      },
    },
  },
  plugins: [],
};
