import { useClassName } from "../../hooks/use-class-name"

type InputSize = 'is-small' | 'is-normal' | 'is-medium' | 'is-large'
type InputType = 'text' | 'password' | 'email' | 'tel'

interface Props {
  className?: string
  onChange: (value: string) => void;
  size?: InputSize
  type?: InputType
  value: string
}

export const Input = ({
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
