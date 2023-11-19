import { forwardRef } from 'react'

type InputProps = {
  id: string
  label: string
} & React.ComponentPropsWithoutRef<"input">

const Input = forwardRef<HTMLInputElement, InputProps>( ( { id, label, ...props }, ref ) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  )
} )

export default Input
