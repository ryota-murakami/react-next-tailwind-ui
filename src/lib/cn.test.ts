import { cn } from './utils'

test('cn', () => {
  expect(cn('p-4 flex', 'flex-col')).toBe('p-4 flex flex-col')
  expect(cn('block text-lg', '')).toBe('block text-lg')
  expect(
    cn(
      'flex items-center flex-nowrap border border-border rounded-md px-2 bg-white w-[90px]',
      '',
    ),
  ).toBe(
    'flex items-center flex-nowrap border border-border rounded-md px-2 bg-white w-[90px]',
  )
})
