import React from 'react';
import style from './Profile.module.css';
import Post from "./myPosts/post/Post";

const Profile = () => {
    return (
        <div className={style.profile}>
            <Post />
        </div>
    );
};

export default Profile;