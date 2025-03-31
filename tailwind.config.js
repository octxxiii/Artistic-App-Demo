/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'scanline': 'moveScanline 10s linear infinite',
        'text-scroll': 'textScroll 20s linear infinite',
        'fade-in': 'fadeInCalendar 0.5s forwards',
      },
    },
  },
  plugins: [],
} 