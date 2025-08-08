import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './index'

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    className: '',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}
