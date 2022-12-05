import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {Input} from "../common/formControl/Input";

export type LoginFormType = {
  login: string
  password: string
  rememberMe: boolean
}

const maxLength = maxLengthCreator(15)


export const LoginForm = (props: InjectedFormProps<LoginFormType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'login'}
             name={'login'}
             component={Input}
             validate={[requiredField, maxLength]}
      />
      <Field placeholder={'password'}
             name={'password'}
             component={Input}
             validate={[requiredField, maxLength]}
      />
      <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
      <span>remember me</span>
      <button type='submit'>Login</button>
    </form>
  );
};

export const ReduxLoginForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm);