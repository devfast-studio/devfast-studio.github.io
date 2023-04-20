const oragenChart = {
  100: '#FFF5E9',
  200: '#FFDAB3',
  300: '#FFBF7D',
  400: '#FFA447',
  500: '#F96815',
  600: '#E05713',
  700: '#B94711',
  800: '#91370F',
  900: '#69280D'
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
    '!./node_modules'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#fdfffc',
        black: '#020100',
        gray: '#c5cbd3',
        orange: oragenChart
      },
      textColor: {
        primary: '#fdfffc',
        black: '#020100',
        gray: '#c5cbd3',
        orange: oragenChart
      },
      borderColor: {
        primary: '#fdfffc',
        black: '#020100',
        gray: '#c5cbd3',
        orange: oragenChart
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
