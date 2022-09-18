module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        salem: '#0F9D58',
        mountainMeadow: '#12af63',
        'red-900': '#C10505',
        woodSmoke: '#17191D',
        shark: '#1e2024',
        sharkS8L20: '#2f3237',
        sharkS6: '#2e2f33',
        outerSpace: '#2D3436',
        gray: '#939191',
        silver: '#bfbfbf',
        silverS0L79: '#c9c9c9',
        geyser: '#DFE6E9',
        athensGray: '#F0F2F4',
        mercury: '#e6e6e6',
        white: '#FFFFFF',
        scorpion: '#585858',
        tuna: '#3C3D3F',
        nevada: '#636E72',
        boulder: '#757575',
        alabaster: '#F7F7F7',
        sharkLight: '#2f323734',
        blackSqueeze: '#F7FAFC',
        abbey: '#4B4E53'
      }
    }
  },

  plugins: [require('tailwindcss-radix')()]
}
