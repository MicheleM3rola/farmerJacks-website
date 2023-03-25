/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cinzelFont: "var(--roboto-font)",
    },
    extend: {
      screens: {
        xs: "425px",
      },

      colors: {
        navbkg: "#475159",
        bkgpic: "#EFF3F6",
        logoColor: "rgb(71,81,91)",
        farmer: "rgb(150,201,79)",
        slogan: "rgb(150,199,81)",
      },
      dropShadow: {
        "text-sm": "1px 1px 0px rgba(0, 0, 0, 0.90)",
        "text-md": "-2px 4px 14px rgba(0, 224, 99, 0.55)",
        "text-lg": "1px 4px 0px rgba(0, 0, 0, 0.90)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
