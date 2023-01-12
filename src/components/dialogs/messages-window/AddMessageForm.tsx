import React from 'react'

import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { maxLengthCreator, requiredField } from '../../../utils/validators'
import { Button } from '../../common/Button/Button'
import { Textarea } from '../../common/formControl/Textarea'

import styles from './MessagesWindow.module.css'

export type AddMessageFormType = {
  message: string
}

const maxLength = maxLengthCreator(50)

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
  return (
    <form className={styles.input_container} onSubmit={props.handleSubmit}>
      <Field
        placeholder={'message'}
        name={'message'}
        component={Textarea}
        validate={[requiredField, maxLength]}
        className={styles.input_textarea}
      />
      <Button>Post</Button>
    </form>
  )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({ form: 'addMessage' })(
  AddMessageForm
)
