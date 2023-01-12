import React from 'react'

import { Redirect } from 'react-router-dom'

import style from './Login.module.css'
import { LoginFormType, ReduxLoginForm } from './LoginForm'

type LoginPropsType = {
  onSubmit: (formData: LoginFormType) => void
  isAuth: boolean

  captcha: string | null
}

const Login: React.FC<LoginPropsType> = props => {
  const onSubmit = (formData: LoginFormType) => {
    props.onSubmit(formData)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <section className={`${style.login_container} shadow_section`}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} captcha={props.captcha} />
    </section>
  )
}

export default Login
