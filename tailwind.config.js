/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
      roboto: ["Roboto Slab", "serif"],
      spacemono: ["Space mono", "monospace"],
    },
    colors: {
      red: "#F87070",
      blue: "#70F3F8",
      pink: "#D881F8",
      grey: "#D7E0FF",
      "dark-blue": "#1E213F",
      gunmetal: "#161932",
      white: "#FFFFFF",
      cream: "#EFF1FA",
    },
    extend: {},
  },
  plugins: [],
};
