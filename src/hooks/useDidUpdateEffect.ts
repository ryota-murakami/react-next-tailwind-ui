import { useRef, useEffect } from 'react'
/**
 * Simulate componentDidUpdate() method of Class Component
 * https://reactjs.org/docs/react-component.html#componentdidupdate
 */
const useReRenderEffect = (
  effect: (...arg: any[]) => any,
  deps: any[] | undefined = undefined,
): void => {
  const mounted = useRef<boolean>()
  useEffect(() => {
    if (!mounted.current) {
      // fire componentDidMount in first render
      mounted.current = true
    } else {
      effect()
    }
  }, deps)
}

export default useReRenderEffect
