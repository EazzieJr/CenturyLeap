module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/sass/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '411px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },

    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    },

    extend: {
      fontFamily: {
        sarala: ['Sarala'],
        jolly: ['Jolly Lodger'],
        montserrat: ['Montserrat'],
        alternative: ['Montserrat Alternatives'],
        quicksand: ['Quicksand'],
        cabin: ['Cabin'],
        rubik: ['Rubik'],
        manrope: ['Manrope'],
        josefin: ['Josefin Sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
