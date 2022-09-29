import React, { MouseEvent, ReactNode } from 'react'
import { styled, CSS } from '@/shared/design'
import {
  Path,
  useHref,
  useLinkClickHandler,
  useLocation,
  useMatches,
  NavLink
} from 'react-router-dom'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Separator } from '@/shared/ui'

const Box = styled('div', {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 4,
  padding: 8,
  fontSize: 15,
  fontWeight: 'bold',
  color: 'rgb(113, 113, 113)',
  backgroundColor: 'inherit',
  transition: 'all 0.1s ease-in',
  '&:first-child': {},
  '&:hover': {
    backgroundColor: '$tuna'
  },
  '&[data-active="true"]': {
    color: '$salem',
    backgroundColor: '$outerSpace'
  }
})

type To = string | Partial<Path>

type PropsStyledLink = typeof NavigationMenu.Link & {
  to: To
  css?: CSS
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  target?: any
  children?: ReactNode
  external?: boolean
}

export const NavBarLink = React.forwardRef(
  (
    { onClick, to, children, external = false, ...rest }: PropsStyledLink,
    ref: any
  ) => {
    if (external) {
      return (
        <a href={to || ''} target="_blank">
          <Separator css={{ marginBottom: 10 }} />
          <Box >
            {children}
          </Box>
        </a>
      )
    }

    return (
      <NavigationMenu.Link asChild>
        <NavLink
          end={to === '/' ? true : false}
          to={to}
          ref={ref}
          target={external ? '_blank' : '_self'}>
          {({ isActive }) => <Box data-active={isActive}>{children}</Box>}
        </NavLink>
      </NavigationMenu.Link>
    )
  }
)
