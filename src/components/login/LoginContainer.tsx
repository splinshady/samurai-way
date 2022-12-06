import React from "react";
import {connect} from "react-redux";
import {loginTC} from "../../state/auth-reduser";
import {LoginFormType} from "./LoginForm";
import {compose} from "redux";
import {StateType} from "../../state/redux-store";
import Login from "./Login";

type MapStatePropsType = {
  isAuth: boolean
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
    return <Login onSubmit={this.onSubmit} isAuth={this.props.isAuth}/>;
  }
}

const MapStateProps = (state: StateType): MapStatePropsType=> {
  return {
    isAuth: state.auth.isAuth
  }
}

export default compose<React.ComponentType>(
  connect(MapStateProps, {loginTC})
)(LoginContainer)
