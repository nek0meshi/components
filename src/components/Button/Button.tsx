import { ReactNode } from 'react'
import { useClassName } from '../../hooks/use-class-name'

type ButtonColor = 'is-primary' | 'is-warning' | 'is-danger'
type ButtonSize = 'is-small' | 'is-normal' | 'is-medium' | 'is-large'
type ButtonType = 'button' | 'submit'

interface Props {
  children: ReactNode
  className?: string
  color?: ButtonColor
  isOutlined?: boolean
  onClick: () => void
  size?: ButtonSize
  type?: ButtonType
}

export const Button = ({
  children,
  className,
  color,
  isOutlined = false,
  onClick,
  size,
  type = 'button',
  ...props
}: Props) => {
  const _className = useClassName(
    className,
    'button',
    color,
    isOutlined && 'is-outlined',
    size,
  )

  return (
    <button className={_className} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  )
}
