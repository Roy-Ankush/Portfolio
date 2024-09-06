/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '450px'},
        's': {'max': '639px'},
        'm': {'min': '768px', 'max': '1023px'},
      },
    },
  },
  plugins: [
  ],
}
