import React from 'react'
import { RippleButton, type RippleButtonProps } from '@/components/animate-ui/buttons/ripple'
import './styles.module.css'
export type IButton = RippleButtonProps
export type OButton = HTMLButtonElement

const Button = React.memo(
  React.forwardRef<OButton, IButton>(({ children, ...p }, ref) => {
    return (
      <RippleButton
        ref={ref}
        {...p}
      >
        {children}
      </RippleButton>
    )
  })
)

Button.displayName = 'Button'
export { Button }
