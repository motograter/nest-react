import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@/shared/design'

export const NavBarList = styled(NavigationMenu.List, {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 8,
    boxShadow: `0 2px 10px $outerSpace`,
    '&[data-orientation="vertical"]': {
      flexDirection: 'column',
    },
  }
)