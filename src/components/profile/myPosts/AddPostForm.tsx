import React from 'react';
import style from "./MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/formControl/Textarea";
import {maxLengthCreator, requiredField} from "../../../utils/validators";

export type AddPostFormType = {
  postText: string
}

const maxLength = maxLengthCreator(3)

const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'post text'}
             name={'postText'}
             component={Textarea}
             validate={[requiredField, maxLength]}
      />
      <button>Post</button>
    </form>
  );
};

export const AddReduxPostForm = reduxForm<AddPostFormType>({form: 'addPost'})(AddPostForm); ;