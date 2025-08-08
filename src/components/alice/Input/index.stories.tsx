import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './index'
import { ChevronDown, HomeIcon } from 'lucide-react'

const meta = {
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    status: 'success',
    leftIcon: <HomeIcon color='#696969' />,
    rightIcon: <ChevronDown color='#696969' />,
  },
}
