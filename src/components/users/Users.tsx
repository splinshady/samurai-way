import React from 'react';
import style from "./User.module.css";
import defaultPhoto from '../../assets/icons/incubator.png'
import {setCurrentPageTC, UserType} from "../../state/users-reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    setCurrentPage: (pageNumber: number) => void
    setFollowingInProgress: (userID: string, inFollowing: boolean) => void
    currentPage: number
    followingInProgress: string[]
    followUserTC: (useID: string) => void
    unfollowUserTC: (useID: string) => void
}

export function Users(props: UsersPropsType) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 5; i++) {
        if (i < 5) {
            pages.push(i)
        } else {
            pages.push(pageCount)
        }
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span key={page}
                             className={props.currentPage === page ? style.currentPage : ''}
                             onClick={() => {props.setCurrentPage(page)}}
                >{` ${page} `}</span>
            })}
        </div>
        {props.users.map(user => {
            return <div key={user.id}>
                <NavLink to={`profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : defaultPhoto}
                         alt="user's avatar"
                         className={style.user_avatar}/>
                </NavLink>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.unfollowUserTC(user.id)}}>unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {props.followUserTC(user.id)}}>follow</button>
                }
                <h3>{user.name}</h3>
                <span>{user.status}</span>
            </div>
        })}
    </div>
}