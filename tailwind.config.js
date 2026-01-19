/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#3b82f6',   // blue-500
          dark: '#1d4ed8',    // blue-700
        },
        text: {
          DEFAULT: '#1f2937', // gray-800
          light: '#6b7280',   // gray-500
          muted: '#9ca3af',   // gray-400
        },
      },
    },
  },
  plugins: [],
}
