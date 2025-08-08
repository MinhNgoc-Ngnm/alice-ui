import React from 'react'
import { Input as I } from '../../ui/input'
import { cn } from '@/lib/utils'
import { XCircleIcon } from 'lucide-react'

export type IInput = React.ComponentProps<'input'> & {
  label?: string
  status?: 'error' | 'success' | 'none'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  clearable?: boolean
}

export type OInput = HTMLInputElement

const Input = React.memo(
  React.forwardRef<OInput, IInput>((props, ref) => {
    const {
      className,
      label,
      status = 'none',
      leftIcon,
      rightIcon,
      clearable = true,
      onChange,
      value,
      defaultValue,
      ...p
    } = props

    const isControlled = value !== undefined
    const inputRef = React.useRef<OInput>(null)
    const mergedRef = React.useCallback(
      (node: OInput | null) => {
        if (typeof ref === 'function') ref(node)
        else if (ref) (ref as React.MutableRefObject<OInput | null>).current = node
        inputRef.current = node
      },
      [ref]
    )

    const [internalValue, setInternalValue] = React.useState(() => (defaultValue ?? '') as string)

    const currentValue = isControlled ? (value as string) : internalValue
    const showClear = clearable && currentValue?.length > 0

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }

    const clearInput = () => {
      const input = inputRef.current
      if (!input) return

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set
      nativeInputValueSetter?.call(input, '')
      const event = new Event('input', { bubbles: true })
      input.dispatchEvent(event)
      if (!isControlled) {
        setInternalValue('')
      }
    }

    return (
      <div className='*:not-first:mt-0.5'>
        {label && <div className='text-[#696969] font-medium text-base'>{label}</div>}
        <div className='relative group/input'>
          <I
            {...p}
            ref={mergedRef}
            className={cn(`peer ps-8 ${showClear ? 'pe-16' : 'pe-8'}`, className)}
            data-status={status}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
          />

          {leftIcon && (
            <div className='absolute inset-y-0 start-0 flex items-center peer-disabled:opacity-50'>
              <div className='h-full aspect-square flex items-center justify-center overflow-hidden p-2'>
                {leftIcon}
              </div>
            </div>
          )}
          <div className='absolute inset-y-0 end-0 flex items-center peer-disabled:opacity-50'>
            {showClear && (
              <button
                type='button'
                onClick={clearInput}
                className='h-full aspect-square flex items-center justify-center overflow-hidden p-2'
                tabIndex={-1}
              >
                <XCircleIcon color='#696969' />
              </button>
            )}
            {rightIcon && (
              <div className='h-full aspect-square flex items-center justify-center overflow-hidden p-2'>
                {rightIcon}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  })
)

Input.displayName = 'Input'
export { Input }
