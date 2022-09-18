import { useState } from 'react'
import { FlexBox, Button } from '@/shared/ui'
import { FormField, FormFieldProps } from '@/shared/form'
import { ReactComponent as IconEye } from '@/shared/ui/icons/eye.svg'

export type PasswordFiledType = FormFieldProps & {
  onShow?: () => void
  show?: boolean
  type?: string
}

export const PasswordField = ({ onShow, show, type, ...props }: PasswordFiledType) => {
  const [showPass, setShowPass] = useState(false)
  const toggleShowPass = () => setShowPass(!showPass)
  const isShow = onShow ? show : showPass

  return (
    <>
      <FlexBox
        main="space-between"
        cross="end"
        gap="sm"
        css={{
          position: 'relative',
        }}
      >
        <FormField
          type={isShow ? 'text' : type}
          css={{ paddingRight: 20 }}
          {...props}
        >
          <Button
            type="button"
            onClick={onShow || toggleShowPass}
            asIcon
            disabled={props.disabled}
            variant="green"
            icon={<IconEye />}
            css={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: 4,
            }}
          />
        </FormField>
      </FlexBox>
    </>
  )
}
