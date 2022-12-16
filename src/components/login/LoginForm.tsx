import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {Input} from "../common/formControl/Input";
import style from "./Login.module.css";

export type LoginFormType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

const maxLength = maxLengthCreator(50)

type LoginFormPropsType = InjectedFormProps<LoginFormType, { captcha: string | null }> & {
  captcha: string | null
}

export const LoginForm = (props: LoginFormPropsType) => {
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
      <span>remember me</span>
      <Field component={Input} name={'rememberMe'} type={'checkbox'}/>


      {props.captcha && <img src={props.captcha} alt=""/>}
      {props.captcha && <Field placeholder={''}
                               name={'captcha'}
                               component={Input}
                               validate={[requiredField]}
      />
      }
      {props.error &&  <span className={style.common_form_error}>Error</span>}
      <button type='submit'>Login</button>
    </form>
  );
};

export const ReduxLoginForm = reduxForm<LoginFormType, { captcha: string | null }>({form: 'login'})(LoginForm);