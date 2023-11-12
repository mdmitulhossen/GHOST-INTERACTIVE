/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Gobold': ['Gobold', 'sans-serif'],
      'Messiri': ['El Messiri', 'sans-serif'],
    }
  },
  plugins: [],
}

