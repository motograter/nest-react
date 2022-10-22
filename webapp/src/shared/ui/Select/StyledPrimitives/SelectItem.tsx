import { ComponentProps, ElementRef, forwardRef } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { styled, VariantProps } from '@/shared/design'
import { Icon } from '@/shared/ui'

const StyledItem = styled(SelectPrimitive.Item, {
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: 4,
  color: '#5D4AEE',
  alignItems: 'center',
  fontWeight: '500',
  // userSelect: 'none',
  padding: '0 5px',
  margin: '0 10px',
  backgroundColor: 'inherit',
  transition: 'background-color .1s ease-in-out, color .1s ease-in-out',
  variants: {
    size: {
      sm: {
        height: 16,
      },
      md: {
        height: 22,
      },
      lg: {
        height: 40,
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },

  '&:nth-last-child(1)': {
    marginBottom: 5,
  },

  '&:first-child': {
    marginTop: 10,
  },

  '&[data-state=selected]': {
    backgroundColor: '$geyser',
  },

  '&[data-highlighted]': {
    backgroundColor: '#C3BBFA',
    color: 'white',
  },

  '&[data-disabled]': {
    pointerEvents: 'none',
    backgroundColor: '#ebeaeaf',
    color: '$scorpion',
    opacity: '.4',
  },

  '&:hover .indicator': {
    color: 'white',
  },
})
const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  color: '#5D4AEE',
})

type SelectItemVariants = VariantProps<typeof StyledItem>

type SelectItemPrimitiveProps = ComponentProps<typeof SelectPrimitive.Item>

type SelectItemProps = SelectItemPrimitiveProps & SelectItemVariants & {}

type Ref = ElementRef<typeof StyledItem>

export const SelectItem = forwardRef<Ref, SelectItemProps>(({ children, ...props }, forwardRef) => {
  return (
    <StyledItem {...props} ref={forwardRef} className='select-item'>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      {!props.disabled && (
        <StyledItemIndicator className='indicator'>
          <Icon name='checkmark' css={{ width: 18 }} />
        </StyledItemIndicator>
      )}
    </StyledItem>
  )
})
