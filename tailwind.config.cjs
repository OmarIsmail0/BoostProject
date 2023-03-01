/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkStar1: '#6a55aa',
        darkStar2: '#3a396a',
        darkStar3: '#6b3d66'
      },
      screens: {
        xs: '375px',
        '3xl': '2030px',
        '4xl': '2500px'
      }
    }
  },
  plugins: []
}
