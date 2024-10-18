/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'flux': ['"Afacad Flux"', 'sans-serif'],
        'mirza': ['"Mirza"', 'sans-serif'],

        
      },
    },
  },
  plugins: [],
}

