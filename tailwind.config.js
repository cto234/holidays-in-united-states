/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alteHaas: ['AlteHaas', 'serif'], // Add your custom font
      },
    },
  },
  plugins: [],
}

