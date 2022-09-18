import { styled } from '@/shared/design'
import { forwardRef, InputHTMLAttributes } from 'react'

export const StyledInput = styled('input', {
  // local variable
  $$borderColor: '$colors$gray',
  $$minW: '100%',
  paddingX: '10px',
  minWidth: '$$minW',
  height: 40,
  border: '1px solid $$borderColor',
  borderRadius: 6,
  color: '$woodSmoke',

  variants: {
    status: {
      ok: {
        $$borderColor: '$colors$salem',
      },
      error: {
        $$borderColor: '$colors$red',
      },
    },

    outlined: {
      true: {
        $$shadowColor: 'transparent',
        backgroundColor: 'transparent',
        boxShadow: '0 0 0 1px $$shadowColor',
        ['&:focus']: {
          outline: '4px solid #D9EBFF !important',
          $$borderColor: '#7eb5f5',
        },
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        backgroundColor: '$blackSqueeze',
        opacity: '.4',
      },
    },
  },
  
  '&::placeholder': {
    color: '$geyser'
  },

  compoundVariants: [
    {
      status: 'error',
      outlined: true,
      css: {
        ['&:focus']: {
          outline: '2px solid #ffd9d9 !important',
          $$borderColor: '$colors$red',
        },
      },
    },
  ],
})

export type StatusType = 'ok' | 'error'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  status?: StatusType
  outlined?: boolean
  autocomplete?: string
  css?: any
}

export type Ref = HTMLInputElement

export const Input = forwardRef<Ref, InputProps>(
  (
    { id, name, label, type, outlined = true, placeholder, ...props },
    ref,
  ) => {

    return (
      <StyledInput
        autoComplete={type === 'password' ? 'new-password' : 'off'}
        type={type}
        role="presentation"
        id={id}
        ref={ref}
        name={name}
        aria-label={name}
        placeholder={placeholder}
        outlined={outlined}
        {...props}
      />
    )
  },
)
