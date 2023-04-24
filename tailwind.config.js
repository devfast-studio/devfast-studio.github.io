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
      colors: {
        gray: {
          DEFAULT: '#c5cbd3',
          100: '#E5E9ED',
          200: '#CCD1D7',
          300: '#B2B8C0',
          400: '#99A0AA',
          500: '#c5cbd3',
          600: '#808892',
          700: '#667074',
          800: '#4C5556',
          900: '#333A38'
        },
        orange: {
          DEFAULT: '#F96815',
          100: '#FFF5E9',
          200: '#FFDAB3',
          300: '#FFBF7D',
          400: '#FFA447',
          500: '#F96815',
          600: '#E05713',
          700: '#B94711',
          800: '#91370F',
          900: '#69280D'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
