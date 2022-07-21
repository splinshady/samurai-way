import React from 'react';
import style from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <section className={style.myPosts}>
            <h3>My posts</h3>
            <div className={style.myPosts__input}>
                <textarea></textarea>
                <button></button>
            </div>
            <div className={style.myPosts__posts_container}>
                <Post message={'hi'} likesCount={3}/>
                <Post message={'i am samurai'} likesCount={4}/>
                <Post message={'i live in Bularus'} likesCount={10}/>
            </div>
        </section>
    );
};

export default MyPosts;