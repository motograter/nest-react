import React, { forwardRef, ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from 'shared/design'
import ScrollArea from 'shared/ui/ScrollArea/ScrollArea'
import { SelectTrigger } from './SelectTrigger'
import { SelectContent } from './SelectContent'
import { SelectViewport } from './SelectViewport'

const ViewPort = styled(ScrollArea.Viewport, {
  border: '1px solid $geyser',
  overflow: 'hidden',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const SelectRoot = forwardRef(
  ({ children, options, renderTrigger, disabled,  ...props }: any, forwardedRef: any) => {

    const customTrigger = renderTrigger && (
      <SelectPrimitive.Trigger asChild>
          {renderTrigger(<SelectPrimitive.Value />)}
      </SelectPrimitive.Trigger>
    )

    const defaultTrigger = <SelectTrigger disabled={disabled} ref={forwardedRef} />

    return (
      <SelectPrimitive.Root
        {...(!options && { defaultValue: 'no-found' })}
        {...(!!props.onValueChange && { onValueChange: props.onValueChange })}
        {...(props.value && { value: props.value })}
        {...props}
      >
        {customTrigger || defaultTrigger}

        <SelectPrimitive.Portal>
          <SelectContent>
            <ScrollArea type='auto'>
              <SelectViewport asChild>
                <ViewPort style={{ overflowY: undefined, overflowX: undefined }}>
                  <SelectPrimitive.Group>{children}</SelectPrimitive.Group>
                </ViewPort>
              </SelectViewport>
            </ScrollArea>
          </SelectContent>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  },
)

export * from './SelectItem'
export * from './SelectSeparator'
export * from './SelectLabel'
