module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '!./node_modules'],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#4A5568',
          100: '#2D3748',
          200: '#4A5568',
          300: '#718096',
          400: '#A0AEC0',
          500: '#CBD5E0',
          600: '#E2E8F0',
          700: '#EDF2F7',
          800: '#F7FAFC',
          900: '#FFFFFF'
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
