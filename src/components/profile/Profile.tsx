import React from 'react';
import style from './Profile.module.css';
import Post from "./myPosts/post/Post";
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.profile}>
            <MyPosts />
        </div>
    );
};

export default Profile;