import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMeTC, logoutTC} from "../../state/auth-reduser";
import {compose} from "redux";
import {StateType} from "../../state/redux-store";

type MapStatePropsType = {
  userID: string | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  authMeTC: () => void
  logoutTC: () => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {
  componentDidMount() {
    this.props.authMeTC()
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutTC}/>;
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

export default compose<React.ComponentType>(
  connect(MapStateProps, {authMeTC, logoutTC})
)(HeaderContainer)
