import { InputHTMLAttributes } from 'react'
import { useClassName } from '../../hooks/use-class-name'

type InputSize = 'is-small' | 'is-normal' | 'is-medium' | 'is-large'
type InputType = 'text' | 'password' | 'email' | 'tel'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'onChange'
  > {
  className?: string
  onChange: (value: string) => void
  size?: InputSize
  type?: InputType
  value: string
}

export const InputText = ({
  className,
  onChange,
  size,
  type,
  value,
  ...props
}: Props) => {
  const _className = useClassName(className, 'input', size)

  return (
    <input
      className={_className}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      type={type}
      {...props}
    />
  )
}
