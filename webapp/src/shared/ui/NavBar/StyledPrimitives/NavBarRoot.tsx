import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@/shared/design'

export const NavBarRoot = styled(NavigationMenu.Root, {
    display: 'flex',
    // minWidth: '200px',
    // width: '200px',
    backgroundColor: '$woodSmoke',
    boxShadow: `0 2px 10px $outerSpace`,
    flex: '1 1 auto',
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
  }
)