/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/preline.js", // 👈 important
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
