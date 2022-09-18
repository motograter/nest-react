import { FC, ReactNode } from 'react'
import { styled } from '@/shared/design'

export type FormErrorMessageProps = {
  className?: string
  children: string | ReactNode
}

const P = styled('p', {
  color: '$red',
  fontSize: 12,
})


export const FormErrorMessage: FC<FormErrorMessageProps> = ({ children, className }) => (
  <P>{children}</P>
)
