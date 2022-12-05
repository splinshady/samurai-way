import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import styles from "./MessagesWindow.module.css";

export type AddMessageFormType = {
  message: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
  return (
    <form className={styles.input_container} onSubmit={props.handleSubmit}>
      <Field placeholder={'message'} name={'message'} component={'textarea'} className={styles.input_textarea}/>
      <button>Post</button>
    </form>
  );
};

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'addMessage'})(AddMessageForm); ;