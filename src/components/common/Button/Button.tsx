import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
  follow?: boolean
}

export const Button: React.FC<SuperButtonPropsType> = (
  {
    follow, className,
    ...restProps
  }
) => {
  let finalClassName = `${style.button} ${follow && style.follow}`

  return (
    <button
      className={finalClassName}
      {...restProps}
    />
  )
}
