import type { Meta, StoryObj } from '@storybook/react-vite'

import { Slider } from './index'
import { useState } from 'react'

const meta = {
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState([20])
    return (
      <Slider
        value={value}
        min={0}
        max={100}
        step={1}
        onValueChange={(v) => setValue(v)}
      />
    )
  },
}

export const Range: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState([20, 50])
    return (
      <Slider
        value={value}
        min={0}
        max={100}
        step={1}
        onValueChange={(v) => setValue(v)}
      />
    )
  },
}
