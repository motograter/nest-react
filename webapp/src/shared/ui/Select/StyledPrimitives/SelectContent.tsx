import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from 'shared/design'

export const SelectContent = styled(SelectPrimitive.Content, {
  zIndex: 100,
  backgroundColor: 'white',
  borderRadius: 4,
  // boxShadow:
  //   '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})
