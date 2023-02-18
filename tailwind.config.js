/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cinzelFont: "var(--cinzel-font)",
    },
    extend: {
      colors: {
        navbkg: "#475159",
        bkgpic: "#EFF3F6",
      },
    },
  },
  plugins: [],
};
