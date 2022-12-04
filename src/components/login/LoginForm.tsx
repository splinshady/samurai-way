import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'login'} name={'login'} component={'input'}/>
      <Field placeholder={'password'} name={'password'} component={'input'}/>
      <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
      <span>remember me</span>
      <button type='submit'>Login</button>
    </form>
  );
};

export const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);