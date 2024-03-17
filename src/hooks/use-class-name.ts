import { useMemo } from 'react'
import clsx from 'clsx/lite'

export const useClassName = (
  ...classNames: (string | undefined | false)[]
): string => {
  return useMemo(() => clsx(...classNames), [classNames])
}
