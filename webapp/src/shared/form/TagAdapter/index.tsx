import { ReactNode } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { FormFieldType } from '@/shared/types'
import { FormSelect } from '../FormSelect'
import { FormField } from '../FormField'
import { FormTextarea } from '../FormTextarea'
import { PassFieldExtend } from '../PassFieldExtend'

type TagAdapterType = {
  field: FormFieldType
  children?: ReactNode
}

export const TagAdapter = ({ field, children, ...props }: TagAdapterType) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={field.id}
      control={control}
      render={(controllerProps) => {
        return getComponent(field.tag)({
          ...controllerProps,
          ...props,
          ...field,
          children,
        })
      }}
    />
  )
}

function getComponent(tag: string) {
  switch (tag) {
    case 'input':
      return ({ children, rows, tag, ...props }: any) => (
        <FormField {...props}>{children}</FormField>
      )
    case 'password':
      return ({ children, rows, tag,...props }: any) => (
        <PassFieldExtend {...props}>{children}</PassFieldExtend>
      )
    case 'textarea':
      return ({ children, tag, ...props }: any) => (
        <FormTextarea {...props}>{children}</FormTextarea>
      )
    case 'select':
      return ({tag, rows, ...props}: any) => <FormSelect {...props} />

    default:
      return () => <></>
  }
}
