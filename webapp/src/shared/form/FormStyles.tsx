import { ComponentType, FormHTMLAttributes } from 'react'
import { styled } from '@/shared/design'

export type FormType = FormHTMLAttributes<HTMLInputElement> & {
}

export type StyledContainerType = ComponentType<FormType>

export const Form = styled('form', {
  maxHeight: 'calc(100vh - 150px)',
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: 10,
  backgroundColor: '$geyser',
  '@bp1': {
    fontSize: '12px',
    maxHeight: 'calc(100vh - 110px)',
  }
})