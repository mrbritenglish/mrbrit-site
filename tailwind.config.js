/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#213B75',
          200: '#3159b1',
          100: '#5980d7',
        },
        secondary: '#3D4045',
        tertiary: '#3D4045',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
