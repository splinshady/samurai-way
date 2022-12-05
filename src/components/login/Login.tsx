import React from 'react';
import style from './Login.module.css';
import {LoginFormType, ReduxLoginForm} from "./LoginForm";

const Login = () => {
  const onSubmit = (formData: LoginFormType) => {
  }

  return (
    <section className={`${style.login_container} shadow_section`}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </section>
  );
};

export default Login;