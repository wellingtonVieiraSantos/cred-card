/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        main: '#131424'
      },
      fontFamily:{
        inter: 'Inter, sans-serif',
        zenDots: 'Zen Dots, sans-serif',
        BungeeHairline: 'Bungee Hairline, sans-serif',
        roboto: 'Roboto, sans-serif',
      },
      screens:{
        mobile: '400px',
        tablet: '500px'
      }
    },
  },
  plugins: [],
}

