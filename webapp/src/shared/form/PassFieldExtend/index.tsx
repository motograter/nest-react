import { FlexBox } from '@/shared/ui'
import { PasswordField, PasswordFiledType } from '@/shared/form'
import { ReactNode, useState } from 'react'
import { useController } from 'react-hook-form'

type PassFieldExtendType = PasswordFiledType & {
  confirmField?: boolean
  button?: () => ReactNode | ReactNode
}

export const PassFieldExtend = ({ confirmField = true, button, ...props }: PassFieldExtendType) => {
  const [show, setShow] = useState(false)
  const onShow = () => setShow(!show)
  const fieldControll = useController({name:'confirmPassword'})

  return (
    <FlexBox main="space-between" gap="sm" flow="column">
      <>
        <PasswordField onShow={onShow} show={show} {...props} />

        {typeof button === 'function' ? button() : button}

        {confirmField && (
          <PasswordField
            onShow={onShow}
            show={show}
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            {...fieldControll}
          />
        )}
      </>
    </FlexBox>
  )
}
