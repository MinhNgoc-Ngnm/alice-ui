import {
  Sheet as S,
  SheetClose as SClose,
  SheetContent as SContent,
  SheetDescription as SDescription,
  SheetFooter as SFooter,
  SheetHeader as SHeader,
  SheetTitle as STitle,
  SheetTrigger as STrigger,
} from '../../ui/sheet'
import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'

export type ISheet = React.ComponentProps<typeof SheetPrimitive.Root>
export type OSheet = {}
const Sheet = React.memo(
  React.forwardRef<OSheet, ISheet>((props) => {
    return <S {...props} />
  })
)
Sheet.displayName = 'Sheet'
export { Sheet }

export type ISheetClose = React.ComponentProps<typeof SheetPrimitive.Close>
export type OSheetClose = {}
const SheetClose = React.memo(
  React.forwardRef<OSheetClose, ISheetClose>((props) => {
    return <SClose {...props} />
  })
)
SheetClose.displayName = 'SheetClose'
export { SheetClose }

export type ISheetContent = React.ComponentProps<typeof SheetPrimitive.Content>
export type OSheetContent = {}
const SheetContent = React.memo(
  React.forwardRef<OSheetContent, ISheetContent>((props) => {
    return <SContent {...props} />
  })
)
SheetContent.displayName = 'SheetContent'
export { SheetContent }

export type ISheetDescription = React.ComponentProps<typeof SheetPrimitive.Description>
export type OSheetDescription = {}
const SheetDescription = React.memo(
  React.forwardRef<OSheetDescription, ISheetDescription>((props) => {
    return <SDescription {...props} />
  })
)
SheetDescription.displayName = 'SheetDescription'
export { SheetDescription }

export type ISheetFooter = React.ComponentProps<'div'>
export type OSheetFooter = {}
const SheetFooter = React.memo(
  React.forwardRef<OSheetFooter, ISheetFooter>((props) => {
    return <SFooter {...props} />
  })
)
SheetFooter.displayName = 'SheetFooter'
export { SheetFooter }

export type ISheetHeader = React.ComponentProps<'div'>
export type OSheetHeader = {}

const SheetHeader = React.memo(
  React.forwardRef<OSheetHeader, ISheetHeader>((props) => {
    return <SHeader {...props} />
  })
)

SheetHeader.displayName = 'SheetHeader'
export { SheetHeader }

export type ISheetTitle = React.ComponentProps<typeof SheetPrimitive.Title>
export type OSheetTitle = {}

const SheetTitle = React.memo(
  React.forwardRef<OSheetTitle, ISheetTitle>((props) => {
    return <STitle {...props} />
  })
)

SheetTitle.displayName = 'SheetTitle'
export { SheetTitle }

export type ISheetTrigger = React.ComponentProps<typeof SheetPrimitive.Trigger>
export type OSheetTrigger = {}

const SheetTrigger = React.memo(
  React.forwardRef<OSheetTrigger, ISheetTrigger>((props) => {
    return <STrigger {...props} />
  })
)
SheetTrigger.displayName = 'SheetTrigger'
export { SheetTrigger }
