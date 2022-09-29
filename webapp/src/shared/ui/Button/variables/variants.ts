import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  grassA
} from '@radix-ui/colors'

console.log(grassA.grassA10)
export const variants = {
  none: {
    $$background: 'transparent',
    backgroundColor: '$$color',
    $$textColor: '$colors$text',
    border: '1px solid $gray'
  },

  red: {
    backgroundColor: '$red',
    border: '1px solid $red',
    '&:hover': {
      backgroundColor: '#d54040'
    }
  },

  blue: {
    backgroundColor: '#5196CF',
    border: '1px solid #5196CF',
    color: '$white',
    '&:hover': {
      backgroundColor: '#75b2e4'
    }
  },
  green: {
    backgroundColor: grassA.grassA9,
    border: '1px solid $salem',
    color: '$white',
    '&:hover': {
      backgroundColor: grassA.grassA10
    }
  },

  gray: {
    backgroundColor: '$outerSpace',
    border: '1px solid $geyser',
    color: '$sharkS8L20',
    '&:hover': {
      backgroundColor: '$boulder'
    }
  }
}
