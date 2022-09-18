import { Select, Label, FlexBox } from '@/shared/ui'

type Option = {
  id: string
  value: string
}

type FormSelectType = {
  id?: string
  label?: string
  direction?: 'column' | 'row'
  options?: Option[]
  value?: string
  field?: any
  fieldState?: any
  formState?:any
}

export const FormSelect = ({
  id,
  label,
  options,
  direction = 'column',
  field,
  fieldState,
  formState,
  ...props
}: FormSelectType) => {

  const { value, onChange} = field

  return (
    <FlexBox flow={direction}>
      <Label htmlFor={id}>{label}</Label>
      <Select
        value={value || ''}
        onValueChange={onChange}
        label={label}
        options={options}
        trigger={<Select.Trigger id={id} {...field} {...props}/>}
        {...props}
      />
    </FlexBox>
  )
}
