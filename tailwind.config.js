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
        orange: '#f96815'
      },
      textColor: {
        primary: '#fdfffc',
        black: '#020100',
        gray: '#c5cbd3',
        orange: '#f96815'
      },
      borderColor: {
        primary: '#fdfffc',
        black: '#020100',
        gray: '#c5cbd3',
        orange: '#f96815'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
