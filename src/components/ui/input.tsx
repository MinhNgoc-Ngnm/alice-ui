import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'file:text-foreground placeholder:text-[#92969C] selection:bg-[#2F2F2F] selection:text-white dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-[#FFE1E0] focus-visible:ring-[#FFE1E0]/50 focus-visible:ring-[3px]',
        'data-[status=error]:border-[#FF0800] data-[status=error]:ring-[#FF0800]/20',
        'data-[status=success]:border-[#178237] data-[status=success]:ring-[#178237]/20',
        className
      )}
      {...props}
    />
  )
}

export { Input }
