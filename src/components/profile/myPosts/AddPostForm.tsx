import React from 'react';
import style from "./MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormType = {
  postText: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder={'post text'} name={'postText'} component={'textarea'}/>
      <button>Post</button>
    </form>
  );
};

export const AddReduxPostForm = reduxForm<AddPostFormType>({form: 'addPost'})(AddPostForm); ;