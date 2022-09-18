import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from './StyledPrimitives'

const ScrollArea = ({ children, ...props }) => {
  return (
    <ScrollAreaRoot {...props}>
      {children}


      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>

      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>

      <ScrollAreaCorner />
    </ScrollAreaRoot>
  )
}

export default ScrollArea

ScrollArea.Viewport = ScrollAreaViewport

export {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
}
