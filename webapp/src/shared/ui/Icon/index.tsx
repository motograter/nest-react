import sprite from 'shared/design/icons/_sprite.svg'
import { styled } from '@stitches/react'
import { forwardRef } from 'react'

const Svg = styled('svg', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
  variants: {
    size: {
      md: {
        width: 25,
        height: 25,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const Icon = forwardRef(({ name, ...props }: any, forwardRef) => {
  return (
    <Svg ref={forwardRef} {...props}>
      <use width='100%' height="100%" href={`${sprite}#${name}`} />
    </Svg>
  )
})
