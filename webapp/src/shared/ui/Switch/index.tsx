import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { styled } from '@stitches/react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { CSS } from '@/shared/design'

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  overflow: 'hidden',
  width: 42,
  height: 25,
  backgroundColor: '$red',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $outerSpace`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$salem' }
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
  '&[data-state="checked"]': { transform: 'translateX(19px)' }
})

type SwitchProps = {
  children?: React.ReactNode
  thumbStyle?: CSS
  checked?: boolean
  css?: CSS
  onCheckedChange: (b: boolean) => void
}

export const Switch = forwardRef(
  (
    { children, thumbStyle, ...props }: SwitchProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <StyledSwitch ref={ref} {...props}>
        <StyledThumb css={thumbStyle} />
        {children}
      </StyledSwitch>
    )
  }
)
