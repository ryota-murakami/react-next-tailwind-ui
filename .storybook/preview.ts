import '../src/styles/globals.css'

import { Preview } from '@storybook/react'

import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.normal,
    },
  },

  tags: ['autodocs'],
}

export default preview
