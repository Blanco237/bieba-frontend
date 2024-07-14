/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5'
        },
        muted: {
          DEFAULT: '#4B5563',
        }
      }
    },
  },
  plugins: [],
}

