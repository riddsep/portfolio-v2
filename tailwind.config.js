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
        gradient2:
          "linear-gradient(to bottom, #082832 0%, #082832 40%, #0f4b53 100%)",
      },
      boxShadow: {
        neon: "0 0 5px #00ffab, 0 0 10px #00ffab, 0 0 20px #00ffab, 0 0 40px #00ffab",
      },
    },
  },
  plugins: [],
};
