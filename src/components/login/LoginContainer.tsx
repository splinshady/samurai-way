import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { loginTC } from '../../state/auth-reduser'
import { StateType } from '../../state/redux-store'

import Login from './Login'
import { LoginFormType } from './LoginForm'

type MapStatePropsType = {
  isAuth: boolean

  captcha: string | null
}

type MapDispatchPropsType = {
  loginTC: (formData: LoginFormType) => void
}

export type LoginContainerPropsType = MapStatePropsType & MapDispatchPropsType

class LoginContainer extends React.Component<LoginContainerPropsType, any> {
  onSubmit = (formData: LoginFormType) => {
    this.props.loginTC(formData)
  }

  render() {
    return (
      <Login onSubmit={this.onSubmit} isAuth={this.props.isAuth} captcha={this.props.captcha} />
    )
  }
}

const MapStateProps = (state: StateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  }
}

export default compose<React.ComponentType>(connect(MapStateProps, { loginTC }))(LoginContainer)
