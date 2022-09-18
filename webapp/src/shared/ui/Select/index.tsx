import { ReactNode } from 'react'
import { SelectRoot, SelectItem, SelectSeparator, SelectLabel } from './StyledPrimitives'
import { styled } from 'shared/design'

const SelectOption = styled('div', {
})

type Option = {
  title: string
  value: string
}

type SelectType = {
  options?: Option[]
  value?: string
  label?: string
  children?: ReactNode | ReactNode[]
  onValueChange?: (value: string) => void
  renderTrigger?: () => ReactNode
  id?: string
  disabled?: boolean
  optionStyle?: Record<string, any>
}

export const Select = ({ options, label, optionStyle,...props }: SelectType) => {
  return (
    <SelectRoot options={options} {...props}>

      {label && <SelectLabel>{label}</SelectLabel>}
      {!options && (
        <SelectItem disabled value='no-found'>
          No Option Found
        </SelectItem>
      )}
      {options?.map((option, idx) => (
        <SelectOption key={`${idx}-${option.value}`}>
          <SelectItem {...optionStyle} value={option.value}>{option.title}</SelectItem>
          {idx !== options.length - 1 && <SelectSeparator />}
        </SelectOption>
      ))}
    </SelectRoot>
  )
}
