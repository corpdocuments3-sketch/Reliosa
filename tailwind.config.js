/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gremso: {
          DEFAULT: '#00A9B4',
          dark: '#007C89',
          light: '#00CBD6',
          soft: '#E6F7F8',
        },
      },
    },
  },
  plugins: [],
};
