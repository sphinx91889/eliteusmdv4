/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a7b89f',
          dark: '#96a58e',
          light: '#b8c7b1'
        },
        secondary: {
          DEFAULT: '#cfa286',
          dark: '#bc8f73',
          light: '#dbb59d'
        },
        accent: {
          sage: '#e8ede5',
          terra: '#f5ebe6'
        }
      }
    },
  },
  plugins: [],
}
