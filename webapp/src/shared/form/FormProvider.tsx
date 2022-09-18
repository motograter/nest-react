import { ReactNode } from 'react'
import { FormProvider, UseFormReturn} from 'react-hook-form'

import { Form as StyledForm, StyledContainerType } from './FormStyles'

export type FormProps = StyledContainerType & {
  form: UseFormReturn
  children: ReactNode
  onSubmit?: () => void
}

export const Form = ({
  children,
  form,
  onSubmit,
  ...props
}: FormProps) => {
  return (
    <FormProvider {...form } >
      <StyledForm
        {...props}
        {...(typeof onSubmit === 'function' && {
          onSubmit: form.handleSubmit(onSubmit),
        })}
      >
        {children}
      </StyledForm>
    </FormProvider>
  )
}
