import { renderHook } from '@testing-library/react'

import useReRenderEffect from './useDidUpdateEffect'

test('useUpdateEffect simulates componentDidUpdate', () => {
  const effect = vi.fn()
  const { rerender } = renderHook(() => useReRenderEffect(effect))

  expect(effect).toHaveBeenCalledTimes(0)
  rerender()
  expect(effect).toHaveBeenCalledTimes(1)
  rerender()
  expect(effect).toHaveBeenCalledTimes(2)
  rerender()
  expect(effect).toHaveBeenCalledTimes(3)
})
