/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Elms Sans', 'sans-serif'],
      },
      colors: {
        orange: {
          DEFAULT: '#E8541A',
          soft:    '#F5A070',
          pale:    '#FFF0E8',
          warm:    '#FFF8F4',
          border:  '#F0C8A8',
          dark:    '#C23E0E',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          soft:    '#333333',
          muted:   '#5C5C5C',
          subtle:  '#767676',
          faint:   '#8F8F8F',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
