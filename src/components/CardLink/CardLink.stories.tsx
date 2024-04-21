import type { Meta, StoryObj } from '@storybook/react'

import { CardLink } from './CardLink'

const meta = {
  title: 'Components/Card',
  component: CardLink,
  tags: ['autodocs'],
} as Meta<typeof CardLink>

export default meta

type Story = StoryObj<typeof CardLink>

export const Default: Story = {
  args: {
    href: 'https://nextjs.org/docs',
    heading: 'Docs',
    description: 'Find in-depth information about Next.js features and API.',
  },
  render: (props) => (
    <div className="grid">
      <CardLink {...props} />
    </div>
  ),
}
