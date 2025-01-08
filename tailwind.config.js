/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #000000, #200D42, #4F21A1)",
      },
    },
  },
  plugins: [],
};
