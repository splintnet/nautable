module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#62A2D7',
          '50': '#F4F9FC',
          '100': '#E4EFF8',
          '200': '#C4DCF0',
          '300': '#A3C9E8',
          '400': '#83B5DF',
          '500': '#62A2D7',
          '600': '#3588CC',
          '700': '#296AA0',
          '800': '#1D4C73',
          '900': '#122F47'
        },
        'action': {
          DEFAULT: '#5E7C9B',
          '50': '#CFD8E2',
          '100': '#C2CEDA',
          '200': '#A9B9CB',
          '300': '#8FA5BB',
          '400': '#7690AC',
          '500': '#5E7C9B',
          '600': '#496078',
          '700': '#344455',
          '800': '#1E2832',
          '900': '#090C0F'
        },
      },
      width: {
        'slider-item': '220px',
        'slider-item-lg': '270px',
      },
      height: {
        'slider-item': '300px',
        'slider-item-lg': '340px',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    //require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
