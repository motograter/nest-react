import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const { styled, theme, keyframes, css, globalCss, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        salem: '#0F9D58',
        mountainMeadow: '#12af63',
        red: '#C10505',
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
        abbey: '#4B4E53',
      },

      fontSizes: {
        13: '13px',
        14: '14px',
      },

      fontWeights: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      sizes: {
        width100: '100%',
      },
      space: {
        $1: `0.25rem`, // 4px
        $2: `0.5rem`, // 8px
        $3: `1rem`, // 16px
        $4: `2rem`, // 32px
        $5: `3rem`, // 48px
        $6: `4rem`, // 64px
      },

      transitions: {
        1: 'all 1s ease-out',
      },
    },

    media: {
      bp1: '(max-width: 800px)',
    },

    utils: {
      marginX: (value: string) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: string) => ({
        marginTop: value,
        marginBottom: value,
      }),
      paddingX: (value: string) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: string) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  })

export type CSS = Stitches.CSS<typeof config>

export const lightMode = createTheme('light__mode', {
  colors: {
    bgDropDownPagination: '$white',
  },
})

export const globalStyles = globalCss({
  ':root': {
    fontFamily: 'Montserrat, sans-serif',
  },
  '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap')",
  // '@font-face': {
  //   fontFamily: 'Montserrat, sans-serif',
  //   src: "url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap')",
  // },
});

export const darkMode = createTheme('dark__mode', {
  colors: {
    close: '$gray',
  },
})

export const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})
