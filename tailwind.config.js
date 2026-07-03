/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf0ed',
          100: '#f8d6d0',
          200: '#f0b8ae',
          300: '#e89284',
          400: '#e06a58',
          500: '#d8432e',
          600: '#c0392b',
          700: '#a93226',
          800: '#8b2a1f',
          900: '#6d2219',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}