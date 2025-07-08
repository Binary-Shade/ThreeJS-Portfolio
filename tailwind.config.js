/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        'black-200': '#1a1a1a',
        'black-300': '#2a2a2a',
        'black-500': '#444444',
        'black-600': '#555555',
      },
      boxShadow: {
        'black-200': '0 2px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}