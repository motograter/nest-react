import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { styled } from '@/shared/design'

export const NavBarItem = styled(NavigationMenu.Item, {
        marginTop: 10,
        '&:first-child': {
            marginTop: 0
        }
    }
)