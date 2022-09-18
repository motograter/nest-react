import { NavBarRoot, NavBarList, NavBarItem, NavBarLink } from './StyledPrimitives'
import { navigationLinks } from './navigationLinks'
import { FlexBox } from '../FlexBox'
import { styled, CSS } from '@/shared/design'
import { Icon } from '../Icon'

const Span = styled('span', {
  flex: "1 0 auto",
  textAlign: 'left',
  marginLeft: 15,
})

export const NavBar = ({ orientation = 'vertical' }) => (
  <NavBarRoot orientation={orientation}>
    <NavBarList>
      {navigationLinks.map((link, idx) => {
        return (
          <NavBarItem key={`${link.path}-${idx}`}>
            <NavBarLink to={link.path} link={link}>
              <Icon name={link.icon}/>
              <Span>{link.title}</Span>
            </NavBarLink>
          </NavBarItem>
        )
      })}
    </NavBarList>
  </NavBarRoot>
)
