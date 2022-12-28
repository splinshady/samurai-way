import React from 'react';
import {NavLink} from "react-router-dom";
import defaultPhoto from "../../../assets/icons/user.png";
import style from "../User.module.css";
import {UserType} from "../../../state/users-reducer";

export type UserPropsType = {
  user: UserType
  followUserTC: (useID: string) => void
  unfollowUserTC: (useID: string) => void
  followingInProgress: string[]
}

export const User: React.FC<UserPropsType> = ({user, followUserTC, unfollowUserTC, followingInProgress}) => {
  return (
    <div key={user.id} className={style.user_container}>
      <NavLink to={`profile/${user.id}`}>
        <img src={user.photos.small ? user.photos.small : defaultPhoto}
             alt="user's avatar"
             className={style.user_avatar}/>
      </NavLink>
      {user.followed
        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
          unfollowUserTC(user.id)
        }}>unfollow</button>
        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
          followUserTC(user.id)
        }}>follow</button>
      }
      <h3>{user.name}</h3>
      <span>{user.status}</span>
    </div>
  );
};
