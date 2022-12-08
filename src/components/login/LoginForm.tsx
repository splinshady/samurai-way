import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {Input} from "../common/formControl/Input";
import style from "./Login.module.css";

export type LoginFormType = {
  email: string
  password: string
  rememberMe: boolean
}

const maxLength = maxLengthCreator(50)


export const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'email'}
             name={'email'}
             component={Input}
             validate={[requiredField, maxLength]}
      />
      <Field placeholder={'password'}
             name={'password'}
             type={'password'}
             component={Input}
             validate={[requiredField, maxLength]}
      />
      <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
      <span>remember me</span>
      {props.error &&  <span className={style.common_form_error}>Error</span>}
      <button type='submit'>Login</button>
    </form>
  );
};

export const ReduxLoginForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm);