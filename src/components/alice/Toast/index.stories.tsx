import type { Meta, StoryObj } from '@storybook/react-vite'

import { Toast, toast } from './index'
import { Button } from '@/components/ui/button'
import { X, XCircleIcon } from 'lucide-react'

const meta = {
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div className='w-40 h-80'>
        <Button
          onClick={() =>
            toast.custom((id) => {
              return (
                <div className='flex row justify-center items-center px-3.5 py-3.5 rounded-sm border-[#C10800] border-[1px] bg-[#FFF0EF]'>
                  <XCircleIcon
                    color='#C10800'
                    className='size-4'
                  />
                  <div className='flex-1 text-sm font-medium text-[#2F2F2F] mx-3'>
                    The description of the error goes here.
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='size-4'
                    onClick={() => toast.dismiss(id)}
                  >
                    <X color='#2F2F2F' />
                  </Button>
                </div>
              )
            })
          }
        >
          Show toast error
        </Button>
        <Button
          onClick={() =>
            toast.custom((id) => {
              return (
                <div className='flex row justify-center items-center px-3.5 py-3.5 rounded-sm border-[#FF9100] border-[1px] bg-[#FFF5E9]'>
                  <XCircleIcon
                    color='#FF9100'
                    className='size-4'
                  />
                  <div className='flex-1 text-sm font-medium text-[#2F2F2F] mx-3'>
                    The description of the error goes here.
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='size-4'
                    onClick={() => toast.dismiss(id)}
                  >
                    <X color='#2F2F2F' />
                  </Button>
                </div>
              )
            })
          }
        >
          Show toast Warring
        </Button>
        <Button
          onClick={() =>
            toast.custom((id) => {
              return (
                <div className='flex row justify-center items-center px-3.5 py-3.5 rounded-sm border-[#178237] border-[1px] bg-[#F0FCF3]'>
                  <XCircleIcon
                    color='#178237'
                    className='size-4'
                  />
                  <div className='flex-1 text-sm font-medium text-[#2F2F2F] mx-3'>
                    The description of the error goes here.
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='size-4'
                    onClick={() => toast.dismiss(id)}
                  >
                    <X color='#2F2F2F' />
                  </Button>
                </div>
              )
            })
          }
        >
          Show toast Success
        </Button>
        <Button
          onClick={() =>
            toast.custom((id) => {
              return (
                <div className='flex row justify-center items-center px-3.5 py-3.5 rounded-sm border-[#D4D7DA] border-[1px] bg-[#D4D7DA]'>
                  <div className='flex-1 text-sm font-medium text-[#2F2F2F] mr-3'>
                    The description of the error goes here.
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='size-4'
                    onClick={() => toast.dismiss(id)}
                  >
                    <X color='#2F2F2F' />
                  </Button>
                </div>
              )
            })
          }
        >
          Show toast Default
        </Button>
        <Toast />
      </div>
    )
  },
}
