import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './index'
import { CrossIcon } from 'lucide-react'

const meta = {
  component: Sheet,
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className='Button violet'>Edit profile</button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className='DialogTitle'>Edit profile</SheetTitle>
          <SheetDescription className='DialogDescription'>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
          <fieldset className='Fieldset'>
            <label
              className='Label'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='Input'
              id='name'
              defaultValue='Pedro Duarte'
            />
          </fieldset>
          <fieldset className='Fieldset'>
            <label
              className='Label'
              htmlFor='username'
            >
              Username
            </label>
            <input
              className='Input'
              id='username'
              defaultValue='@peduarte'
            />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <SheetClose asChild>
              <button className='Button green'>Save changes</button>
            </SheetClose>
          </div>
          <SheetClose asChild>
            <button
              className='IconButton'
              aria-label='Close'
            >
              <CrossIcon />
            </button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    )
  },
}
