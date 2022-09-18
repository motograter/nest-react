import { forwardRef } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from '@/shared/design'
import { Icon } from '@/shared/ui'

export const StyledTrigger = styled(SelectPrimitive.Trigger, {
  all: 'unset',
  $$borderColor: '$colors$gray',
  $$minW: '100%',
  minWidth: "150px",
  height: 40,
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid $$borderColor',
  color: '$text',
  borderRadius: 4,
  overflow: 'hidden',
  
  variants: {
    disabled:{
      true:{
        opacity: '.5',
        pointerEvents: 'none',
      }
    }
  },
  '&:focus': {
    outline: '2px solid #5D4AEE',
  },
  '&:hover': {},
  '& > span': {
    marginLeft: 14,
    fontSize: 13,
    fontWeight: '$medium',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  '& > svg': {
    marginRight: 10,
  },
})

type Ref = HTMLButtonElement
type Props = {
  id?: any
  disabled?: boolean
}

export const SelectTrigger = forwardRef<Ref, Props>((props, ref) => {
  return (
    <StyledTrigger ref={ref} {...props} type='button' className='select-trigger'>
      <SelectPrimitive.Value />
      <SelectPrimitive.Icon asChild>
        <Icon name='arrow-down' css={{width: 14, height: '100%'}} />
      </SelectPrimitive.Icon>
    </StyledTrigger>
  )
})
