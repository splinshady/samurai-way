import React, {memo, useState} from 'react';
import style from './MyPosts.module.css'
import Post from "./post/Post";
import {AddPostFormType, AddReduxPostForm} from "./AddPostForm";
import {reset} from 'redux-form';
import {useDispatch} from "react-redux";

const MyPosts = memo(() => {
  const dispatch = useDispatch()

  const [posts, setPosts] = useState<PostType[]>([])
  const onSubmit = (formData: AddPostFormType) => {
    setPosts([...posts, {message: formData.postText, likesCount: 8}])
    dispatch(reset('addPost'))
  }
  return (
    <section className={style.myPosts}>
      <h3>My posts</h3>
      <AddReduxPostForm onSubmit={onSubmit}/>
      <div className={style.myPosts__posts_container}>
        {posts && posts.map((item, i) =>
          <Post key={i} message={item.message} likesCount={item.likesCount}/>
        )}
      </div>
    </section>
  );
});

type PostType = {
  message: string
  likesCount: number
}

export default MyPosts;