import { ReactNode } from 'react'
import { ElementRef, forwardRef } from 'react'
import { styled, VariantProps, CSS } from '@/shared/design'
import { sizes, variants } from './variables'

const BaseButton = styled('button', {
  // mini reset
  all: 'unset',
  border: 'none',
  appearance: 'none',
  outline: 'none',
  cursor: 'pointer',
  '&:active': {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  },
})

const StyledButton = styled(BaseButton, {
  //local var scope
  $$bgColor: 'transparent',
  $$textColor: '$colors$white',
  $$fontWeight: '$fontWeights$normal',
  $$radius: '10px',

  fontWeight: '$$fontWeight',
  color: '$$textColor',
  backgroundColor: '$$bgColor',
  borderRadius: '$$radius',
  gap: 5,
  fontSize: '12px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  lineHeight: 1,
  height: 35,

  transition: 'background-color 20ms ease-in-out',

  variants: {
    variant: variants,
    size: sizes,
    rounded: {
      true: {
        borderRadius: 9999
      }
    },
    asIcon: {
      true: {
        padding: 0,
        width: 'max-content',
        height: 'max-content',
        border: 'none',
        alignItems: 'baseline'
      }
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        opacity: '0.5'
      }
    }
  },
  defaultVariants: {
    variant: 'gray',
    size: 1
  },
  compoundVariants: [
    {
      variant: 'gray',
      asIcon: true,
      css: {
        backgroundColor: 'transparent',
        color: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '$outerSpace'
        }
      }
    }
  ]
})

type ButtonVariants = VariantProps<typeof StyledButton>

type ButtonProps = ButtonVariants & {
  asIcon?: boolean
  renderIcon?: () => ReactNode
  children?: ReactNode
  css?: CSS
  onClick?: () => void
  type?: 'submit' | 'button'
}

type Ref = ElementRef<typeof StyledButton>

export const Button = forwardRef<Ref, ButtonProps>(
  (
    { children, renderIcon, type = 'button', asIcon = false, ...rest },
    forwardedRef
  ) => {
    return (
      <StyledButton asIcon={asIcon} {...rest} ref={forwardedRef}>
        {!asIcon && children}
        {renderIcon?.()}
      </StyledButton>
    )
  }
)
