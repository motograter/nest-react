import { forwardRef, TextareaHTMLAttributes } from 'react'
import { styled } from '@/shared/design'

const StyledTextarea = styled('textarea', {
  $$borderColor: '$colors$gray',
  border: '1px solid $$borderColor',
  borderRadius: 6,
  width: '100%',
  resize: 'none',
})

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label?: string
  outlined?: boolean
  autocomplete?: string
  css?: any
}

type Ref = HTMLTextAreaElement

export const Textarea = forwardRef<Ref, TextareaProps>((props, ref) => {
  return <StyledTextarea ref={ref} {...props}></StyledTextarea>
})
