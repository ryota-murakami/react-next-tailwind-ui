import type { Meta, StoryObj } from '@storybook/react'

import { CaretToggle } from './CaretToggle'

const meta = {
  title: 'Components/CaretToggle',
  component: CaretToggle,
  tags: ['autodocs'],
} as Meta<typeof CaretToggle>

export default meta

type Story = StoryObj<typeof CaretToggle>

export const Default: Story = { render: (props) => <CaretToggle {...props} /> }
