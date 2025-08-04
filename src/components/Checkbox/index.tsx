import { Checkbox as C, type CheckboxProps } from '@/components/animate-ui/headless/checkbox'
import React from 'react'

export interface ICheckbox extends CheckboxProps {}
export type OCheckbox = {}
const Checkbox = React.memo(
  React.forwardRef<OCheckbox, ICheckbox>((props, ref) => {
    React.useImperativeHandle(ref, () => ({}))
    return <C {...props} />
  })
)

Checkbox.displayName = 'Checkbox'
export { Checkbox }
