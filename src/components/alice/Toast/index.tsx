import React from 'react'
import { toast, type ToasterProps } from 'sonner'
import { Toaster } from '../../ui/sonner'
export type IToast = ToasterProps
export type OToast = {}

const Toast = React.memo(
  React.forwardRef<OToast, IToast>((props) => {
    return <Toaster {...props} />
  })
)
Toast.displayName = 'Toast'
export { Toast }
export { toast }
