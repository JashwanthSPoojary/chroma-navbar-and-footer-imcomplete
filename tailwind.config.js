/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer-gray': '#191919',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      height: {
        '448': '448px',
      },
    },
  },
  plugins: [],
}

