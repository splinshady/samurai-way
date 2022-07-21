import React from 'react';
import style from './Post.module.css';

type postProps = {
    message : string,
    likesCount : number
}

const Post = (props: postProps) => {
    return (
        <div className={style.post}>
            <div className={style.avatar__like}>
                <img className={style.avatar} src='https://cdn-icons-png.flaticon.com/512/145/145847.png' alt='avatar'/>
                <div className={style.post__like}>
                    <span>Likes</span>
                    <span>{props.likesCount}</span>
                </div>
            </div>
            <p className={style.post__content}>{props.message}</p>
        </div>
    );
};

export default Post;