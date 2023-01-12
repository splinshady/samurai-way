import React from 'react'

import s from './FormControl.module.css'

export const Input: React.FC<any> = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched

  return (
    <div className={`${s.control} ${hasError && s.control_error}`}>
      <input {...input} {...props}></input>
      {hasError && <span className={s.error_message}>{meta.error}</span>}
    </div>
  )
}
