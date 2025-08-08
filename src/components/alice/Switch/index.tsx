import React from 'react'
import { Switch as S, type SwitchProps } from '@/components/animate-ui/headless/switch'

export type ISwitch = SwitchProps
export type OSwitch = HTMLButtonElement
const Switch = React.memo(
  React.forwardRef<OSwitch, ISwitch>((props, ref) => {
    return (
      <S
        {...props}
        ref={ref}
      />
    )
  })
)
Switch.displayName = 'Switch'
export { Switch }
