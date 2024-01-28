/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px', // Define an extra small breakpoint at 480px
      },
      width: {
        'custom': '200px', // Replace '200px' with your desired width in pixels
      },
      backgroundColor: {
        'custom-color': '#005734',
      },
    },
  },
  plugins: [],
}