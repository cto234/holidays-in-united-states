/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        elegant: ['ElegantTypewriter', 'serif'], // Add your custom font
      },
    },
  },
  plugins: [],
}

