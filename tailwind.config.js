const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
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
        flip: {
          '0%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        flip: 'flip 0.8s linear 1',
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
