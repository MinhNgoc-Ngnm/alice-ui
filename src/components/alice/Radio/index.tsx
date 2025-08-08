import React from 'react'
import { RadioGroup as RG, RadioGroupItem as RI } from '@/components/animate-ui/radix/radio-group'
import type { IRadioGroup, ORadioGroup, IRadioGroupItem, ORadioGroupItem } from './types'

const RadioGroup = React.memo(
  React.forwardRef<ORadioGroup, IRadioGroup>((props, ref) => {
    return (
      <RG
        {...props}
        ref={ref}
      />
    )
  })
)

export const RadioGroupItem = React.memo(
  React.forwardRef<ORadioGroupItem, IRadioGroupItem>((props, ref) => {
    return (
      <RI
        {...props}
        ref={ref}
      />
    )
  })
)

RadioGroup.displayName = 'RadioGroup'
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup }
