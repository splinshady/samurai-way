import React from 'react';
import style from './Login.module.css';
import {LoginFormType, ReduxLoginForm} from "./LoginForm";
import {loginTC} from "../../state/auth-reduser";
import {Redirect} from "react-router-dom";

type LoginPropsType = {
  onSubmit: (formData: LoginFormType) => void
  isAuth: boolean
}

const Login: React.FC<LoginPropsType> = (props) => {
  const onSubmit = (formData: LoginFormType) => {
    props.onSubmit(formData)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <section className={`${style.login_container} shadow_section`}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </section>
  );
};

export default Login;