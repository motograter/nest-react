import { styled, VariantProps} from '@/shared/design'

const StyledDiv = styled('div', {
  variants: {
    variant: {
      circle: {
        borderRadius: 999999,
      },
    },

    color: {
      green: {
        backgroundColor: '$salem',
      },
      red: {
        backgroundColor: '$red',
      },
    },

    size: {
      1: {
        width: 20,
        height: 20,
      },
    },
  },
  defaultVariants: {
    variant: 'circle',
    color: 'green',
    size: 1,
  },
})

type ShapeProps = VariantProps<typeof StyledDiv>

export const Shape = (props: ShapeProps) => {
  return <StyledDiv {...props} />
}
