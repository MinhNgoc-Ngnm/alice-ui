import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from './index'

const meta = {
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(
      new Date(new Date().getFullYear(), new Date().getMonth(), 8)
    )

    return (
      <Calendar
        mode='single'
        selected={selected}
        onSelect={(date) => setSelected(date)}
      />
    )
  },
}

export const Range: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<{
      from: Date | undefined
      to?: Date | undefined
    }>({
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 8),
      to: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
    })

    return (
      <Calendar
        mode='range'
        selected={selected}
        onSelect={(range) => setSelected(range ?? { from: undefined, to: undefined })}
      />
    )
  },
}
