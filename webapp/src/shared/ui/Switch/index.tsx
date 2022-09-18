import { forwardRef } from 'react'
import { styled } from '@stitches/react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$red',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $outerSpace`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$salem' },
})

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $outerSpace`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
})

type SwitchRef = typeof SwitchPrimitive.Root

type SwitchProps = any

export const Switch = forwardRef<SwitchRef, SwitchProps>((props, ref) => {
  return (
    <StyledSwitch ref={ref} {...props}>
      <StyledThumb />
    </StyledSwitch>
  )
})
