export type InputType = 'text' | 'password' | 'email' | 'number'

export type OptionType = {
  id: string
  value: string
}

export type FormFieldType = {
  id: string
  tag: string
  type: InputType
  label: string
  options?: OptionType[]
}

export enum EnumMode {
  NEW = 'new',
  EDIT = 'edit',
}

// export const EnumMode = {
//   NEW: 'new',
//   EDIT: 'edit',
// }
