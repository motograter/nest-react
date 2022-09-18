import { ReactNode } from 'react'
import { Label, FlexBox, Input } from '@/shared/ui'
import { FormErrorMessage } from '../FormErrorMessage'

export type FormFieldProps = {
  id?: string
  label?: string
  type?: string
  children?: ReactNode
  disabled?: boolean
  field?: any
  fieldState?: any
  formState?: any
  css?: any
  confirmField?: any
}

export const FormField = (props: FormFieldProps) => {
  const { id, label, type, field, fieldState, formState, confirmField, children, ...rest } = props

  return (
    <FlexBox
      className="form-field"
      flow="column"
      cross="start"
      main="start"
      css={{ width: '100%' }}
    >
      <Label htmlFor={id} disabled={props.disabled} text="bold">
        {label}
      </Label>

      <FlexBox cross="center" css={{ width: 'inherit', position: 'relative' }}>
        <Input
          id={id}
          label={label}
          type={type}
          aria-invalid={!!fieldState?.error?.message}
          status={fieldState?.error?.message ? 'error' : undefined}
          {...field}
          {...rest}
          value={field.value || ''}
        />

        {children}
      </FlexBox>

      {fieldState?.error?.message && (
        <FormErrorMessage className="mt-1">{fieldState.error.message}</FormErrorMessage>
      )}
    </FlexBox>
  )
}
