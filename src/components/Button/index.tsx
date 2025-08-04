import React from 'react'
import { RippleButton, type RippleButtonProps } from '@/components/animate-ui/buttons/ripple'
import './styles.module.css'
export interface IButton extends RippleButtonProps {
}
export type OButton = {}

const Button = React.memo(
  React.forwardRef<OButton, IButton>(({ children, ...p }, ref) => {
    React.useImperativeHandle(ref, () => ({}))
    return <RippleButton {...p} >{children}</RippleButton>
  })
)

Button.displayName = 'Button'
export { Button }
