import { styled } from '@/shared/design'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { ReactComponent as CheckmarkIcon } from '../icons/checkmark.svg'
import { ForwardedRef, forwardRef } from 'react'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  color: '$white',
  width: 20,
  height: 20,
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #6c757d',
  borderRadius: '6px',
  overflow: 'hidden',

  '&[data-state=checked]': {
    backgroundColor: '$salem',
  },

  '&:hover': {
    backgroundColor: '$salem',
    transition: 'background-color 200ms ease-out',
  },

  '&:focus': {},

  '&:active': {},
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {})

type Props = {
  id: string
  checked?: boolean
  onCheckedChange?: () => void
  value?: string
}  

export const RadixCheckbox = (props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <StyledCheckbox ref={ref} {...props} type='button' className="checkbox">
      <StyledIndicator asChild>
        {/* <CheckmarkIcon /> */}
      </StyledIndicator>
    </StyledCheckbox>
  )
}

export const Checkbox = forwardRef(RadixCheckbox)
