import { Checkbox as C, type CheckboxProps } from '@/components/animate-ui/headless/checkbox'
import React from 'react'

export type ICheckbox = CheckboxProps
export type OCheckbox = HTMLButtonElement
const Checkbox = React.memo(
  React.forwardRef<OCheckbox, ICheckbox>((props, ref) => {
    return (
      <C
        {...props}
        ref={ref}
      />
    )
  })
)

Checkbox.displayName = 'Checkbox'
export { Checkbox }
