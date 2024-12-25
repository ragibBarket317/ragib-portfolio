/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom:
          '0px 4px 10px rgba(0, 0, 0, 0.6), 0px 1px 3px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
