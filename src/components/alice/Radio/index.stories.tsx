import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup, RadioGroupItem } from './index'

const meta: Meta<typeof RadioGroup> = {
  title: 'components/alice/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup
      defaultValue='value 1'
      className='flex flex-col gap-3'
    >
      <label
        htmlFor='r1'
        className='flex items-center gap-3 cursor-pointer'
      >
        <RadioGroupItem
          value='default'
          id='r1'
        />
        <span>value 1</span>
      </label>
      <label
        htmlFor='r2'
        className='flex items-center gap-3 cursor-pointer'
      >
        <RadioGroupItem
          value='value 2'
          id='r2'
        />
        <span>value 2</span>
      </label>
      <label
        htmlFor='r3'
        className='flex items-center gap-3 cursor-pointer'
      >
        <RadioGroupItem
          value='value 3'
          id='r3'
        />
        <span>value 3</span>
      </label>
    </RadioGroup>
  ),
}
