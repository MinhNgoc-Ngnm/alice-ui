import React from 'react'
import { Switch as S, type SwitchProps } from '@/components/animate-ui/headless/switch'

export interface ISwitch extends SwitchProps {}
export type OSwitch = {}
const Switch = React.memo(
  React.forwardRef<OSwitch, ISwitch>((props, ref) => {
    const {} = props
    React.useImperativeHandle(ref, () => ({}))
    return <S  {...props}  />
  })
)
Switch.displayName = 'Switch'
export { Switch }
