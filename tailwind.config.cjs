/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      backgroundColor: '#F5F7FA',
      border_color: '#dbdbdb',
      primary: '#7C3AED',
      primary_soft: '#CDC1EB',
      white: '#FFFFFF',
      red: '#d40000',
      gray: '#808080',
      gray_dark: '#475259',
      gray_soft: '#ededed'
    },
    extend: {}
  },
  plugins: []
}
