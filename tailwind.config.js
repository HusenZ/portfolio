/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        accent: '#3B82F6'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59, 130, 246, 0.25), 0 10px 30px rgba(59, 130, 246, 0.2)'
      }
    }
  },
  plugins: []
};
