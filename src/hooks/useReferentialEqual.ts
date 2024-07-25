import { useState } from 'react'

import useReRenderEffect from './useDidUpdateEffect'

const useReferentialEqual = (val: any) => {
  const [, setState] = useState({})
  useReRenderEffect(() => {
    setState((prev: any) => {
      console.log(prev === val)
      return { val }
    })
  }, [val])
}

export default useReferentialEqual
