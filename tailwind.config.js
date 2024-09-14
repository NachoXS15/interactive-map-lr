/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".dist/index.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#0c1222"
      }
    },
  },
  plugins: [],
}

