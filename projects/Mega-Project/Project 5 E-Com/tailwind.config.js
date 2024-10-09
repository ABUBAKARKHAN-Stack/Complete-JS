/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.html",
    "*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      translate: {
        'full': '100%',
        '0': '0',
      },
      keyframes: {
        circle: {
          '0%': { backgroundColor: '#adcaf8' },
          '25%': { backgroundColor: '#67a1ff' },
          '50%': { backgroundColor: '#498fff' },
          '75%': { backgroundColor: '#2b7afa' },
          '100%': { backgroundColor: '#adcaf8' },
        },
        slideFadeIn: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          }
        }
      },
      animation: {
        circle: 'circle 5s ease-in-out infinite',
        slideFadeIn: 'slideFadeIn .5s ease-in  1',
      },
      screens: {
        '1.5xl': '1410px',
        'xs': '450px',
        'xxs': '350px',
        'vxxs': '280px'
      }
    },
  },
  plugins: [],
}
