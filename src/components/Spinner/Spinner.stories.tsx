import type { Meta, StoryObj } from '@storybook/react';
import React, { use, useState } from 'react';
import classNames from 'classnames';

import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

/**
 * デフォルトのサイズ一覧です<br />
 * <b>show code</b>ボタンからコードを確認できます。
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
};

/**
 * ボタンと一緒に表示するサンプルです。<br />
 * DaisyUIのloading loading-spinnerクラスでも同じような事ができます。<br />
 * <b>show code</b>ボタンからコードを確認できます。
 */
export const Loading: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState<null | string>(null);

    const handleClick = async () => {
      setIsLoading(true);
      const res = await new Promise<string>(resolve =>
        setTimeout(() => resolve('Fetch Data!'), 3000),
      );
      setData(res);
      setIsLoading(false);
    };

    return (
      <div className="p-16 grid grid-rows-2 gap-1 border-2 border-gray-300 rounded-3xl h-fit w-[600px]">
        <h1 className="text-4xl font-bold text-green-500 h-fit">{data}</h1>
        <button
          className={classNames('btn btn-primary pw-4 font-bold text-lg', {
            'pointer-events-none disabled ': isLoading,
          })}
          onClick={handleClick}>
          {isLoading ? <span className="loading loading-spinner"></span> : null}{' '}
          Show
          {isLoading ? <Spinner variant="primary" size="md" /> : null}
        </button>
      </div>
    );
  },
};

/**
 * Suspenseを使ったサンプルです。<br />
 * Storybook上でNext.jsのServer ComponentsでAxios使う方法の変わりにuse Hooksを使っています。<br />
 * <b>show code</b>ボタンからコードを確認できます。
 */
export const Suspense: Story = {
  render: () => {
    const APIRequest = new Promise<string>(resolve =>
      setTimeout(() => resolve('Fetch Data!'), 3000),
    );
    const FetchMessage = ({ APIRequest }: { APIRequest: Promise<string> }) => {
      const res = use(APIRequest);
      return (
        <div className="w-fit">
          <h1 className="text-6xl font-bold text-green-500">{res}</h1>
        </div>
      );
    };

    return (
      <div className="p-16 grid place-content-center border-2 border-gray-300 rounded-3xl h-[192px] w-[600px]">
        <React.Suspense fallback={<Spinner variant="primary" size="md" />}>
          <FetchMessage APIRequest={APIRequest} />
        </React.Suspense>
      </div>
    );
  },
};
