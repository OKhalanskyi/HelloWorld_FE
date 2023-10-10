/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
        {
          'search': "url('../../src/shared/assets/search.svg')"
        },
    },
  },
  plugins: [],
}

