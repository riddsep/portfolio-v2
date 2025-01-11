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
        gradient1:
          "linear-gradient(to bottom, transparent 70%, #082832 30%), url('/Grid.svg')",
      },
    },
  },
  plugins: [],
};
