import type { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'
import React, { use, useState } from 'react'

import { Spinner } from './Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof Spinner>

/**
 * List of default sizes<br />
 * You can check the code from the <b>show code</b> button.
 */
export const Default: Story = {
  render: () => (
    <div className="p-16 grid grid-cols-4 w-fit">
      <Spinner variant="primary" size="sm" />
      <Spinner variant="primary" size="md" />
      <Spinner variant="primary" size="lg" />
      <Spinner variant="primary" size="xl" />
    </div>
  ),
}

/**
 * Sample displayed with a button.<br />
 * The same thing can be done with DaisyUI's loading loading-spinner class.<br />
 * You can check the code from the <b>show code</b> button.
 */
export const Loading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState<null | string>(null)

    const handleClick = async () => {
      setIsLoading(true)
      const res = await new Promise<string>((resolve) =>
        setTimeout(() => resolve('Fetch Data!'), 3000),
      )
      setData(res)
      setIsLoading(false)
    }

    return (
      <div className="p-16 grid grid-rows-2 gap-1 border-2 border-gray-300 rounded-3xl h-fit w-[600px]">
        <h1 className="text-4xl font-bold text-green-500 h-fit">{data}</h1>
        <button
          className={clsx('btn btn-primary pw-4 font-bold text-lg', {
            'pointer-events-none disabled ': isLoading,
          })}
          onClick={handleClick}
        >
          {isLoading ? <span className="loading loading-spinner"></span> : null}{' '}
          Show
          {isLoading ? <Spinner variant="primary" size="md" /> : null}
        </button>
      </div>
    )
  },
}

/**
 * Sample using Suspense.<br />
 * Instead of using Axios with Next.js Server Components on Storybook, it uses Hooks.<br />
 * You can check the code from the <b>show code</b> button.
 */
export const Suspense: Story = {
  render: () => {
    const APIRequest = new Promise<string>((resolve) =>
      setTimeout(() => resolve('Fetch Data!'), 3000),
    )
    const FetchMessage = ({ APIRequest }: { APIRequest: Promise<string> }) => {
      const res = use(APIRequest)
      return (
        <div className="w-fit">
          <h1 className="text-6xl font-bold text-green-500">{res}</h1>
        </div>
      )
    }

    return (
      <div className="p-16 grid place-content-center border-2 border-gray-300 rounded-3xl h-[192px] w-[600px]">
        <React.Suspense fallback={<Spinner variant="primary" size="md" />}>
          <FetchMessage APIRequest={APIRequest} />
        </React.Suspense>
      </div>
    )
  },
}
