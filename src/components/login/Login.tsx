import React from 'react';
import style from './Login.module.css';
import {ReduxLoginForm} from "./LoginForm";

const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData)
  }

  return (
    <section className={`${style.login_container} shadow_section`}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </section>
  );
};

export default Login;