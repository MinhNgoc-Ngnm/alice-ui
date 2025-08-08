import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './index'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    checked: true,
  },
}
