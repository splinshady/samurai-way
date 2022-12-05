import React from 'react';
import s from './FormControl.module.css';

export const Textarea: React.FC<any> = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (
    <div className={`${s.control} ${hasError && s.control_error}`}>
      <textarea {...input} {...props}></textarea>
      {hasError && <span className={s.error_message}>{meta.error}</span>}
    </div>
  );
};