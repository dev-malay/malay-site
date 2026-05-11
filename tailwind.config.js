/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Space Mono', 'Courier New', 'monospace'],
      },
      colors: {
        background: '#000000',
        foreground: '#ffffff',
      },
    },
  },
  plugins: [],
}
