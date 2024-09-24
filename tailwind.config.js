/**
 * Style Guide for Colors
 *
 * Background Colors:
 * - Primary (Dark): gray-900
 * - Secondary (Slightly lighter): gray-800
 * - Tertiary (Accent): gray-700
 *
 * Text Colors:
 * - Primary: gray-100
 * - Secondary: gray-300
 * - Muted: gray-400
 *
 * Accent Colors:
 * - Primary: orange-500
 * - Hover: orange-400
 * - Muted: orange-600
 *
 * Border Colors:
 * - Primary: gray-700
 * - Secondary: gray-600
 *
 * Button Colors:
 * - Primary: orange-500
 * - Hover: orange-400
 * - Text: gray-900
 */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '!./node_modules'],
  theme: {
    extend: {
      colors: {
        primary: '#FF7900',
        secondary: '#FF9900',
        tertiary: '#FFBB00',
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        orange: {
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        }
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      playfair: ['Playfair Display', 'serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
