import React, { MouseEvent, ReactNode } from 'react'
import { styled, CSS } from '@/shared/design'
import { Path, useHref, useLinkClickHandler, useLocation, useNavigate } from 'react-router-dom'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'


const StyledLink = styled(NavigationMenu.Link, {
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
  '&:first-child': {

  },
  '&:hover': {
    backgroundColor: '$tuna',
  },
  '&[data-active]': {
    color: '$salem',
    backgroundColor: '$outerSpace',
  },
})

type To = string | Partial<Path>

type PropsStyledLink = typeof StyledLink & {
  replace?: boolean
  state?: any
  to: To
  reloadDocument?: boolean
  css?: CSS
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  target?: any
  children?: ReactNode
}

export const NavBarLink = React.forwardRef(
  ({ onClick, replace = false, state, target, to, link, children, ...rest }: PropsStyledLink, ref: any) => {
    
    let href = to ? useHref(to): link.href

    let handleClick = useLinkClickHandler(to || '', {
      replace,
      state,
      target: !to ? "_blank" : '_self',
    })

    let navigate = useNavigate();

    const location = useLocation()
    const isActive = location.pathname === href

    const clickHandler = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
      onClick?.(event)
      if (!event.defaultPrevented) {
        handleClick(event)
      }
    }

    return (
      <StyledLink
        {...rest}
        active={isActive}
        onClick={clickHandler}
        ref={ref}
        target={!to ? "_blank" : target}
        href={href}
      >
       {children}
      </StyledLink>
    )
  },
)
