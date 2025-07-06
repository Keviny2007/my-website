/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transform: ['hover'],
      transformOrigin: {
        'center': 'center',
      },
      fontFamily: {
        terminal: ['Share Tech Mono', 'monospace'],
        custom: ['CustomFont', 'monospace'],
      },
      colors: {
        stark: {
          DEFAULT: '#38bdf8', // Tailwind's cyan-400
          light: '#67e8f9',
          dark: '#0e7490', // for hover or accent
        },
        background: {
          DEFAULT: '#0f172a', // deep slate
        },
      },
    },
  },
  plugins: [],
}
