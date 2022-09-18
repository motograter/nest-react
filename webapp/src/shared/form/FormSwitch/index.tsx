import { Controller, useFormContext } from 'react-hook-form'
import { Switch } from '@/shared/ui'

export const FormSwitch = ({ id, ...props }: any) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => {
        const { ref, onChange, onBlur, name, value} = field
        return (
          <Switch
            id={id}
            name={name}
            checked={!!value}
            onCheckedChange={onChange}
            ref={ref}
            onBlur={onBlur}
            {...props}
          />
        )
      }}
    />
  )
}
