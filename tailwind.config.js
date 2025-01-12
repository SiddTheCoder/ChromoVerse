/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {

    extend: {
      colors: {
        'light-background': '#ffffff', // Custom light background color
        'light-text': '#1a202c', // Custom light text color
     },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a custom font family
        exo: ['Exo', 'sans-serif'],
        jersey: ['Jersey 15', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        titillium: ['Titillium Web', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },

      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        leftToRight: 'leftToRight 0.8s ease-out',
        fadeLeftoRight : 'fadeIn 0.5s ease-in, leftToRight 0.8s ease-out ',
        faderightToLeft : 'fadeIn 0.5s ease-in, rightToLeft 0.8s ease-out ',
        introPriority : 'introPriority 5s ease-in-out infinite',
      },

      keyframes : {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        leftToRight: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0)' },
        },

        introPriority : {
          '0%' : {transform: 'translateX(50%)'},
          '20%' : {transform: 'translateX(0%)'},
          '50%' : {transform: 'translateX(-50%)'},
          '70%' : {transform: 'translateX(50%)'},
          '100%' : {transform: 'translateX(50%)'}
        },

      }

    },

  },
  plugins: [],
}

