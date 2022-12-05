import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type LoginFormType = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
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

export const ReduxLoginForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm);