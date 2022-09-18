import * as LabelPrimitive from '@radix-ui/react-label'
import { ReactNode } from 'react'
import { styled } from '@/shared/design'

const StyledLabel = styled(LabelPrimitive.Root, {
  $$size: 13,
  $$textWeight: '$fontWeights$normal',
  $$color: 'unset',
  fontSize: '$$size',
  fontWeight: '$$textWeight',
  color: '$$color',

  userSelect: 'none',
  variants: {
    text: {
      bold: {
        $$textWeight: '$fontWeights$bold',
      },
    },

    color: {
      green: {
        $$color: '$colors$salem',
      },
      white: {
        $$color: '$colors$blackSqueeze',
      },
    },

    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
})

type Css = {
  [key: string]: string | number
}
type Props = {
  children: ReactNode | string
  htmlFor?: string
  css?: Css
  color?: 'white' | 'green'
  text?: 'bold'
  disabled?: boolean
}

export const Label = ({ children, ...props }: Props) => {
  return <StyledLabel {...props}>{children}</StyledLabel>
}
