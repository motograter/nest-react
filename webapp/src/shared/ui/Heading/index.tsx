import { createElement, FC, HTMLAttributes } from 'react'
import { styled } from '@/shared/design'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  css?: any
}

export const Heading = ({
  headingLevel = 'p',
  children,
  className,
  ...props
}: HeadingProps) => {

  const Heading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(headingLevel, props, children)

  const StyledHeading = styled(Heading, {
    textAlign: 'center',
  })

  return (
    <StyledHeading {...props} className={className}>
      {children}
    </StyledHeading>
  )
}

export const Banner: FC<{ headingText: string; description: string }> = ({
  headingText,
  description,
}) => (
  <div>
    <Heading headingLevel="h2">{headingText}</Heading>
    <p>{description}</p>
  </div>
)
