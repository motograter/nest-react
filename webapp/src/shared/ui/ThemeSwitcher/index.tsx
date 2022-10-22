import { Switch } from '../Switch'
import { Icon } from '../Icon'
import { useState } from 'react'
import { yellow, red, green } from '@radix-ui/colors'

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(false)

  return (
    <Switch
      onCheckedChange={setTheme}
      checked={theme}
      css={{
        width: 50,
        backgroundColor: red.red6,
        '&[data-state="checked"]': {
          backgroundColor: green.green12
        }
      }}
      thumbStyle={{
        width: 22,
        height: 22,
        backgroundColor: theme ? 'white' : yellow.yellow7,
        transition: 'transform ease-in-out 0.2s',
        '&[data-state="checked"]': { transform: 'translateX(26px)' }
      }}>
      <Icon
        name={theme ? 'moon' : 'sun'}
        css={{
          width: 20,
          height: 20,
          position: 'absolute',
          top: '50%',
          transform: 'translate(0, -50%)',
          right: !theme ? 0 : undefined,
          zIndex: 0
        }}
      />
    </Switch>
  )
}
