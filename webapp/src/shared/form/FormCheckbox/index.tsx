import { ReactNode } from 'react'
import {
  useFormContext,
  Controller,
} from 'react-hook-form'
import { Label } from '@/shared/ui'
import { Checkbox } from '@/shared/ui'
import { FlexBox } from '@/shared/ui'

type Props = {
  id: string
  name: string
  label: string | ReactNode
  onCheckedChange?: () => void
}

export const FormCheckbox = ({ label, name, ...props }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        const {onChange, value} = field
        return (
          <FlexBox cross="center" mx="sm-10">
            <Checkbox
              {...field}
              checked={value}
              onCheckedChange={onChange}
              {...props}
              // value={undefined}
            />
            <Label color={field.value ? 'green' : undefined}>{label}</Label>
          </FlexBox>
        )
      }}
    />
  )
}
