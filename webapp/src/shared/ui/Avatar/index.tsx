import { styled } from '@/shared/design'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$outerSpace',
})

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$geyser',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

export const AvatarImage = StyledImage
export const AvatarFallback = StyledFallback

type AvatarProps = {
  src: 'string'
  alt: 'string'
  fallback?: 'string'
}

export const Avatar = ({ src, alt, fallback }: AvatarProps) => (
  <StyledAvatar>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback delayMs={600}>{fallback}</AvatarFallback>
  </StyledAvatar>
)
