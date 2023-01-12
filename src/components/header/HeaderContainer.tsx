import React from 'react'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { logoutTC } from '../../state/auth-reduser'
import { StateType } from '../../state/redux-store'

import Header from './Header'

type MapStatePropsType = {
  userID: string | null
  email: string | null

  login: string | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  logoutTC: () => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
  render() {
    return (
      <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutTC} />
    )
  }
}

const MapStateProps = (state: StateType): MapStatePropsType => {
  return {
    userID: state.auth.userID,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default compose<React.ComponentType>(connect(MapStateProps, { logoutTC }))(HeaderContainer)
