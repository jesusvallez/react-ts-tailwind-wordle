const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        'animation-delay': (value) => {
          return {
            animationDelay: value, // Desired CSS properties here
          }
        },
      })
    }),
  ],
  theme: {
    extend: {
      keyframes: {
        'face-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'face-in-popup': {
          '0%, 90%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'flip': {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        'pop': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)',
          },
          '40%': {
            opacity: 1,
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'none',
          },
        },
      },
      animation: {
        'flip': 'flip 0.8s linear 1',
        'pop': 'pop 0.2s linear 1',
        'face-in': 'face-in 0.6s linear 1',
        'face-in-popup': 'face-in-popup 2.5s linear 1',
      },
      colors: {
        green: {
          '50': '#EFF6EF',
          '100': '#E2EFE1',
          '200': '#C3DDC0',
          '300': '#A6CCA3',
          '400': '#87BA82',
          '500': '#6AAA64',
          '600': '#518A4C',
          '700': '#3E693A',
          '800': '#294526',
          '900': '#152414',
        },
        yellow: {
          '50': '#FAF8F0',
          '100': '#F4EFDC',
          '200': '#EAE2BD',
          '300': '#DFD29B',
          '400': '#D3C378',
          '500': '#C9B458',
          '600': '#AD9838',
          '700': '#83732A',
          '800': '#594E1D',
          '900': '#2A250E',
        },
      },
    },
  },
}
