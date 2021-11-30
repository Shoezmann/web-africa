module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '3/4-screen': '75vh',
      'full': '100%',
    },
    fontFamily: {
      'body': ['Mulish', 'sans-serif']
    },
    extend: {
      // backgroundImage: {
      //   'slideOneWave': "url('/assets/img/wavesOne.svg')",
      // },
      colors: {
        'primary': '#b5ce2f',
        'secondary': '#f9c606',
        'alternative': '#f04c3e',
        'navbar-color': '#48c0e1',
        'navy-bar': '#1a8dae',
      }
    },
  },
  variants: {
    extend: {}
  },
};
